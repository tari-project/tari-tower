import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import glsl from 'vite-plugin-glsl';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		glsl({ minify: true, root: '/lib' }),
		tsconfigPaths(),
		eslint({ cache: false, fix: true }),
		dts({ include: ['lib'], exclude: ['src'], rollupTypes: true, tsconfigPath: resolve(__dirname, 'tsconfig.app.json') }),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			name: '@tari-project/tari-tower',
			formats: ['es'],
		},
		rollupOptions: {
			external: ['three', 'min-signal', '@eslint/js', '@tweakpane/core', 'prettier', 'eslint', 'eslint-config-prettier', 'tweakpane', 'typescript'],
			input: resolve(__dirname, 'lib/index.ts'),
			output: {
				compact: true,
				validate: true,
				entryFileNames: '[name].js',
				assetFileNames: 'assets/[name][extname]',
				generatedCode: {
					objectShorthand: true,
					constBindings: true,
				},
				globals: {
					'three': 'THREE',
					'min-signal': 'minSignal',
				},
			},
		},
	},
});
