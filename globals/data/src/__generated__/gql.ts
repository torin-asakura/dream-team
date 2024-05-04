/* eslint-disable */
import * as types                            from './graphql'

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

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
  '\n  query GetFooter {\n    footerItems {\n      nodes {\n        contentAddons {\n          title\n          role\n          content\n          excerpt\n        }\n        language {\n          code\n        }\n      }\n    }\n  }\n':
    types.GetFooterDocument,
  '\n  query GetNavigation {\n    navigationItems {\n      nodes {\n        contentAddons {\n          title\n          content\n          role\n        }\n        language {\n          code\n        }\n      }\n    }\n  }\n':
    types.GetNavigationDocument,
  '\n  query GetRecruits {\n    recruits {\n      nodes {\n        title\n        featuredImage {\n          node {\n            mediaItemUrl\n            title\n          }\n        }\n        language {\n          code\n        }\n      }\n    }\n  }\n':
    types.GetRecruitsDocument,
  '\n  query GetSeo($uri:String!) {\n    pageBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n      translation(language: EN) {\n        seo {\n          title\n          metaDesc\n        }\n      }\n    }\n  }\n':
    types.GetSeoDocument,
  '\n  query GetSkills {\n    skillCategories {\n      nodes {\n        name\n        skillAddons {\n          icon {\n            mediaItemUrl\n          }\n        }\n        skills {\n          nodes {\n            title\n            menuOrder\n            language {\n              code\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.GetSkillsDocument,
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetFooter {\n    footerItems {\n      nodes {\n        contentAddons {\n          title\n          role\n          content\n          excerpt\n        }\n        language {\n          code\n        }\n      }\n    }\n  }\n'
): typeof documents['\n  query GetFooter {\n    footerItems {\n      nodes {\n        contentAddons {\n          title\n          role\n          content\n          excerpt\n        }\n        language {\n          code\n        }\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetNavigation {\n    navigationItems {\n      nodes {\n        contentAddons {\n          title\n          content\n          role\n        }\n        language {\n          code\n        }\n      }\n    }\n  }\n'
): typeof documents['\n  query GetNavigation {\n    navigationItems {\n      nodes {\n        contentAddons {\n          title\n          content\n          role\n        }\n        language {\n          code\n        }\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetRecruits {\n    recruits {\n      nodes {\n        title\n        featuredImage {\n          node {\n            mediaItemUrl\n            title\n          }\n        }\n        language {\n          code\n        }\n      }\n    }\n  }\n'
): typeof documents['\n  query GetRecruits {\n    recruits {\n      nodes {\n        title\n        featuredImage {\n          node {\n            mediaItemUrl\n            title\n          }\n        }\n        language {\n          code\n        }\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetSeo($uri:String!) {\n    pageBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n      translation(language: EN) {\n        seo {\n          title\n          metaDesc\n        }\n      }\n    }\n  }\n'
): typeof documents['\n  query GetSeo($uri:String!) {\n    pageBy(uri: $uri) {\n      seo {\n        title\n        metaDesc\n      }\n      translation(language: EN) {\n        seo {\n          title\n          metaDesc\n        }\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetSkills {\n    skillCategories {\n      nodes {\n        name\n        skillAddons {\n          icon {\n            mediaItemUrl\n          }\n        }\n        skills {\n          nodes {\n            title\n            menuOrder\n            language {\n              code\n            }\n          }\n        }\n      }\n    }\n  }\n'
): typeof documents['\n  query GetSkills {\n    skillCategories {\n      nodes {\n        name\n        skillAddons {\n          icon {\n            mediaItemUrl\n          }\n        }\n        skills {\n          nodes {\n            title\n            menuOrder\n            language {\n              code\n            }\n          }\n        }\n      }\n    }\n  }\n']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
