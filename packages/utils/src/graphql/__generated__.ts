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

//==============================================================
// END Enums and Input Objects
//==============================================================
