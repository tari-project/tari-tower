# XState Implementation Guide

This folder contains an XState-based implementation of the animation state management system. It replaces the signal-based implementation while maintaining the same interface and behavior.

## Overview

The `stateMachine.ts` file provides a complete XState implementation that can be used as an alternative to the current signal-based state management system. The implementation is designed to be fully TypeScript type-safe and does not depend on the existing logic in the `/logic` folder or use `min-signal`.

## Key Features

1. **State Machine Structure**: Encodes all states from the original `AnimationStatus` enum into a formal state machine with clear transitions.

2. **Type Safe**: All types are defined within the file to ensure 100% TypeScript type safety without depending on external modules.

3. **Context Management**: The machine manages state context including:

    - Animation results
    - Success levels
    - Error block handling
    - Visualization flags

4. **Equivalent API**: Matches the interface of the original state manager:

    - `init()`: Initializes the state machine
    - `updateAfterCycle()`: Handles transitions after animation cycles
    - `set()`: Main method to change states with various commands
    - `reset()`: Resets the state machine
    - Various setter methods: `setStart()`, `setRestartAnimation()`, `setRestart()`, etc.

5. **Extended API**: Added helper methods to access current state:

    - `getState()`: Returns current animation state
    - `getResult()`: Returns current animation result
    - `getFlags()`: Returns all state flags

6. **Compatibility Exports**: Includes constants like `PREVENT_CYCLE_STATES` and `resetCycleResults`

7. **Clean Transitions**: Replaces the queueing system with XState's built-in state transition management

## How to Use This Implementation

1. **Import the state machine**:

    ```typescript
    import { stateMachine, AnimationStatus, AnimationResult } from '../scripts/machines/stateMachine';
    ```

2. **Initialize it**:

    ```typescript
    stateMachine.init(settings.AUTO_START);
    ```

3. **Use the API like the original state manager**:

    ```typescript
    stateMachine.set('start');
    stateMachine.updateAfterCycle();
    ```

4. **Add event listeners for state changes** (new capability):
    ```typescript
    stateMachine.service.onTransition((state) => {
    	console.log('State changed to:', state.value);
    });
    ```

## Benefits Over Signal-Based Implementation

This implementation maintains all functionality of the original state manager while providing XState benefits like:

- Visualization tools for debugging state transitions
- Better testing capabilities
- More predictable state transitions
- Formal state modeling
- Ability to visualize the state machine using XState's visualization tools

## State Machine Diagram

You can visualize this state machine by:

1. Copying the state machine definition to the XState Visualizer: https://stately.ai/viz
2. Or using VS Code's XState extension to preview it

## Swapping Between Implementations

The XState implementation is designed to work alongside the signal-based implementation.
You can swap between them by changing your imports:

**For XState implementation**:

```typescript
import { stateMachine, getStatus, getResult } from '../scripts/machines/stateMachine';
```

**For signal-based implementation**:

```typescript
import { stateManager, getStatus, getResult } from './logic/stateManager';
```

This allows you to easily compare both implementations or switch between them based on your needs.
