import admin from 'firebase-admin'
import initAdminFirebase from '../../lib/initAdminFirebase'
import initModpack from '../../lib/initModpack'
import { Context } from './types'

initAdminFirebase()

const resolvers = {
  Mutation: {
    updateModpack: async (_parent, { input: { id, patch } }, { user }) => {
      if (!user.uid) return null
      const doc = admin.firestore().collection('modpacks').doc(id)
      const modpack = (await doc.get()).data()
      if (modpack.author !== user.uid) return null
      doc.set({ ...modpack, ...patch })
      return true
    },
    deleteModpack: async (_parent, { id }, { user }) => {
      if (!user.uid) return null
      const doc = admin.firestore().collection('modpacks').doc(id)
      const modpack = (await doc.get()).data()
      if (modpack.author !== user.uid) return null
      await doc.delete()
    },
    createModpack: (_parent, _args, { user }) => {
      if (!user.uid) return null
      const docRef = admin.firestore().collection('modpacks').doc()
      docRef.set({
        ...initModpack(),
        author: user.uid
      })
      return docRef.id
    }
  },
  Query: {
    modpack: async (_parent, { id }, { user }, context) => {
      const snapshot = await admin.firestore().collection('modpacks').doc(id).get()
      const modpack = snapshot.data()
      if (!modpack.share && modpack.author !== user.uid) return null
      modpack.id = id
      return modpack
    },
    modpacks: async (_parent, _args, { user }) => {
      if (!user) return null
      const snapshot = await admin.firestore().collection('modpacks').where('author', '==', user.uid).get()
      const modpacks = []
      snapshot.forEach(doc => {
        modpacks.push({
          id: doc.id,
          ...doc.data()
        })
      })
      return modpacks
    },
    versions: async (_parent, _args, { dataSources }: Context) => dataSources.curseforge.getAllVersions(),
    searchMods: async (_parent, { filter, version, limit }, { dataSources }: Context) => dataSources.curseforge.searchMods(filter, version, limit),
    getMod: async (_parent, { id }, { dataSources }: Context) => dataSources.curseforge.getMod(id),
    mods: async (parent, { ids } : {ids: [number]}, { dataSources }: Context) => {
      return ids.map(id => dataSources.curseforge.getMod(id))
    }
  },
  Mod: {
    gameVersionLatestFiles: async ({ id, gameVersionLatestFiles, modpackVersion }, { version }, { dataSources }) => {
      const vers = modpackVersion || version
      return gameVersionLatestFiles
        .filter(v => (vers !== '') ? v.gameVersion === vers : true)
        .map(async v => {
          const file = await dataSources.curseforge.getFile(id, v.projectFileId)
          return { ...file, modpackVersion }
        })
    }
  },
  File: {
    dependencies: ({ dependencies, modpackVersion }, args, { dataSources }: Context) => {
      return dependencies.filter(d => d.type === 3).map(async d => {
        const data = await dataSources.curseforge.getMod(d.addonId)
        data.type = d.type
        return { ...data, modpackVersion }
      })
    }
  },
  Modpack: {
    author: (parent) => {
      return admin.auth().getUser(parent.author)
    },
    mods: async (parent, args, { dataSources }: Context) => {
      const { mods, version } = parent
      return mods.map(async v => {
        const mod = await dataSources.curseforge.getMod(v)
        return { ...mod, modpackVersion: version }
      })
    }
  }
}

export default resolvers
