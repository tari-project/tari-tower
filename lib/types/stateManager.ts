export enum AnimationStatus {
  NOT_STARTED = "not-started",
  STARTED = "started",
  FREE = "free",
  RESULT = "result",
  RESULT_ANIMATION = "result_animation",
  RESTART_ANIMATION = "restart_animation",
  RESTART = "restart",
}
export enum AnimationResult {
  NONE = "none",
  PAUSE = "pause",
  STOP = "stop",
  COMPLETED = "completed",
  FAILED = "failed",
  REPLAY = "replay",
}

export enum SuccessLevel {
  ONE = 1,
  TWO = 2,
  THREE = 3,
}

export interface QueueItem {
  status: AnimationStatus;
  result?: AnimationResult | null;
  callback: () => void;
}
export interface StatusManagerState {
  status: AnimationStatus;
  statusIndex: number;
  result: AnimationResult;
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
