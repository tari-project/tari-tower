import { defineConfig } from 'vite';
import eslint from '@nabla/vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets';
import dts from 'vite-plugin-dts';

export default defineConfig({
	server: {
		port: 3001,
	},
	plugins: [
		libAssetsPlugin({
			include: /\.a?buf(\?.*)?$/,
			name: '[name].[ext][query]',
			limit: 0,
		}),
		dts({ include: ['lib'], rollupTypes: true, tsconfigPath: './tsconfig.app.json' }),
		tsconfigPaths(),
		eslint({ eslintOptions: { cache: false, fix: true } }),
	],
	build: {
		lib: {
			entry: 'lib/index.ts',
			name: '@tari-project/tari-tower',
			formats: ['es'],
		},
		rollupOptions: {
			input: 'lib/index.ts',
			external: ['three', 'min-signal'],
			output: {
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
