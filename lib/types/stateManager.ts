export const STATUSES = ['NOT_STARTED', 'STARTED', 'FREE', 'RESULT', 'RESULT_ANIMATION', 'RESTART_ANIMATION', 'RESTART'] as const;
type StatusTuple = typeof STATUSES;
export type Status = StatusTuple[number];

const _RESULTS = ['NONE', 'STOP', 'COMPLETED', 'FAILED', 'REPLAY'] as const;
type ResultTuple = typeof _RESULTS;
export type Result = ResultTuple[number] | null;

const _WIN_LEVEL = ['ONE', 'TWO', 'THREE'] as const;
type WinLevelTuple = typeof _WIN_LEVEL;
export type WinLevel = WinLevelTuple[number] | null;

export interface QueueItem {
	status: Status;
	result?: Result;
	callback: () => void;
}
export interface StatusManagerState {
	status: Status;
	statusIndex: number;
	result: Result;
	completeAnimationLevel: WinLevel | null;
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
	animationStyle?: WinLevel | null;
}
