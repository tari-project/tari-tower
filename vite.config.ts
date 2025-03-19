import { defineConfig } from 'vite';
import { resolve } from 'path';
import eslint from '@nabla/vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
	server: {
		port: 3001,
	},
	plugins: [
		tsconfigPaths(),
		eslint({ eslintOptions: { cache: false, fix: true } }),
		dts({ include: ['lib'], exclude: ['src'], rollupTypes: true, tsconfigPath: resolve(__dirname, 'tsconfig.app.json') }),
	],
	build: {
		emptyOutDir: true,
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			name: '@tari-project/tari-tower',
			formats: ['es'],
		},
		rollupOptions: {
			input: resolve(__dirname, 'lib/index.ts'),
			output: {
				entryFileNames: '[name].js',
				assetFileNames: 'assets/[name][extname]',
			},
		},
	},
});
