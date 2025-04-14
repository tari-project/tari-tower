import { createMachine, createActor, assign } from 'xstate';

export enum AnimationStatus {
	NOT_STARTED = 'not-started',
	STARTED = 'started',
	FREE = 'free',
	RESULT = 'result',
	RESULT_ANIMATION = 'result_animation',
	RESTART_ANIMATION = 'restart_animation',
	RESTART = 'restart',
}

export enum AnimationResult {
	NONE = 'none',
	PAUSE = 'pause',
	STOP = 'stop',
	COMPLETED = 'completed',
	FAILED = 'failed',
	REPLAY = 'replay',
}

export enum SuccessLevel {
	ONE = 1,
	TWO = 2,
	THREE = 3,
}

interface StateFlags {
	hasNotStarted: boolean;
	isStart: boolean;
	isFree: boolean;
	isResult: boolean;
	isResultAnimation: boolean;
	isRestart: boolean;
	isReplayResult: boolean;
	isSuccessResult: boolean;
	isFailResult: boolean;
	isStopped: boolean;
}

interface StateContext {
	result: AnimationResult;
	successLevel: SuccessLevel | null;
	errorBlock: unknown | null;
	errorBlockFalling: boolean;
	errorLifeCycle: number;
	errorBlockMaxLifeCycle: number;
	showVisual: boolean;
	removeCanvas: boolean;
	stateFlags: StateFlags;
}

interface CompleteEvent {
	type: 'COMPLETE';
	isReplay: boolean;
	level: SuccessLevel;
}

interface SetRemoveEvent {
	type: 'SET_REMOVE';
	value: boolean;
}

