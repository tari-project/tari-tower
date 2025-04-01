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
        dts({
            include: ['lib'],
            exclude: ['src'],
            rollupTypes: true,
            staticImport: true,
            tsconfigPath: 'tsconfig.lib.json',
        }),
        eslint({ eslintOptions: { cache: false, fix: true } }),
    ],
    build: {
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            name: '@tari-project/tari-tower',
            formats: ['es'],
        },
        rollupOptions: {
            external: ['lil-gui'],
            input: resolve(__dirname, 'lib/index.ts'),
            output: {
                compact: true,
                entryFileNames: '[name].js',
                assetFileNames: 'assets/[name][extname]',
                interop: 'auto',
                validate: true,
                globals: {
                    'lil-gui': 'Lil-GUI',
                },
            },
        },
    },
});
