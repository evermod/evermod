import ts from "@wessberg/rollup-plugin-ts"

const getConfig = ({ input, output, isMinify }) => {
  return {
    input,
    output: {
      file: output,
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      ts({
        module: 'cjs'
      })
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
    getConfig({ input: "./src/firebase/index.ts", output: "./dist/firebase/index.js" }),
    getConfig({ input: "./src/graphql/index.ts", output: "./dist/graphql/index.js" })
]