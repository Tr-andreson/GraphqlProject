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


export type QueryGetProductArgs = {
  limit: Scalars['Float']['input'];
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

export type FetchProductsQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
}>;


export type FetchProductsQuery = { __typename?: 'Query', getProduct: Array<{ __typename?: 'ProductT', id: string, name: string, slug: string, imageUrl: string }> };

export type FetchProductByIdQueryVariables = Exact<{
  getSingleProductByIdId: Scalars['String']['input'];
}>;


export type FetchProductByIdQuery = { __typename?: 'Query', getSingleProductById: { __typename?: 'ProductT', id: string, sku: string, name: string, slug: string, imageUrl: string, imageKey: string, description: string, quantity: number, price: number, taxable: boolean, isActive: boolean } };

export type FetchProductsBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FetchProductsBySlugQuery = { __typename?: 'Query', getProductBySlug: { __typename?: 'ProductT', id: string, sku: string, name: string, slug: string, imageUrl: string, imageKey: string, description: string, quantity: number, price: number, taxable: boolean, isActive: boolean } };

export type LoginUserMutationVariables = Exact<{
  body: AuthLoginT;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: string };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: string };

export type RegisterUserMutationVariables = Exact<{
  body: AuthInputT;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: string };


// export const FetchProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<FetchProductsQuery, FetchProductsQueryVariables>;
// export const FetchProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchProductByID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getSingleProductByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSingleProductById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getSingleProductByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageKey"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"taxable"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<FetchProductByIdQuery, FetchProductByIdQueryVariables>;
// export const FetchProductsBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchProductsBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageKey"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"taxable"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<FetchProductsBySlugQuery, FetchProductsBySlugQueryVariables>;
// export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthLoginT"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
// export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
// export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInputT"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;

export const FetchProductsDocument = gql`
    query fetchProducts($limit: Float!) {
  getProduct(limit: $limit) {
    id
    name
    slug
    imageUrl
  }
}
    `;

export function useFetchProductsQuery(options: Omit<Urql.UseQueryArgs<FetchProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<FetchProductsQuery, FetchProductsQueryVariables>({ query: FetchProductsDocument, ...options });
};
export const FetchProductByIdDocument = gql`
    query fetchProductByID($getSingleProductByIdId: String!) {
  getSingleProductById(id: $getSingleProductByIdId) {
    id
    sku
    name
    slug
    imageUrl
    imageKey
    description
    quantity
    price
    taxable
    isActive
  }
}
    `;

export function useFetchProductByIdQuery(options: Omit<Urql.UseQueryArgs<FetchProductByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<FetchProductByIdQuery, FetchProductByIdQueryVariables>({ query: FetchProductByIdDocument, ...options });
};
export const FetchProductsBySlugDocument = gql`
    query fetchProductsBySlug($slug: String!) {
  getProductBySlug(slug: $slug) {
    id
    sku
    name
    slug
    imageUrl
    imageKey
    description
    quantity
    price
    taxable
    isActive
  }
}
    `;

export function useFetchProductsBySlugQuery(options: Omit<Urql.UseQueryArgs<FetchProductsBySlugQueryVariables>, 'query'>) {
  return Urql.useQuery<FetchProductsBySlugQuery, FetchProductsBySlugQueryVariables>({ query: FetchProductsBySlugDocument, ...options });
};
export const LoginUserDocument = gql`
    mutation loginUser($body: AuthLoginT!) {
  loginUser(body: $body)
}
    `;

export function useLoginUserMutation() {
  return Urql.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument);
};
export const LogoutUserDocument = gql`
    mutation logoutUser {
  logout
}
    `;

export function useLogoutUserMutation() {
  return Urql.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument);
};
export const RegisterUserDocument = gql`
    mutation registerUser($body: AuthInputT!) {
  registerUser(body: $body)
}
    `;

export function useRegisterUserMutation() {
  return Urql.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument);
};
