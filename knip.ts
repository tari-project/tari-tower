import type { KnipConfig } from 'knip';

const config: KnipConfig = {
    rules: {
        files: 'error',
        dependencies: 'warn',
        unlisted: 'error',
        exports: 'warn',
        types: 'warn',
        duplicates: 'error',
    },
    ignoreExportsUsedInFile: false,
};

export default config;
