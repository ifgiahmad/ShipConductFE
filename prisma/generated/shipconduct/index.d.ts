
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ms_AssessmentCategory
 * 
 */
export type Ms_AssessmentCategory = $Result.DefaultSelection<Prisma.$Ms_AssessmentCategoryPayload>
/**
 * Model Tr_VesselAssessment
 * 
 */
export type Tr_VesselAssessment = $Result.DefaultSelection<Prisma.$Tr_VesselAssessmentPayload>
/**
 * Model Tr_VesselAssessmentDetail
 * 
 */
export type Tr_VesselAssessmentDetail = $Result.DefaultSelection<Prisma.$Tr_VesselAssessmentDetailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ms_AssessmentCategories
 * const ms_AssessmentCategories = await prisma.ms_AssessmentCategory.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ms_AssessmentCategories
   * const ms_AssessmentCategories = await prisma.ms_AssessmentCategory.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.ms_AssessmentCategory`: Exposes CRUD operations for the **Ms_AssessmentCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ms_AssessmentCategories
    * const ms_AssessmentCategories = await prisma.ms_AssessmentCategory.findMany()
    * ```
    */
  get ms_AssessmentCategory(): Prisma.Ms_AssessmentCategoryDelegate<ExtArgs>;

  /**
   * `prisma.tr_VesselAssessment`: Exposes CRUD operations for the **Tr_VesselAssessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_VesselAssessments
    * const tr_VesselAssessments = await prisma.tr_VesselAssessment.findMany()
    * ```
    */
  get tr_VesselAssessment(): Prisma.Tr_VesselAssessmentDelegate<ExtArgs>;

  /**
   * `prisma.tr_VesselAssessmentDetail`: Exposes CRUD operations for the **Tr_VesselAssessmentDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_VesselAssessmentDetails
    * const tr_VesselAssessmentDetails = await prisma.tr_VesselAssessmentDetail.findMany()
    * ```
    */
  get tr_VesselAssessmentDetail(): Prisma.Tr_VesselAssessmentDetailDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Ms_AssessmentCategory: 'Ms_AssessmentCategory',
    Tr_VesselAssessment: 'Tr_VesselAssessment',
    Tr_VesselAssessmentDetail: 'Tr_VesselAssessmentDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    dbShipConduct?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "ms_AssessmentCategory" | "tr_VesselAssessment" | "tr_VesselAssessmentDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Ms_AssessmentCategory: {
        payload: Prisma.$Ms_AssessmentCategoryPayload<ExtArgs>
        fields: Prisma.Ms_AssessmentCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Ms_AssessmentCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ms_AssessmentCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Ms_AssessmentCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ms_AssessmentCategoryPayload>
          }
          findFirst: {
            args: Prisma.Ms_AssessmentCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ms_AssessmentCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Ms_AssessmentCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ms_AssessmentCategoryPayload>
          }
          findMany: {
            args: Prisma.Ms_AssessmentCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ms_AssessmentCategoryPayload>[]
          }
          create: {
            args: Prisma.Ms_AssessmentCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ms_AssessmentCategoryPayload>
          }
          createMany: {
            args: Prisma.Ms_AssessmentCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Ms_AssessmentCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ms_AssessmentCategoryPayload>
          }
          update: {
            args: Prisma.Ms_AssessmentCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ms_AssessmentCategoryPayload>
          }
          deleteMany: {
            args: Prisma.Ms_AssessmentCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Ms_AssessmentCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Ms_AssessmentCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ms_AssessmentCategoryPayload>
          }
          aggregate: {
            args: Prisma.Ms_AssessmentCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMs_AssessmentCategory>
          }
          groupBy: {
            args: Prisma.Ms_AssessmentCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ms_AssessmentCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.Ms_AssessmentCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<Ms_AssessmentCategoryCountAggregateOutputType> | number
          }
        }
      }
      Tr_VesselAssessment: {
        payload: Prisma.$Tr_VesselAssessmentPayload<ExtArgs>
        fields: Prisma.Tr_VesselAssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tr_VesselAssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tr_VesselAssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentPayload>
          }
          findFirst: {
            args: Prisma.Tr_VesselAssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tr_VesselAssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentPayload>
          }
          findMany: {
            args: Prisma.Tr_VesselAssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentPayload>[]
          }
          create: {
            args: Prisma.Tr_VesselAssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentPayload>
          }
          createMany: {
            args: Prisma.Tr_VesselAssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Tr_VesselAssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentPayload>
          }
          update: {
            args: Prisma.Tr_VesselAssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentPayload>
          }
          deleteMany: {
            args: Prisma.Tr_VesselAssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tr_VesselAssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Tr_VesselAssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentPayload>
          }
          aggregate: {
            args: Prisma.Tr_VesselAssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_VesselAssessment>
          }
          groupBy: {
            args: Prisma.Tr_VesselAssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_VesselAssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tr_VesselAssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_VesselAssessmentCountAggregateOutputType> | number
          }
        }
      }
      Tr_VesselAssessmentDetail: {
        payload: Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>
        fields: Prisma.Tr_VesselAssessmentDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tr_VesselAssessmentDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tr_VesselAssessmentDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentDetailPayload>
          }
          findFirst: {
            args: Prisma.Tr_VesselAssessmentDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tr_VesselAssessmentDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentDetailPayload>
          }
          findMany: {
            args: Prisma.Tr_VesselAssessmentDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentDetailPayload>[]
          }
          create: {
            args: Prisma.Tr_VesselAssessmentDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentDetailPayload>
          }
          createMany: {
            args: Prisma.Tr_VesselAssessmentDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Tr_VesselAssessmentDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentDetailPayload>
          }
          update: {
            args: Prisma.Tr_VesselAssessmentDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentDetailPayload>
          }
          deleteMany: {
            args: Prisma.Tr_VesselAssessmentDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tr_VesselAssessmentDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Tr_VesselAssessmentDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tr_VesselAssessmentDetailPayload>
          }
          aggregate: {
            args: Prisma.Tr_VesselAssessmentDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_VesselAssessmentDetail>
          }
          groupBy: {
            args: Prisma.Tr_VesselAssessmentDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_VesselAssessmentDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tr_VesselAssessmentDetailCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_VesselAssessmentDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Tr_VesselAssessmentCountOutputType
   */

  export type Tr_VesselAssessmentCountOutputType = {
    Tr_VesselAssessmentDetail: number
  }

  export type Tr_VesselAssessmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tr_VesselAssessmentDetail?: boolean | Tr_VesselAssessmentCountOutputTypeCountTr_VesselAssessmentDetailArgs
  }

  // Custom InputTypes
  /**
   * Tr_VesselAssessmentCountOutputType without action
   */
  export type Tr_VesselAssessmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentCountOutputType
     */
    select?: Tr_VesselAssessmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tr_VesselAssessmentCountOutputType without action
   */
  export type Tr_VesselAssessmentCountOutputTypeCountTr_VesselAssessmentDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tr_VesselAssessmentDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Ms_AssessmentCategory
   */

  export type AggregateMs_AssessmentCategory = {
    _count: Ms_AssessmentCategoryCountAggregateOutputType | null
    _avg: Ms_AssessmentCategoryAvgAggregateOutputType | null
    _sum: Ms_AssessmentCategorySumAggregateOutputType | null
    _min: Ms_AssessmentCategoryMinAggregateOutputType | null
    _max: Ms_AssessmentCategoryMaxAggregateOutputType | null
  }

  export type Ms_AssessmentCategoryAvgAggregateOutputType = {
    Id: number | null
  }

  export type Ms_AssessmentCategorySumAggregateOutputType = {
    Id: bigint | null
  }

  export type Ms_AssessmentCategoryMinAggregateOutputType = {
    Id: bigint | null
    VslType: string | null
    Item: string | null
    Interval: string | null
    ShipSection: string | null
    CreatedBy: string | null
    CreatedDate: Date | null
    ModifiedBy: string | null
    ModifiedDate: Date | null
  }

  export type Ms_AssessmentCategoryMaxAggregateOutputType = {
    Id: bigint | null
    VslType: string | null
    Item: string | null
    Interval: string | null
    ShipSection: string | null
    CreatedBy: string | null
    CreatedDate: Date | null
    ModifiedBy: string | null
    ModifiedDate: Date | null
  }

  export type Ms_AssessmentCategoryCountAggregateOutputType = {
    Id: number
    VslType: number
    Item: number
    Interval: number
    ShipSection: number
    CreatedBy: number
    CreatedDate: number
    ModifiedBy: number
    ModifiedDate: number
    _all: number
  }


  export type Ms_AssessmentCategoryAvgAggregateInputType = {
    Id?: true
  }

  export type Ms_AssessmentCategorySumAggregateInputType = {
    Id?: true
  }

  export type Ms_AssessmentCategoryMinAggregateInputType = {
    Id?: true
    VslType?: true
    Item?: true
    Interval?: true
    ShipSection?: true
    CreatedBy?: true
    CreatedDate?: true
    ModifiedBy?: true
    ModifiedDate?: true
  }

  export type Ms_AssessmentCategoryMaxAggregateInputType = {
    Id?: true
    VslType?: true
    Item?: true
    Interval?: true
    ShipSection?: true
    CreatedBy?: true
    CreatedDate?: true
    ModifiedBy?: true
    ModifiedDate?: true
  }

  export type Ms_AssessmentCategoryCountAggregateInputType = {
    Id?: true
    VslType?: true
    Item?: true
    Interval?: true
    ShipSection?: true
    CreatedBy?: true
    CreatedDate?: true
    ModifiedBy?: true
    ModifiedDate?: true
    _all?: true
  }

  export type Ms_AssessmentCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ms_AssessmentCategory to aggregate.
     */
    where?: Ms_AssessmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ms_AssessmentCategories to fetch.
     */
    orderBy?: Ms_AssessmentCategoryOrderByWithRelationInput | Ms_AssessmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Ms_AssessmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ms_AssessmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ms_AssessmentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ms_AssessmentCategories
    **/
    _count?: true | Ms_AssessmentCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ms_AssessmentCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ms_AssessmentCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ms_AssessmentCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ms_AssessmentCategoryMaxAggregateInputType
  }

  export type GetMs_AssessmentCategoryAggregateType<T extends Ms_AssessmentCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMs_AssessmentCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMs_AssessmentCategory[P]>
      : GetScalarType<T[P], AggregateMs_AssessmentCategory[P]>
  }




  export type Ms_AssessmentCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ms_AssessmentCategoryWhereInput
    orderBy?: Ms_AssessmentCategoryOrderByWithAggregationInput | Ms_AssessmentCategoryOrderByWithAggregationInput[]
    by: Ms_AssessmentCategoryScalarFieldEnum[] | Ms_AssessmentCategoryScalarFieldEnum
    having?: Ms_AssessmentCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ms_AssessmentCategoryCountAggregateInputType | true
    _avg?: Ms_AssessmentCategoryAvgAggregateInputType
    _sum?: Ms_AssessmentCategorySumAggregateInputType
    _min?: Ms_AssessmentCategoryMinAggregateInputType
    _max?: Ms_AssessmentCategoryMaxAggregateInputType
  }

  export type Ms_AssessmentCategoryGroupByOutputType = {
    Id: bigint
    VslType: string
    Item: string
    Interval: string | null
    ShipSection: string | null
    CreatedBy: string | null
    CreatedDate: Date | null
    ModifiedBy: string | null
    ModifiedDate: Date | null
    _count: Ms_AssessmentCategoryCountAggregateOutputType | null
    _avg: Ms_AssessmentCategoryAvgAggregateOutputType | null
    _sum: Ms_AssessmentCategorySumAggregateOutputType | null
    _min: Ms_AssessmentCategoryMinAggregateOutputType | null
    _max: Ms_AssessmentCategoryMaxAggregateOutputType | null
  }

  type GetMs_AssessmentCategoryGroupByPayload<T extends Ms_AssessmentCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ms_AssessmentCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ms_AssessmentCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ms_AssessmentCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], Ms_AssessmentCategoryGroupByOutputType[P]>
        }
      >
    >


  export type Ms_AssessmentCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VslType?: boolean
    Item?: boolean
    Interval?: boolean
    ShipSection?: boolean
    CreatedBy?: boolean
    CreatedDate?: boolean
    ModifiedBy?: boolean
    ModifiedDate?: boolean
  }, ExtArgs["result"]["ms_AssessmentCategory"]>


  export type Ms_AssessmentCategorySelectScalar = {
    Id?: boolean
    VslType?: boolean
    Item?: boolean
    Interval?: boolean
    ShipSection?: boolean
    CreatedBy?: boolean
    CreatedDate?: boolean
    ModifiedBy?: boolean
    ModifiedDate?: boolean
  }


  export type $Ms_AssessmentCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ms_AssessmentCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      VslType: string
      Item: string
      Interval: string | null
      ShipSection: string | null
      CreatedBy: string | null
      CreatedDate: Date | null
      ModifiedBy: string | null
      ModifiedDate: Date | null
    }, ExtArgs["result"]["ms_AssessmentCategory"]>
    composites: {}
  }

  type Ms_AssessmentCategoryGetPayload<S extends boolean | null | undefined | Ms_AssessmentCategoryDefaultArgs> = $Result.GetResult<Prisma.$Ms_AssessmentCategoryPayload, S>

  type Ms_AssessmentCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Ms_AssessmentCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ms_AssessmentCategoryCountAggregateInputType | true
    }

  export interface Ms_AssessmentCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ms_AssessmentCategory'], meta: { name: 'Ms_AssessmentCategory' } }
    /**
     * Find zero or one Ms_AssessmentCategory that matches the filter.
     * @param {Ms_AssessmentCategoryFindUniqueArgs} args - Arguments to find a Ms_AssessmentCategory
     * @example
     * // Get one Ms_AssessmentCategory
     * const ms_AssessmentCategory = await prisma.ms_AssessmentCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Ms_AssessmentCategoryFindUniqueArgs>(args: SelectSubset<T, Ms_AssessmentCategoryFindUniqueArgs<ExtArgs>>): Prisma__Ms_AssessmentCategoryClient<$Result.GetResult<Prisma.$Ms_AssessmentCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ms_AssessmentCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Ms_AssessmentCategoryFindUniqueOrThrowArgs} args - Arguments to find a Ms_AssessmentCategory
     * @example
     * // Get one Ms_AssessmentCategory
     * const ms_AssessmentCategory = await prisma.ms_AssessmentCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Ms_AssessmentCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, Ms_AssessmentCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Ms_AssessmentCategoryClient<$Result.GetResult<Prisma.$Ms_AssessmentCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ms_AssessmentCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ms_AssessmentCategoryFindFirstArgs} args - Arguments to find a Ms_AssessmentCategory
     * @example
     * // Get one Ms_AssessmentCategory
     * const ms_AssessmentCategory = await prisma.ms_AssessmentCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Ms_AssessmentCategoryFindFirstArgs>(args?: SelectSubset<T, Ms_AssessmentCategoryFindFirstArgs<ExtArgs>>): Prisma__Ms_AssessmentCategoryClient<$Result.GetResult<Prisma.$Ms_AssessmentCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ms_AssessmentCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ms_AssessmentCategoryFindFirstOrThrowArgs} args - Arguments to find a Ms_AssessmentCategory
     * @example
     * // Get one Ms_AssessmentCategory
     * const ms_AssessmentCategory = await prisma.ms_AssessmentCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Ms_AssessmentCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, Ms_AssessmentCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__Ms_AssessmentCategoryClient<$Result.GetResult<Prisma.$Ms_AssessmentCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ms_AssessmentCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ms_AssessmentCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ms_AssessmentCategories
     * const ms_AssessmentCategories = await prisma.ms_AssessmentCategory.findMany()
     * 
     * // Get first 10 Ms_AssessmentCategories
     * const ms_AssessmentCategories = await prisma.ms_AssessmentCategory.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const ms_AssessmentCategoryWithIdOnly = await prisma.ms_AssessmentCategory.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Ms_AssessmentCategoryFindManyArgs>(args?: SelectSubset<T, Ms_AssessmentCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ms_AssessmentCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ms_AssessmentCategory.
     * @param {Ms_AssessmentCategoryCreateArgs} args - Arguments to create a Ms_AssessmentCategory.
     * @example
     * // Create one Ms_AssessmentCategory
     * const Ms_AssessmentCategory = await prisma.ms_AssessmentCategory.create({
     *   data: {
     *     // ... data to create a Ms_AssessmentCategory
     *   }
     * })
     * 
     */
    create<T extends Ms_AssessmentCategoryCreateArgs>(args: SelectSubset<T, Ms_AssessmentCategoryCreateArgs<ExtArgs>>): Prisma__Ms_AssessmentCategoryClient<$Result.GetResult<Prisma.$Ms_AssessmentCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ms_AssessmentCategories.
     * @param {Ms_AssessmentCategoryCreateManyArgs} args - Arguments to create many Ms_AssessmentCategories.
     * @example
     * // Create many Ms_AssessmentCategories
     * const ms_AssessmentCategory = await prisma.ms_AssessmentCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Ms_AssessmentCategoryCreateManyArgs>(args?: SelectSubset<T, Ms_AssessmentCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ms_AssessmentCategory.
     * @param {Ms_AssessmentCategoryDeleteArgs} args - Arguments to delete one Ms_AssessmentCategory.
     * @example
     * // Delete one Ms_AssessmentCategory
     * const Ms_AssessmentCategory = await prisma.ms_AssessmentCategory.delete({
     *   where: {
     *     // ... filter to delete one Ms_AssessmentCategory
     *   }
     * })
     * 
     */
    delete<T extends Ms_AssessmentCategoryDeleteArgs>(args: SelectSubset<T, Ms_AssessmentCategoryDeleteArgs<ExtArgs>>): Prisma__Ms_AssessmentCategoryClient<$Result.GetResult<Prisma.$Ms_AssessmentCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ms_AssessmentCategory.
     * @param {Ms_AssessmentCategoryUpdateArgs} args - Arguments to update one Ms_AssessmentCategory.
     * @example
     * // Update one Ms_AssessmentCategory
     * const ms_AssessmentCategory = await prisma.ms_AssessmentCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Ms_AssessmentCategoryUpdateArgs>(args: SelectSubset<T, Ms_AssessmentCategoryUpdateArgs<ExtArgs>>): Prisma__Ms_AssessmentCategoryClient<$Result.GetResult<Prisma.$Ms_AssessmentCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ms_AssessmentCategories.
     * @param {Ms_AssessmentCategoryDeleteManyArgs} args - Arguments to filter Ms_AssessmentCategories to delete.
     * @example
     * // Delete a few Ms_AssessmentCategories
     * const { count } = await prisma.ms_AssessmentCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Ms_AssessmentCategoryDeleteManyArgs>(args?: SelectSubset<T, Ms_AssessmentCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ms_AssessmentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ms_AssessmentCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ms_AssessmentCategories
     * const ms_AssessmentCategory = await prisma.ms_AssessmentCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Ms_AssessmentCategoryUpdateManyArgs>(args: SelectSubset<T, Ms_AssessmentCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ms_AssessmentCategory.
     * @param {Ms_AssessmentCategoryUpsertArgs} args - Arguments to update or create a Ms_AssessmentCategory.
     * @example
     * // Update or create a Ms_AssessmentCategory
     * const ms_AssessmentCategory = await prisma.ms_AssessmentCategory.upsert({
     *   create: {
     *     // ... data to create a Ms_AssessmentCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ms_AssessmentCategory we want to update
     *   }
     * })
     */
    upsert<T extends Ms_AssessmentCategoryUpsertArgs>(args: SelectSubset<T, Ms_AssessmentCategoryUpsertArgs<ExtArgs>>): Prisma__Ms_AssessmentCategoryClient<$Result.GetResult<Prisma.$Ms_AssessmentCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ms_AssessmentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ms_AssessmentCategoryCountArgs} args - Arguments to filter Ms_AssessmentCategories to count.
     * @example
     * // Count the number of Ms_AssessmentCategories
     * const count = await prisma.ms_AssessmentCategory.count({
     *   where: {
     *     // ... the filter for the Ms_AssessmentCategories we want to count
     *   }
     * })
    **/
    count<T extends Ms_AssessmentCategoryCountArgs>(
      args?: Subset<T, Ms_AssessmentCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ms_AssessmentCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ms_AssessmentCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ms_AssessmentCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ms_AssessmentCategoryAggregateArgs>(args: Subset<T, Ms_AssessmentCategoryAggregateArgs>): Prisma.PrismaPromise<GetMs_AssessmentCategoryAggregateType<T>>

    /**
     * Group by Ms_AssessmentCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ms_AssessmentCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Ms_AssessmentCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ms_AssessmentCategoryGroupByArgs['orderBy'] }
        : { orderBy?: Ms_AssessmentCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Ms_AssessmentCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMs_AssessmentCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ms_AssessmentCategory model
   */
  readonly fields: Ms_AssessmentCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ms_AssessmentCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Ms_AssessmentCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ms_AssessmentCategory model
   */ 
  interface Ms_AssessmentCategoryFieldRefs {
    readonly Id: FieldRef<"Ms_AssessmentCategory", 'BigInt'>
    readonly VslType: FieldRef<"Ms_AssessmentCategory", 'String'>
    readonly Item: FieldRef<"Ms_AssessmentCategory", 'String'>
    readonly Interval: FieldRef<"Ms_AssessmentCategory", 'String'>
    readonly ShipSection: FieldRef<"Ms_AssessmentCategory", 'String'>
    readonly CreatedBy: FieldRef<"Ms_AssessmentCategory", 'String'>
    readonly CreatedDate: FieldRef<"Ms_AssessmentCategory", 'DateTime'>
    readonly ModifiedBy: FieldRef<"Ms_AssessmentCategory", 'String'>
    readonly ModifiedDate: FieldRef<"Ms_AssessmentCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ms_AssessmentCategory findUnique
   */
  export type Ms_AssessmentCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ms_AssessmentCategory
     */
    select?: Ms_AssessmentCategorySelect<ExtArgs> | null
    /**
     * Filter, which Ms_AssessmentCategory to fetch.
     */
    where: Ms_AssessmentCategoryWhereUniqueInput
  }

  /**
   * Ms_AssessmentCategory findUniqueOrThrow
   */
  export type Ms_AssessmentCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ms_AssessmentCategory
     */
    select?: Ms_AssessmentCategorySelect<ExtArgs> | null
    /**
     * Filter, which Ms_AssessmentCategory to fetch.
     */
    where: Ms_AssessmentCategoryWhereUniqueInput
  }

  /**
   * Ms_AssessmentCategory findFirst
   */
  export type Ms_AssessmentCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ms_AssessmentCategory
     */
    select?: Ms_AssessmentCategorySelect<ExtArgs> | null
    /**
     * Filter, which Ms_AssessmentCategory to fetch.
     */
    where?: Ms_AssessmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ms_AssessmentCategories to fetch.
     */
    orderBy?: Ms_AssessmentCategoryOrderByWithRelationInput | Ms_AssessmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ms_AssessmentCategories.
     */
    cursor?: Ms_AssessmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ms_AssessmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ms_AssessmentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ms_AssessmentCategories.
     */
    distinct?: Ms_AssessmentCategoryScalarFieldEnum | Ms_AssessmentCategoryScalarFieldEnum[]
  }

  /**
   * Ms_AssessmentCategory findFirstOrThrow
   */
  export type Ms_AssessmentCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ms_AssessmentCategory
     */
    select?: Ms_AssessmentCategorySelect<ExtArgs> | null
    /**
     * Filter, which Ms_AssessmentCategory to fetch.
     */
    where?: Ms_AssessmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ms_AssessmentCategories to fetch.
     */
    orderBy?: Ms_AssessmentCategoryOrderByWithRelationInput | Ms_AssessmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ms_AssessmentCategories.
     */
    cursor?: Ms_AssessmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ms_AssessmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ms_AssessmentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ms_AssessmentCategories.
     */
    distinct?: Ms_AssessmentCategoryScalarFieldEnum | Ms_AssessmentCategoryScalarFieldEnum[]
  }

  /**
   * Ms_AssessmentCategory findMany
   */
  export type Ms_AssessmentCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ms_AssessmentCategory
     */
    select?: Ms_AssessmentCategorySelect<ExtArgs> | null
    /**
     * Filter, which Ms_AssessmentCategories to fetch.
     */
    where?: Ms_AssessmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ms_AssessmentCategories to fetch.
     */
    orderBy?: Ms_AssessmentCategoryOrderByWithRelationInput | Ms_AssessmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ms_AssessmentCategories.
     */
    cursor?: Ms_AssessmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ms_AssessmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ms_AssessmentCategories.
     */
    skip?: number
    distinct?: Ms_AssessmentCategoryScalarFieldEnum | Ms_AssessmentCategoryScalarFieldEnum[]
  }

  /**
   * Ms_AssessmentCategory create
   */
  export type Ms_AssessmentCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ms_AssessmentCategory
     */
    select?: Ms_AssessmentCategorySelect<ExtArgs> | null
    /**
     * The data needed to create a Ms_AssessmentCategory.
     */
    data: XOR<Ms_AssessmentCategoryCreateInput, Ms_AssessmentCategoryUncheckedCreateInput>
  }

  /**
   * Ms_AssessmentCategory createMany
   */
  export type Ms_AssessmentCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ms_AssessmentCategories.
     */
    data: Ms_AssessmentCategoryCreateManyInput | Ms_AssessmentCategoryCreateManyInput[]
  }

  /**
   * Ms_AssessmentCategory update
   */
  export type Ms_AssessmentCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ms_AssessmentCategory
     */
    select?: Ms_AssessmentCategorySelect<ExtArgs> | null
    /**
     * The data needed to update a Ms_AssessmentCategory.
     */
    data: XOR<Ms_AssessmentCategoryUpdateInput, Ms_AssessmentCategoryUncheckedUpdateInput>
    /**
     * Choose, which Ms_AssessmentCategory to update.
     */
    where: Ms_AssessmentCategoryWhereUniqueInput
  }

  /**
   * Ms_AssessmentCategory updateMany
   */
  export type Ms_AssessmentCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ms_AssessmentCategories.
     */
    data: XOR<Ms_AssessmentCategoryUpdateManyMutationInput, Ms_AssessmentCategoryUncheckedUpdateManyInput>
    /**
     * Filter which Ms_AssessmentCategories to update
     */
    where?: Ms_AssessmentCategoryWhereInput
  }

  /**
   * Ms_AssessmentCategory upsert
   */
  export type Ms_AssessmentCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ms_AssessmentCategory
     */
    select?: Ms_AssessmentCategorySelect<ExtArgs> | null
    /**
     * The filter to search for the Ms_AssessmentCategory to update in case it exists.
     */
    where: Ms_AssessmentCategoryWhereUniqueInput
    /**
     * In case the Ms_AssessmentCategory found by the `where` argument doesn't exist, create a new Ms_AssessmentCategory with this data.
     */
    create: XOR<Ms_AssessmentCategoryCreateInput, Ms_AssessmentCategoryUncheckedCreateInput>
    /**
     * In case the Ms_AssessmentCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Ms_AssessmentCategoryUpdateInput, Ms_AssessmentCategoryUncheckedUpdateInput>
  }

  /**
   * Ms_AssessmentCategory delete
   */
  export type Ms_AssessmentCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ms_AssessmentCategory
     */
    select?: Ms_AssessmentCategorySelect<ExtArgs> | null
    /**
     * Filter which Ms_AssessmentCategory to delete.
     */
    where: Ms_AssessmentCategoryWhereUniqueInput
  }

  /**
   * Ms_AssessmentCategory deleteMany
   */
  export type Ms_AssessmentCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ms_AssessmentCategories to delete
     */
    where?: Ms_AssessmentCategoryWhereInput
  }

  /**
   * Ms_AssessmentCategory without action
   */
  export type Ms_AssessmentCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ms_AssessmentCategory
     */
    select?: Ms_AssessmentCategorySelect<ExtArgs> | null
  }


  /**
   * Model Tr_VesselAssessment
   */

  export type AggregateTr_VesselAssessment = {
    _count: Tr_VesselAssessmentCountAggregateOutputType | null
    _avg: Tr_VesselAssessmentAvgAggregateOutputType | null
    _sum: Tr_VesselAssessmentSumAggregateOutputType | null
    _min: Tr_VesselAssessmentMinAggregateOutputType | null
    _max: Tr_VesselAssessmentMaxAggregateOutputType | null
  }

  export type Tr_VesselAssessmentAvgAggregateOutputType = {
    Id: number | null
    GradeTotal: Decimal | null
  }

  export type Tr_VesselAssessmentSumAggregateOutputType = {
    Id: bigint | null
    GradeTotal: Decimal | null
  }

  export type Tr_VesselAssessmentMinAggregateOutputType = {
    Id: bigint | null
    VslType: string | null
    VslName: string | null
    PeriodDate: Date | null
    FinalDate: Date | null
    GradeTotal: Decimal | null
    Description: string | null
    Status: string | null
    LinkShared: string | null
    CreatedBy: string | null
    CreatedDate: Date | null
    ModifiedBy: string | null
    ModifiedDate: Date | null
  }

  export type Tr_VesselAssessmentMaxAggregateOutputType = {
    Id: bigint | null
    VslType: string | null
    VslName: string | null
    PeriodDate: Date | null
    FinalDate: Date | null
    GradeTotal: Decimal | null
    Description: string | null
    Status: string | null
    LinkShared: string | null
    CreatedBy: string | null
    CreatedDate: Date | null
    ModifiedBy: string | null
    ModifiedDate: Date | null
  }

  export type Tr_VesselAssessmentCountAggregateOutputType = {
    Id: number
    VslType: number
    VslName: number
    PeriodDate: number
    FinalDate: number
    GradeTotal: number
    Description: number
    Status: number
    LinkShared: number
    CreatedBy: number
    CreatedDate: number
    ModifiedBy: number
    ModifiedDate: number
    _all: number
  }


  export type Tr_VesselAssessmentAvgAggregateInputType = {
    Id?: true
    GradeTotal?: true
  }

  export type Tr_VesselAssessmentSumAggregateInputType = {
    Id?: true
    GradeTotal?: true
  }

  export type Tr_VesselAssessmentMinAggregateInputType = {
    Id?: true
    VslType?: true
    VslName?: true
    PeriodDate?: true
    FinalDate?: true
    GradeTotal?: true
    Description?: true
    Status?: true
    LinkShared?: true
    CreatedBy?: true
    CreatedDate?: true
    ModifiedBy?: true
    ModifiedDate?: true
  }

  export type Tr_VesselAssessmentMaxAggregateInputType = {
    Id?: true
    VslType?: true
    VslName?: true
    PeriodDate?: true
    FinalDate?: true
    GradeTotal?: true
    Description?: true
    Status?: true
    LinkShared?: true
    CreatedBy?: true
    CreatedDate?: true
    ModifiedBy?: true
    ModifiedDate?: true
  }

  export type Tr_VesselAssessmentCountAggregateInputType = {
    Id?: true
    VslType?: true
    VslName?: true
    PeriodDate?: true
    FinalDate?: true
    GradeTotal?: true
    Description?: true
    Status?: true
    LinkShared?: true
    CreatedBy?: true
    CreatedDate?: true
    ModifiedBy?: true
    ModifiedDate?: true
    _all?: true
  }

  export type Tr_VesselAssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tr_VesselAssessment to aggregate.
     */
    where?: Tr_VesselAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tr_VesselAssessments to fetch.
     */
    orderBy?: Tr_VesselAssessmentOrderByWithRelationInput | Tr_VesselAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tr_VesselAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tr_VesselAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tr_VesselAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tr_VesselAssessments
    **/
    _count?: true | Tr_VesselAssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_VesselAssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_VesselAssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_VesselAssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_VesselAssessmentMaxAggregateInputType
  }

  export type GetTr_VesselAssessmentAggregateType<T extends Tr_VesselAssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_VesselAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_VesselAssessment[P]>
      : GetScalarType<T[P], AggregateTr_VesselAssessment[P]>
  }




  export type Tr_VesselAssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tr_VesselAssessmentWhereInput
    orderBy?: Tr_VesselAssessmentOrderByWithAggregationInput | Tr_VesselAssessmentOrderByWithAggregationInput[]
    by: Tr_VesselAssessmentScalarFieldEnum[] | Tr_VesselAssessmentScalarFieldEnum
    having?: Tr_VesselAssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_VesselAssessmentCountAggregateInputType | true
    _avg?: Tr_VesselAssessmentAvgAggregateInputType
    _sum?: Tr_VesselAssessmentSumAggregateInputType
    _min?: Tr_VesselAssessmentMinAggregateInputType
    _max?: Tr_VesselAssessmentMaxAggregateInputType
  }

  export type Tr_VesselAssessmentGroupByOutputType = {
    Id: bigint
    VslType: string
    VslName: string
    PeriodDate: Date
    FinalDate: Date
    GradeTotal: Decimal
    Description: string | null
    Status: string | null
    LinkShared: string | null
    CreatedBy: string | null
    CreatedDate: Date | null
    ModifiedBy: string | null
    ModifiedDate: Date | null
    _count: Tr_VesselAssessmentCountAggregateOutputType | null
    _avg: Tr_VesselAssessmentAvgAggregateOutputType | null
    _sum: Tr_VesselAssessmentSumAggregateOutputType | null
    _min: Tr_VesselAssessmentMinAggregateOutputType | null
    _max: Tr_VesselAssessmentMaxAggregateOutputType | null
  }

  type GetTr_VesselAssessmentGroupByPayload<T extends Tr_VesselAssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_VesselAssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_VesselAssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_VesselAssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_VesselAssessmentGroupByOutputType[P]>
        }
      >
    >


  export type Tr_VesselAssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VslType?: boolean
    VslName?: boolean
    PeriodDate?: boolean
    FinalDate?: boolean
    GradeTotal?: boolean
    Description?: boolean
    Status?: boolean
    LinkShared?: boolean
    CreatedBy?: boolean
    CreatedDate?: boolean
    ModifiedBy?: boolean
    ModifiedDate?: boolean
    Tr_VesselAssessmentDetail?: boolean | Tr_VesselAssessment$Tr_VesselAssessmentDetailArgs<ExtArgs>
    _count?: boolean | Tr_VesselAssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tr_VesselAssessment"]>


  export type Tr_VesselAssessmentSelectScalar = {
    Id?: boolean
    VslType?: boolean
    VslName?: boolean
    PeriodDate?: boolean
    FinalDate?: boolean
    GradeTotal?: boolean
    Description?: boolean
    Status?: boolean
    LinkShared?: boolean
    CreatedBy?: boolean
    CreatedDate?: boolean
    ModifiedBy?: boolean
    ModifiedDate?: boolean
  }

  export type Tr_VesselAssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tr_VesselAssessmentDetail?: boolean | Tr_VesselAssessment$Tr_VesselAssessmentDetailArgs<ExtArgs>
    _count?: boolean | Tr_VesselAssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Tr_VesselAssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tr_VesselAssessment"
    objects: {
      Tr_VesselAssessmentDetail: Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      VslType: string
      VslName: string
      PeriodDate: Date
      FinalDate: Date
      GradeTotal: Prisma.Decimal
      Description: string | null
      Status: string | null
      LinkShared: string | null
      CreatedBy: string | null
      CreatedDate: Date | null
      ModifiedBy: string | null
      ModifiedDate: Date | null
    }, ExtArgs["result"]["tr_VesselAssessment"]>
    composites: {}
  }

  type Tr_VesselAssessmentGetPayload<S extends boolean | null | undefined | Tr_VesselAssessmentDefaultArgs> = $Result.GetResult<Prisma.$Tr_VesselAssessmentPayload, S>

  type Tr_VesselAssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Tr_VesselAssessmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_VesselAssessmentCountAggregateInputType | true
    }

  export interface Tr_VesselAssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tr_VesselAssessment'], meta: { name: 'Tr_VesselAssessment' } }
    /**
     * Find zero or one Tr_VesselAssessment that matches the filter.
     * @param {Tr_VesselAssessmentFindUniqueArgs} args - Arguments to find a Tr_VesselAssessment
     * @example
     * // Get one Tr_VesselAssessment
     * const tr_VesselAssessment = await prisma.tr_VesselAssessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tr_VesselAssessmentFindUniqueArgs>(args: SelectSubset<T, Tr_VesselAssessmentFindUniqueArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_VesselAssessment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Tr_VesselAssessmentFindUniqueOrThrowArgs} args - Arguments to find a Tr_VesselAssessment
     * @example
     * // Get one Tr_VesselAssessment
     * const tr_VesselAssessment = await prisma.tr_VesselAssessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tr_VesselAssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, Tr_VesselAssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_VesselAssessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentFindFirstArgs} args - Arguments to find a Tr_VesselAssessment
     * @example
     * // Get one Tr_VesselAssessment
     * const tr_VesselAssessment = await prisma.tr_VesselAssessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tr_VesselAssessmentFindFirstArgs>(args?: SelectSubset<T, Tr_VesselAssessmentFindFirstArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_VesselAssessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentFindFirstOrThrowArgs} args - Arguments to find a Tr_VesselAssessment
     * @example
     * // Get one Tr_VesselAssessment
     * const tr_VesselAssessment = await prisma.tr_VesselAssessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tr_VesselAssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, Tr_VesselAssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_VesselAssessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_VesselAssessments
     * const tr_VesselAssessments = await prisma.tr_VesselAssessment.findMany()
     * 
     * // Get first 10 Tr_VesselAssessments
     * const tr_VesselAssessments = await prisma.tr_VesselAssessment.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const tr_VesselAssessmentWithIdOnly = await prisma.tr_VesselAssessment.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Tr_VesselAssessmentFindManyArgs>(args?: SelectSubset<T, Tr_VesselAssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tr_VesselAssessmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_VesselAssessment.
     * @param {Tr_VesselAssessmentCreateArgs} args - Arguments to create a Tr_VesselAssessment.
     * @example
     * // Create one Tr_VesselAssessment
     * const Tr_VesselAssessment = await prisma.tr_VesselAssessment.create({
     *   data: {
     *     // ... data to create a Tr_VesselAssessment
     *   }
     * })
     * 
     */
    create<T extends Tr_VesselAssessmentCreateArgs>(args: SelectSubset<T, Tr_VesselAssessmentCreateArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_VesselAssessments.
     * @param {Tr_VesselAssessmentCreateManyArgs} args - Arguments to create many Tr_VesselAssessments.
     * @example
     * // Create many Tr_VesselAssessments
     * const tr_VesselAssessment = await prisma.tr_VesselAssessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tr_VesselAssessmentCreateManyArgs>(args?: SelectSubset<T, Tr_VesselAssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_VesselAssessment.
     * @param {Tr_VesselAssessmentDeleteArgs} args - Arguments to delete one Tr_VesselAssessment.
     * @example
     * // Delete one Tr_VesselAssessment
     * const Tr_VesselAssessment = await prisma.tr_VesselAssessment.delete({
     *   where: {
     *     // ... filter to delete one Tr_VesselAssessment
     *   }
     * })
     * 
     */
    delete<T extends Tr_VesselAssessmentDeleteArgs>(args: SelectSubset<T, Tr_VesselAssessmentDeleteArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_VesselAssessment.
     * @param {Tr_VesselAssessmentUpdateArgs} args - Arguments to update one Tr_VesselAssessment.
     * @example
     * // Update one Tr_VesselAssessment
     * const tr_VesselAssessment = await prisma.tr_VesselAssessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tr_VesselAssessmentUpdateArgs>(args: SelectSubset<T, Tr_VesselAssessmentUpdateArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_VesselAssessments.
     * @param {Tr_VesselAssessmentDeleteManyArgs} args - Arguments to filter Tr_VesselAssessments to delete.
     * @example
     * // Delete a few Tr_VesselAssessments
     * const { count } = await prisma.tr_VesselAssessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tr_VesselAssessmentDeleteManyArgs>(args?: SelectSubset<T, Tr_VesselAssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_VesselAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_VesselAssessments
     * const tr_VesselAssessment = await prisma.tr_VesselAssessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tr_VesselAssessmentUpdateManyArgs>(args: SelectSubset<T, Tr_VesselAssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_VesselAssessment.
     * @param {Tr_VesselAssessmentUpsertArgs} args - Arguments to update or create a Tr_VesselAssessment.
     * @example
     * // Update or create a Tr_VesselAssessment
     * const tr_VesselAssessment = await prisma.tr_VesselAssessment.upsert({
     *   create: {
     *     // ... data to create a Tr_VesselAssessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_VesselAssessment we want to update
     *   }
     * })
     */
    upsert<T extends Tr_VesselAssessmentUpsertArgs>(args: SelectSubset<T, Tr_VesselAssessmentUpsertArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_VesselAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentCountArgs} args - Arguments to filter Tr_VesselAssessments to count.
     * @example
     * // Count the number of Tr_VesselAssessments
     * const count = await prisma.tr_VesselAssessment.count({
     *   where: {
     *     // ... the filter for the Tr_VesselAssessments we want to count
     *   }
     * })
    **/
    count<T extends Tr_VesselAssessmentCountArgs>(
      args?: Subset<T, Tr_VesselAssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_VesselAssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_VesselAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tr_VesselAssessmentAggregateArgs>(args: Subset<T, Tr_VesselAssessmentAggregateArgs>): Prisma.PrismaPromise<GetTr_VesselAssessmentAggregateType<T>>

    /**
     * Group by Tr_VesselAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tr_VesselAssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tr_VesselAssessmentGroupByArgs['orderBy'] }
        : { orderBy?: Tr_VesselAssessmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tr_VesselAssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_VesselAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tr_VesselAssessment model
   */
  readonly fields: Tr_VesselAssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tr_VesselAssessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tr_VesselAssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tr_VesselAssessmentDetail<T extends Tr_VesselAssessment$Tr_VesselAssessmentDetailArgs<ExtArgs> = {}>(args?: Subset<T, Tr_VesselAssessment$Tr_VesselAssessmentDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tr_VesselAssessment model
   */ 
  interface Tr_VesselAssessmentFieldRefs {
    readonly Id: FieldRef<"Tr_VesselAssessment", 'BigInt'>
    readonly VslType: FieldRef<"Tr_VesselAssessment", 'String'>
    readonly VslName: FieldRef<"Tr_VesselAssessment", 'String'>
    readonly PeriodDate: FieldRef<"Tr_VesselAssessment", 'DateTime'>
    readonly FinalDate: FieldRef<"Tr_VesselAssessment", 'DateTime'>
    readonly GradeTotal: FieldRef<"Tr_VesselAssessment", 'Decimal'>
    readonly Description: FieldRef<"Tr_VesselAssessment", 'String'>
    readonly Status: FieldRef<"Tr_VesselAssessment", 'String'>
    readonly LinkShared: FieldRef<"Tr_VesselAssessment", 'String'>
    readonly CreatedBy: FieldRef<"Tr_VesselAssessment", 'String'>
    readonly CreatedDate: FieldRef<"Tr_VesselAssessment", 'DateTime'>
    readonly ModifiedBy: FieldRef<"Tr_VesselAssessment", 'String'>
    readonly ModifiedDate: FieldRef<"Tr_VesselAssessment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tr_VesselAssessment findUnique
   */
  export type Tr_VesselAssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessment
     */
    select?: Tr_VesselAssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Tr_VesselAssessment to fetch.
     */
    where: Tr_VesselAssessmentWhereUniqueInput
  }

  /**
   * Tr_VesselAssessment findUniqueOrThrow
   */
  export type Tr_VesselAssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessment
     */
    select?: Tr_VesselAssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Tr_VesselAssessment to fetch.
     */
    where: Tr_VesselAssessmentWhereUniqueInput
  }

  /**
   * Tr_VesselAssessment findFirst
   */
  export type Tr_VesselAssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessment
     */
    select?: Tr_VesselAssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Tr_VesselAssessment to fetch.
     */
    where?: Tr_VesselAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tr_VesselAssessments to fetch.
     */
    orderBy?: Tr_VesselAssessmentOrderByWithRelationInput | Tr_VesselAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tr_VesselAssessments.
     */
    cursor?: Tr_VesselAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tr_VesselAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tr_VesselAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tr_VesselAssessments.
     */
    distinct?: Tr_VesselAssessmentScalarFieldEnum | Tr_VesselAssessmentScalarFieldEnum[]
  }

  /**
   * Tr_VesselAssessment findFirstOrThrow
   */
  export type Tr_VesselAssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessment
     */
    select?: Tr_VesselAssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Tr_VesselAssessment to fetch.
     */
    where?: Tr_VesselAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tr_VesselAssessments to fetch.
     */
    orderBy?: Tr_VesselAssessmentOrderByWithRelationInput | Tr_VesselAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tr_VesselAssessments.
     */
    cursor?: Tr_VesselAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tr_VesselAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tr_VesselAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tr_VesselAssessments.
     */
    distinct?: Tr_VesselAssessmentScalarFieldEnum | Tr_VesselAssessmentScalarFieldEnum[]
  }

  /**
   * Tr_VesselAssessment findMany
   */
  export type Tr_VesselAssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessment
     */
    select?: Tr_VesselAssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Tr_VesselAssessments to fetch.
     */
    where?: Tr_VesselAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tr_VesselAssessments to fetch.
     */
    orderBy?: Tr_VesselAssessmentOrderByWithRelationInput | Tr_VesselAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tr_VesselAssessments.
     */
    cursor?: Tr_VesselAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tr_VesselAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tr_VesselAssessments.
     */
    skip?: number
    distinct?: Tr_VesselAssessmentScalarFieldEnum | Tr_VesselAssessmentScalarFieldEnum[]
  }

  /**
   * Tr_VesselAssessment create
   */
  export type Tr_VesselAssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessment
     */
    select?: Tr_VesselAssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tr_VesselAssessment.
     */
    data: XOR<Tr_VesselAssessmentCreateInput, Tr_VesselAssessmentUncheckedCreateInput>
  }

  /**
   * Tr_VesselAssessment createMany
   */
  export type Tr_VesselAssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tr_VesselAssessments.
     */
    data: Tr_VesselAssessmentCreateManyInput | Tr_VesselAssessmentCreateManyInput[]
  }

  /**
   * Tr_VesselAssessment update
   */
  export type Tr_VesselAssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessment
     */
    select?: Tr_VesselAssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tr_VesselAssessment.
     */
    data: XOR<Tr_VesselAssessmentUpdateInput, Tr_VesselAssessmentUncheckedUpdateInput>
    /**
     * Choose, which Tr_VesselAssessment to update.
     */
    where: Tr_VesselAssessmentWhereUniqueInput
  }

  /**
   * Tr_VesselAssessment updateMany
   */
  export type Tr_VesselAssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tr_VesselAssessments.
     */
    data: XOR<Tr_VesselAssessmentUpdateManyMutationInput, Tr_VesselAssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Tr_VesselAssessments to update
     */
    where?: Tr_VesselAssessmentWhereInput
  }

  /**
   * Tr_VesselAssessment upsert
   */
  export type Tr_VesselAssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessment
     */
    select?: Tr_VesselAssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tr_VesselAssessment to update in case it exists.
     */
    where: Tr_VesselAssessmentWhereUniqueInput
    /**
     * In case the Tr_VesselAssessment found by the `where` argument doesn't exist, create a new Tr_VesselAssessment with this data.
     */
    create: XOR<Tr_VesselAssessmentCreateInput, Tr_VesselAssessmentUncheckedCreateInput>
    /**
     * In case the Tr_VesselAssessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tr_VesselAssessmentUpdateInput, Tr_VesselAssessmentUncheckedUpdateInput>
  }

  /**
   * Tr_VesselAssessment delete
   */
  export type Tr_VesselAssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessment
     */
    select?: Tr_VesselAssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentInclude<ExtArgs> | null
    /**
     * Filter which Tr_VesselAssessment to delete.
     */
    where: Tr_VesselAssessmentWhereUniqueInput
  }

  /**
   * Tr_VesselAssessment deleteMany
   */
  export type Tr_VesselAssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tr_VesselAssessments to delete
     */
    where?: Tr_VesselAssessmentWhereInput
  }

  /**
   * Tr_VesselAssessment.Tr_VesselAssessmentDetail
   */
  export type Tr_VesselAssessment$Tr_VesselAssessmentDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentDetail
     */
    select?: Tr_VesselAssessmentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentDetailInclude<ExtArgs> | null
    where?: Tr_VesselAssessmentDetailWhereInput
    orderBy?: Tr_VesselAssessmentDetailOrderByWithRelationInput | Tr_VesselAssessmentDetailOrderByWithRelationInput[]
    cursor?: Tr_VesselAssessmentDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tr_VesselAssessmentDetailScalarFieldEnum | Tr_VesselAssessmentDetailScalarFieldEnum[]
  }

  /**
   * Tr_VesselAssessment without action
   */
  export type Tr_VesselAssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessment
     */
    select?: Tr_VesselAssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentInclude<ExtArgs> | null
  }


  /**
   * Model Tr_VesselAssessmentDetail
   */

  export type AggregateTr_VesselAssessmentDetail = {
    _count: Tr_VesselAssessmentDetailCountAggregateOutputType | null
    _avg: Tr_VesselAssessmentDetailAvgAggregateOutputType | null
    _sum: Tr_VesselAssessmentDetailSumAggregateOutputType | null
    _min: Tr_VesselAssessmentDetailMinAggregateOutputType | null
    _max: Tr_VesselAssessmentDetailMaxAggregateOutputType | null
  }

  export type Tr_VesselAssessmentDetailAvgAggregateOutputType = {
    Id: number | null
    VesselAssessmentId: number | null
    Grade: Decimal | null
  }

  export type Tr_VesselAssessmentDetailSumAggregateOutputType = {
    Id: bigint | null
    VesselAssessmentId: bigint | null
    Grade: Decimal | null
  }

  export type Tr_VesselAssessmentDetailMinAggregateOutputType = {
    Id: bigint | null
    VesselAssessmentId: bigint | null
    Item: string | null
    Interval: string | null
    ShipSection: string | null
    Grade: Decimal | null
    Description: string | null
    FileName: string | null
    SmallFileLink: string | null
    NormalFileLink: string | null
    IsDeleted: boolean | null
    UploadedBy: string | null
    UploadedDate: Date | null
    AssessedBy: string | null
    AssessedDate: Date | null
    CreatedBy: string | null
    CreatedDate: Date | null
    ModifiedBy: string | null
    ModifiedDate: Date | null
  }

  export type Tr_VesselAssessmentDetailMaxAggregateOutputType = {
    Id: bigint | null
    VesselAssessmentId: bigint | null
    Item: string | null
    Interval: string | null
    ShipSection: string | null
    Grade: Decimal | null
    Description: string | null
    FileName: string | null
    SmallFileLink: string | null
    NormalFileLink: string | null
    IsDeleted: boolean | null
    UploadedBy: string | null
    UploadedDate: Date | null
    AssessedBy: string | null
    AssessedDate: Date | null
    CreatedBy: string | null
    CreatedDate: Date | null
    ModifiedBy: string | null
    ModifiedDate: Date | null
  }

  export type Tr_VesselAssessmentDetailCountAggregateOutputType = {
    Id: number
    VesselAssessmentId: number
    Item: number
    Interval: number
    ShipSection: number
    Grade: number
    Description: number
    FileName: number
    SmallFileLink: number
    NormalFileLink: number
    IsDeleted: number
    UploadedBy: number
    UploadedDate: number
    AssessedBy: number
    AssessedDate: number
    CreatedBy: number
    CreatedDate: number
    ModifiedBy: number
    ModifiedDate: number
    _all: number
  }


  export type Tr_VesselAssessmentDetailAvgAggregateInputType = {
    Id?: true
    VesselAssessmentId?: true
    Grade?: true
  }

  export type Tr_VesselAssessmentDetailSumAggregateInputType = {
    Id?: true
    VesselAssessmentId?: true
    Grade?: true
  }

  export type Tr_VesselAssessmentDetailMinAggregateInputType = {
    Id?: true
    VesselAssessmentId?: true
    Item?: true
    Interval?: true
    ShipSection?: true
    Grade?: true
    Description?: true
    FileName?: true
    SmallFileLink?: true
    NormalFileLink?: true
    IsDeleted?: true
    UploadedBy?: true
    UploadedDate?: true
    AssessedBy?: true
    AssessedDate?: true
    CreatedBy?: true
    CreatedDate?: true
    ModifiedBy?: true
    ModifiedDate?: true
  }

  export type Tr_VesselAssessmentDetailMaxAggregateInputType = {
    Id?: true
    VesselAssessmentId?: true
    Item?: true
    Interval?: true
    ShipSection?: true
    Grade?: true
    Description?: true
    FileName?: true
    SmallFileLink?: true
    NormalFileLink?: true
    IsDeleted?: true
    UploadedBy?: true
    UploadedDate?: true
    AssessedBy?: true
    AssessedDate?: true
    CreatedBy?: true
    CreatedDate?: true
    ModifiedBy?: true
    ModifiedDate?: true
  }

  export type Tr_VesselAssessmentDetailCountAggregateInputType = {
    Id?: true
    VesselAssessmentId?: true
    Item?: true
    Interval?: true
    ShipSection?: true
    Grade?: true
    Description?: true
    FileName?: true
    SmallFileLink?: true
    NormalFileLink?: true
    IsDeleted?: true
    UploadedBy?: true
    UploadedDate?: true
    AssessedBy?: true
    AssessedDate?: true
    CreatedBy?: true
    CreatedDate?: true
    ModifiedBy?: true
    ModifiedDate?: true
    _all?: true
  }

  export type Tr_VesselAssessmentDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tr_VesselAssessmentDetail to aggregate.
     */
    where?: Tr_VesselAssessmentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tr_VesselAssessmentDetails to fetch.
     */
    orderBy?: Tr_VesselAssessmentDetailOrderByWithRelationInput | Tr_VesselAssessmentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tr_VesselAssessmentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tr_VesselAssessmentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tr_VesselAssessmentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tr_VesselAssessmentDetails
    **/
    _count?: true | Tr_VesselAssessmentDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_VesselAssessmentDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_VesselAssessmentDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_VesselAssessmentDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_VesselAssessmentDetailMaxAggregateInputType
  }

  export type GetTr_VesselAssessmentDetailAggregateType<T extends Tr_VesselAssessmentDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_VesselAssessmentDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_VesselAssessmentDetail[P]>
      : GetScalarType<T[P], AggregateTr_VesselAssessmentDetail[P]>
  }




  export type Tr_VesselAssessmentDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tr_VesselAssessmentDetailWhereInput
    orderBy?: Tr_VesselAssessmentDetailOrderByWithAggregationInput | Tr_VesselAssessmentDetailOrderByWithAggregationInput[]
    by: Tr_VesselAssessmentDetailScalarFieldEnum[] | Tr_VesselAssessmentDetailScalarFieldEnum
    having?: Tr_VesselAssessmentDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_VesselAssessmentDetailCountAggregateInputType | true
    _avg?: Tr_VesselAssessmentDetailAvgAggregateInputType
    _sum?: Tr_VesselAssessmentDetailSumAggregateInputType
    _min?: Tr_VesselAssessmentDetailMinAggregateInputType
    _max?: Tr_VesselAssessmentDetailMaxAggregateInputType
  }

  export type Tr_VesselAssessmentDetailGroupByOutputType = {
    Id: bigint
    VesselAssessmentId: bigint
    Item: string
    Interval: string | null
    ShipSection: string | null
    Grade: Decimal
    Description: string | null
    FileName: string | null
    SmallFileLink: string | null
    NormalFileLink: string | null
    IsDeleted: boolean
    UploadedBy: string | null
    UploadedDate: Date | null
    AssessedBy: string | null
    AssessedDate: Date | null
    CreatedBy: string | null
    CreatedDate: Date | null
    ModifiedBy: string | null
    ModifiedDate: Date | null
    _count: Tr_VesselAssessmentDetailCountAggregateOutputType | null
    _avg: Tr_VesselAssessmentDetailAvgAggregateOutputType | null
    _sum: Tr_VesselAssessmentDetailSumAggregateOutputType | null
    _min: Tr_VesselAssessmentDetailMinAggregateOutputType | null
    _max: Tr_VesselAssessmentDetailMaxAggregateOutputType | null
  }

  type GetTr_VesselAssessmentDetailGroupByPayload<T extends Tr_VesselAssessmentDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_VesselAssessmentDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_VesselAssessmentDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_VesselAssessmentDetailGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_VesselAssessmentDetailGroupByOutputType[P]>
        }
      >
    >


  export type Tr_VesselAssessmentDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VesselAssessmentId?: boolean
    Item?: boolean
    Interval?: boolean
    ShipSection?: boolean
    Grade?: boolean
    Description?: boolean
    FileName?: boolean
    SmallFileLink?: boolean
    NormalFileLink?: boolean
    IsDeleted?: boolean
    UploadedBy?: boolean
    UploadedDate?: boolean
    AssessedBy?: boolean
    AssessedDate?: boolean
    CreatedBy?: boolean
    CreatedDate?: boolean
    ModifiedBy?: boolean
    ModifiedDate?: boolean
    Tr_VesselAssessment?: boolean | Tr_VesselAssessmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tr_VesselAssessmentDetail"]>


  export type Tr_VesselAssessmentDetailSelectScalar = {
    Id?: boolean
    VesselAssessmentId?: boolean
    Item?: boolean
    Interval?: boolean
    ShipSection?: boolean
    Grade?: boolean
    Description?: boolean
    FileName?: boolean
    SmallFileLink?: boolean
    NormalFileLink?: boolean
    IsDeleted?: boolean
    UploadedBy?: boolean
    UploadedDate?: boolean
    AssessedBy?: boolean
    AssessedDate?: boolean
    CreatedBy?: boolean
    CreatedDate?: boolean
    ModifiedBy?: boolean
    ModifiedDate?: boolean
  }

  export type Tr_VesselAssessmentDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tr_VesselAssessment?: boolean | Tr_VesselAssessmentDefaultArgs<ExtArgs>
  }

  export type $Tr_VesselAssessmentDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tr_VesselAssessmentDetail"
    objects: {
      Tr_VesselAssessment: Prisma.$Tr_VesselAssessmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      VesselAssessmentId: bigint
      Item: string
      Interval: string | null
      ShipSection: string | null
      Grade: Prisma.Decimal
      Description: string | null
      FileName: string | null
      SmallFileLink: string | null
      NormalFileLink: string | null
      IsDeleted: boolean
      UploadedBy: string | null
      UploadedDate: Date | null
      AssessedBy: string | null
      AssessedDate: Date | null
      CreatedBy: string | null
      CreatedDate: Date | null
      ModifiedBy: string | null
      ModifiedDate: Date | null
    }, ExtArgs["result"]["tr_VesselAssessmentDetail"]>
    composites: {}
  }

  type Tr_VesselAssessmentDetailGetPayload<S extends boolean | null | undefined | Tr_VesselAssessmentDetailDefaultArgs> = $Result.GetResult<Prisma.$Tr_VesselAssessmentDetailPayload, S>

  type Tr_VesselAssessmentDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Tr_VesselAssessmentDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tr_VesselAssessmentDetailCountAggregateInputType | true
    }

  export interface Tr_VesselAssessmentDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tr_VesselAssessmentDetail'], meta: { name: 'Tr_VesselAssessmentDetail' } }
    /**
     * Find zero or one Tr_VesselAssessmentDetail that matches the filter.
     * @param {Tr_VesselAssessmentDetailFindUniqueArgs} args - Arguments to find a Tr_VesselAssessmentDetail
     * @example
     * // Get one Tr_VesselAssessmentDetail
     * const tr_VesselAssessmentDetail = await prisma.tr_VesselAssessmentDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tr_VesselAssessmentDetailFindUniqueArgs>(args: SelectSubset<T, Tr_VesselAssessmentDetailFindUniqueArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentDetailClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tr_VesselAssessmentDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Tr_VesselAssessmentDetailFindUniqueOrThrowArgs} args - Arguments to find a Tr_VesselAssessmentDetail
     * @example
     * // Get one Tr_VesselAssessmentDetail
     * const tr_VesselAssessmentDetail = await prisma.tr_VesselAssessmentDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tr_VesselAssessmentDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, Tr_VesselAssessmentDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentDetailClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tr_VesselAssessmentDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentDetailFindFirstArgs} args - Arguments to find a Tr_VesselAssessmentDetail
     * @example
     * // Get one Tr_VesselAssessmentDetail
     * const tr_VesselAssessmentDetail = await prisma.tr_VesselAssessmentDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tr_VesselAssessmentDetailFindFirstArgs>(args?: SelectSubset<T, Tr_VesselAssessmentDetailFindFirstArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentDetailClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tr_VesselAssessmentDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentDetailFindFirstOrThrowArgs} args - Arguments to find a Tr_VesselAssessmentDetail
     * @example
     * // Get one Tr_VesselAssessmentDetail
     * const tr_VesselAssessmentDetail = await prisma.tr_VesselAssessmentDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tr_VesselAssessmentDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, Tr_VesselAssessmentDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentDetailClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tr_VesselAssessmentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_VesselAssessmentDetails
     * const tr_VesselAssessmentDetails = await prisma.tr_VesselAssessmentDetail.findMany()
     * 
     * // Get first 10 Tr_VesselAssessmentDetails
     * const tr_VesselAssessmentDetails = await prisma.tr_VesselAssessmentDetail.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const tr_VesselAssessmentDetailWithIdOnly = await prisma.tr_VesselAssessmentDetail.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Tr_VesselAssessmentDetailFindManyArgs>(args?: SelectSubset<T, Tr_VesselAssessmentDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tr_VesselAssessmentDetail.
     * @param {Tr_VesselAssessmentDetailCreateArgs} args - Arguments to create a Tr_VesselAssessmentDetail.
     * @example
     * // Create one Tr_VesselAssessmentDetail
     * const Tr_VesselAssessmentDetail = await prisma.tr_VesselAssessmentDetail.create({
     *   data: {
     *     // ... data to create a Tr_VesselAssessmentDetail
     *   }
     * })
     * 
     */
    create<T extends Tr_VesselAssessmentDetailCreateArgs>(args: SelectSubset<T, Tr_VesselAssessmentDetailCreateArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentDetailClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tr_VesselAssessmentDetails.
     * @param {Tr_VesselAssessmentDetailCreateManyArgs} args - Arguments to create many Tr_VesselAssessmentDetails.
     * @example
     * // Create many Tr_VesselAssessmentDetails
     * const tr_VesselAssessmentDetail = await prisma.tr_VesselAssessmentDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tr_VesselAssessmentDetailCreateManyArgs>(args?: SelectSubset<T, Tr_VesselAssessmentDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_VesselAssessmentDetail.
     * @param {Tr_VesselAssessmentDetailDeleteArgs} args - Arguments to delete one Tr_VesselAssessmentDetail.
     * @example
     * // Delete one Tr_VesselAssessmentDetail
     * const Tr_VesselAssessmentDetail = await prisma.tr_VesselAssessmentDetail.delete({
     *   where: {
     *     // ... filter to delete one Tr_VesselAssessmentDetail
     *   }
     * })
     * 
     */
    delete<T extends Tr_VesselAssessmentDetailDeleteArgs>(args: SelectSubset<T, Tr_VesselAssessmentDetailDeleteArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentDetailClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tr_VesselAssessmentDetail.
     * @param {Tr_VesselAssessmentDetailUpdateArgs} args - Arguments to update one Tr_VesselAssessmentDetail.
     * @example
     * // Update one Tr_VesselAssessmentDetail
     * const tr_VesselAssessmentDetail = await prisma.tr_VesselAssessmentDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tr_VesselAssessmentDetailUpdateArgs>(args: SelectSubset<T, Tr_VesselAssessmentDetailUpdateArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentDetailClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tr_VesselAssessmentDetails.
     * @param {Tr_VesselAssessmentDetailDeleteManyArgs} args - Arguments to filter Tr_VesselAssessmentDetails to delete.
     * @example
     * // Delete a few Tr_VesselAssessmentDetails
     * const { count } = await prisma.tr_VesselAssessmentDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tr_VesselAssessmentDetailDeleteManyArgs>(args?: SelectSubset<T, Tr_VesselAssessmentDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_VesselAssessmentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_VesselAssessmentDetails
     * const tr_VesselAssessmentDetail = await prisma.tr_VesselAssessmentDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tr_VesselAssessmentDetailUpdateManyArgs>(args: SelectSubset<T, Tr_VesselAssessmentDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_VesselAssessmentDetail.
     * @param {Tr_VesselAssessmentDetailUpsertArgs} args - Arguments to update or create a Tr_VesselAssessmentDetail.
     * @example
     * // Update or create a Tr_VesselAssessmentDetail
     * const tr_VesselAssessmentDetail = await prisma.tr_VesselAssessmentDetail.upsert({
     *   create: {
     *     // ... data to create a Tr_VesselAssessmentDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_VesselAssessmentDetail we want to update
     *   }
     * })
     */
    upsert<T extends Tr_VesselAssessmentDetailUpsertArgs>(args: SelectSubset<T, Tr_VesselAssessmentDetailUpsertArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentDetailClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentDetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tr_VesselAssessmentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentDetailCountArgs} args - Arguments to filter Tr_VesselAssessmentDetails to count.
     * @example
     * // Count the number of Tr_VesselAssessmentDetails
     * const count = await prisma.tr_VesselAssessmentDetail.count({
     *   where: {
     *     // ... the filter for the Tr_VesselAssessmentDetails we want to count
     *   }
     * })
    **/
    count<T extends Tr_VesselAssessmentDetailCountArgs>(
      args?: Subset<T, Tr_VesselAssessmentDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_VesselAssessmentDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_VesselAssessmentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tr_VesselAssessmentDetailAggregateArgs>(args: Subset<T, Tr_VesselAssessmentDetailAggregateArgs>): Prisma.PrismaPromise<GetTr_VesselAssessmentDetailAggregateType<T>>

    /**
     * Group by Tr_VesselAssessmentDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_VesselAssessmentDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tr_VesselAssessmentDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tr_VesselAssessmentDetailGroupByArgs['orderBy'] }
        : { orderBy?: Tr_VesselAssessmentDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tr_VesselAssessmentDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_VesselAssessmentDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tr_VesselAssessmentDetail model
   */
  readonly fields: Tr_VesselAssessmentDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tr_VesselAssessmentDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tr_VesselAssessmentDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tr_VesselAssessment<T extends Tr_VesselAssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Tr_VesselAssessmentDefaultArgs<ExtArgs>>): Prisma__Tr_VesselAssessmentClient<$Result.GetResult<Prisma.$Tr_VesselAssessmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tr_VesselAssessmentDetail model
   */ 
  interface Tr_VesselAssessmentDetailFieldRefs {
    readonly Id: FieldRef<"Tr_VesselAssessmentDetail", 'BigInt'>
    readonly VesselAssessmentId: FieldRef<"Tr_VesselAssessmentDetail", 'BigInt'>
    readonly Item: FieldRef<"Tr_VesselAssessmentDetail", 'String'>
    readonly Interval: FieldRef<"Tr_VesselAssessmentDetail", 'String'>
    readonly ShipSection: FieldRef<"Tr_VesselAssessmentDetail", 'String'>
    readonly Grade: FieldRef<"Tr_VesselAssessmentDetail", 'Decimal'>
    readonly Description: FieldRef<"Tr_VesselAssessmentDetail", 'String'>
    readonly FileName: FieldRef<"Tr_VesselAssessmentDetail", 'String'>
    readonly SmallFileLink: FieldRef<"Tr_VesselAssessmentDetail", 'String'>
    readonly NormalFileLink: FieldRef<"Tr_VesselAssessmentDetail", 'String'>
    readonly IsDeleted: FieldRef<"Tr_VesselAssessmentDetail", 'Boolean'>
    readonly UploadedBy: FieldRef<"Tr_VesselAssessmentDetail", 'String'>
    readonly UploadedDate: FieldRef<"Tr_VesselAssessmentDetail", 'DateTime'>
    readonly AssessedBy: FieldRef<"Tr_VesselAssessmentDetail", 'String'>
    readonly AssessedDate: FieldRef<"Tr_VesselAssessmentDetail", 'DateTime'>
    readonly CreatedBy: FieldRef<"Tr_VesselAssessmentDetail", 'String'>
    readonly CreatedDate: FieldRef<"Tr_VesselAssessmentDetail", 'DateTime'>
    readonly ModifiedBy: FieldRef<"Tr_VesselAssessmentDetail", 'String'>
    readonly ModifiedDate: FieldRef<"Tr_VesselAssessmentDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tr_VesselAssessmentDetail findUnique
   */
  export type Tr_VesselAssessmentDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentDetail
     */
    select?: Tr_VesselAssessmentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentDetailInclude<ExtArgs> | null
    /**
     * Filter, which Tr_VesselAssessmentDetail to fetch.
     */
    where: Tr_VesselAssessmentDetailWhereUniqueInput
  }

  /**
   * Tr_VesselAssessmentDetail findUniqueOrThrow
   */
  export type Tr_VesselAssessmentDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentDetail
     */
    select?: Tr_VesselAssessmentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentDetailInclude<ExtArgs> | null
    /**
     * Filter, which Tr_VesselAssessmentDetail to fetch.
     */
    where: Tr_VesselAssessmentDetailWhereUniqueInput
  }

  /**
   * Tr_VesselAssessmentDetail findFirst
   */
  export type Tr_VesselAssessmentDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentDetail
     */
    select?: Tr_VesselAssessmentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentDetailInclude<ExtArgs> | null
    /**
     * Filter, which Tr_VesselAssessmentDetail to fetch.
     */
    where?: Tr_VesselAssessmentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tr_VesselAssessmentDetails to fetch.
     */
    orderBy?: Tr_VesselAssessmentDetailOrderByWithRelationInput | Tr_VesselAssessmentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tr_VesselAssessmentDetails.
     */
    cursor?: Tr_VesselAssessmentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tr_VesselAssessmentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tr_VesselAssessmentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tr_VesselAssessmentDetails.
     */
    distinct?: Tr_VesselAssessmentDetailScalarFieldEnum | Tr_VesselAssessmentDetailScalarFieldEnum[]
  }

  /**
   * Tr_VesselAssessmentDetail findFirstOrThrow
   */
  export type Tr_VesselAssessmentDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentDetail
     */
    select?: Tr_VesselAssessmentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentDetailInclude<ExtArgs> | null
    /**
     * Filter, which Tr_VesselAssessmentDetail to fetch.
     */
    where?: Tr_VesselAssessmentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tr_VesselAssessmentDetails to fetch.
     */
    orderBy?: Tr_VesselAssessmentDetailOrderByWithRelationInput | Tr_VesselAssessmentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tr_VesselAssessmentDetails.
     */
    cursor?: Tr_VesselAssessmentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tr_VesselAssessmentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tr_VesselAssessmentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tr_VesselAssessmentDetails.
     */
    distinct?: Tr_VesselAssessmentDetailScalarFieldEnum | Tr_VesselAssessmentDetailScalarFieldEnum[]
  }

  /**
   * Tr_VesselAssessmentDetail findMany
   */
  export type Tr_VesselAssessmentDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentDetail
     */
    select?: Tr_VesselAssessmentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentDetailInclude<ExtArgs> | null
    /**
     * Filter, which Tr_VesselAssessmentDetails to fetch.
     */
    where?: Tr_VesselAssessmentDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tr_VesselAssessmentDetails to fetch.
     */
    orderBy?: Tr_VesselAssessmentDetailOrderByWithRelationInput | Tr_VesselAssessmentDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tr_VesselAssessmentDetails.
     */
    cursor?: Tr_VesselAssessmentDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tr_VesselAssessmentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tr_VesselAssessmentDetails.
     */
    skip?: number
    distinct?: Tr_VesselAssessmentDetailScalarFieldEnum | Tr_VesselAssessmentDetailScalarFieldEnum[]
  }

  /**
   * Tr_VesselAssessmentDetail create
   */
  export type Tr_VesselAssessmentDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentDetail
     */
    select?: Tr_VesselAssessmentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a Tr_VesselAssessmentDetail.
     */
    data: XOR<Tr_VesselAssessmentDetailCreateInput, Tr_VesselAssessmentDetailUncheckedCreateInput>
  }

  /**
   * Tr_VesselAssessmentDetail createMany
   */
  export type Tr_VesselAssessmentDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tr_VesselAssessmentDetails.
     */
    data: Tr_VesselAssessmentDetailCreateManyInput | Tr_VesselAssessmentDetailCreateManyInput[]
  }

  /**
   * Tr_VesselAssessmentDetail update
   */
  export type Tr_VesselAssessmentDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentDetail
     */
    select?: Tr_VesselAssessmentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a Tr_VesselAssessmentDetail.
     */
    data: XOR<Tr_VesselAssessmentDetailUpdateInput, Tr_VesselAssessmentDetailUncheckedUpdateInput>
    /**
     * Choose, which Tr_VesselAssessmentDetail to update.
     */
    where: Tr_VesselAssessmentDetailWhereUniqueInput
  }

  /**
   * Tr_VesselAssessmentDetail updateMany
   */
  export type Tr_VesselAssessmentDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tr_VesselAssessmentDetails.
     */
    data: XOR<Tr_VesselAssessmentDetailUpdateManyMutationInput, Tr_VesselAssessmentDetailUncheckedUpdateManyInput>
    /**
     * Filter which Tr_VesselAssessmentDetails to update
     */
    where?: Tr_VesselAssessmentDetailWhereInput
  }

  /**
   * Tr_VesselAssessmentDetail upsert
   */
  export type Tr_VesselAssessmentDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentDetail
     */
    select?: Tr_VesselAssessmentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the Tr_VesselAssessmentDetail to update in case it exists.
     */
    where: Tr_VesselAssessmentDetailWhereUniqueInput
    /**
     * In case the Tr_VesselAssessmentDetail found by the `where` argument doesn't exist, create a new Tr_VesselAssessmentDetail with this data.
     */
    create: XOR<Tr_VesselAssessmentDetailCreateInput, Tr_VesselAssessmentDetailUncheckedCreateInput>
    /**
     * In case the Tr_VesselAssessmentDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tr_VesselAssessmentDetailUpdateInput, Tr_VesselAssessmentDetailUncheckedUpdateInput>
  }

  /**
   * Tr_VesselAssessmentDetail delete
   */
  export type Tr_VesselAssessmentDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentDetail
     */
    select?: Tr_VesselAssessmentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentDetailInclude<ExtArgs> | null
    /**
     * Filter which Tr_VesselAssessmentDetail to delete.
     */
    where: Tr_VesselAssessmentDetailWhereUniqueInput
  }

  /**
   * Tr_VesselAssessmentDetail deleteMany
   */
  export type Tr_VesselAssessmentDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tr_VesselAssessmentDetails to delete
     */
    where?: Tr_VesselAssessmentDetailWhereInput
  }

  /**
   * Tr_VesselAssessmentDetail without action
   */
  export type Tr_VesselAssessmentDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tr_VesselAssessmentDetail
     */
    select?: Tr_VesselAssessmentDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tr_VesselAssessmentDetailInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Ms_AssessmentCategoryScalarFieldEnum: {
    Id: 'Id',
    VslType: 'VslType',
    Item: 'Item',
    Interval: 'Interval',
    ShipSection: 'ShipSection',
    CreatedBy: 'CreatedBy',
    CreatedDate: 'CreatedDate',
    ModifiedBy: 'ModifiedBy',
    ModifiedDate: 'ModifiedDate'
  };

  export type Ms_AssessmentCategoryScalarFieldEnum = (typeof Ms_AssessmentCategoryScalarFieldEnum)[keyof typeof Ms_AssessmentCategoryScalarFieldEnum]


  export const Tr_VesselAssessmentScalarFieldEnum: {
    Id: 'Id',
    VslType: 'VslType',
    VslName: 'VslName',
    PeriodDate: 'PeriodDate',
    FinalDate: 'FinalDate',
    GradeTotal: 'GradeTotal',
    Description: 'Description',
    Status: 'Status',
    LinkShared: 'LinkShared',
    CreatedBy: 'CreatedBy',
    CreatedDate: 'CreatedDate',
    ModifiedBy: 'ModifiedBy',
    ModifiedDate: 'ModifiedDate'
  };

  export type Tr_VesselAssessmentScalarFieldEnum = (typeof Tr_VesselAssessmentScalarFieldEnum)[keyof typeof Tr_VesselAssessmentScalarFieldEnum]


  export const Tr_VesselAssessmentDetailScalarFieldEnum: {
    Id: 'Id',
    VesselAssessmentId: 'VesselAssessmentId',
    Item: 'Item',
    Interval: 'Interval',
    ShipSection: 'ShipSection',
    Grade: 'Grade',
    Description: 'Description',
    FileName: 'FileName',
    SmallFileLink: 'SmallFileLink',
    NormalFileLink: 'NormalFileLink',
    IsDeleted: 'IsDeleted',
    UploadedBy: 'UploadedBy',
    UploadedDate: 'UploadedDate',
    AssessedBy: 'AssessedBy',
    AssessedDate: 'AssessedDate',
    CreatedBy: 'CreatedBy',
    CreatedDate: 'CreatedDate',
    ModifiedBy: 'ModifiedBy',
    ModifiedDate: 'ModifiedDate'
  };

  export type Tr_VesselAssessmentDetailScalarFieldEnum = (typeof Tr_VesselAssessmentDetailScalarFieldEnum)[keyof typeof Tr_VesselAssessmentDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type Ms_AssessmentCategoryWhereInput = {
    AND?: Ms_AssessmentCategoryWhereInput | Ms_AssessmentCategoryWhereInput[]
    OR?: Ms_AssessmentCategoryWhereInput[]
    NOT?: Ms_AssessmentCategoryWhereInput | Ms_AssessmentCategoryWhereInput[]
    Id?: BigIntFilter<"Ms_AssessmentCategory"> | bigint | number
    VslType?: StringFilter<"Ms_AssessmentCategory"> | string
    Item?: StringFilter<"Ms_AssessmentCategory"> | string
    Interval?: StringNullableFilter<"Ms_AssessmentCategory"> | string | null
    ShipSection?: StringNullableFilter<"Ms_AssessmentCategory"> | string | null
    CreatedBy?: StringNullableFilter<"Ms_AssessmentCategory"> | string | null
    CreatedDate?: DateTimeNullableFilter<"Ms_AssessmentCategory"> | Date | string | null
    ModifiedBy?: StringNullableFilter<"Ms_AssessmentCategory"> | string | null
    ModifiedDate?: DateTimeNullableFilter<"Ms_AssessmentCategory"> | Date | string | null
  }

  export type Ms_AssessmentCategoryOrderByWithRelationInput = {
    Id?: SortOrder
    VslType?: SortOrder
    Item?: SortOrder
    Interval?: SortOrderInput | SortOrder
    ShipSection?: SortOrderInput | SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    CreatedDate?: SortOrderInput | SortOrder
    ModifiedBy?: SortOrderInput | SortOrder
    ModifiedDate?: SortOrderInput | SortOrder
  }

  export type Ms_AssessmentCategoryWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: Ms_AssessmentCategoryWhereInput | Ms_AssessmentCategoryWhereInput[]
    OR?: Ms_AssessmentCategoryWhereInput[]
    NOT?: Ms_AssessmentCategoryWhereInput | Ms_AssessmentCategoryWhereInput[]
    VslType?: StringFilter<"Ms_AssessmentCategory"> | string
    Item?: StringFilter<"Ms_AssessmentCategory"> | string
    Interval?: StringNullableFilter<"Ms_AssessmentCategory"> | string | null
    ShipSection?: StringNullableFilter<"Ms_AssessmentCategory"> | string | null
    CreatedBy?: StringNullableFilter<"Ms_AssessmentCategory"> | string | null
    CreatedDate?: DateTimeNullableFilter<"Ms_AssessmentCategory"> | Date | string | null
    ModifiedBy?: StringNullableFilter<"Ms_AssessmentCategory"> | string | null
    ModifiedDate?: DateTimeNullableFilter<"Ms_AssessmentCategory"> | Date | string | null
  }, "Id">

  export type Ms_AssessmentCategoryOrderByWithAggregationInput = {
    Id?: SortOrder
    VslType?: SortOrder
    Item?: SortOrder
    Interval?: SortOrderInput | SortOrder
    ShipSection?: SortOrderInput | SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    CreatedDate?: SortOrderInput | SortOrder
    ModifiedBy?: SortOrderInput | SortOrder
    ModifiedDate?: SortOrderInput | SortOrder
    _count?: Ms_AssessmentCategoryCountOrderByAggregateInput
    _avg?: Ms_AssessmentCategoryAvgOrderByAggregateInput
    _max?: Ms_AssessmentCategoryMaxOrderByAggregateInput
    _min?: Ms_AssessmentCategoryMinOrderByAggregateInput
    _sum?: Ms_AssessmentCategorySumOrderByAggregateInput
  }

  export type Ms_AssessmentCategoryScalarWhereWithAggregatesInput = {
    AND?: Ms_AssessmentCategoryScalarWhereWithAggregatesInput | Ms_AssessmentCategoryScalarWhereWithAggregatesInput[]
    OR?: Ms_AssessmentCategoryScalarWhereWithAggregatesInput[]
    NOT?: Ms_AssessmentCategoryScalarWhereWithAggregatesInput | Ms_AssessmentCategoryScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"Ms_AssessmentCategory"> | bigint | number
    VslType?: StringWithAggregatesFilter<"Ms_AssessmentCategory"> | string
    Item?: StringWithAggregatesFilter<"Ms_AssessmentCategory"> | string
    Interval?: StringNullableWithAggregatesFilter<"Ms_AssessmentCategory"> | string | null
    ShipSection?: StringNullableWithAggregatesFilter<"Ms_AssessmentCategory"> | string | null
    CreatedBy?: StringNullableWithAggregatesFilter<"Ms_AssessmentCategory"> | string | null
    CreatedDate?: DateTimeNullableWithAggregatesFilter<"Ms_AssessmentCategory"> | Date | string | null
    ModifiedBy?: StringNullableWithAggregatesFilter<"Ms_AssessmentCategory"> | string | null
    ModifiedDate?: DateTimeNullableWithAggregatesFilter<"Ms_AssessmentCategory"> | Date | string | null
  }

  export type Tr_VesselAssessmentWhereInput = {
    AND?: Tr_VesselAssessmentWhereInput | Tr_VesselAssessmentWhereInput[]
    OR?: Tr_VesselAssessmentWhereInput[]
    NOT?: Tr_VesselAssessmentWhereInput | Tr_VesselAssessmentWhereInput[]
    Id?: BigIntFilter<"Tr_VesselAssessment"> | bigint | number
    VslType?: StringFilter<"Tr_VesselAssessment"> | string
    VslName?: StringFilter<"Tr_VesselAssessment"> | string
    PeriodDate?: DateTimeFilter<"Tr_VesselAssessment"> | Date | string
    FinalDate?: DateTimeFilter<"Tr_VesselAssessment"> | Date | string
    GradeTotal?: DecimalFilter<"Tr_VesselAssessment"> | Decimal | DecimalJsLike | number | string
    Description?: StringNullableFilter<"Tr_VesselAssessment"> | string | null
    Status?: StringNullableFilter<"Tr_VesselAssessment"> | string | null
    LinkShared?: StringNullableFilter<"Tr_VesselAssessment"> | string | null
    CreatedBy?: StringNullableFilter<"Tr_VesselAssessment"> | string | null
    CreatedDate?: DateTimeNullableFilter<"Tr_VesselAssessment"> | Date | string | null
    ModifiedBy?: StringNullableFilter<"Tr_VesselAssessment"> | string | null
    ModifiedDate?: DateTimeNullableFilter<"Tr_VesselAssessment"> | Date | string | null
    Tr_VesselAssessmentDetail?: Tr_VesselAssessmentDetailListRelationFilter
  }

  export type Tr_VesselAssessmentOrderByWithRelationInput = {
    Id?: SortOrder
    VslType?: SortOrder
    VslName?: SortOrder
    PeriodDate?: SortOrder
    FinalDate?: SortOrder
    GradeTotal?: SortOrder
    Description?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    LinkShared?: SortOrderInput | SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    CreatedDate?: SortOrderInput | SortOrder
    ModifiedBy?: SortOrderInput | SortOrder
    ModifiedDate?: SortOrderInput | SortOrder
    Tr_VesselAssessmentDetail?: Tr_VesselAssessmentDetailOrderByRelationAggregateInput
  }

  export type Tr_VesselAssessmentWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: Tr_VesselAssessmentWhereInput | Tr_VesselAssessmentWhereInput[]
    OR?: Tr_VesselAssessmentWhereInput[]
    NOT?: Tr_VesselAssessmentWhereInput | Tr_VesselAssessmentWhereInput[]
    VslType?: StringFilter<"Tr_VesselAssessment"> | string
    VslName?: StringFilter<"Tr_VesselAssessment"> | string
    PeriodDate?: DateTimeFilter<"Tr_VesselAssessment"> | Date | string
    FinalDate?: DateTimeFilter<"Tr_VesselAssessment"> | Date | string
    GradeTotal?: DecimalFilter<"Tr_VesselAssessment"> | Decimal | DecimalJsLike | number | string
    Description?: StringNullableFilter<"Tr_VesselAssessment"> | string | null
    Status?: StringNullableFilter<"Tr_VesselAssessment"> | string | null
    LinkShared?: StringNullableFilter<"Tr_VesselAssessment"> | string | null
    CreatedBy?: StringNullableFilter<"Tr_VesselAssessment"> | string | null
    CreatedDate?: DateTimeNullableFilter<"Tr_VesselAssessment"> | Date | string | null
    ModifiedBy?: StringNullableFilter<"Tr_VesselAssessment"> | string | null
    ModifiedDate?: DateTimeNullableFilter<"Tr_VesselAssessment"> | Date | string | null
    Tr_VesselAssessmentDetail?: Tr_VesselAssessmentDetailListRelationFilter
  }, "Id">

  export type Tr_VesselAssessmentOrderByWithAggregationInput = {
    Id?: SortOrder
    VslType?: SortOrder
    VslName?: SortOrder
    PeriodDate?: SortOrder
    FinalDate?: SortOrder
    GradeTotal?: SortOrder
    Description?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    LinkShared?: SortOrderInput | SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    CreatedDate?: SortOrderInput | SortOrder
    ModifiedBy?: SortOrderInput | SortOrder
    ModifiedDate?: SortOrderInput | SortOrder
    _count?: Tr_VesselAssessmentCountOrderByAggregateInput
    _avg?: Tr_VesselAssessmentAvgOrderByAggregateInput
    _max?: Tr_VesselAssessmentMaxOrderByAggregateInput
    _min?: Tr_VesselAssessmentMinOrderByAggregateInput
    _sum?: Tr_VesselAssessmentSumOrderByAggregateInput
  }

  export type Tr_VesselAssessmentScalarWhereWithAggregatesInput = {
    AND?: Tr_VesselAssessmentScalarWhereWithAggregatesInput | Tr_VesselAssessmentScalarWhereWithAggregatesInput[]
    OR?: Tr_VesselAssessmentScalarWhereWithAggregatesInput[]
    NOT?: Tr_VesselAssessmentScalarWhereWithAggregatesInput | Tr_VesselAssessmentScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"Tr_VesselAssessment"> | bigint | number
    VslType?: StringWithAggregatesFilter<"Tr_VesselAssessment"> | string
    VslName?: StringWithAggregatesFilter<"Tr_VesselAssessment"> | string
    PeriodDate?: DateTimeWithAggregatesFilter<"Tr_VesselAssessment"> | Date | string
    FinalDate?: DateTimeWithAggregatesFilter<"Tr_VesselAssessment"> | Date | string
    GradeTotal?: DecimalWithAggregatesFilter<"Tr_VesselAssessment"> | Decimal | DecimalJsLike | number | string
    Description?: StringNullableWithAggregatesFilter<"Tr_VesselAssessment"> | string | null
    Status?: StringNullableWithAggregatesFilter<"Tr_VesselAssessment"> | string | null
    LinkShared?: StringNullableWithAggregatesFilter<"Tr_VesselAssessment"> | string | null
    CreatedBy?: StringNullableWithAggregatesFilter<"Tr_VesselAssessment"> | string | null
    CreatedDate?: DateTimeNullableWithAggregatesFilter<"Tr_VesselAssessment"> | Date | string | null
    ModifiedBy?: StringNullableWithAggregatesFilter<"Tr_VesselAssessment"> | string | null
    ModifiedDate?: DateTimeNullableWithAggregatesFilter<"Tr_VesselAssessment"> | Date | string | null
  }

  export type Tr_VesselAssessmentDetailWhereInput = {
    AND?: Tr_VesselAssessmentDetailWhereInput | Tr_VesselAssessmentDetailWhereInput[]
    OR?: Tr_VesselAssessmentDetailWhereInput[]
    NOT?: Tr_VesselAssessmentDetailWhereInput | Tr_VesselAssessmentDetailWhereInput[]
    Id?: BigIntFilter<"Tr_VesselAssessmentDetail"> | bigint | number
    VesselAssessmentId?: BigIntFilter<"Tr_VesselAssessmentDetail"> | bigint | number
    Item?: StringFilter<"Tr_VesselAssessmentDetail"> | string
    Interval?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    ShipSection?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    Grade?: DecimalFilter<"Tr_VesselAssessmentDetail"> | Decimal | DecimalJsLike | number | string
    Description?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    FileName?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    SmallFileLink?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    NormalFileLink?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    IsDeleted?: BoolFilter<"Tr_VesselAssessmentDetail"> | boolean
    UploadedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    UploadedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    AssessedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    AssessedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    CreatedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    CreatedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    ModifiedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    ModifiedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    Tr_VesselAssessment?: XOR<Tr_VesselAssessmentRelationFilter, Tr_VesselAssessmentWhereInput>
  }

  export type Tr_VesselAssessmentDetailOrderByWithRelationInput = {
    Id?: SortOrder
    VesselAssessmentId?: SortOrder
    Item?: SortOrder
    Interval?: SortOrderInput | SortOrder
    ShipSection?: SortOrderInput | SortOrder
    Grade?: SortOrder
    Description?: SortOrderInput | SortOrder
    FileName?: SortOrderInput | SortOrder
    SmallFileLink?: SortOrderInput | SortOrder
    NormalFileLink?: SortOrderInput | SortOrder
    IsDeleted?: SortOrder
    UploadedBy?: SortOrderInput | SortOrder
    UploadedDate?: SortOrderInput | SortOrder
    AssessedBy?: SortOrderInput | SortOrder
    AssessedDate?: SortOrderInput | SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    CreatedDate?: SortOrderInput | SortOrder
    ModifiedBy?: SortOrderInput | SortOrder
    ModifiedDate?: SortOrderInput | SortOrder
    Tr_VesselAssessment?: Tr_VesselAssessmentOrderByWithRelationInput
  }

  export type Tr_VesselAssessmentDetailWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: Tr_VesselAssessmentDetailWhereInput | Tr_VesselAssessmentDetailWhereInput[]
    OR?: Tr_VesselAssessmentDetailWhereInput[]
    NOT?: Tr_VesselAssessmentDetailWhereInput | Tr_VesselAssessmentDetailWhereInput[]
    VesselAssessmentId?: BigIntFilter<"Tr_VesselAssessmentDetail"> | bigint | number
    Item?: StringFilter<"Tr_VesselAssessmentDetail"> | string
    Interval?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    ShipSection?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    Grade?: DecimalFilter<"Tr_VesselAssessmentDetail"> | Decimal | DecimalJsLike | number | string
    Description?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    FileName?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    SmallFileLink?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    NormalFileLink?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    IsDeleted?: BoolFilter<"Tr_VesselAssessmentDetail"> | boolean
    UploadedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    UploadedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    AssessedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    AssessedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    CreatedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    CreatedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    ModifiedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    ModifiedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    Tr_VesselAssessment?: XOR<Tr_VesselAssessmentRelationFilter, Tr_VesselAssessmentWhereInput>
  }, "Id">

  export type Tr_VesselAssessmentDetailOrderByWithAggregationInput = {
    Id?: SortOrder
    VesselAssessmentId?: SortOrder
    Item?: SortOrder
    Interval?: SortOrderInput | SortOrder
    ShipSection?: SortOrderInput | SortOrder
    Grade?: SortOrder
    Description?: SortOrderInput | SortOrder
    FileName?: SortOrderInput | SortOrder
    SmallFileLink?: SortOrderInput | SortOrder
    NormalFileLink?: SortOrderInput | SortOrder
    IsDeleted?: SortOrder
    UploadedBy?: SortOrderInput | SortOrder
    UploadedDate?: SortOrderInput | SortOrder
    AssessedBy?: SortOrderInput | SortOrder
    AssessedDate?: SortOrderInput | SortOrder
    CreatedBy?: SortOrderInput | SortOrder
    CreatedDate?: SortOrderInput | SortOrder
    ModifiedBy?: SortOrderInput | SortOrder
    ModifiedDate?: SortOrderInput | SortOrder
    _count?: Tr_VesselAssessmentDetailCountOrderByAggregateInput
    _avg?: Tr_VesselAssessmentDetailAvgOrderByAggregateInput
    _max?: Tr_VesselAssessmentDetailMaxOrderByAggregateInput
    _min?: Tr_VesselAssessmentDetailMinOrderByAggregateInput
    _sum?: Tr_VesselAssessmentDetailSumOrderByAggregateInput
  }

  export type Tr_VesselAssessmentDetailScalarWhereWithAggregatesInput = {
    AND?: Tr_VesselAssessmentDetailScalarWhereWithAggregatesInput | Tr_VesselAssessmentDetailScalarWhereWithAggregatesInput[]
    OR?: Tr_VesselAssessmentDetailScalarWhereWithAggregatesInput[]
    NOT?: Tr_VesselAssessmentDetailScalarWhereWithAggregatesInput | Tr_VesselAssessmentDetailScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | bigint | number
    VesselAssessmentId?: BigIntWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | bigint | number
    Item?: StringWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | string
    Interval?: StringNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | string | null
    ShipSection?: StringNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | string | null
    Grade?: DecimalWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | Decimal | DecimalJsLike | number | string
    Description?: StringNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | string | null
    FileName?: StringNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | string | null
    SmallFileLink?: StringNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | string | null
    NormalFileLink?: StringNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | string | null
    IsDeleted?: BoolWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | boolean
    UploadedBy?: StringNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | string | null
    UploadedDate?: DateTimeNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    AssessedBy?: StringNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | string | null
    AssessedDate?: DateTimeNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    CreatedBy?: StringNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | string | null
    CreatedDate?: DateTimeNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    ModifiedBy?: StringNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | string | null
    ModifiedDate?: DateTimeNullableWithAggregatesFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
  }

  export type Ms_AssessmentCategoryCreateInput = {
    Id?: bigint | number
    VslType: string
    Item: string
    Interval?: string | null
    ShipSection?: string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
  }

  export type Ms_AssessmentCategoryUncheckedCreateInput = {
    Id?: bigint | number
    VslType: string
    Item: string
    Interval?: string | null
    ShipSection?: string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
  }

  export type Ms_AssessmentCategoryUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VslType?: StringFieldUpdateOperationsInput | string
    Item?: StringFieldUpdateOperationsInput | string
    Interval?: NullableStringFieldUpdateOperationsInput | string | null
    ShipSection?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Ms_AssessmentCategoryUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VslType?: StringFieldUpdateOperationsInput | string
    Item?: StringFieldUpdateOperationsInput | string
    Interval?: NullableStringFieldUpdateOperationsInput | string | null
    ShipSection?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Ms_AssessmentCategoryCreateManyInput = {
    VslType: string
    Item: string
    Interval?: string | null
    ShipSection?: string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
  }

  export type Ms_AssessmentCategoryUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VslType?: StringFieldUpdateOperationsInput | string
    Item?: StringFieldUpdateOperationsInput | string
    Interval?: NullableStringFieldUpdateOperationsInput | string | null
    ShipSection?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Ms_AssessmentCategoryUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VslType?: StringFieldUpdateOperationsInput | string
    Item?: StringFieldUpdateOperationsInput | string
    Interval?: NullableStringFieldUpdateOperationsInput | string | null
    ShipSection?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Tr_VesselAssessmentCreateInput = {
    Id?: bigint | number
    VslType: string
    VslName: string
    PeriodDate: Date | string
    FinalDate: Date | string
    GradeTotal?: Decimal | DecimalJsLike | number | string
    Description?: string | null
    Status?: string | null
    LinkShared?: string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
    Tr_VesselAssessmentDetail?: Tr_VesselAssessmentDetailCreateNestedManyWithoutTr_VesselAssessmentInput
  }

  export type Tr_VesselAssessmentUncheckedCreateInput = {
    Id?: bigint | number
    VslType: string
    VslName: string
    PeriodDate: Date | string
    FinalDate: Date | string
    GradeTotal?: Decimal | DecimalJsLike | number | string
    Description?: string | null
    Status?: string | null
    LinkShared?: string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
    Tr_VesselAssessmentDetail?: Tr_VesselAssessmentDetailUncheckedCreateNestedManyWithoutTr_VesselAssessmentInput
  }

  export type Tr_VesselAssessmentUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VslType?: StringFieldUpdateOperationsInput | string
    VslName?: StringFieldUpdateOperationsInput | string
    PeriodDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    GradeTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LinkShared?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Tr_VesselAssessmentDetail?: Tr_VesselAssessmentDetailUpdateManyWithoutTr_VesselAssessmentNestedInput
  }

  export type Tr_VesselAssessmentUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VslType?: StringFieldUpdateOperationsInput | string
    VslName?: StringFieldUpdateOperationsInput | string
    PeriodDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    GradeTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LinkShared?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Tr_VesselAssessmentDetail?: Tr_VesselAssessmentDetailUncheckedUpdateManyWithoutTr_VesselAssessmentNestedInput
  }

  export type Tr_VesselAssessmentCreateManyInput = {
    VslType: string
    VslName: string
    PeriodDate: Date | string
    FinalDate: Date | string
    GradeTotal?: Decimal | DecimalJsLike | number | string
    Description?: string | null
    Status?: string | null
    LinkShared?: string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
  }

  export type Tr_VesselAssessmentUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VslType?: StringFieldUpdateOperationsInput | string
    VslName?: StringFieldUpdateOperationsInput | string
    PeriodDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    GradeTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LinkShared?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Tr_VesselAssessmentUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VslType?: StringFieldUpdateOperationsInput | string
    VslName?: StringFieldUpdateOperationsInput | string
    PeriodDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    GradeTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LinkShared?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Tr_VesselAssessmentDetailCreateInput = {
    Id?: bigint | number
    Item: string
    Interval?: string | null
    ShipSection?: string | null
    Grade?: Decimal | DecimalJsLike | number | string
    Description?: string | null
    FileName?: string | null
    SmallFileLink?: string | null
    NormalFileLink?: string | null
    IsDeleted?: boolean
    UploadedBy?: string | null
    UploadedDate?: Date | string | null
    AssessedBy?: string | null
    AssessedDate?: Date | string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
    Tr_VesselAssessment: Tr_VesselAssessmentCreateNestedOneWithoutTr_VesselAssessmentDetailInput
  }

  export type Tr_VesselAssessmentDetailUncheckedCreateInput = {
    Id?: bigint | number
    VesselAssessmentId: bigint | number
    Item: string
    Interval?: string | null
    ShipSection?: string | null
    Grade?: Decimal | DecimalJsLike | number | string
    Description?: string | null
    FileName?: string | null
    SmallFileLink?: string | null
    NormalFileLink?: string | null
    IsDeleted?: boolean
    UploadedBy?: string | null
    UploadedDate?: Date | string | null
    AssessedBy?: string | null
    AssessedDate?: Date | string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
  }

  export type Tr_VesselAssessmentDetailUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Item?: StringFieldUpdateOperationsInput | string
    Interval?: NullableStringFieldUpdateOperationsInput | string | null
    ShipSection?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FileName?: NullableStringFieldUpdateOperationsInput | string | null
    SmallFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    NormalFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    UploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AssessedBy?: NullableStringFieldUpdateOperationsInput | string | null
    AssessedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Tr_VesselAssessment?: Tr_VesselAssessmentUpdateOneRequiredWithoutTr_VesselAssessmentDetailNestedInput
  }

  export type Tr_VesselAssessmentDetailUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VesselAssessmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    Item?: StringFieldUpdateOperationsInput | string
    Interval?: NullableStringFieldUpdateOperationsInput | string | null
    ShipSection?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FileName?: NullableStringFieldUpdateOperationsInput | string | null
    SmallFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    NormalFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    UploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AssessedBy?: NullableStringFieldUpdateOperationsInput | string | null
    AssessedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Tr_VesselAssessmentDetailCreateManyInput = {
    VesselAssessmentId: bigint | number
    Item: string
    Interval?: string | null
    ShipSection?: string | null
    Grade?: Decimal | DecimalJsLike | number | string
    Description?: string | null
    FileName?: string | null
    SmallFileLink?: string | null
    NormalFileLink?: string | null
    IsDeleted?: boolean
    UploadedBy?: string | null
    UploadedDate?: Date | string | null
    AssessedBy?: string | null
    AssessedDate?: Date | string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
  }

  export type Tr_VesselAssessmentDetailUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Item?: StringFieldUpdateOperationsInput | string
    Interval?: NullableStringFieldUpdateOperationsInput | string | null
    ShipSection?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FileName?: NullableStringFieldUpdateOperationsInput | string | null
    SmallFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    NormalFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    UploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AssessedBy?: NullableStringFieldUpdateOperationsInput | string | null
    AssessedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Tr_VesselAssessmentDetailUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VesselAssessmentId?: BigIntFieldUpdateOperationsInput | bigint | number
    Item?: StringFieldUpdateOperationsInput | string
    Interval?: NullableStringFieldUpdateOperationsInput | string | null
    ShipSection?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FileName?: NullableStringFieldUpdateOperationsInput | string | null
    SmallFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    NormalFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    UploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AssessedBy?: NullableStringFieldUpdateOperationsInput | string | null
    AssessedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Ms_AssessmentCategoryCountOrderByAggregateInput = {
    Id?: SortOrder
    VslType?: SortOrder
    Item?: SortOrder
    Interval?: SortOrder
    ShipSection?: SortOrder
    CreatedBy?: SortOrder
    CreatedDate?: SortOrder
    ModifiedBy?: SortOrder
    ModifiedDate?: SortOrder
  }

  export type Ms_AssessmentCategoryAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type Ms_AssessmentCategoryMaxOrderByAggregateInput = {
    Id?: SortOrder
    VslType?: SortOrder
    Item?: SortOrder
    Interval?: SortOrder
    ShipSection?: SortOrder
    CreatedBy?: SortOrder
    CreatedDate?: SortOrder
    ModifiedBy?: SortOrder
    ModifiedDate?: SortOrder
  }

  export type Ms_AssessmentCategoryMinOrderByAggregateInput = {
    Id?: SortOrder
    VslType?: SortOrder
    Item?: SortOrder
    Interval?: SortOrder
    ShipSection?: SortOrder
    CreatedBy?: SortOrder
    CreatedDate?: SortOrder
    ModifiedBy?: SortOrder
    ModifiedDate?: SortOrder
  }

  export type Ms_AssessmentCategorySumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Tr_VesselAssessmentDetailListRelationFilter = {
    every?: Tr_VesselAssessmentDetailWhereInput
    some?: Tr_VesselAssessmentDetailWhereInput
    none?: Tr_VesselAssessmentDetailWhereInput
  }

  export type Tr_VesselAssessmentDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tr_VesselAssessmentCountOrderByAggregateInput = {
    Id?: SortOrder
    VslType?: SortOrder
    VslName?: SortOrder
    PeriodDate?: SortOrder
    FinalDate?: SortOrder
    GradeTotal?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    LinkShared?: SortOrder
    CreatedBy?: SortOrder
    CreatedDate?: SortOrder
    ModifiedBy?: SortOrder
    ModifiedDate?: SortOrder
  }

  export type Tr_VesselAssessmentAvgOrderByAggregateInput = {
    Id?: SortOrder
    GradeTotal?: SortOrder
  }

  export type Tr_VesselAssessmentMaxOrderByAggregateInput = {
    Id?: SortOrder
    VslType?: SortOrder
    VslName?: SortOrder
    PeriodDate?: SortOrder
    FinalDate?: SortOrder
    GradeTotal?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    LinkShared?: SortOrder
    CreatedBy?: SortOrder
    CreatedDate?: SortOrder
    ModifiedBy?: SortOrder
    ModifiedDate?: SortOrder
  }

  export type Tr_VesselAssessmentMinOrderByAggregateInput = {
    Id?: SortOrder
    VslType?: SortOrder
    VslName?: SortOrder
    PeriodDate?: SortOrder
    FinalDate?: SortOrder
    GradeTotal?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    LinkShared?: SortOrder
    CreatedBy?: SortOrder
    CreatedDate?: SortOrder
    ModifiedBy?: SortOrder
    ModifiedDate?: SortOrder
  }

  export type Tr_VesselAssessmentSumOrderByAggregateInput = {
    Id?: SortOrder
    GradeTotal?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Tr_VesselAssessmentRelationFilter = {
    is?: Tr_VesselAssessmentWhereInput
    isNot?: Tr_VesselAssessmentWhereInput
  }

  export type Tr_VesselAssessmentDetailCountOrderByAggregateInput = {
    Id?: SortOrder
    VesselAssessmentId?: SortOrder
    Item?: SortOrder
    Interval?: SortOrder
    ShipSection?: SortOrder
    Grade?: SortOrder
    Description?: SortOrder
    FileName?: SortOrder
    SmallFileLink?: SortOrder
    NormalFileLink?: SortOrder
    IsDeleted?: SortOrder
    UploadedBy?: SortOrder
    UploadedDate?: SortOrder
    AssessedBy?: SortOrder
    AssessedDate?: SortOrder
    CreatedBy?: SortOrder
    CreatedDate?: SortOrder
    ModifiedBy?: SortOrder
    ModifiedDate?: SortOrder
  }

  export type Tr_VesselAssessmentDetailAvgOrderByAggregateInput = {
    Id?: SortOrder
    VesselAssessmentId?: SortOrder
    Grade?: SortOrder
  }

  export type Tr_VesselAssessmentDetailMaxOrderByAggregateInput = {
    Id?: SortOrder
    VesselAssessmentId?: SortOrder
    Item?: SortOrder
    Interval?: SortOrder
    ShipSection?: SortOrder
    Grade?: SortOrder
    Description?: SortOrder
    FileName?: SortOrder
    SmallFileLink?: SortOrder
    NormalFileLink?: SortOrder
    IsDeleted?: SortOrder
    UploadedBy?: SortOrder
    UploadedDate?: SortOrder
    AssessedBy?: SortOrder
    AssessedDate?: SortOrder
    CreatedBy?: SortOrder
    CreatedDate?: SortOrder
    ModifiedBy?: SortOrder
    ModifiedDate?: SortOrder
  }

  export type Tr_VesselAssessmentDetailMinOrderByAggregateInput = {
    Id?: SortOrder
    VesselAssessmentId?: SortOrder
    Item?: SortOrder
    Interval?: SortOrder
    ShipSection?: SortOrder
    Grade?: SortOrder
    Description?: SortOrder
    FileName?: SortOrder
    SmallFileLink?: SortOrder
    NormalFileLink?: SortOrder
    IsDeleted?: SortOrder
    UploadedBy?: SortOrder
    UploadedDate?: SortOrder
    AssessedBy?: SortOrder
    AssessedDate?: SortOrder
    CreatedBy?: SortOrder
    CreatedDate?: SortOrder
    ModifiedBy?: SortOrder
    ModifiedDate?: SortOrder
  }

  export type Tr_VesselAssessmentDetailSumOrderByAggregateInput = {
    Id?: SortOrder
    VesselAssessmentId?: SortOrder
    Grade?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Tr_VesselAssessmentDetailCreateNestedManyWithoutTr_VesselAssessmentInput = {
    create?: XOR<Tr_VesselAssessmentDetailCreateWithoutTr_VesselAssessmentInput, Tr_VesselAssessmentDetailUncheckedCreateWithoutTr_VesselAssessmentInput> | Tr_VesselAssessmentDetailCreateWithoutTr_VesselAssessmentInput[] | Tr_VesselAssessmentDetailUncheckedCreateWithoutTr_VesselAssessmentInput[]
    connectOrCreate?: Tr_VesselAssessmentDetailCreateOrConnectWithoutTr_VesselAssessmentInput | Tr_VesselAssessmentDetailCreateOrConnectWithoutTr_VesselAssessmentInput[]
    createMany?: Tr_VesselAssessmentDetailCreateManyTr_VesselAssessmentInputEnvelope
    connect?: Tr_VesselAssessmentDetailWhereUniqueInput | Tr_VesselAssessmentDetailWhereUniqueInput[]
  }

  export type Tr_VesselAssessmentDetailUncheckedCreateNestedManyWithoutTr_VesselAssessmentInput = {
    create?: XOR<Tr_VesselAssessmentDetailCreateWithoutTr_VesselAssessmentInput, Tr_VesselAssessmentDetailUncheckedCreateWithoutTr_VesselAssessmentInput> | Tr_VesselAssessmentDetailCreateWithoutTr_VesselAssessmentInput[] | Tr_VesselAssessmentDetailUncheckedCreateWithoutTr_VesselAssessmentInput[]
    connectOrCreate?: Tr_VesselAssessmentDetailCreateOrConnectWithoutTr_VesselAssessmentInput | Tr_VesselAssessmentDetailCreateOrConnectWithoutTr_VesselAssessmentInput[]
    createMany?: Tr_VesselAssessmentDetailCreateManyTr_VesselAssessmentInputEnvelope
    connect?: Tr_VesselAssessmentDetailWhereUniqueInput | Tr_VesselAssessmentDetailWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Tr_VesselAssessmentDetailUpdateManyWithoutTr_VesselAssessmentNestedInput = {
    create?: XOR<Tr_VesselAssessmentDetailCreateWithoutTr_VesselAssessmentInput, Tr_VesselAssessmentDetailUncheckedCreateWithoutTr_VesselAssessmentInput> | Tr_VesselAssessmentDetailCreateWithoutTr_VesselAssessmentInput[] | Tr_VesselAssessmentDetailUncheckedCreateWithoutTr_VesselAssessmentInput[]
    connectOrCreate?: Tr_VesselAssessmentDetailCreateOrConnectWithoutTr_VesselAssessmentInput | Tr_VesselAssessmentDetailCreateOrConnectWithoutTr_VesselAssessmentInput[]
    upsert?: Tr_VesselAssessmentDetailUpsertWithWhereUniqueWithoutTr_VesselAssessmentInput | Tr_VesselAssessmentDetailUpsertWithWhereUniqueWithoutTr_VesselAssessmentInput[]
    createMany?: Tr_VesselAssessmentDetailCreateManyTr_VesselAssessmentInputEnvelope
    set?: Tr_VesselAssessmentDetailWhereUniqueInput | Tr_VesselAssessmentDetailWhereUniqueInput[]
    disconnect?: Tr_VesselAssessmentDetailWhereUniqueInput | Tr_VesselAssessmentDetailWhereUniqueInput[]
    delete?: Tr_VesselAssessmentDetailWhereUniqueInput | Tr_VesselAssessmentDetailWhereUniqueInput[]
    connect?: Tr_VesselAssessmentDetailWhereUniqueInput | Tr_VesselAssessmentDetailWhereUniqueInput[]
    update?: Tr_VesselAssessmentDetailUpdateWithWhereUniqueWithoutTr_VesselAssessmentInput | Tr_VesselAssessmentDetailUpdateWithWhereUniqueWithoutTr_VesselAssessmentInput[]
    updateMany?: Tr_VesselAssessmentDetailUpdateManyWithWhereWithoutTr_VesselAssessmentInput | Tr_VesselAssessmentDetailUpdateManyWithWhereWithoutTr_VesselAssessmentInput[]
    deleteMany?: Tr_VesselAssessmentDetailScalarWhereInput | Tr_VesselAssessmentDetailScalarWhereInput[]
  }

  export type Tr_VesselAssessmentDetailUncheckedUpdateManyWithoutTr_VesselAssessmentNestedInput = {
    create?: XOR<Tr_VesselAssessmentDetailCreateWithoutTr_VesselAssessmentInput, Tr_VesselAssessmentDetailUncheckedCreateWithoutTr_VesselAssessmentInput> | Tr_VesselAssessmentDetailCreateWithoutTr_VesselAssessmentInput[] | Tr_VesselAssessmentDetailUncheckedCreateWithoutTr_VesselAssessmentInput[]
    connectOrCreate?: Tr_VesselAssessmentDetailCreateOrConnectWithoutTr_VesselAssessmentInput | Tr_VesselAssessmentDetailCreateOrConnectWithoutTr_VesselAssessmentInput[]
    upsert?: Tr_VesselAssessmentDetailUpsertWithWhereUniqueWithoutTr_VesselAssessmentInput | Tr_VesselAssessmentDetailUpsertWithWhereUniqueWithoutTr_VesselAssessmentInput[]
    createMany?: Tr_VesselAssessmentDetailCreateManyTr_VesselAssessmentInputEnvelope
    set?: Tr_VesselAssessmentDetailWhereUniqueInput | Tr_VesselAssessmentDetailWhereUniqueInput[]
    disconnect?: Tr_VesselAssessmentDetailWhereUniqueInput | Tr_VesselAssessmentDetailWhereUniqueInput[]
    delete?: Tr_VesselAssessmentDetailWhereUniqueInput | Tr_VesselAssessmentDetailWhereUniqueInput[]
    connect?: Tr_VesselAssessmentDetailWhereUniqueInput | Tr_VesselAssessmentDetailWhereUniqueInput[]
    update?: Tr_VesselAssessmentDetailUpdateWithWhereUniqueWithoutTr_VesselAssessmentInput | Tr_VesselAssessmentDetailUpdateWithWhereUniqueWithoutTr_VesselAssessmentInput[]
    updateMany?: Tr_VesselAssessmentDetailUpdateManyWithWhereWithoutTr_VesselAssessmentInput | Tr_VesselAssessmentDetailUpdateManyWithWhereWithoutTr_VesselAssessmentInput[]
    deleteMany?: Tr_VesselAssessmentDetailScalarWhereInput | Tr_VesselAssessmentDetailScalarWhereInput[]
  }

  export type Tr_VesselAssessmentCreateNestedOneWithoutTr_VesselAssessmentDetailInput = {
    create?: XOR<Tr_VesselAssessmentCreateWithoutTr_VesselAssessmentDetailInput, Tr_VesselAssessmentUncheckedCreateWithoutTr_VesselAssessmentDetailInput>
    connectOrCreate?: Tr_VesselAssessmentCreateOrConnectWithoutTr_VesselAssessmentDetailInput
    connect?: Tr_VesselAssessmentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Tr_VesselAssessmentUpdateOneRequiredWithoutTr_VesselAssessmentDetailNestedInput = {
    create?: XOR<Tr_VesselAssessmentCreateWithoutTr_VesselAssessmentDetailInput, Tr_VesselAssessmentUncheckedCreateWithoutTr_VesselAssessmentDetailInput>
    connectOrCreate?: Tr_VesselAssessmentCreateOrConnectWithoutTr_VesselAssessmentDetailInput
    upsert?: Tr_VesselAssessmentUpsertWithoutTr_VesselAssessmentDetailInput
    connect?: Tr_VesselAssessmentWhereUniqueInput
    update?: XOR<XOR<Tr_VesselAssessmentUpdateToOneWithWhereWithoutTr_VesselAssessmentDetailInput, Tr_VesselAssessmentUpdateWithoutTr_VesselAssessmentDetailInput>, Tr_VesselAssessmentUncheckedUpdateWithoutTr_VesselAssessmentDetailInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Tr_VesselAssessmentDetailCreateWithoutTr_VesselAssessmentInput = {
    Id?: bigint | number
    Item: string
    Interval?: string | null
    ShipSection?: string | null
    Grade?: Decimal | DecimalJsLike | number | string
    Description?: string | null
    FileName?: string | null
    SmallFileLink?: string | null
    NormalFileLink?: string | null
    IsDeleted?: boolean
    UploadedBy?: string | null
    UploadedDate?: Date | string | null
    AssessedBy?: string | null
    AssessedDate?: Date | string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
  }

  export type Tr_VesselAssessmentDetailUncheckedCreateWithoutTr_VesselAssessmentInput = {
    Id?: bigint | number
    Item: string
    Interval?: string | null
    ShipSection?: string | null
    Grade?: Decimal | DecimalJsLike | number | string
    Description?: string | null
    FileName?: string | null
    SmallFileLink?: string | null
    NormalFileLink?: string | null
    IsDeleted?: boolean
    UploadedBy?: string | null
    UploadedDate?: Date | string | null
    AssessedBy?: string | null
    AssessedDate?: Date | string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
  }

  export type Tr_VesselAssessmentDetailCreateOrConnectWithoutTr_VesselAssessmentInput = {
    where: Tr_VesselAssessmentDetailWhereUniqueInput
    create: XOR<Tr_VesselAssessmentDetailCreateWithoutTr_VesselAssessmentInput, Tr_VesselAssessmentDetailUncheckedCreateWithoutTr_VesselAssessmentInput>
  }

  export type Tr_VesselAssessmentDetailCreateManyTr_VesselAssessmentInputEnvelope = {
    data: Tr_VesselAssessmentDetailCreateManyTr_VesselAssessmentInput | Tr_VesselAssessmentDetailCreateManyTr_VesselAssessmentInput[]
  }

  export type Tr_VesselAssessmentDetailUpsertWithWhereUniqueWithoutTr_VesselAssessmentInput = {
    where: Tr_VesselAssessmentDetailWhereUniqueInput
    update: XOR<Tr_VesselAssessmentDetailUpdateWithoutTr_VesselAssessmentInput, Tr_VesselAssessmentDetailUncheckedUpdateWithoutTr_VesselAssessmentInput>
    create: XOR<Tr_VesselAssessmentDetailCreateWithoutTr_VesselAssessmentInput, Tr_VesselAssessmentDetailUncheckedCreateWithoutTr_VesselAssessmentInput>
  }

  export type Tr_VesselAssessmentDetailUpdateWithWhereUniqueWithoutTr_VesselAssessmentInput = {
    where: Tr_VesselAssessmentDetailWhereUniqueInput
    data: XOR<Tr_VesselAssessmentDetailUpdateWithoutTr_VesselAssessmentInput, Tr_VesselAssessmentDetailUncheckedUpdateWithoutTr_VesselAssessmentInput>
  }

  export type Tr_VesselAssessmentDetailUpdateManyWithWhereWithoutTr_VesselAssessmentInput = {
    where: Tr_VesselAssessmentDetailScalarWhereInput
    data: XOR<Tr_VesselAssessmentDetailUpdateManyMutationInput, Tr_VesselAssessmentDetailUncheckedUpdateManyWithoutTr_VesselAssessmentInput>
  }

  export type Tr_VesselAssessmentDetailScalarWhereInput = {
    AND?: Tr_VesselAssessmentDetailScalarWhereInput | Tr_VesselAssessmentDetailScalarWhereInput[]
    OR?: Tr_VesselAssessmentDetailScalarWhereInput[]
    NOT?: Tr_VesselAssessmentDetailScalarWhereInput | Tr_VesselAssessmentDetailScalarWhereInput[]
    Id?: BigIntFilter<"Tr_VesselAssessmentDetail"> | bigint | number
    VesselAssessmentId?: BigIntFilter<"Tr_VesselAssessmentDetail"> | bigint | number
    Item?: StringFilter<"Tr_VesselAssessmentDetail"> | string
    Interval?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    ShipSection?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    Grade?: DecimalFilter<"Tr_VesselAssessmentDetail"> | Decimal | DecimalJsLike | number | string
    Description?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    FileName?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    SmallFileLink?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    NormalFileLink?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    IsDeleted?: BoolFilter<"Tr_VesselAssessmentDetail"> | boolean
    UploadedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    UploadedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    AssessedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    AssessedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    CreatedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    CreatedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
    ModifiedBy?: StringNullableFilter<"Tr_VesselAssessmentDetail"> | string | null
    ModifiedDate?: DateTimeNullableFilter<"Tr_VesselAssessmentDetail"> | Date | string | null
  }

  export type Tr_VesselAssessmentCreateWithoutTr_VesselAssessmentDetailInput = {
    Id?: bigint | number
    VslType: string
    VslName: string
    PeriodDate: Date | string
    FinalDate: Date | string
    GradeTotal?: Decimal | DecimalJsLike | number | string
    Description?: string | null
    Status?: string | null
    LinkShared?: string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
  }

  export type Tr_VesselAssessmentUncheckedCreateWithoutTr_VesselAssessmentDetailInput = {
    Id?: bigint | number
    VslType: string
    VslName: string
    PeriodDate: Date | string
    FinalDate: Date | string
    GradeTotal?: Decimal | DecimalJsLike | number | string
    Description?: string | null
    Status?: string | null
    LinkShared?: string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
  }

  export type Tr_VesselAssessmentCreateOrConnectWithoutTr_VesselAssessmentDetailInput = {
    where: Tr_VesselAssessmentWhereUniqueInput
    create: XOR<Tr_VesselAssessmentCreateWithoutTr_VesselAssessmentDetailInput, Tr_VesselAssessmentUncheckedCreateWithoutTr_VesselAssessmentDetailInput>
  }

  export type Tr_VesselAssessmentUpsertWithoutTr_VesselAssessmentDetailInput = {
    update: XOR<Tr_VesselAssessmentUpdateWithoutTr_VesselAssessmentDetailInput, Tr_VesselAssessmentUncheckedUpdateWithoutTr_VesselAssessmentDetailInput>
    create: XOR<Tr_VesselAssessmentCreateWithoutTr_VesselAssessmentDetailInput, Tr_VesselAssessmentUncheckedCreateWithoutTr_VesselAssessmentDetailInput>
    where?: Tr_VesselAssessmentWhereInput
  }

  export type Tr_VesselAssessmentUpdateToOneWithWhereWithoutTr_VesselAssessmentDetailInput = {
    where?: Tr_VesselAssessmentWhereInput
    data: XOR<Tr_VesselAssessmentUpdateWithoutTr_VesselAssessmentDetailInput, Tr_VesselAssessmentUncheckedUpdateWithoutTr_VesselAssessmentDetailInput>
  }

  export type Tr_VesselAssessmentUpdateWithoutTr_VesselAssessmentDetailInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VslType?: StringFieldUpdateOperationsInput | string
    VslName?: StringFieldUpdateOperationsInput | string
    PeriodDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    GradeTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LinkShared?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Tr_VesselAssessmentUncheckedUpdateWithoutTr_VesselAssessmentDetailInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    VslType?: StringFieldUpdateOperationsInput | string
    VslName?: StringFieldUpdateOperationsInput | string
    PeriodDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    GradeTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LinkShared?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Tr_VesselAssessmentDetailCreateManyTr_VesselAssessmentInput = {
    Item: string
    Interval?: string | null
    ShipSection?: string | null
    Grade?: Decimal | DecimalJsLike | number | string
    Description?: string | null
    FileName?: string | null
    SmallFileLink?: string | null
    NormalFileLink?: string | null
    IsDeleted?: boolean
    UploadedBy?: string | null
    UploadedDate?: Date | string | null
    AssessedBy?: string | null
    AssessedDate?: Date | string | null
    CreatedBy?: string | null
    CreatedDate?: Date | string | null
    ModifiedBy?: string | null
    ModifiedDate?: Date | string | null
  }

  export type Tr_VesselAssessmentDetailUpdateWithoutTr_VesselAssessmentInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Item?: StringFieldUpdateOperationsInput | string
    Interval?: NullableStringFieldUpdateOperationsInput | string | null
    ShipSection?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FileName?: NullableStringFieldUpdateOperationsInput | string | null
    SmallFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    NormalFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    UploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AssessedBy?: NullableStringFieldUpdateOperationsInput | string | null
    AssessedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Tr_VesselAssessmentDetailUncheckedUpdateWithoutTr_VesselAssessmentInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Item?: StringFieldUpdateOperationsInput | string
    Interval?: NullableStringFieldUpdateOperationsInput | string | null
    ShipSection?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FileName?: NullableStringFieldUpdateOperationsInput | string | null
    SmallFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    NormalFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    UploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AssessedBy?: NullableStringFieldUpdateOperationsInput | string | null
    AssessedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Tr_VesselAssessmentDetailUncheckedUpdateManyWithoutTr_VesselAssessmentInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Item?: StringFieldUpdateOperationsInput | string
    Interval?: NullableStringFieldUpdateOperationsInput | string | null
    ShipSection?: NullableStringFieldUpdateOperationsInput | string | null
    Grade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FileName?: NullableStringFieldUpdateOperationsInput | string | null
    SmallFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    NormalFileLink?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    UploadedBy?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AssessedBy?: NullableStringFieldUpdateOperationsInput | string | null
    AssessedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CreatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ModifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    ModifiedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Tr_VesselAssessmentCountOutputTypeDefaultArgs instead
     */
    export type Tr_VesselAssessmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tr_VesselAssessmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Ms_AssessmentCategoryDefaultArgs instead
     */
    export type Ms_AssessmentCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Ms_AssessmentCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tr_VesselAssessmentDefaultArgs instead
     */
    export type Tr_VesselAssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tr_VesselAssessmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tr_VesselAssessmentDetailDefaultArgs instead
     */
    export type Tr_VesselAssessmentDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tr_VesselAssessmentDetailDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}