import ts from "@wessberg/rollup-plugin-ts"

const getConfig = ({ inputDir, output, isMinify }) => {
  return {
    input: `./src/${inputDir}/index.tsx`,
    output: [{
      file: `./dist/${inputDir}/index.js`,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: `./dist/${inputDir}/index.esm.js`,
      format: 'esm',
      sourcemap: true
    }],
    plugins: [
      ts()
    ],
    external: [
      '@apollo/client', 
      'firebase/app', 
      'firebase/analytics', 
      'firebase/auth', 
      'firebase/storage'
    ]
  }
}

export default [
    getConfig({ inputDir: "forms", output: "./dist/forms/index.js" })
]