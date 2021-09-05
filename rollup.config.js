import esbuild from 'rollup-plugin-esbuild'

const name = require('./package.json').main.replace(/\.js$/, '')
const production = !process.env.ROLLUP_WATCH;

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id),
})

export default [
  bundle({
    plugins: [esbuild({
      minify: production,
    })],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: !production,
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: !production,
      },
    ],
  }),
]