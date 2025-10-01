export const STATUSES = ['NOT_STARTED', 'STARTED', 'FREE', 'RESULT', 'RESULT_ANIMATION', 'RESTART_ANIMATION', 'RESTART'] as const;
type StatusTuple = typeof STATUSES;
export type Status = StatusTuple[number];

const _RESULTS = ['NONE', 'STOP', 'COMPLETED', 'FAILED', 'REPLAY'] as const;
type ResultTuple = typeof _RESULTS;
export type Result = ResultTuple[number] | null;

// export enum AnimationStatus {
// 	NOT_STARTED = 'not-started',
// 	STARTED = 'started',
// 	FREE = 'free',
// 	RESULT = 'result',
// 	RESULT_ANIMATION = 'result_animation',
// 	RESTART_ANIMATION = 'restart_animation',
// 	RESTART = 'restart',
// }
// export enum AnimationResult {
// 	NONE = 'none',
// 	STOP = 'stop',
// 	COMPLETED = 'completed',
// 	FAILED = 'failed',
// 	REPLAY = 'replay',
// }

export enum SuccessLevel {
	ONE = 1,
	TWO = 2,
	THREE = 3,
}

export interface QueueItem {
	status: Status;
	result?: Result;
	callback: () => void;
}
export interface StatusManagerState {
	status: Status;
	statusIndex: number;
	result: Result;
	completeAnimationLevel: SuccessLevel | null;
	isStart: boolean;
	isFree: boolean;
	isResult: boolean;
	isResultAnimation: boolean;
	hasNotStarted: boolean;
	isRestart: boolean;
	isReplayResult: boolean;
	isSuccessResult: boolean;
	isFailResult: boolean;
	isStopped: boolean;
	statusUpdateQueue: QueueItem[];
}

export interface QueueArgs {
	status: Status;
	result?: Result;
	animationStyle?: SuccessLevel | null;
}
