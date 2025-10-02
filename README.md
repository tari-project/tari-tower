# tari-tower

Source for the tower animation used in [_Tari Universe_](https://github.com/tari-project/universe).

## 🚧 under construction

### Installation

```bash
    npm i @tari-project/tari-tower
```

## Usage

🚧 under construction

## Contributing

### Development

note: _must be built first to be able to reference the lib locally_

```bash
    npm ci
    npm run build
    npm run dev
```

- make changes in the `lib` directory
- export anything you want available in `/lib/index.ts`
- update readme

### Distribution

- make sure your tari labs registry PAT is set up
- bump version in package.json
- build changes:

```bash
    npm run build
```

- publish changes:

```
    npm publish
```
