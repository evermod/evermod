import Cors from 'micro-cors'

import { ApolloServer } from 'apollo-server-micro'
import admin from 'firebase-admin'
import CurseForge from '../../lib/CurseForge'
import typeDefs from '../../graphql/server/schema'
import resolvers from '../../graphql/server/resolvers'
import initAdminFirebase from '../../lib/initAdminFirebase'

initAdminFirebase()

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    curseforge: new CurseForge()
  }),
  context: async ({ req }) => {
    try {
      const token = req.headers.authorization.replace('Bearer ', '') || ''
      const { uid } = await admin.auth().verifyIdToken(token)
      const user = await admin.auth().getUser(uid)
      return { user }
    } catch (e) {
      return { user: {} }
    }
  },
  tracing: true
})

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS']
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default cors(apolloServer.createHandler({ path: '/api/graphql' }))
