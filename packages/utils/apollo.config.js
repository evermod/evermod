module.exports = {
  client: {
    name: 'GraphQLClient',
    service: {
      localSchemaFile: './src/graphql/schema.graphql'
    },
    includes: [
      'src/graphql/**/*.{ts,tsx}'
    ]
  }
}
