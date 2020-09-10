import { gql } from '@apollo/client'

export default gql`
  type CategorySection {
    id: Int
    gameId: Int
    name: String
    packageType: Int
    path: String
    initialInclusionPattern: String
    extraIncludePattern: String
    gameCategoryId: Int
  }

  type Categories {
    categoryId: Int
    name: String
    url: String
    avatarUrl: String
    parentId: Int
    rootId: Int
    projectId: Int
    avatarId: Int
    gameId: Int
  }

  type SortableGameVersion {
    gameVersionPadded: String
    gameVersion: String
    gameVersionReleaseDate: String
    gameVersionName: String
  } 

  type Modules {
    foldername: String
    fingerprint: Int
    type: Int
  }

  type File {
    id: Int
    displayName: String
    fileName: String
    fileDate: String
    fileLength: Int
    releaseType: Int
    fileStatus: Int
    downloadUrl: String
    isAlternate: Boolean
    alternateFileId: Int
    isAvailable: Boolean
    packageFingerprint: Int
    installMetadata: String
    serverPackFileId: String
    hasInstallScript: Boolean
    gameVersionDateReleased: String
    gameVersionFlavor: String
    gameVersion: [String]
    modules: [Modules]
    dependencies: [Mod]
  }

  type Mod {
    id: ID!
    type: Int
    name: String!
    gameVersionLatestFiles (version: String = ""): [File]!
  }

  type Author {
    uid: ID!
    displayName: String
    photoURL: String
  }

  type Modpack {
    id: ID!
    name: String
    version: String
    share: Boolean
    mods: [Mod]
    author: Author!
  }

  input ModInput {
    id: ID!
  } 

  input ModpackPatch {
    name: String
    version: String
    share: Boolean
    mods: [ID]
  }

  input ModpackInput {
    id: ID
    patch: ModpackPatch
  }

  type Query {
    modpack(id: ID!): Modpack
    modpacks: [Modpack]
    versions: [String!]
    searchMods(filter: String, version: String, limit: Int = 5): [Mod]
    getMod(id: ID): Mod
    mods(ids: [ID]): [Mod]
  }

  type Mutation {
    createModpack: ID
    deleteModpack(id: ID): Boolean
    updateModpack(input: ModpackInput): Boolean
  }
`