export const createStateMachine = () => {
	const stateMachine = createMachine(
		{
			id: 'animation',
			initial: AnimationStatus.NOT_STARTED,
			context: {
				result: AnimationResult.NONE,
				successLevel: null,
				errorBlock: null,
				errorBlockFalling: false,
				errorLifeCycle: 0,
				errorBlockMaxLifeCycle: 0,
				showVisual: true,
				removeCanvas: false,
				stateFlags: {
					hasNotStarted: true,
					isStart: false,
					isFree: false,
					isResult: false,
					isResultAnimation: false,
					isRestart: false,
					isReplayResult: false,
					isSuccessResult: false,
					isFailResult: false,
					isStopped: false,
				},
			},
			states: {
				[AnimationStatus.NOT_STARTED]: {
					on: {
						START: { target: AnimationStatus.STARTED, actions: ['updateFlags'] },
						COMPLETE: [{ target: AnimationStatus.FREE, actions: ['handleReplayTransition', 'updateFlags'], guard: 'isReplay' }],
						SHOW_VISUAL: { actions: ['enableVisual'] },
					},
				},
				[AnimationStatus.STARTED]: { on: { FREE: { target: AnimationStatus.FREE, actions: ['updateFlags'] } }, exit: ['clearErrorBlock'] },
				[AnimationStatus.FREE]: {
					on: {
						STOP: { target: AnimationStatus.RESULT, actions: ['setResult', 'updateFlags'] },
						COMPLETE: { target: AnimationStatus.RESULT, actions: ['setCompleteResult', 'updateFlags'] },
						FAIL: { target: AnimationStatus.RESULT, actions: ['setFailResult', 'updateFlags'] },
					},
				},
				[AnimationStatus.RESULT]: { on: { RESULT_ANIMATION: { target: AnimationStatus.RESULT_ANIMATION, actions: ['updateFlags'] } } },
				[AnimationStatus.RESULT_ANIMATION]: { on: { RESTART_ANIMATION: { target: AnimationStatus.RESTART_ANIMATION, actions: ['updateFlags'] } } },
				[AnimationStatus.RESTART_ANIMATION]: { on: { RESTART: { target: AnimationStatus.RESTART, actions: ['updateFlags'] } } },
				[AnimationStatus.RESTART]: { on: { RESET: { target: AnimationStatus.NOT_STARTED, actions: ['resetState', 'updateFlags'] } } },
			},
			on: { SET_REMOVE: { actions: ['setRemoveCanvas'] } },
		},
		{
			guards: {
				isReplay: (_context, event) => {
					if (typeof event !== 'object' || event === null) return false;
					if ('type' in event && event.type === 'COMPLETE') {
						return !!(event as CompleteEvent).isReplay;
					}
					return false;
				},
			},
			actions: {
				updateFlags: assign((context, _event) => {
					const currentState = String(context?.['_state']?.value || AnimationStatus.NOT_STARTED) as AnimationStatus;
					const isAnyResult = currentState === AnimationStatus.RESULT || currentState === AnimationStatus.RESULT_ANIMATION;
					const typedContext = context as unknown as StateContext;

					return {
						stateFlags: {
							hasNotStarted: currentState === AnimationStatus.NOT_STARTED,
							isStart: currentState === AnimationStatus.STARTED,
							isFree: currentState === AnimationStatus.FREE,
							isResult: currentState === AnimationStatus.RESULT,
							isResultAnimation: currentState === AnimationStatus.RESULT_ANIMATION,
							isRestart: currentState === AnimationStatus.RESTART,
							isReplayResult: isAnyResult && typedContext.result === AnimationResult.REPLAY,
							isSuccessResult: isAnyResult && typedContext.result === AnimationResult.COMPLETED,
							isFailResult: isAnyResult && typedContext.result === AnimationResult.FAILED,
							isStopped: isAnyResult && typedContext.result === AnimationResult.STOP,
						},
					};
				}),

				setResult: assign((_context, event) => {
					if (typeof event !== 'object' || event === null) return {};
					if ('type' in event && event.type === 'STOP') {
						return { result: AnimationResult.STOP };
					}
					return {};
				}),

				setCompleteResult: assign({
					result: (_context, event) => {
						if (typeof event !== 'object' || event === null) return AnimationResult.NONE;
						if ('type' in event && event.type === 'COMPLETE') {
							const completeEvent = event as CompleteEvent;
							return completeEvent.isReplay ? AnimationResult.REPLAY : AnimationResult.COMPLETED;
						}
						return AnimationResult.NONE;
					},
					successLevel: () => {
						return null;
					},
				}),

				setFailResult: assign({ result: AnimationResult.FAILED }),

				resetState: assign({ result: AnimationResult.NONE, successLevel: null }),

				clearErrorBlock: assign((context) => {
					const typedContext = context as unknown as StateContext;
					if (typedContext.errorBlock && !typedContext.errorBlockFalling) {
						return { errorBlock: null };
					}
					return {};
				}),

				enableVisual: assign({ showVisual: true }),

				handleReplayTransition: assign({}),

				setRemoveCanvas: assign((_context, event) => {
					if (typeof event !== 'object' || event === null) return {};
					if ('type' in event && event.type === 'SET_REMOVE') {
						return { removeCanvas: (event as SetRemoveEvent).value };
					}
					return {};
				}),
			},
		},
	);

	const service = createActor(stateMachine);
	service.start();

	return {
		init: (autoStart = false) => {
			if (autoStart) {
				service.send({ type: 'START' });
			}
		},

		updateAfterCycle: () => {
			const snapshot = service.getSnapshot();
			const context = snapshot.context as StateContext;

			if (context.errorBlock) {
				if (context.errorBlockFalling || context.errorLifeCycle >= context.errorBlockMaxLifeCycle - 1) {
					return;
				}
			}

			if (context.stateFlags.isStart) {
				service.send({ type: 'FREE' });
			} else if (context.stateFlags.isResult) {
				service.send({ type: 'RESULT_ANIMATION' });
			}
		},

		set: (id: string, isReplay = false) => {
			const actions: Record<string, () => void> = {
				start: () => service.send({ type: 'START' }),
				stop: () => service.send({ type: 'STOP' }),
				fail: () => service.send({ type: 'FAIL' }),
				resultAnimation: () => service.send({ type: 'RESULT_ANIMATION' }),
				restartAnimation: () => service.send({ type: 'RESTART_ANIMATION' }),
				restart: () => {
					const snapshot = service.getSnapshot();
					const context = snapshot.context as StateContext;
					if (context.removeCanvas) {
						console.log('Game ended');
					} else {
						service.send({ type: 'RESTART' });
					}
				},
				showVisual: () => service.send({ type: 'SHOW_VISUAL' }),
				success: () => service.send({ type: 'COMPLETE', level: SuccessLevel.ONE, isReplay }),
				success2: () => service.send({ type: 'COMPLETE', level: SuccessLevel.TWO, isReplay }),
				success3: () => service.send({ type: 'COMPLETE', level: SuccessLevel.THREE, isReplay }),
			};

			if (actions[id]) {
				actions[id]();
			}
		},

		showVisual: () => {
			service.send({ type: 'SHOW_VISUAL' });
		},

		reset: () => {
			const snapshot = service.getSnapshot();
			const context = snapshot.context as StateContext;
			if (context.removeCanvas) {
				service.send({ type: 'RESET' });
				service.send({ type: 'SET_REMOVE', value: false });
				return;
			}

			service.send({ type: 'RESET' });
		},

		setStart: () => {
			service.send({ type: 'START' });
		},

		setRestartAnimation: () => {
			service.send({ type: 'RESTART_ANIMATION' });
		},

		setRestart: () => {
			const snapshot = service.getSnapshot();
			const context = snapshot.context as StateContext;
			if (context.removeCanvas) {
				console.log('Game ended');
				return;
			}

			service.send({ type: 'RESTART' });
		},

		setRemove: (remove: boolean) => {
			service.send({ type: 'SET_REMOVE', value: remove });
		},

		getState: () => service.getSnapshot().value as AnimationStatus,
		getResult: () => (service.getSnapshot().context as StateContext).result,
		getFlags: () => (service.getSnapshot().context as StateContext).stateFlags,

		service,
	};
};

export const stateMachine = createStateMachine();

export const getStatus = () => stateMachine.getState();
export const getResult = () => stateMachine.getResult();
export const getStateFlags = () => stateMachine.getFlags();

export const PREVENT_CYCLE_STATES = [AnimationStatus.NOT_STARTED, AnimationStatus.RESTART_ANIMATION, AnimationStatus.RESTART, AnimationStatus.STARTED];

export const resetCycleResults = [AnimationResult.FAILED, AnimationResult.COMPLETED];
