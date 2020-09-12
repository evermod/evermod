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
// GraphQL query operation: GetModpacks
// ====================================================

export interface GetModpacks_modpacks_author {
  __typename: "Author";
  displayName: string | null;
}

export interface GetModpacks_modpacks {
  __typename: "Modpack";
  id: string;
  version: string | null;
  name: string | null;
  author: GetModpacks_modpacks_author;
}

export interface GetModpacks {
  modpacks: (GetModpacks_modpacks | null)[] | null;
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

export interface SignUpInput {
  displayName?: string | null;
  email?: string | null;
  password?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
