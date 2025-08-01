import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint2';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import glsl from 'vite-plugin-glsl';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		server: {
			port: 3001,
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
				external: ['lil-gui', 'min-signal', 'three'],
				input: resolve(__dirname, 'lib/index.ts'),
				output: {
					entryFileNames: '[name].js',
					assetFileNames: 'assets/[name][extname]',
					banner: `/* Tari Tower v${env.VITE_TARI_TOWER_VERSION} */`,
					globals: {
						'three': 'THREE',
						'min-signal': 'minSignal',
						'lil-gui': 'Lil-GUI',
					},
				},
			},
			sourcemap: 'hidden',
		},
	};
});
