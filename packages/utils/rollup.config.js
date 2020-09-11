import ts from "@wessberg/rollup-plugin-ts"
import graphql from 'rollup-plugin-graphql'

const getConfig = ({ input, output, isMinify }) => {
  return {
    input,
    output: {
      file: output,
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      graphql(),
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
    getConfig({ input: "./src/graphql/index.ts", output: "./dist/graphql/index.js" }),
    getConfig({ input: "./src/index.ts", output: "./dist/index.js" })
]