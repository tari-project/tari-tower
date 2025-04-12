import { createMachine, assign, createActor, StateFrom } from 'xstate';

import { logInfo } from '../utils/logger';
import { properties } from '../core/properties';
import MinSignal from 'min-signal';

export type AnimationStatus = 'idle' | 'playing' | 'resultAnimation' | 'restarting' | 'completed';

export type AnimationResult = 'none' | 'pause' | 'stop' | 'completed' | 'failed' | 'replay';

export type SuccessLevel = 1 | 2 | 3;

// Internal signals for the xStateManager to use without relying on external signals
export class XStateManagerSignals {
	public readonly stateSignal = new MinSignal();
	public readonly winAnimationSignal = new MinSignal();
	public readonly errorAnimationEndedSignal = new MinSignal();
	public readonly completeAnimationEndedSignal = new MinSignal();
	public readonly stopAnimationEndedSignal = new MinSignal();
	public readonly restartSignal = new MinSignal();
	public readonly spawnSignal = new MinSignal();
	public readonly endCycleSignal = new MinSignal();
	public readonly gameEndedSignal = new MinSignal();
}

// Context for the state machine
interface TowerContext {
	result: AnimationResult;
	animationStyle: SuccessLevel | null;
	errorBlock: unknown | null;
	showVisual: boolean;
}

// Events that can be sent to the state machine
type TowerEvent =
	| { type: 'START' }
	| { type: 'STOP' }
	| { type: 'FAIL' }
	| { type: 'COMPLETE'; replay?: boolean; level?: SuccessLevel }
	| { type: 'RESET' }
	| { type: 'SHOW_VISUAL' };

// Type guard function for COMPLETE event
function isCompleteEvent(event: unknown): event is { type: 'COMPLETE'; replay?: boolean; level?: SuccessLevel } {
	return Boolean(event && typeof event === 'object' && 'type' in event && event.type === 'COMPLETE');
}

// Create the state machine with simplified flow
const createTowerMachine = (signals: XStateManagerSignals) =>
	createMachine(
		{
			id: 'Tari Tower Animation',
			initial: 'idle',
			context: { result: 'none' as AnimationResult, animationStyle: null, errorBlock: null, showVisual: properties.showVisual } as TowerContext,
			types: { context: {} as TowerContext, events: {} as TowerEvent },
			states: {
				idle: {
					on: {
						START: { target: 'playing', actions: ['notifyStarted'] },
						COMPLETE: { target: 'playing', actions: ['setReplayResult'], guard: { type: 'eventHasReplay' } },
						SHOW_VISUAL: { actions: 'enableVisual' },
					},
				},
				playing: {
					entry: 'notifyFree',
					on: {
						STOP: { target: 'resultAnimation', actions: 'setStopResult' },
						FAIL: { target: 'resultAnimation', actions: 'setFailResult' },
						COMPLETE: { target: 'resultAnimation', actions: 'setCompleteResult' },
						RESET: { target: 'idle', actions: 'resetContext' },
					},
				},
				resultAnimation: {
					entry: 'notifyResult',
					after: { 1000: { target: 'restarting', actions: 'notifyRestartAnimation' } },
					on: { RESET: { target: 'idle', actions: 'resetContext' } },
				},
				restarting: { entry: 'notifyRestart', on: { RESET: { target: 'idle', actions: 'resetContext' } } },
			},
		},
		{
			guards: {
				eventHasReplay: (_, event) => {
					return isCompleteEvent(event) && !!event.replay;
				},
			},
			actions: {
				notifyStarted: ({ context }) => {
					signals.stateSignal.dispatch('playing', context.result);
					logInfo(`XState transition to: playing, result: ${context.result}`);
				},
				notifyFree: ({ context }) => {
					signals.stateSignal.dispatch('playing', context.result);
					logInfo(`XState transition to: playing, result: ${context.result}`);
				},
				notifyResult: ({ context }) => {
					signals.stateSignal.dispatch('resultAnimation', context.result);
					logInfo(`XState transition to: resultAnimation, result: ${context.result}`);

					if (context.animationStyle !== null) {
						signals.winAnimationSignal.dispatch(context.animationStyle);
					}

					// After a delay, automatically transition to RESULT_ANIMATION
					setTimeout(() => {
						const state = towerActor.getSnapshot();
						const ctx = state.context as TowerContext;
						signals.stateSignal.dispatch('resultAnimation', ctx.result);
						logInfo(`XState transition to: resultAnimation, result: ${ctx.result}`);
					}, 500);
				},
				notifyRestartAnimation: () => {
					const state = towerActor.getSnapshot();
					const context = state.context as TowerContext;
					signals.stateSignal.dispatch('restarting', context.result);
					logInfo(`XState transition to: restarting, result: ${context.result}`);
				},
				notifyRestart: ({ context }) => {
					signals.stateSignal.dispatch('restarting', context.result);
					logInfo(`XState transition to: restarting, result: ${context.result}`);
				},
				setStopResult: assign({ result: () => 'stop' as AnimationResult, animationStyle: () => null }),
				setFailResult: assign({ result: () => 'failed' as AnimationResult, animationStyle: () => null }),
				setCompleteResult: assign({
					result: (_, event) => {
						if (!isCompleteEvent(event)) {
							return 'none' as AnimationResult;
						}
						return event.replay ? ('replay' as AnimationResult) : ('completed' as AnimationResult);
					},
					animationStyle: (_, event) => {
						if (!isCompleteEvent(event)) {
							return null;
						}
						return event.level ?? 1;
					},
				}),
				setReplayResult: assign({ result: () => 'replay' as AnimationResult, animationStyle: () => null }),
				resetContext: assign({ result: () => 'none' as AnimationResult, animationStyle: () => null, errorBlock: () => null }),
				enableVisual: assign({ showVisual: () => true }),
			},
		},
	);

