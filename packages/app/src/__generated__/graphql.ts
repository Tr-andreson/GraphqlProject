/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AuthForgotT = {
  email: Scalars['String']['input'];
};

export type AuthInputT = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type AuthLoginT = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProduct: Scalars['String']['output'];
  forgot: Scalars['String']['output'];
  loginUser: Scalars['String']['output'];
  logout: Scalars['String']['output'];
  registerUser: Scalars['String']['output'];
  uploadFile: Scalars['String']['output'];
};


export type MutationAddProductArgs = {
  body: ProductInputT;
};


export type MutationForgotArgs = {
  body: AuthForgotT;
};


export type MutationLoginUserArgs = {
  body: AuthLoginT;
};


export type MutationRegisterUserArgs = {
  body: AuthInputT;
};


export type MutationUploadFileArgs = {
  body: UploadFileT;
  file: Scalars['Upload']['input'];
};

export type ProductInputT = {
  brand: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imageKey: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
  sku: Scalars['String']['input'];
  taxable: Scalars['Boolean']['input'];
};

export type ProductT = {
  __typename?: 'ProductT';
  brand: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageKey: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  taxable: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  check: Scalars['String']['output'];
  getProduct: Array<ProductT>;
  getProductBySlug: ProductT;
  getSingleProductById: ProductT;
  getUsers: Array<UserT>;
  me: UserT;
};


export type QueryGetProductBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetSingleProductByIdArgs = {
  id: Scalars['String']['input'];
};

export type UploadFileT = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserT = {
  __typename?: 'UserT';
  _id: Scalars['ID']['output'];
  _v: Scalars['Float']['output'];
  created: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  merchant: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type FetchProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchProductsQuery = { __typename?: 'Query', getProduct: Array<{ __typename?: 'ProductT', name: string, slug: string, imageUrl: string }> };

export type LoginUserMutationVariables = Exact<{
  body: AuthLoginT;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: string };


// export const FetchProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<FetchProductsQuery, FetchProductsQueryVariables>;
// export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthLoginT"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;

export const FetchProductsDocument = gql`
    query fetchProducts {
  getProduct {
    name
    slug
    imageUrl
  }
}
    `;

export function useFetchProductsQuery(options?: Omit<Urql.UseQueryArgs<FetchProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<FetchProductsQuery, FetchProductsQueryVariables>({ query: FetchProductsDocument, ...options });
};
export const LoginUserDocument = gql`
    mutation loginUser($body: AuthLoginT!) {
  loginUser(body: $body)
}
    `;

export function useLoginUserMutation() {
  return Urql.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument);
};
