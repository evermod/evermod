module.exports = {
  client: {
    name: 'GraphQLClient',
    service: {
      name: 'backend',
      localSchemaFile: './graphql-schema.json'
    },
    includes: [
      'src/graphql/client/*.{ts,tsx,js,jsx,graphql}',
      'src/graphql/client/**/*.ts'
    ]
  }
}