// Create a service to run the state machine using the modern createActor API
const signals = new XStateManagerSignals();
const towerMachine = createTowerMachine(signals);
const towerActor = createActor(towerMachine);
towerActor.start();

type TowerState = StateFrom<typeof towerMachine>;

// XState manager API
export const xStateManager = {
	init() {
		logInfo('XState machine initialized');
	},

	reset() {
		towerActor.send({ type: 'RESET' });
	},

	setStart() {
		towerActor.send({ type: 'START' });
	},

	setStop() {
		towerActor.send({ type: 'STOP' });
	},

	setFail() {
		towerActor.send({ type: 'FAIL' });
	},

	setComplete(isReplay = false) {
		towerActor.send({ type: 'COMPLETE', replay: isReplay, level: 1 });
	},

	setComplete2(isReplay = false) {
		towerActor.send({ type: 'COMPLETE', replay: isReplay, level: 2 });
	},

	setComplete3(isReplay = false) {
		towerActor.send({ type: 'COMPLETE', replay: isReplay, level: 3 });
	},

	showVisual() {
		towerActor.send({ type: 'SHOW_VISUAL' });
	},

	// Method to subscribe to state changes
	onStateChange(callback: (state: TowerState) => void) {
		return towerActor.subscribe(callback);
	},

	// Get current state
	getState() {
		return towerActor.getSnapshot();
	},

	// State flag properties
	get hasNotStarted() {
		return towerActor.getSnapshot().matches('idle');
	},
	get isStart() {
		return towerActor.getSnapshot().matches('playing') && (towerActor.getSnapshot().context as TowerContext).result === 'none';
	},
	get isFree() {
		return towerActor.getSnapshot().matches('playing');
	},
	get isResult() {
		return towerActor.getSnapshot().matches('resultAnimation');
	},
	get isResultAnimation() {
		return towerActor.getSnapshot().matches('resultAnimation');
	},
	get isRestart() {
		return towerActor.getSnapshot().matches('restarting');
	},
	get isReplayResult() {
		const state = towerActor.getSnapshot();
		const ctx = state.context as TowerContext;
		return state.matches('resultAnimation') && ctx.result === 'replay';
	},
	get isSuccessResult() {
		const state = towerActor.getSnapshot();
		const ctx = state.context as TowerContext;
		return state.matches('resultAnimation') && ctx.result === 'completed';
	},
	get isFailResult() {
		const state = towerActor.getSnapshot();
		const ctx = state.context as TowerContext;
		return state.matches('resultAnimation') && ctx.result === 'failed';
	},
	get isStopped() {
		const state = towerActor.getSnapshot();
		const ctx = state.context as TowerContext;
		return state.matches('resultAnimation') && ctx.result === 'stop';
	},
};

// Export flags for compatibility with existing system
export const xStateFlags = xStateManager;

export default xStateManager;
