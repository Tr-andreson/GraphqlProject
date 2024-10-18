/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query fetchProducts($limit: Float!) {\n  getProduct(limit: $limit) {\n    id\n    name\n    slug\n    imageUrl\n  }\n}": types.FetchProductsDocument,
    "query fetchProductByID($getSingleProductByIdId: String!) {\n  getSingleProductById(id: $getSingleProductByIdId) {\n    id\n    sku\n    name\n    slug\n    imageUrl\n    imageKey\n    description\n    quantity\n    price\n    taxable\n    isActive\n  }\n}": types.FetchProductByIdDocument,
    "query fetchProductsBySlug($slug: String!) {\n  getProductBySlug(slug: $slug) {\n    id\n    sku\n    name\n    slug\n    imageUrl\n    imageKey\n    description\n    quantity\n    price\n    taxable\n    isActive\n  }\n}": types.FetchProductsBySlugDocument,
    "mutation loginUser($body: AuthLoginT!) {\n  loginUser(body: $body)\n}": types.LoginUserDocument,
    "mutation logoutUser {\n  logout\n}": types.LogoutUserDocument,
    "mutation registerUser($body: AuthInputT!) {\n  registerUser(body: $body)\n}": types.RegisterUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query fetchProducts($limit: Float!) {\n  getProduct(limit: $limit) {\n    id\n    name\n    slug\n    imageUrl\n  }\n}"): (typeof documents)["query fetchProducts($limit: Float!) {\n  getProduct(limit: $limit) {\n    id\n    name\n    slug\n    imageUrl\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query fetchProductByID($getSingleProductByIdId: String!) {\n  getSingleProductById(id: $getSingleProductByIdId) {\n    id\n    sku\n    name\n    slug\n    imageUrl\n    imageKey\n    description\n    quantity\n    price\n    taxable\n    isActive\n  }\n}"): (typeof documents)["query fetchProductByID($getSingleProductByIdId: String!) {\n  getSingleProductById(id: $getSingleProductByIdId) {\n    id\n    sku\n    name\n    slug\n    imageUrl\n    imageKey\n    description\n    quantity\n    price\n    taxable\n    isActive\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query fetchProductsBySlug($slug: String!) {\n  getProductBySlug(slug: $slug) {\n    id\n    sku\n    name\n    slug\n    imageUrl\n    imageKey\n    description\n    quantity\n    price\n    taxable\n    isActive\n  }\n}"): (typeof documents)["query fetchProductsBySlug($slug: String!) {\n  getProductBySlug(slug: $slug) {\n    id\n    sku\n    name\n    slug\n    imageUrl\n    imageKey\n    description\n    quantity\n    price\n    taxable\n    isActive\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation loginUser($body: AuthLoginT!) {\n  loginUser(body: $body)\n}"): (typeof documents)["mutation loginUser($body: AuthLoginT!) {\n  loginUser(body: $body)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation logoutUser {\n  logout\n}"): (typeof documents)["mutation logoutUser {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation registerUser($body: AuthInputT!) {\n  registerUser(body: $body)\n}"): (typeof documents)["mutation registerUser($body: AuthInputT!) {\n  registerUser(body: $body)\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;