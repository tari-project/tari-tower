import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import eslint from '@nabla/vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    assetsInclude: ['**/*.buf'],
    server: {
        port: 3001,
    },
    plugins: [
        tsconfigPaths(),
        eslint({ eslintOptions: { cache: false, fix: true } }),
        dts({
            include: ['lib'],
            exclude: ['src'],
            rollupTypes: true,
            staticImport: true,
            compilerOptions: {
                declarationMap: true,
            },
            tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
        }),
    ],
    build: {
        sourcemap: 'inline',
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            name: '@tari-project/tari-tower',
            formats: ['es'],
        },
        rollupOptions: {
            external: ['three', 'zustand'],
            input: resolve(__dirname, 'lib/index.ts'),
            output: {
                entryFileNames: '[name].js',
                assetFileNames: 'assets/[name][extname]',
                globals: {
                    three: 'Three',
                    zustand: 'Zustand',
                },
            },
        },
    },
});
