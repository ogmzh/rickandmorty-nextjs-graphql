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
    "\n  query GetCharacterDetails($id: ID!) {\n    character(id: $id) {\n      id\n      name\n      status\n      species\n      type\n      gender\n      origin {\n        name\n        dimension\n      }\n      location {\n        name\n        dimension\n      }\n      image\n      episode {\n        id\n        name\n        air_date\n        created\n      }\n    }\n  }\n": types.GetCharacterDetailsDocument,
    "\n  query GetEpisodeDetails($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n      created\n      air_date\n      episode\n      characters {\n        id\n        name\n        status\n        species\n        image\n      }\n    }\n  }\n": types.GetEpisodeDetailsDocument,
    "\n  query GetLocationDetails($id: ID!) {\n    location(id: $id) {\n      id\n      name\n      dimension\n      type\n      created\n      residents {\n        id\n        name\n        species\n        image\n        status\n      }\n    }\n  }\n": types.GetLocationDetailsDocument,
    "\n  query GetCharacters($page: Int!) {\n    characters(page: $page) {\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        location {\n          name\n          dimension\n        }\n        origin {\n          name\n          dimension\n        }\n      }\n      info {\n        count\n        pages\n        next\n        prev\n      }\n    }\n  }\n": types.GetCharactersDocument,
    "\n  query GetEpisodes($page: Int!) {\n    episodes(page: $page) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        air_date\n        episode\n        created\n      }\n    }\n  }\n": types.GetEpisodesDocument,
    "\n  query GetLocations($page: Int!) {\n    locations(page: $page) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        name\n        id\n        type\n        dimension\n        created\n      }\n    }\n  }\n": types.GetLocationsDocument,
};

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
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCharacterDetails($id: ID!) {\n    character(id: $id) {\n      id\n      name\n      status\n      species\n      type\n      gender\n      origin {\n        name\n        dimension\n      }\n      location {\n        name\n        dimension\n      }\n      image\n      episode {\n        id\n        name\n        air_date\n        created\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCharacterDetails($id: ID!) {\n    character(id: $id) {\n      id\n      name\n      status\n      species\n      type\n      gender\n      origin {\n        name\n        dimension\n      }\n      location {\n        name\n        dimension\n      }\n      image\n      episode {\n        id\n        name\n        air_date\n        created\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEpisodeDetails($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n      created\n      air_date\n      episode\n      characters {\n        id\n        name\n        status\n        species\n        image\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEpisodeDetails($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n      created\n      air_date\n      episode\n      characters {\n        id\n        name\n        status\n        species\n        image\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLocationDetails($id: ID!) {\n    location(id: $id) {\n      id\n      name\n      dimension\n      type\n      created\n      residents {\n        id\n        name\n        species\n        image\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLocationDetails($id: ID!) {\n    location(id: $id) {\n      id\n      name\n      dimension\n      type\n      created\n      residents {\n        id\n        name\n        species\n        image\n        status\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCharacters($page: Int!) {\n    characters(page: $page) {\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        location {\n          name\n          dimension\n        }\n        origin {\n          name\n          dimension\n        }\n      }\n      info {\n        count\n        pages\n        next\n        prev\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCharacters($page: Int!) {\n    characters(page: $page) {\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        location {\n          name\n          dimension\n        }\n        origin {\n          name\n          dimension\n        }\n      }\n      info {\n        count\n        pages\n        next\n        prev\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEpisodes($page: Int!) {\n    episodes(page: $page) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        air_date\n        episode\n        created\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEpisodes($page: Int!) {\n    episodes(page: $page) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        air_date\n        episode\n        created\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetLocations($page: Int!) {\n    locations(page: $page) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        name\n        id\n        type\n        dimension\n        created\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLocations($page: Int!) {\n    locations(page: $page) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        name\n        id\n        type\n        dimension\n        created\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;