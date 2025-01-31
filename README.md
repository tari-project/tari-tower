# tari-tower

Source for the tower animation used in [_Tari Universe_](https://github.com/tari-project/universe).

### Installation

```bash
    npm i @tari-project/tari-tower
```

## Usage

Initialise

```tsx
import { loadTowerAnimation } from '@tari-project/tari-tower';

loadTowerAnimation();
```

Available methods:

| name                     | args                                                                                             | description                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| `loadTowerAnimation`     | **canvasId**: `string` <br/> **offset?**: `number`                                               | initialise all the animation logic + canvas        |
| `removeTowerAnimation`   | `none`                                                                                           | stop the animation and remove canvas               |
| `setAnimationState`      | **id**: `'start'\|'stop'\|'fail'\|'sucess'\|'sucess2'\|'sucess3'` <br/> **isReplay?:** `boolean` | set the animation state                            |
| `setAnimationProperties` | properties:`{property:string; value:unknown}[]`                                                  | set properties (e.g colours in dark vs light mode) |

Available values:

| name                   | description                                                                 |
| ---------------------- | --------------------------------------------------------------------------- |
| `animationStatus`      | the state of the animation                                                  |
| `animationStatusIndex` | the index of the animation state (useful as a trigger in dependencya array) |

## Contributing

### Development

note: _must be built first to be able to reference the lib locally_

```bash
    npm ci
    npm run build
    npm run dev
```

-   make changes in the `lib` directory
-   export anything you want available in `/lib/main.ts`
-   update readme

### Distribution

-   make sure your tari labs registry PAT is set up
-   bump version in package.json
-   build changes:

```bash
    npm run build
```

-   publish changes:

```
    npm publish
```
