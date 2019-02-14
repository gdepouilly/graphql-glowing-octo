// Code generated by Prisma (prisma@1.26.4). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  pokemon: (where?: PokemonWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  pokemon: (where: PokemonWhereUniqueInput) => PokemonPromise;
  pokemons: (args?: {
    where?: PokemonWhereInput;
    orderBy?: PokemonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Pokemon>;
  pokemonsConnection: (args?: {
    where?: PokemonWhereInput;
    orderBy?: PokemonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PokemonConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPokemon: (data: PokemonCreateInput) => PokemonPromise;
  updatePokemon: (args: {
    data: PokemonUpdateInput;
    where: PokemonWhereUniqueInput;
  }) => PokemonPromise;
  updateManyPokemons: (args: {
    data: PokemonUpdateManyMutationInput;
    where?: PokemonWhereInput;
  }) => BatchPayloadPromise;
  upsertPokemon: (args: {
    where: PokemonWhereUniqueInput;
    create: PokemonCreateInput;
    update: PokemonUpdateInput;
  }) => PokemonPromise;
  deletePokemon: (where: PokemonWhereUniqueInput) => PokemonPromise;
  deleteManyPokemons: (where?: PokemonWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  pokemon: (
    where?: PokemonSubscriptionWhereInput
  ) => PokemonSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PokemonOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "height_ASC"
  | "height_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface PokemonCreateInput {
  name: String;
  height: Int;
}

export interface PokemonWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  height?: Int;
  height_not?: Int;
  height_in?: Int[] | Int;
  height_not_in?: Int[] | Int;
  height_lt?: Int;
  height_lte?: Int;
  height_gt?: Int;
  height_gte?: Int;
  AND?: PokemonWhereInput[] | PokemonWhereInput;
  OR?: PokemonWhereInput[] | PokemonWhereInput;
  NOT?: PokemonWhereInput[] | PokemonWhereInput;
}

export interface PokemonUpdateInput {
  name?: String;
  height?: Int;
}

export interface PokemonUpdateManyMutationInput {
  name?: String;
  height?: Int;
}

export interface PokemonSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PokemonWhereInput;
  AND?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput;
  OR?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput;
  NOT?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput;
}

export type PokemonWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface PokemonEdge {
  node: Pokemon;
  cursor: String;
}

export interface PokemonEdgePromise extends Promise<PokemonEdge>, Fragmentable {
  node: <T = PokemonPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PokemonEdgeSubscription
  extends Promise<AsyncIterator<PokemonEdge>>,
    Fragmentable {
  node: <T = PokemonSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface Pokemon {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  height: Int;
}

export interface PokemonPromise extends Promise<Pokemon>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  height: () => Promise<Int>;
}

export interface PokemonSubscription
  extends Promise<AsyncIterator<Pokemon>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  height: () => Promise<AsyncIterator<Int>>;
}

export interface PokemonSubscriptionPayload {
  mutation: MutationType;
  node: Pokemon;
  updatedFields: String[];
  previousValues: PokemonPreviousValues;
}

export interface PokemonSubscriptionPayloadPromise
  extends Promise<PokemonSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PokemonPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PokemonPreviousValuesPromise>() => T;
}

export interface PokemonSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PokemonSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PokemonSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PokemonPreviousValuesSubscription>() => T;
}

export interface PokemonConnection {
  pageInfo: PageInfo;
  edges: PokemonEdge[];
}

export interface PokemonConnectionPromise
  extends Promise<PokemonConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PokemonEdge>>() => T;
  aggregate: <T = AggregatePokemonPromise>() => T;
}

export interface PokemonConnectionSubscription
  extends Promise<AsyncIterator<PokemonConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PokemonEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePokemonSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePokemon {
  count: Int;
}

export interface AggregatePokemonPromise
  extends Promise<AggregatePokemon>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePokemonSubscription
  extends Promise<AsyncIterator<AggregatePokemon>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PokemonPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  height: Int;
}

export interface PokemonPreviousValuesPromise
  extends Promise<PokemonPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  height: () => Promise<Int>;
}

export interface PokemonPreviousValuesSubscription
  extends Promise<AsyncIterator<PokemonPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  height: () => Promise<AsyncIterator<Int>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Pokemon",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
