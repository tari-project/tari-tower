import { defineConfig } from 'vite';
import eslint from '@nabla/vite-plugin-eslint';

import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		dts({ include: ['lib', 'assets'] }),
		tsconfigPaths(),
		eslint({ eslintOptions: { cache: false, fix: true } }),
		libAssetsPlugin({
			include: ['**/*.buf', '**/*.glsl', '**/*.frag', '**/*.vert', '**/*.jpg', '**/*.png'],
		}),
	],
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
				assetFileNames: 'assets/[name][ext]',
				globals: {
					'three': 'Three',
					'min-signal': 'MinSignal',
				},
			},
		},
	},
});
