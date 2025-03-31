import type { KnipConfig } from 'knip';

const config: KnipConfig = {
    project: ['lib/**/*.{js,ts}'],
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
