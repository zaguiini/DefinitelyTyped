// Type definitions for graphql-resolvers 0.3
// Project: https://github.com/lucasconstantino/graphql-resolvers#readme
// Definitions by: Alejandro Corredor <https://github.com/aecorredor>
//                 Luis Felipe Zaguini <https://github.com/zaguiini>
//                 Mike Engel <https://github.com/mike-engel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { GraphQLFieldResolver } from "graphql";

export const skip: undefined;

export interface TArgsDefault {
  [argument: string]: any;
}

export function combineResolvers<
  TSource = any,
  TContext = any,
  TArgs = TArgsDefault
>(
  ...resolvers: GraphQLFieldResolver<TSource, TContext, TArgs>[]
): GraphQLFieldResolver<TSource, TContext, TArgs>;

export function pipeResolvers<
  TSource = any,
  TContext = any,
  TArgs = TArgsDefault
>(
  ...resolvers: GraphQLFieldResolver<TSource, TContext, TArgs>[]
): GraphQLFieldResolver<TSource, TContext, TArgs>;

export function allResolvers<
  TSource = any,
  TContext = any,
  TArgs = TArgsDefault
>(
  resolvers: GraphQLFieldResolver<TSource, TContext, TArgs>[]
): GraphQLFieldResolver<TSource, TContext, TArgs>;

export function resolveDependee(
  dependeeName: string
): GraphQLFieldResolver<any, any, any>;

export function resolveDependees(
  dependeeNames: string[]
): GraphQLFieldResolver<any, any, any>;

export function isDependee<
  TSource = any,
  TContext = any,
  TArgs = TArgsDefault
>(
  resolver: GraphQLFieldResolver<TSource, TContext, TArgs>
): GraphQLFieldResolver<TSource, TContext, TArgs>;
