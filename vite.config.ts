import { defineConfig } from 'vite';
import eslint from '@nabla/vite-plugin-eslint';

import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@controls/*': resolve(__dirname, './lib/scripts/controls/*'),
			'@core/*': resolve(__dirname, './lib/scripts/core/*'),
			'@logic/*': resolve(__dirname, './lib/scripts/logic/*'),
			'@utils/*': resolve(__dirname, './lib/scripts/utils/*'),
			'@visuals/*': resolve(__dirname, './lib/scripts/visuals/*'),
			'@/scripts': resolve(__dirname, './lib/scripts/*'),
			'@/structs': resolve(__dirname, './lib/scripts/*'),
			'@/*': resolve(__dirname, './lib/*'),
		},
	},
	plugins: [dts({ include: ['lib'] }), tsconfigPaths(), eslint({ eslintOptions: { cache: false, fix: true } })],
	assetsInclude: ['**/*.buf', '**/*.glsl', '**/*.frag', '**/*.vert', '**/*.jpg', '**/*.png'],
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/main.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: ['three', 'min-signal'],
			input: { main: resolve(__dirname, 'lib/main.ts') },
			output: {
				entryFileNames: '[name].js',
				assetFileNames: 'assets/[dirname]/[name][ext]',
				globals: {
					'three': 'Three',
					'min-signal': 'MinSignal',
				},
			},
		},
	},
});
