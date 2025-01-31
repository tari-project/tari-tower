import { defineConfig } from 'vite';
import eslint from '@nabla/vite-plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
	assetsInclude: ['**/*.buf', '**/*.jpg', '**/*.png'],
	plugins: [commonjs(), dts({ include: ['lib'] }), tsconfigPaths(), eslint({ eslintOptions: { cache: false, fix: true } })],
	build: {
		sourcemap: true,
		emitAssets: true,
		rollupOptions: {
			input: 'lib/main.ts',
			external: ['three', 'min-signal'],
			output: {
				format: 'es',
				name: 'main',
				entryFileNames: '[name].js',
				assetFileNames: 'assets/[name][extname]',
				globals: {
					'three': 'Three',
					'min-signal': 'MinSignal',
				},
			},
			makeAbsoluteExternalsRelative: true,
			preserveEntrySignatures: 'exports-only',
		},
	},
});
