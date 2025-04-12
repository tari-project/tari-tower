import xStateManager from './_xStateManager';
import { logInfo } from '../utils/logger';

/**
 * This file demonstrates how to use the XState-based state machine
 * in the application.
 */

export function initXStateDemo() {
	// Initialize the XState manager
	xStateManager.init();

	// Subscribe to state changes
	xStateManager.onStateChange((state) => {
		logInfo('XState state changed:', state.value, state.context);
	});

	// Example of using the simplified XState API
	function demoGameSequence() {
		// Start the game
		xStateManager.setStart();
		logInfo('Game started. Is in playing state:', xStateManager.isFree);

		// After some time, complete the game with success level 2
		setTimeout(() => {
			xStateManager.setComplete2();
			logInfo('Game completed. Is success result:', xStateManager.isSuccessResult);

			// The state machine will automatically progress through animations
			// Wait for transitions to complete, then reset
			setTimeout(() => {
				// At this point, we should be in the 'restarting' state
				logInfo('Is in restart state:', xStateManager.isRestart);

				// Reset to idle state
				xStateManager.reset();
				logInfo('Reset to idle. Is back to start:', xStateManager.hasNotStarted);
			}, 2000); // Allow time for automatic transitions to occur
		}, 1000);
	}

	// Alternative sequence showing failure case
	function demoFailureSequence() {
		// Start the game
		xStateManager.setStart();

		// After some time, fail the game
		setTimeout(() => {
			xStateManager.setFail();
			logInfo('Game failed. Is failure result:', xStateManager.isFailResult);

			// Wait for automatic transitions, then reset
			setTimeout(() => {
				xStateManager.reset();
				logInfo('Reset to idle after failure');
			}, 2000);
		}, 1000);
	}

	// Example showing stop case
	function demoStopSequence() {
		// Start the game
		xStateManager.setStart();

		// After some time, stop the game
		setTimeout(() => {
			xStateManager.setStop();
			logInfo('Game stopped. Is stopped state:', xStateManager.isStopped);

			// Wait for automatic transitions, then reset
			setTimeout(() => {
				xStateManager.reset();
				logInfo('Reset to idle after stop');
			}, 2000);
		}, 1000);
	}

	// Example showing three different success levels
	function demoSuccessLevels() {
		const runSuccessDemo = (level, delay = 0) => {
			setTimeout(() => {
				xStateManager.setStart();

				setTimeout(() => {
					switch (level) {
						case 1:
							xStateManager.setComplete();
							logInfo('Completed with level ONE');
							break;
						case 2:
							xStateManager.setComplete2();
							logInfo('Completed with level TWO');
							break;
						case 3:
							xStateManager.setComplete3();
							logInfo('Completed with level THREE');
							break;
					}

					setTimeout(() => {
						xStateManager.reset();
					}, 2000);
				}, 500);
			}, delay);
		};

		runSuccessDemo(1, 0);
		runSuccessDemo(2, 3000);
		runSuccessDemo(3, 6000);
	}

	// This function could be called to demonstrate the state machine flow
	// demoGameSequence();

	return { runStandardDemo: demoGameSequence, runFailureDemo: demoFailureSequence, runStopDemo: demoStopSequence, runSuccessLevelsDemo: demoSuccessLevels };
}

/**
 * How to integrate with the simplified XState implementation:
 *
 * 1. Use these primary state transitions:
 *    - xStateManager.setStart() - Start the game (transitions to 'playing' state)
 *    - xStateManager.setComplete() - Complete with success level 1
 *    - xStateManager.setComplete2() - Complete with success level 2
 *    - xStateManager.setComplete3() - Complete with success level 3
 *    - xStateManager.setFail() - Fail the game
 *    - xStateManager.setStop() - Stop the game
 *    - xStateManager.reset() - Reset to initial state
 *
 * 2. The state machine will automatically handle these transitions:
 *    - From 'playing' to 'resultAnimation' when completing/failing/stopping
 *    - From 'resultAnimation' to 'restarting' after animation completes
 *
 * 3. Access state information directly from xStateManager:
 *    - xStateManager.hasNotStarted - Initial state
 *    - xStateManager.isStart/isFree - Playing state
 *    - xStateManager.isResult/isResultAnimation - Result animation state
 *    - xStateManager.isRestart - Restarting state
 *    - xStateManager.isReplayResult/isSuccessResult/isFailResult/isStopped - Result types
 *
 * 4. Subscribe to state changes with:
 *    - xStateManager.onStateChange((state) => { ... })
 */
