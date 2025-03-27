import type { KnipConfig } from 'knip';

const config: KnipConfig = {
    project: ['lib/**/*.{js,ts,tsx}'],
    rules: {
        files: 'error',
        dependencies: 'warn',
        unlisted: 'error',
        exports: 'warn',
        types: 'warn',
        duplicates: 'error',
    },
    ignoreExportsUsedInFile: true,
};

export default config;
