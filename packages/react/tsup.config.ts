import { defineConfig } from 'tsup';
import pkg from './package.json';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: false,
  clean: true,
  external: ['react'],
  treeshake: true,
  minify: true,
  define: {
    __ICON_VERSION__: JSON.stringify('v' + pkg.version),
  },
});
