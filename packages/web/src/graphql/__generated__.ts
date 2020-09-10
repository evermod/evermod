/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAuthReady
// ====================================================

export interface GetAuthReady {
  authReady: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user {
  __typename: "User";
  uid: string | null;
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
  emailVerified: boolean | null;
}

export interface GetUser {
  user: GetUser_user | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserToken
// ====================================================

export interface GetUserToken_user {
  __typename: "User";
  token: string | null;
}

export interface GetUserToken {
  user: GetUserToken_user | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignIn
// ====================================================

export interface SignIn_signIn {
  __typename: "User";
  emailVerified: boolean | null;
}

export interface SignIn {
  signIn: SignIn_signIn | null;
}

export interface SignInVariables {
  provider?: Provider | null;
  auth?: AuthInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignOut
// ====================================================

export interface SignOut {
  signOut: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignUp
// ====================================================

export interface SignUp {
  signUp: boolean | null;
}

export interface SignUpVariables {
  provider?: Provider | null;
  auth?: SignUpInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUser
// ====================================================

export interface UpdateUser {
  updateUser: boolean | null;
}

export interface UpdateUserVariables {
  patch: UserPatch;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMods
// ====================================================

export interface GetMods_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles_dependencies_gameVersionLatestFiles {
  __typename: "File";
  id: number | null;
  fileName: string | null;
  downloadUrl: string | null;
}

export interface GetMods_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles_dependencies {
  __typename: "Mod";
  id: string;
  name: string;
  gameVersionLatestFiles: (GetMods_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles_dependencies_gameVersionLatestFiles | null)[];
}

export interface GetMods_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles {
  __typename: "File";
  id: number | null;
  downloadUrl: string | null;
  fileName: string | null;
  dependencies: (GetMods_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles_dependencies | null)[] | null;
}

export interface GetMods_mods_gameVersionLatestFiles_dependencies {
  __typename: "Mod";
  id: string;
  name: string;
  gameVersionLatestFiles: (GetMods_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles | null)[];
}

export interface GetMods_mods_gameVersionLatestFiles {
  __typename: "File";
  id: number | null;
  downloadUrl: string | null;
  fileName: string | null;
  dependencies: (GetMods_mods_gameVersionLatestFiles_dependencies | null)[] | null;
}

export interface GetMods_mods {
  __typename: "Mod";
  id: string;
  name: string;
  gameVersionLatestFiles: (GetMods_mods_gameVersionLatestFiles | null)[];
}

export interface GetMods {
  mods: (GetMods_mods | null)[] | null;
}

export interface GetModsVariables {
  ids?: (string | null)[] | null;
  version?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateModpack
// ====================================================

export interface CreateModpack {
  createModpack: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteModpack
// ====================================================

export interface DeleteModpack {
  deleteModpack: boolean | null;
}

export interface DeleteModpackVariables {
  id?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetModpacks
// ====================================================

export interface GetModpacks_modpacks {
  __typename: "Modpack";
  id: string;
  name: string | null;
}

export interface GetModpacks {
  modpacks: (GetModpacks_modpacks | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetModpack
// ====================================================

export interface GetModpack_modpack_author {
  __typename: "Author";
  displayName: string | null;
  photoURL: string | null;
}

export interface GetModpack_modpack_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles_dependencies_gameVersionLatestFiles {
  __typename: "File";
  id: number | null;
  fileName: string | null;
  downloadUrl: string | null;
}

export interface GetModpack_modpack_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles_dependencies {
  __typename: "Mod";
  id: string;
  name: string;
  gameVersionLatestFiles: (GetModpack_modpack_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles_dependencies_gameVersionLatestFiles | null)[];
}

export interface GetModpack_modpack_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles {
  __typename: "File";
  id: number | null;
  downloadUrl: string | null;
  fileName: string | null;
  dependencies: (GetModpack_modpack_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles_dependencies | null)[] | null;
}

export interface GetModpack_modpack_mods_gameVersionLatestFiles_dependencies {
  __typename: "Mod";
  id: string;
  name: string;
  gameVersionLatestFiles: (GetModpack_modpack_mods_gameVersionLatestFiles_dependencies_gameVersionLatestFiles | null)[];
}

export interface GetModpack_modpack_mods_gameVersionLatestFiles {
  __typename: "File";
  id: number | null;
  downloadUrl: string | null;
  fileName: string | null;
  dependencies: (GetModpack_modpack_mods_gameVersionLatestFiles_dependencies | null)[] | null;
}

export interface GetModpack_modpack_mods {
  __typename: "Mod";
  id: string;
  name: string;
  gameVersionLatestFiles: (GetModpack_modpack_mods_gameVersionLatestFiles | null)[];
}

export interface GetModpack_modpack {
  __typename: "Modpack";
  name: string | null;
  version: string | null;
  share: boolean | null;
  author: GetModpack_modpack_author;
  mods: (GetModpack_modpack_mods | null)[] | null;
}

export interface GetModpack {
  modpack: GetModpack_modpack | null;
}

export interface GetModpackVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVersions
// ====================================================

export interface GetVersions {
  versions: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchMod
// ====================================================

export interface SearchMod_searchMods {
  __typename: "Mod";
  id: string;
  name: string;
}

export interface SearchMod {
  searchMods: (SearchMod_searchMods | null)[] | null;
}

export interface SearchModVariables {
  filter?: string | null;
  version?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateModpack
// ====================================================

export interface UpdateModpack {
  updateModpack: boolean | null;
}

export interface UpdateModpackVariables {
  input?: ModpackInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Provider {
  EMAILPASSWORD = "EMAILPASSWORD",
  GOOGLE = "GOOGLE",
}

export interface AuthInput {
  email?: string | null;
  password?: string | null;
  remember?: boolean | null;
}

export interface ModpackInput {
  id?: string | null;
  patch?: ModpackPatch | null;
}

export interface ModpackPatch {
  name?: string | null;
  version?: string | null;
  share?: boolean | null;
  mods?: (string | null)[] | null;
}

export interface SignUpInput {
  displayName?: string | null;
  email?: string | null;
  password?: string | null;
}

export interface UserPatch {
  displayName?: string | null;
  photo?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
