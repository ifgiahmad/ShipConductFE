
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
 * Model Notification_CC
 * 
 */
export type Notification_CC = $Result.DefaultSelection<Prisma.$Notification_CCPayload>
/**
 * Model Pending_Approvals
 * 
 */
export type Pending_Approvals = $Result.DefaultSelection<Prisma.$Pending_ApprovalsPayload>
/**
 * Model Pending_Document
 * 
 */
export type Pending_Document = $Result.DefaultSelection<Prisma.$Pending_DocumentPayload>
/**
 * Model Release_Matrix
 * 
 */
export type Release_Matrix = $Result.DefaultSelection<Prisma.$Release_MatrixPayload>
/**
 * Model Release_Matrix_CC
 * 
 */
export type Release_Matrix_CC = $Result.DefaultSelection<Prisma.$Release_Matrix_CCPayload>
/**
 * Model Reports
 * 
 */
export type Reports = $Result.DefaultSelection<Prisma.$ReportsPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Role_Detail
 * 
 */
export type Role_Detail = $Result.DefaultSelection<Prisma.$Role_DetailPayload>
/**
 * Model User_Activity
 * 
 */
export type User_Activity = $Result.DefaultSelection<Prisma.$User_ActivityPayload>
/**
 * Model User_ComLoc
 * 
 */
export type User_ComLoc = $Result.DefaultSelection<Prisma.$User_ComLocPayload>
/**
 * Model User_Login
 * 
 */
export type User_Login = $Result.DefaultSelection<Prisma.$User_LoginPayload>
/**
 * Model User_Role
 * 
 */
export type User_Role = $Result.DefaultSelection<Prisma.$User_RolePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Notification_CCS
 * const notification_CCS = await prisma.notification_CC.findMany()
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
   * // Fetch zero or more Notification_CCS
   * const notification_CCS = await prisma.notification_CC.findMany()
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
   * `prisma.notification_CC`: Exposes CRUD operations for the **Notification_CC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notification_CCS
    * const notification_CCS = await prisma.notification_CC.findMany()
    * ```
    */
  get notification_CC(): Prisma.Notification_CCDelegate<ExtArgs>;

  /**
   * `prisma.pending_Approvals`: Exposes CRUD operations for the **Pending_Approvals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pending_Approvals
    * const pending_Approvals = await prisma.pending_Approvals.findMany()
    * ```
    */
  get pending_Approvals(): Prisma.Pending_ApprovalsDelegate<ExtArgs>;

  /**
   * `prisma.pending_Document`: Exposes CRUD operations for the **Pending_Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pending_Documents
    * const pending_Documents = await prisma.pending_Document.findMany()
    * ```
    */
  get pending_Document(): Prisma.Pending_DocumentDelegate<ExtArgs>;

  /**
   * `prisma.release_Matrix`: Exposes CRUD operations for the **Release_Matrix** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Release_Matrices
    * const release_Matrices = await prisma.release_Matrix.findMany()
    * ```
    */
  get release_Matrix(): Prisma.Release_MatrixDelegate<ExtArgs>;

  /**
   * `prisma.release_Matrix_CC`: Exposes CRUD operations for the **Release_Matrix_CC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Release_Matrix_CCS
    * const release_Matrix_CCS = await prisma.release_Matrix_CC.findMany()
    * ```
    */
  get release_Matrix_CC(): Prisma.Release_Matrix_CCDelegate<ExtArgs>;

  /**
   * `prisma.reports`: Exposes CRUD operations for the **Reports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.reports.findMany()
    * ```
    */
  get reports(): Prisma.ReportsDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.role_Detail`: Exposes CRUD operations for the **Role_Detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Role_Details
    * const role_Details = await prisma.role_Detail.findMany()
    * ```
    */
  get role_Detail(): Prisma.Role_DetailDelegate<ExtArgs>;

  /**
   * `prisma.user_Activity`: Exposes CRUD operations for the **User_Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Activities
    * const user_Activities = await prisma.user_Activity.findMany()
    * ```
    */
  get user_Activity(): Prisma.User_ActivityDelegate<ExtArgs>;

  /**
   * `prisma.user_ComLoc`: Exposes CRUD operations for the **User_ComLoc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_ComLocs
    * const user_ComLocs = await prisma.user_ComLoc.findMany()
    * ```
    */
  get user_ComLoc(): Prisma.User_ComLocDelegate<ExtArgs>;

  /**
   * `prisma.user_Login`: Exposes CRUD operations for the **User_Login** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Logins
    * const user_Logins = await prisma.user_Login.findMany()
    * ```
    */
  get user_Login(): Prisma.User_LoginDelegate<ExtArgs>;

  /**
   * `prisma.user_Role`: Exposes CRUD operations for the **User_Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Roles
    * const user_Roles = await prisma.user_Role.findMany()
    * ```
    */
  get user_Role(): Prisma.User_RoleDelegate<ExtArgs>;
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
    Notification_CC: 'Notification_CC',
    Pending_Approvals: 'Pending_Approvals',
    Pending_Document: 'Pending_Document',
    Release_Matrix: 'Release_Matrix',
    Release_Matrix_CC: 'Release_Matrix_CC',
    Reports: 'Reports',
    Role: 'Role',
    Role_Detail: 'Role_Detail',
    User_Activity: 'User_Activity',
    User_ComLoc: 'User_ComLoc',
    User_Login: 'User_Login',
    User_Role: 'User_Role'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    dbAuthentication?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "notification_CC" | "pending_Approvals" | "pending_Document" | "release_Matrix" | "release_Matrix_CC" | "reports" | "role" | "role_Detail" | "user_Activity" | "user_ComLoc" | "user_Login" | "user_Role"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Notification_CC: {
        payload: Prisma.$Notification_CCPayload<ExtArgs>
        fields: Prisma.Notification_CCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Notification_CCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Notification_CCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Notification_CCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Notification_CCPayload>
          }
          findFirst: {
            args: Prisma.Notification_CCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Notification_CCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Notification_CCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Notification_CCPayload>
          }
          findMany: {
            args: Prisma.Notification_CCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Notification_CCPayload>[]
          }
          create: {
            args: Prisma.Notification_CCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Notification_CCPayload>
          }
          createMany: {
            args: Prisma.Notification_CCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Notification_CCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Notification_CCPayload>
          }
          update: {
            args: Prisma.Notification_CCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Notification_CCPayload>
          }
          deleteMany: {
            args: Prisma.Notification_CCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Notification_CCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Notification_CCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Notification_CCPayload>
          }
          aggregate: {
            args: Prisma.Notification_CCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification_CC>
          }
          groupBy: {
            args: Prisma.Notification_CCGroupByArgs<ExtArgs>
            result: $Utils.Optional<Notification_CCGroupByOutputType>[]
          }
          count: {
            args: Prisma.Notification_CCCountArgs<ExtArgs>
            result: $Utils.Optional<Notification_CCCountAggregateOutputType> | number
          }
        }
      }
      Pending_Approvals: {
        payload: Prisma.$Pending_ApprovalsPayload<ExtArgs>
        fields: Prisma.Pending_ApprovalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Pending_ApprovalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_ApprovalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Pending_ApprovalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_ApprovalsPayload>
          }
          findFirst: {
            args: Prisma.Pending_ApprovalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_ApprovalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Pending_ApprovalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_ApprovalsPayload>
          }
          findMany: {
            args: Prisma.Pending_ApprovalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_ApprovalsPayload>[]
          }
          create: {
            args: Prisma.Pending_ApprovalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_ApprovalsPayload>
          }
          createMany: {
            args: Prisma.Pending_ApprovalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Pending_ApprovalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_ApprovalsPayload>
          }
          update: {
            args: Prisma.Pending_ApprovalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_ApprovalsPayload>
          }
          deleteMany: {
            args: Prisma.Pending_ApprovalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Pending_ApprovalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Pending_ApprovalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_ApprovalsPayload>
          }
          aggregate: {
            args: Prisma.Pending_ApprovalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePending_Approvals>
          }
          groupBy: {
            args: Prisma.Pending_ApprovalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pending_ApprovalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Pending_ApprovalsCountArgs<ExtArgs>
            result: $Utils.Optional<Pending_ApprovalsCountAggregateOutputType> | number
          }
        }
      }
      Pending_Document: {
        payload: Prisma.$Pending_DocumentPayload<ExtArgs>
        fields: Prisma.Pending_DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Pending_DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Pending_DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_DocumentPayload>
          }
          findFirst: {
            args: Prisma.Pending_DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Pending_DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_DocumentPayload>
          }
          findMany: {
            args: Prisma.Pending_DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_DocumentPayload>[]
          }
          create: {
            args: Prisma.Pending_DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_DocumentPayload>
          }
          createMany: {
            args: Prisma.Pending_DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Pending_DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_DocumentPayload>
          }
          update: {
            args: Prisma.Pending_DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_DocumentPayload>
          }
          deleteMany: {
            args: Prisma.Pending_DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Pending_DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Pending_DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pending_DocumentPayload>
          }
          aggregate: {
            args: Prisma.Pending_DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePending_Document>
          }
          groupBy: {
            args: Prisma.Pending_DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pending_DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.Pending_DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<Pending_DocumentCountAggregateOutputType> | number
          }
        }
      }
      Release_Matrix: {
        payload: Prisma.$Release_MatrixPayload<ExtArgs>
        fields: Prisma.Release_MatrixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Release_MatrixFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_MatrixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Release_MatrixFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_MatrixPayload>
          }
          findFirst: {
            args: Prisma.Release_MatrixFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_MatrixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Release_MatrixFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_MatrixPayload>
          }
          findMany: {
            args: Prisma.Release_MatrixFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_MatrixPayload>[]
          }
          create: {
            args: Prisma.Release_MatrixCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_MatrixPayload>
          }
          createMany: {
            args: Prisma.Release_MatrixCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Release_MatrixDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_MatrixPayload>
          }
          update: {
            args: Prisma.Release_MatrixUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_MatrixPayload>
          }
          deleteMany: {
            args: Prisma.Release_MatrixDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Release_MatrixUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Release_MatrixUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_MatrixPayload>
          }
          aggregate: {
            args: Prisma.Release_MatrixAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelease_Matrix>
          }
          groupBy: {
            args: Prisma.Release_MatrixGroupByArgs<ExtArgs>
            result: $Utils.Optional<Release_MatrixGroupByOutputType>[]
          }
          count: {
            args: Prisma.Release_MatrixCountArgs<ExtArgs>
            result: $Utils.Optional<Release_MatrixCountAggregateOutputType> | number
          }
        }
      }
      Release_Matrix_CC: {
        payload: Prisma.$Release_Matrix_CCPayload<ExtArgs>
        fields: Prisma.Release_Matrix_CCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Release_Matrix_CCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_Matrix_CCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Release_Matrix_CCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_Matrix_CCPayload>
          }
          findFirst: {
            args: Prisma.Release_Matrix_CCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_Matrix_CCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Release_Matrix_CCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_Matrix_CCPayload>
          }
          findMany: {
            args: Prisma.Release_Matrix_CCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_Matrix_CCPayload>[]
          }
          create: {
            args: Prisma.Release_Matrix_CCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_Matrix_CCPayload>
          }
          createMany: {
            args: Prisma.Release_Matrix_CCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Release_Matrix_CCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_Matrix_CCPayload>
          }
          update: {
            args: Prisma.Release_Matrix_CCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_Matrix_CCPayload>
          }
          deleteMany: {
            args: Prisma.Release_Matrix_CCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Release_Matrix_CCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Release_Matrix_CCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Release_Matrix_CCPayload>
          }
          aggregate: {
            args: Prisma.Release_Matrix_CCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelease_Matrix_CC>
          }
          groupBy: {
            args: Prisma.Release_Matrix_CCGroupByArgs<ExtArgs>
            result: $Utils.Optional<Release_Matrix_CCGroupByOutputType>[]
          }
          count: {
            args: Prisma.Release_Matrix_CCCountArgs<ExtArgs>
            result: $Utils.Optional<Release_Matrix_CCCountAggregateOutputType> | number
          }
        }
      }
      Reports: {
        payload: Prisma.$ReportsPayload<ExtArgs>
        fields: Prisma.ReportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          findFirst: {
            args: Prisma.ReportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          findMany: {
            args: Prisma.ReportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>[]
          }
          create: {
            args: Prisma.ReportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          createMany: {
            args: Prisma.ReportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          update: {
            args: Prisma.ReportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          deleteMany: {
            args: Prisma.ReportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          aggregate: {
            args: Prisma.ReportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReports>
          }
          groupBy: {
            args: Prisma.ReportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportsCountArgs<ExtArgs>
            result: $Utils.Optional<ReportsCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Role_Detail: {
        payload: Prisma.$Role_DetailPayload<ExtArgs>
        fields: Prisma.Role_DetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Role_DetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role_DetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Role_DetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role_DetailPayload>
          }
          findFirst: {
            args: Prisma.Role_DetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role_DetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Role_DetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role_DetailPayload>
          }
          findMany: {
            args: Prisma.Role_DetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role_DetailPayload>[]
          }
          create: {
            args: Prisma.Role_DetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role_DetailPayload>
          }
          createMany: {
            args: Prisma.Role_DetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Role_DetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role_DetailPayload>
          }
          update: {
            args: Prisma.Role_DetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role_DetailPayload>
          }
          deleteMany: {
            args: Prisma.Role_DetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Role_DetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Role_DetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Role_DetailPayload>
          }
          aggregate: {
            args: Prisma.Role_DetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole_Detail>
          }
          groupBy: {
            args: Prisma.Role_DetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Role_DetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.Role_DetailCountArgs<ExtArgs>
            result: $Utils.Optional<Role_DetailCountAggregateOutputType> | number
          }
        }
      }
      User_Activity: {
        payload: Prisma.$User_ActivityPayload<ExtArgs>
        fields: Prisma.User_ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ActivityPayload>
          }
          findFirst: {
            args: Prisma.User_ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ActivityPayload>
          }
          findMany: {
            args: Prisma.User_ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ActivityPayload>[]
          }
          create: {
            args: Prisma.User_ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ActivityPayload>
          }
          createMany: {
            args: Prisma.User_ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.User_ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ActivityPayload>
          }
          update: {
            args: Prisma.User_ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ActivityPayload>
          }
          deleteMany: {
            args: Prisma.User_ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.User_ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ActivityPayload>
          }
          aggregate: {
            args: Prisma.User_ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_Activity>
          }
          groupBy: {
            args: Prisma.User_ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<User_ActivityCountAggregateOutputType> | number
          }
        }
      }
      User_ComLoc: {
        payload: Prisma.$User_ComLocPayload<ExtArgs>
        fields: Prisma.User_ComLocFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_ComLocFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ComLocPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_ComLocFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ComLocPayload>
          }
          findFirst: {
            args: Prisma.User_ComLocFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ComLocPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_ComLocFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ComLocPayload>
          }
          findMany: {
            args: Prisma.User_ComLocFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ComLocPayload>[]
          }
          create: {
            args: Prisma.User_ComLocCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ComLocPayload>
          }
          createMany: {
            args: Prisma.User_ComLocCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.User_ComLocDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ComLocPayload>
          }
          update: {
            args: Prisma.User_ComLocUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ComLocPayload>
          }
          deleteMany: {
            args: Prisma.User_ComLocDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_ComLocUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.User_ComLocUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_ComLocPayload>
          }
          aggregate: {
            args: Prisma.User_ComLocAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_ComLoc>
          }
          groupBy: {
            args: Prisma.User_ComLocGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_ComLocGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_ComLocCountArgs<ExtArgs>
            result: $Utils.Optional<User_ComLocCountAggregateOutputType> | number
          }
        }
      }
      User_Login: {
        payload: Prisma.$User_LoginPayload<ExtArgs>
        fields: Prisma.User_LoginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_LoginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_LoginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_LoginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_LoginPayload>
          }
          findFirst: {
            args: Prisma.User_LoginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_LoginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_LoginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_LoginPayload>
          }
          findMany: {
            args: Prisma.User_LoginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_LoginPayload>[]
          }
          create: {
            args: Prisma.User_LoginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_LoginPayload>
          }
          createMany: {
            args: Prisma.User_LoginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.User_LoginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_LoginPayload>
          }
          update: {
            args: Prisma.User_LoginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_LoginPayload>
          }
          deleteMany: {
            args: Prisma.User_LoginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_LoginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.User_LoginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_LoginPayload>
          }
          aggregate: {
            args: Prisma.User_LoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_Login>
          }
          groupBy: {
            args: Prisma.User_LoginGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_LoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_LoginCountArgs<ExtArgs>
            result: $Utils.Optional<User_LoginCountAggregateOutputType> | number
          }
        }
      }
      User_Role: {
        payload: Prisma.$User_RolePayload<ExtArgs>
        fields: Prisma.User_RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_RolePayload>
          }
          findFirst: {
            args: Prisma.User_RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_RolePayload>
          }
          findMany: {
            args: Prisma.User_RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_RolePayload>[]
          }
          create: {
            args: Prisma.User_RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_RolePayload>
          }
          createMany: {
            args: Prisma.User_RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.User_RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_RolePayload>
          }
          update: {
            args: Prisma.User_RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_RolePayload>
          }
          deleteMany: {
            args: Prisma.User_RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.User_RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_RolePayload>
          }
          aggregate: {
            args: Prisma.User_RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_Role>
          }
          groupBy: {
            args: Prisma.User_RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_RoleCountArgs<ExtArgs>
            result: $Utils.Optional<User_RoleCountAggregateOutputType> | number
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    Role_Detail: number
    User_Role: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Role_Detail?: boolean | RoleCountOutputTypeCountRole_DetailArgs
    User_Role?: boolean | RoleCountOutputTypeCountUser_RoleArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRole_DetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Role_DetailWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUser_RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_RoleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Notification_CC
   */

  export type AggregateNotification_CC = {
    _count: Notification_CCCountAggregateOutputType | null
    _avg: Notification_CCAvgAggregateOutputType | null
    _sum: Notification_CCSumAggregateOutputType | null
    _min: Notification_CCMinAggregateOutputType | null
    _max: Notification_CCMaxAggregateOutputType | null
  }

  export type Notification_CCAvgAggregateOutputType = {
    Id: number | null
  }

  export type Notification_CCSumAggregateOutputType = {
    Id: bigint | null
  }

  export type Notification_CCMinAggregateOutputType = {
    Id: bigint | null
    EmailTo: string | null
    EmailCC: string | null
  }

  export type Notification_CCMaxAggregateOutputType = {
    Id: bigint | null
    EmailTo: string | null
    EmailCC: string | null
  }

  export type Notification_CCCountAggregateOutputType = {
    Id: number
    EmailTo: number
    EmailCC: number
    _all: number
  }


  export type Notification_CCAvgAggregateInputType = {
    Id?: true
  }

  export type Notification_CCSumAggregateInputType = {
    Id?: true
  }

  export type Notification_CCMinAggregateInputType = {
    Id?: true
    EmailTo?: true
    EmailCC?: true
  }

  export type Notification_CCMaxAggregateInputType = {
    Id?: true
    EmailTo?: true
    EmailCC?: true
  }

  export type Notification_CCCountAggregateInputType = {
    Id?: true
    EmailTo?: true
    EmailCC?: true
    _all?: true
  }

  export type Notification_CCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification_CC to aggregate.
     */
    where?: Notification_CCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notification_CCS to fetch.
     */
    orderBy?: Notification_CCOrderByWithRelationInput | Notification_CCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Notification_CCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notification_CCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notification_CCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notification_CCS
    **/
    _count?: true | Notification_CCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Notification_CCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Notification_CCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Notification_CCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Notification_CCMaxAggregateInputType
  }

  export type GetNotification_CCAggregateType<T extends Notification_CCAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification_CC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification_CC[P]>
      : GetScalarType<T[P], AggregateNotification_CC[P]>
  }




  export type Notification_CCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Notification_CCWhereInput
    orderBy?: Notification_CCOrderByWithAggregationInput | Notification_CCOrderByWithAggregationInput[]
    by: Notification_CCScalarFieldEnum[] | Notification_CCScalarFieldEnum
    having?: Notification_CCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Notification_CCCountAggregateInputType | true
    _avg?: Notification_CCAvgAggregateInputType
    _sum?: Notification_CCSumAggregateInputType
    _min?: Notification_CCMinAggregateInputType
    _max?: Notification_CCMaxAggregateInputType
  }

  export type Notification_CCGroupByOutputType = {
    Id: bigint
    EmailTo: string | null
    EmailCC: string | null
    _count: Notification_CCCountAggregateOutputType | null
    _avg: Notification_CCAvgAggregateOutputType | null
    _sum: Notification_CCSumAggregateOutputType | null
    _min: Notification_CCMinAggregateOutputType | null
    _max: Notification_CCMaxAggregateOutputType | null
  }

  type GetNotification_CCGroupByPayload<T extends Notification_CCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Notification_CCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Notification_CCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Notification_CCGroupByOutputType[P]>
            : GetScalarType<T[P], Notification_CCGroupByOutputType[P]>
        }
      >
    >


  export type Notification_CCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    EmailTo?: boolean
    EmailCC?: boolean
  }, ExtArgs["result"]["notification_CC"]>


  export type Notification_CCSelectScalar = {
    Id?: boolean
    EmailTo?: boolean
    EmailCC?: boolean
  }


  export type $Notification_CCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification_CC"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      EmailTo: string | null
      EmailCC: string | null
    }, ExtArgs["result"]["notification_CC"]>
    composites: {}
  }

  type Notification_CCGetPayload<S extends boolean | null | undefined | Notification_CCDefaultArgs> = $Result.GetResult<Prisma.$Notification_CCPayload, S>

  type Notification_CCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Notification_CCFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Notification_CCCountAggregateInputType | true
    }

  export interface Notification_CCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification_CC'], meta: { name: 'Notification_CC' } }
    /**
     * Find zero or one Notification_CC that matches the filter.
     * @param {Notification_CCFindUniqueArgs} args - Arguments to find a Notification_CC
     * @example
     * // Get one Notification_CC
     * const notification_CC = await prisma.notification_CC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Notification_CCFindUniqueArgs>(args: SelectSubset<T, Notification_CCFindUniqueArgs<ExtArgs>>): Prisma__Notification_CCClient<$Result.GetResult<Prisma.$Notification_CCPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification_CC that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Notification_CCFindUniqueOrThrowArgs} args - Arguments to find a Notification_CC
     * @example
     * // Get one Notification_CC
     * const notification_CC = await prisma.notification_CC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Notification_CCFindUniqueOrThrowArgs>(args: SelectSubset<T, Notification_CCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Notification_CCClient<$Result.GetResult<Prisma.$Notification_CCPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification_CC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Notification_CCFindFirstArgs} args - Arguments to find a Notification_CC
     * @example
     * // Get one Notification_CC
     * const notification_CC = await prisma.notification_CC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Notification_CCFindFirstArgs>(args?: SelectSubset<T, Notification_CCFindFirstArgs<ExtArgs>>): Prisma__Notification_CCClient<$Result.GetResult<Prisma.$Notification_CCPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification_CC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Notification_CCFindFirstOrThrowArgs} args - Arguments to find a Notification_CC
     * @example
     * // Get one Notification_CC
     * const notification_CC = await prisma.notification_CC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Notification_CCFindFirstOrThrowArgs>(args?: SelectSubset<T, Notification_CCFindFirstOrThrowArgs<ExtArgs>>): Prisma__Notification_CCClient<$Result.GetResult<Prisma.$Notification_CCPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notification_CCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Notification_CCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notification_CCS
     * const notification_CCS = await prisma.notification_CC.findMany()
     * 
     * // Get first 10 Notification_CCS
     * const notification_CCS = await prisma.notification_CC.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const notification_CCWithIdOnly = await prisma.notification_CC.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Notification_CCFindManyArgs>(args?: SelectSubset<T, Notification_CCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Notification_CCPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification_CC.
     * @param {Notification_CCCreateArgs} args - Arguments to create a Notification_CC.
     * @example
     * // Create one Notification_CC
     * const Notification_CC = await prisma.notification_CC.create({
     *   data: {
     *     // ... data to create a Notification_CC
     *   }
     * })
     * 
     */
    create<T extends Notification_CCCreateArgs>(args: SelectSubset<T, Notification_CCCreateArgs<ExtArgs>>): Prisma__Notification_CCClient<$Result.GetResult<Prisma.$Notification_CCPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notification_CCS.
     * @param {Notification_CCCreateManyArgs} args - Arguments to create many Notification_CCS.
     * @example
     * // Create many Notification_CCS
     * const notification_CC = await prisma.notification_CC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Notification_CCCreateManyArgs>(args?: SelectSubset<T, Notification_CCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification_CC.
     * @param {Notification_CCDeleteArgs} args - Arguments to delete one Notification_CC.
     * @example
     * // Delete one Notification_CC
     * const Notification_CC = await prisma.notification_CC.delete({
     *   where: {
     *     // ... filter to delete one Notification_CC
     *   }
     * })
     * 
     */
    delete<T extends Notification_CCDeleteArgs>(args: SelectSubset<T, Notification_CCDeleteArgs<ExtArgs>>): Prisma__Notification_CCClient<$Result.GetResult<Prisma.$Notification_CCPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification_CC.
     * @param {Notification_CCUpdateArgs} args - Arguments to update one Notification_CC.
     * @example
     * // Update one Notification_CC
     * const notification_CC = await prisma.notification_CC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Notification_CCUpdateArgs>(args: SelectSubset<T, Notification_CCUpdateArgs<ExtArgs>>): Prisma__Notification_CCClient<$Result.GetResult<Prisma.$Notification_CCPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notification_CCS.
     * @param {Notification_CCDeleteManyArgs} args - Arguments to filter Notification_CCS to delete.
     * @example
     * // Delete a few Notification_CCS
     * const { count } = await prisma.notification_CC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Notification_CCDeleteManyArgs>(args?: SelectSubset<T, Notification_CCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notification_CCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Notification_CCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notification_CCS
     * const notification_CC = await prisma.notification_CC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Notification_CCUpdateManyArgs>(args: SelectSubset<T, Notification_CCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification_CC.
     * @param {Notification_CCUpsertArgs} args - Arguments to update or create a Notification_CC.
     * @example
     * // Update or create a Notification_CC
     * const notification_CC = await prisma.notification_CC.upsert({
     *   create: {
     *     // ... data to create a Notification_CC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification_CC we want to update
     *   }
     * })
     */
    upsert<T extends Notification_CCUpsertArgs>(args: SelectSubset<T, Notification_CCUpsertArgs<ExtArgs>>): Prisma__Notification_CCClient<$Result.GetResult<Prisma.$Notification_CCPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notification_CCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Notification_CCCountArgs} args - Arguments to filter Notification_CCS to count.
     * @example
     * // Count the number of Notification_CCS
     * const count = await prisma.notification_CC.count({
     *   where: {
     *     // ... the filter for the Notification_CCS we want to count
     *   }
     * })
    **/
    count<T extends Notification_CCCountArgs>(
      args?: Subset<T, Notification_CCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Notification_CCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification_CC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Notification_CCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Notification_CCAggregateArgs>(args: Subset<T, Notification_CCAggregateArgs>): Prisma.PrismaPromise<GetNotification_CCAggregateType<T>>

    /**
     * Group by Notification_CC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Notification_CCGroupByArgs} args - Group by arguments.
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
      T extends Notification_CCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Notification_CCGroupByArgs['orderBy'] }
        : { orderBy?: Notification_CCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Notification_CCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotification_CCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification_CC model
   */
  readonly fields: Notification_CCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification_CC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Notification_CCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Notification_CC model
   */ 
  interface Notification_CCFieldRefs {
    readonly Id: FieldRef<"Notification_CC", 'BigInt'>
    readonly EmailTo: FieldRef<"Notification_CC", 'String'>
    readonly EmailCC: FieldRef<"Notification_CC", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification_CC findUnique
   */
  export type Notification_CCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification_CC
     */
    select?: Notification_CCSelect<ExtArgs> | null
    /**
     * Filter, which Notification_CC to fetch.
     */
    where: Notification_CCWhereUniqueInput
  }

  /**
   * Notification_CC findUniqueOrThrow
   */
  export type Notification_CCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification_CC
     */
    select?: Notification_CCSelect<ExtArgs> | null
    /**
     * Filter, which Notification_CC to fetch.
     */
    where: Notification_CCWhereUniqueInput
  }

  /**
   * Notification_CC findFirst
   */
  export type Notification_CCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification_CC
     */
    select?: Notification_CCSelect<ExtArgs> | null
    /**
     * Filter, which Notification_CC to fetch.
     */
    where?: Notification_CCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notification_CCS to fetch.
     */
    orderBy?: Notification_CCOrderByWithRelationInput | Notification_CCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notification_CCS.
     */
    cursor?: Notification_CCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notification_CCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notification_CCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notification_CCS.
     */
    distinct?: Notification_CCScalarFieldEnum | Notification_CCScalarFieldEnum[]
  }

  /**
   * Notification_CC findFirstOrThrow
   */
  export type Notification_CCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification_CC
     */
    select?: Notification_CCSelect<ExtArgs> | null
    /**
     * Filter, which Notification_CC to fetch.
     */
    where?: Notification_CCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notification_CCS to fetch.
     */
    orderBy?: Notification_CCOrderByWithRelationInput | Notification_CCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notification_CCS.
     */
    cursor?: Notification_CCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notification_CCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notification_CCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notification_CCS.
     */
    distinct?: Notification_CCScalarFieldEnum | Notification_CCScalarFieldEnum[]
  }

  /**
   * Notification_CC findMany
   */
  export type Notification_CCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification_CC
     */
    select?: Notification_CCSelect<ExtArgs> | null
    /**
     * Filter, which Notification_CCS to fetch.
     */
    where?: Notification_CCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notification_CCS to fetch.
     */
    orderBy?: Notification_CCOrderByWithRelationInput | Notification_CCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notification_CCS.
     */
    cursor?: Notification_CCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notification_CCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notification_CCS.
     */
    skip?: number
    distinct?: Notification_CCScalarFieldEnum | Notification_CCScalarFieldEnum[]
  }

  /**
   * Notification_CC create
   */
  export type Notification_CCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification_CC
     */
    select?: Notification_CCSelect<ExtArgs> | null
    /**
     * The data needed to create a Notification_CC.
     */
    data?: XOR<Notification_CCCreateInput, Notification_CCUncheckedCreateInput>
  }

  /**
   * Notification_CC createMany
   */
  export type Notification_CCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notification_CCS.
     */
    data: Notification_CCCreateManyInput | Notification_CCCreateManyInput[]
  }

  /**
   * Notification_CC update
   */
  export type Notification_CCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification_CC
     */
    select?: Notification_CCSelect<ExtArgs> | null
    /**
     * The data needed to update a Notification_CC.
     */
    data: XOR<Notification_CCUpdateInput, Notification_CCUncheckedUpdateInput>
    /**
     * Choose, which Notification_CC to update.
     */
    where: Notification_CCWhereUniqueInput
  }

  /**
   * Notification_CC updateMany
   */
  export type Notification_CCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notification_CCS.
     */
    data: XOR<Notification_CCUpdateManyMutationInput, Notification_CCUncheckedUpdateManyInput>
    /**
     * Filter which Notification_CCS to update
     */
    where?: Notification_CCWhereInput
  }

  /**
   * Notification_CC upsert
   */
  export type Notification_CCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification_CC
     */
    select?: Notification_CCSelect<ExtArgs> | null
    /**
     * The filter to search for the Notification_CC to update in case it exists.
     */
    where: Notification_CCWhereUniqueInput
    /**
     * In case the Notification_CC found by the `where` argument doesn't exist, create a new Notification_CC with this data.
     */
    create: XOR<Notification_CCCreateInput, Notification_CCUncheckedCreateInput>
    /**
     * In case the Notification_CC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Notification_CCUpdateInput, Notification_CCUncheckedUpdateInput>
  }

  /**
   * Notification_CC delete
   */
  export type Notification_CCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification_CC
     */
    select?: Notification_CCSelect<ExtArgs> | null
    /**
     * Filter which Notification_CC to delete.
     */
    where: Notification_CCWhereUniqueInput
  }

  /**
   * Notification_CC deleteMany
   */
  export type Notification_CCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification_CCS to delete
     */
    where?: Notification_CCWhereInput
  }

  /**
   * Notification_CC without action
   */
  export type Notification_CCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification_CC
     */
    select?: Notification_CCSelect<ExtArgs> | null
  }


  /**
   * Model Pending_Approvals
   */

  export type AggregatePending_Approvals = {
    _count: Pending_ApprovalsCountAggregateOutputType | null
    _avg: Pending_ApprovalsAvgAggregateOutputType | null
    _sum: Pending_ApprovalsSumAggregateOutputType | null
    _min: Pending_ApprovalsMinAggregateOutputType | null
    _max: Pending_ApprovalsMaxAggregateOutputType | null
  }

  export type Pending_ApprovalsAvgAggregateOutputType = {
    Id: number | null
    Approve_Level: number | null
    Revision: number | null
  }

  export type Pending_ApprovalsSumAggregateOutputType = {
    Id: bigint | null
    Approve_Level: number | null
    Revision: number | null
  }

  export type Pending_ApprovalsMinAggregateOutputType = {
    Id: bigint | null
    Document_Type: string | null
    Document_Number: string | null
    Approver: string | null
    Approve_Level: number | null
    Status: boolean | null
    Revision: number | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Approver_Title: string | null
  }

  export type Pending_ApprovalsMaxAggregateOutputType = {
    Id: bigint | null
    Document_Type: string | null
    Document_Number: string | null
    Approver: string | null
    Approve_Level: number | null
    Status: boolean | null
    Revision: number | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Approver_Title: string | null
  }

  export type Pending_ApprovalsCountAggregateOutputType = {
    Id: number
    Document_Type: number
    Document_Number: number
    Approver: number
    Approve_Level: number
    Status: number
    Revision: number
    Created_At: number
    Created_By: number
    Updated_At: number
    Updated_By: number
    Approver_Title: number
    _all: number
  }


  export type Pending_ApprovalsAvgAggregateInputType = {
    Id?: true
    Approve_Level?: true
    Revision?: true
  }

  export type Pending_ApprovalsSumAggregateInputType = {
    Id?: true
    Approve_Level?: true
    Revision?: true
  }

  export type Pending_ApprovalsMinAggregateInputType = {
    Id?: true
    Document_Type?: true
    Document_Number?: true
    Approver?: true
    Approve_Level?: true
    Status?: true
    Revision?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Approver_Title?: true
  }

  export type Pending_ApprovalsMaxAggregateInputType = {
    Id?: true
    Document_Type?: true
    Document_Number?: true
    Approver?: true
    Approve_Level?: true
    Status?: true
    Revision?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Approver_Title?: true
  }

  export type Pending_ApprovalsCountAggregateInputType = {
    Id?: true
    Document_Type?: true
    Document_Number?: true
    Approver?: true
    Approve_Level?: true
    Status?: true
    Revision?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Approver_Title?: true
    _all?: true
  }

  export type Pending_ApprovalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pending_Approvals to aggregate.
     */
    where?: Pending_ApprovalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pending_Approvals to fetch.
     */
    orderBy?: Pending_ApprovalsOrderByWithRelationInput | Pending_ApprovalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Pending_ApprovalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pending_Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pending_Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pending_Approvals
    **/
    _count?: true | Pending_ApprovalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pending_ApprovalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pending_ApprovalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pending_ApprovalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pending_ApprovalsMaxAggregateInputType
  }

  export type GetPending_ApprovalsAggregateType<T extends Pending_ApprovalsAggregateArgs> = {
        [P in keyof T & keyof AggregatePending_Approvals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePending_Approvals[P]>
      : GetScalarType<T[P], AggregatePending_Approvals[P]>
  }




  export type Pending_ApprovalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Pending_ApprovalsWhereInput
    orderBy?: Pending_ApprovalsOrderByWithAggregationInput | Pending_ApprovalsOrderByWithAggregationInput[]
    by: Pending_ApprovalsScalarFieldEnum[] | Pending_ApprovalsScalarFieldEnum
    having?: Pending_ApprovalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pending_ApprovalsCountAggregateInputType | true
    _avg?: Pending_ApprovalsAvgAggregateInputType
    _sum?: Pending_ApprovalsSumAggregateInputType
    _min?: Pending_ApprovalsMinAggregateInputType
    _max?: Pending_ApprovalsMaxAggregateInputType
  }

  export type Pending_ApprovalsGroupByOutputType = {
    Id: bigint
    Document_Type: string | null
    Document_Number: string | null
    Approver: string | null
    Approve_Level: number
    Status: boolean | null
    Revision: number
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Approver_Title: string | null
    _count: Pending_ApprovalsCountAggregateOutputType | null
    _avg: Pending_ApprovalsAvgAggregateOutputType | null
    _sum: Pending_ApprovalsSumAggregateOutputType | null
    _min: Pending_ApprovalsMinAggregateOutputType | null
    _max: Pending_ApprovalsMaxAggregateOutputType | null
  }

  type GetPending_ApprovalsGroupByPayload<T extends Pending_ApprovalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pending_ApprovalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pending_ApprovalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pending_ApprovalsGroupByOutputType[P]>
            : GetScalarType<T[P], Pending_ApprovalsGroupByOutputType[P]>
        }
      >
    >


  export type Pending_ApprovalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Document_Type?: boolean
    Document_Number?: boolean
    Approver?: boolean
    Approve_Level?: boolean
    Status?: boolean
    Revision?: boolean
    Created_At?: boolean
    Created_By?: boolean
    Updated_At?: boolean
    Updated_By?: boolean
    Approver_Title?: boolean
  }, ExtArgs["result"]["pending_Approvals"]>


  export type Pending_ApprovalsSelectScalar = {
    Id?: boolean
    Document_Type?: boolean
    Document_Number?: boolean
    Approver?: boolean
    Approve_Level?: boolean
    Status?: boolean
    Revision?: boolean
    Created_At?: boolean
    Created_By?: boolean
    Updated_At?: boolean
    Updated_By?: boolean
    Approver_Title?: boolean
  }


  export type $Pending_ApprovalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pending_Approvals"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      Document_Type: string | null
      Document_Number: string | null
      Approver: string | null
      Approve_Level: number
      Status: boolean | null
      Revision: number
      Created_At: Date | null
      Created_By: string | null
      Updated_At: Date | null
      Updated_By: string | null
      Approver_Title: string | null
    }, ExtArgs["result"]["pending_Approvals"]>
    composites: {}
  }

  type Pending_ApprovalsGetPayload<S extends boolean | null | undefined | Pending_ApprovalsDefaultArgs> = $Result.GetResult<Prisma.$Pending_ApprovalsPayload, S>

  type Pending_ApprovalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Pending_ApprovalsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Pending_ApprovalsCountAggregateInputType | true
    }

  export interface Pending_ApprovalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pending_Approvals'], meta: { name: 'Pending_Approvals' } }
    /**
     * Find zero or one Pending_Approvals that matches the filter.
     * @param {Pending_ApprovalsFindUniqueArgs} args - Arguments to find a Pending_Approvals
     * @example
     * // Get one Pending_Approvals
     * const pending_Approvals = await prisma.pending_Approvals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Pending_ApprovalsFindUniqueArgs>(args: SelectSubset<T, Pending_ApprovalsFindUniqueArgs<ExtArgs>>): Prisma__Pending_ApprovalsClient<$Result.GetResult<Prisma.$Pending_ApprovalsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pending_Approvals that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Pending_ApprovalsFindUniqueOrThrowArgs} args - Arguments to find a Pending_Approvals
     * @example
     * // Get one Pending_Approvals
     * const pending_Approvals = await prisma.pending_Approvals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Pending_ApprovalsFindUniqueOrThrowArgs>(args: SelectSubset<T, Pending_ApprovalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Pending_ApprovalsClient<$Result.GetResult<Prisma.$Pending_ApprovalsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pending_Approvals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_ApprovalsFindFirstArgs} args - Arguments to find a Pending_Approvals
     * @example
     * // Get one Pending_Approvals
     * const pending_Approvals = await prisma.pending_Approvals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Pending_ApprovalsFindFirstArgs>(args?: SelectSubset<T, Pending_ApprovalsFindFirstArgs<ExtArgs>>): Prisma__Pending_ApprovalsClient<$Result.GetResult<Prisma.$Pending_ApprovalsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pending_Approvals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_ApprovalsFindFirstOrThrowArgs} args - Arguments to find a Pending_Approvals
     * @example
     * // Get one Pending_Approvals
     * const pending_Approvals = await prisma.pending_Approvals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Pending_ApprovalsFindFirstOrThrowArgs>(args?: SelectSubset<T, Pending_ApprovalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Pending_ApprovalsClient<$Result.GetResult<Prisma.$Pending_ApprovalsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pending_Approvals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_ApprovalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pending_Approvals
     * const pending_Approvals = await prisma.pending_Approvals.findMany()
     * 
     * // Get first 10 Pending_Approvals
     * const pending_Approvals = await prisma.pending_Approvals.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const pending_ApprovalsWithIdOnly = await prisma.pending_Approvals.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Pending_ApprovalsFindManyArgs>(args?: SelectSubset<T, Pending_ApprovalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Pending_ApprovalsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pending_Approvals.
     * @param {Pending_ApprovalsCreateArgs} args - Arguments to create a Pending_Approvals.
     * @example
     * // Create one Pending_Approvals
     * const Pending_Approvals = await prisma.pending_Approvals.create({
     *   data: {
     *     // ... data to create a Pending_Approvals
     *   }
     * })
     * 
     */
    create<T extends Pending_ApprovalsCreateArgs>(args: SelectSubset<T, Pending_ApprovalsCreateArgs<ExtArgs>>): Prisma__Pending_ApprovalsClient<$Result.GetResult<Prisma.$Pending_ApprovalsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pending_Approvals.
     * @param {Pending_ApprovalsCreateManyArgs} args - Arguments to create many Pending_Approvals.
     * @example
     * // Create many Pending_Approvals
     * const pending_Approvals = await prisma.pending_Approvals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Pending_ApprovalsCreateManyArgs>(args?: SelectSubset<T, Pending_ApprovalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pending_Approvals.
     * @param {Pending_ApprovalsDeleteArgs} args - Arguments to delete one Pending_Approvals.
     * @example
     * // Delete one Pending_Approvals
     * const Pending_Approvals = await prisma.pending_Approvals.delete({
     *   where: {
     *     // ... filter to delete one Pending_Approvals
     *   }
     * })
     * 
     */
    delete<T extends Pending_ApprovalsDeleteArgs>(args: SelectSubset<T, Pending_ApprovalsDeleteArgs<ExtArgs>>): Prisma__Pending_ApprovalsClient<$Result.GetResult<Prisma.$Pending_ApprovalsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pending_Approvals.
     * @param {Pending_ApprovalsUpdateArgs} args - Arguments to update one Pending_Approvals.
     * @example
     * // Update one Pending_Approvals
     * const pending_Approvals = await prisma.pending_Approvals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Pending_ApprovalsUpdateArgs>(args: SelectSubset<T, Pending_ApprovalsUpdateArgs<ExtArgs>>): Prisma__Pending_ApprovalsClient<$Result.GetResult<Prisma.$Pending_ApprovalsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pending_Approvals.
     * @param {Pending_ApprovalsDeleteManyArgs} args - Arguments to filter Pending_Approvals to delete.
     * @example
     * // Delete a few Pending_Approvals
     * const { count } = await prisma.pending_Approvals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Pending_ApprovalsDeleteManyArgs>(args?: SelectSubset<T, Pending_ApprovalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pending_Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_ApprovalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pending_Approvals
     * const pending_Approvals = await prisma.pending_Approvals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Pending_ApprovalsUpdateManyArgs>(args: SelectSubset<T, Pending_ApprovalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pending_Approvals.
     * @param {Pending_ApprovalsUpsertArgs} args - Arguments to update or create a Pending_Approvals.
     * @example
     * // Update or create a Pending_Approvals
     * const pending_Approvals = await prisma.pending_Approvals.upsert({
     *   create: {
     *     // ... data to create a Pending_Approvals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pending_Approvals we want to update
     *   }
     * })
     */
    upsert<T extends Pending_ApprovalsUpsertArgs>(args: SelectSubset<T, Pending_ApprovalsUpsertArgs<ExtArgs>>): Prisma__Pending_ApprovalsClient<$Result.GetResult<Prisma.$Pending_ApprovalsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pending_Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_ApprovalsCountArgs} args - Arguments to filter Pending_Approvals to count.
     * @example
     * // Count the number of Pending_Approvals
     * const count = await prisma.pending_Approvals.count({
     *   where: {
     *     // ... the filter for the Pending_Approvals we want to count
     *   }
     * })
    **/
    count<T extends Pending_ApprovalsCountArgs>(
      args?: Subset<T, Pending_ApprovalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pending_ApprovalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pending_Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_ApprovalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pending_ApprovalsAggregateArgs>(args: Subset<T, Pending_ApprovalsAggregateArgs>): Prisma.PrismaPromise<GetPending_ApprovalsAggregateType<T>>

    /**
     * Group by Pending_Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_ApprovalsGroupByArgs} args - Group by arguments.
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
      T extends Pending_ApprovalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pending_ApprovalsGroupByArgs['orderBy'] }
        : { orderBy?: Pending_ApprovalsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Pending_ApprovalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPending_ApprovalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pending_Approvals model
   */
  readonly fields: Pending_ApprovalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pending_Approvals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Pending_ApprovalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Pending_Approvals model
   */ 
  interface Pending_ApprovalsFieldRefs {
    readonly Id: FieldRef<"Pending_Approvals", 'BigInt'>
    readonly Document_Type: FieldRef<"Pending_Approvals", 'String'>
    readonly Document_Number: FieldRef<"Pending_Approvals", 'String'>
    readonly Approver: FieldRef<"Pending_Approvals", 'String'>
    readonly Approve_Level: FieldRef<"Pending_Approvals", 'Int'>
    readonly Status: FieldRef<"Pending_Approvals", 'Boolean'>
    readonly Revision: FieldRef<"Pending_Approvals", 'Int'>
    readonly Created_At: FieldRef<"Pending_Approvals", 'DateTime'>
    readonly Created_By: FieldRef<"Pending_Approvals", 'String'>
    readonly Updated_At: FieldRef<"Pending_Approvals", 'DateTime'>
    readonly Updated_By: FieldRef<"Pending_Approvals", 'String'>
    readonly Approver_Title: FieldRef<"Pending_Approvals", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pending_Approvals findUnique
   */
  export type Pending_ApprovalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Approvals
     */
    select?: Pending_ApprovalsSelect<ExtArgs> | null
    /**
     * Filter, which Pending_Approvals to fetch.
     */
    where: Pending_ApprovalsWhereUniqueInput
  }

  /**
   * Pending_Approvals findUniqueOrThrow
   */
  export type Pending_ApprovalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Approvals
     */
    select?: Pending_ApprovalsSelect<ExtArgs> | null
    /**
     * Filter, which Pending_Approvals to fetch.
     */
    where: Pending_ApprovalsWhereUniqueInput
  }

  /**
   * Pending_Approvals findFirst
   */
  export type Pending_ApprovalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Approvals
     */
    select?: Pending_ApprovalsSelect<ExtArgs> | null
    /**
     * Filter, which Pending_Approvals to fetch.
     */
    where?: Pending_ApprovalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pending_Approvals to fetch.
     */
    orderBy?: Pending_ApprovalsOrderByWithRelationInput | Pending_ApprovalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pending_Approvals.
     */
    cursor?: Pending_ApprovalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pending_Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pending_Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pending_Approvals.
     */
    distinct?: Pending_ApprovalsScalarFieldEnum | Pending_ApprovalsScalarFieldEnum[]
  }

  /**
   * Pending_Approvals findFirstOrThrow
   */
  export type Pending_ApprovalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Approvals
     */
    select?: Pending_ApprovalsSelect<ExtArgs> | null
    /**
     * Filter, which Pending_Approvals to fetch.
     */
    where?: Pending_ApprovalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pending_Approvals to fetch.
     */
    orderBy?: Pending_ApprovalsOrderByWithRelationInput | Pending_ApprovalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pending_Approvals.
     */
    cursor?: Pending_ApprovalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pending_Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pending_Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pending_Approvals.
     */
    distinct?: Pending_ApprovalsScalarFieldEnum | Pending_ApprovalsScalarFieldEnum[]
  }

  /**
   * Pending_Approvals findMany
   */
  export type Pending_ApprovalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Approvals
     */
    select?: Pending_ApprovalsSelect<ExtArgs> | null
    /**
     * Filter, which Pending_Approvals to fetch.
     */
    where?: Pending_ApprovalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pending_Approvals to fetch.
     */
    orderBy?: Pending_ApprovalsOrderByWithRelationInput | Pending_ApprovalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pending_Approvals.
     */
    cursor?: Pending_ApprovalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pending_Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pending_Approvals.
     */
    skip?: number
    distinct?: Pending_ApprovalsScalarFieldEnum | Pending_ApprovalsScalarFieldEnum[]
  }

  /**
   * Pending_Approvals create
   */
  export type Pending_ApprovalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Approvals
     */
    select?: Pending_ApprovalsSelect<ExtArgs> | null
    /**
     * The data needed to create a Pending_Approvals.
     */
    data?: XOR<Pending_ApprovalsCreateInput, Pending_ApprovalsUncheckedCreateInput>
  }

  /**
   * Pending_Approvals createMany
   */
  export type Pending_ApprovalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pending_Approvals.
     */
    data: Pending_ApprovalsCreateManyInput | Pending_ApprovalsCreateManyInput[]
  }

  /**
   * Pending_Approvals update
   */
  export type Pending_ApprovalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Approvals
     */
    select?: Pending_ApprovalsSelect<ExtArgs> | null
    /**
     * The data needed to update a Pending_Approvals.
     */
    data: XOR<Pending_ApprovalsUpdateInput, Pending_ApprovalsUncheckedUpdateInput>
    /**
     * Choose, which Pending_Approvals to update.
     */
    where: Pending_ApprovalsWhereUniqueInput
  }

  /**
   * Pending_Approvals updateMany
   */
  export type Pending_ApprovalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pending_Approvals.
     */
    data: XOR<Pending_ApprovalsUpdateManyMutationInput, Pending_ApprovalsUncheckedUpdateManyInput>
    /**
     * Filter which Pending_Approvals to update
     */
    where?: Pending_ApprovalsWhereInput
  }

  /**
   * Pending_Approvals upsert
   */
  export type Pending_ApprovalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Approvals
     */
    select?: Pending_ApprovalsSelect<ExtArgs> | null
    /**
     * The filter to search for the Pending_Approvals to update in case it exists.
     */
    where: Pending_ApprovalsWhereUniqueInput
    /**
     * In case the Pending_Approvals found by the `where` argument doesn't exist, create a new Pending_Approvals with this data.
     */
    create: XOR<Pending_ApprovalsCreateInput, Pending_ApprovalsUncheckedCreateInput>
    /**
     * In case the Pending_Approvals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Pending_ApprovalsUpdateInput, Pending_ApprovalsUncheckedUpdateInput>
  }

  /**
   * Pending_Approvals delete
   */
  export type Pending_ApprovalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Approvals
     */
    select?: Pending_ApprovalsSelect<ExtArgs> | null
    /**
     * Filter which Pending_Approvals to delete.
     */
    where: Pending_ApprovalsWhereUniqueInput
  }

  /**
   * Pending_Approvals deleteMany
   */
  export type Pending_ApprovalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pending_Approvals to delete
     */
    where?: Pending_ApprovalsWhereInput
  }

  /**
   * Pending_Approvals without action
   */
  export type Pending_ApprovalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Approvals
     */
    select?: Pending_ApprovalsSelect<ExtArgs> | null
  }


  /**
   * Model Pending_Document
   */

  export type AggregatePending_Document = {
    _count: Pending_DocumentCountAggregateOutputType | null
    _avg: Pending_DocumentAvgAggregateOutputType | null
    _sum: Pending_DocumentSumAggregateOutputType | null
    _min: Pending_DocumentMinAggregateOutputType | null
    _max: Pending_DocumentMaxAggregateOutputType | null
  }

  export type Pending_DocumentAvgAggregateOutputType = {
    Id: number | null
  }

  export type Pending_DocumentSumAggregateOutputType = {
    Id: bigint | null
  }

  export type Pending_DocumentMinAggregateOutputType = {
    Id: bigint | null
    Document_Type: string | null
    Document_No: string | null
    Transaction_Date: Date | null
    Recipient_To: string | null
    Recipient_CC: string | null
    Recipient_Bcc: string | null
    Subject: string | null
    Telegram_Body: string | null
    Body: string | null
    Is_Read: boolean | null
    Read_Date: Date | null
    Read_Result: string | null
    Is_Sent: boolean | null
    Sent_Date: Date | null
    Sent_Result: string | null
    Status: boolean | null
    Status_By: string | null
    Status_Date: Date | null
    Remarks: string | null
    Created_By: string | null
    Created_At: Date | null
    ComLocID: string | null
  }

  export type Pending_DocumentMaxAggregateOutputType = {
    Id: bigint | null
    Document_Type: string | null
    Document_No: string | null
    Transaction_Date: Date | null
    Recipient_To: string | null
    Recipient_CC: string | null
    Recipient_Bcc: string | null
    Subject: string | null
    Telegram_Body: string | null
    Body: string | null
    Is_Read: boolean | null
    Read_Date: Date | null
    Read_Result: string | null
    Is_Sent: boolean | null
    Sent_Date: Date | null
    Sent_Result: string | null
    Status: boolean | null
    Status_By: string | null
    Status_Date: Date | null
    Remarks: string | null
    Created_By: string | null
    Created_At: Date | null
    ComLocID: string | null
  }

  export type Pending_DocumentCountAggregateOutputType = {
    Id: number
    Document_Type: number
    Document_No: number
    Transaction_Date: number
    Recipient_To: number
    Recipient_CC: number
    Recipient_Bcc: number
    Subject: number
    Telegram_Body: number
    Body: number
    Is_Read: number
    Read_Date: number
    Read_Result: number
    Is_Sent: number
    Sent_Date: number
    Sent_Result: number
    Status: number
    Status_By: number
    Status_Date: number
    Remarks: number
    Created_By: number
    Created_At: number
    ComLocID: number
    _all: number
  }


  export type Pending_DocumentAvgAggregateInputType = {
    Id?: true
  }

  export type Pending_DocumentSumAggregateInputType = {
    Id?: true
  }

  export type Pending_DocumentMinAggregateInputType = {
    Id?: true
    Document_Type?: true
    Document_No?: true
    Transaction_Date?: true
    Recipient_To?: true
    Recipient_CC?: true
    Recipient_Bcc?: true
    Subject?: true
    Telegram_Body?: true
    Body?: true
    Is_Read?: true
    Read_Date?: true
    Read_Result?: true
    Is_Sent?: true
    Sent_Date?: true
    Sent_Result?: true
    Status?: true
    Status_By?: true
    Status_Date?: true
    Remarks?: true
    Created_By?: true
    Created_At?: true
    ComLocID?: true
  }

  export type Pending_DocumentMaxAggregateInputType = {
    Id?: true
    Document_Type?: true
    Document_No?: true
    Transaction_Date?: true
    Recipient_To?: true
    Recipient_CC?: true
    Recipient_Bcc?: true
    Subject?: true
    Telegram_Body?: true
    Body?: true
    Is_Read?: true
    Read_Date?: true
    Read_Result?: true
    Is_Sent?: true
    Sent_Date?: true
    Sent_Result?: true
    Status?: true
    Status_By?: true
    Status_Date?: true
    Remarks?: true
    Created_By?: true
    Created_At?: true
    ComLocID?: true
  }

  export type Pending_DocumentCountAggregateInputType = {
    Id?: true
    Document_Type?: true
    Document_No?: true
    Transaction_Date?: true
    Recipient_To?: true
    Recipient_CC?: true
    Recipient_Bcc?: true
    Subject?: true
    Telegram_Body?: true
    Body?: true
    Is_Read?: true
    Read_Date?: true
    Read_Result?: true
    Is_Sent?: true
    Sent_Date?: true
    Sent_Result?: true
    Status?: true
    Status_By?: true
    Status_Date?: true
    Remarks?: true
    Created_By?: true
    Created_At?: true
    ComLocID?: true
    _all?: true
  }

  export type Pending_DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pending_Document to aggregate.
     */
    where?: Pending_DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pending_Documents to fetch.
     */
    orderBy?: Pending_DocumentOrderByWithRelationInput | Pending_DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Pending_DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pending_Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pending_Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pending_Documents
    **/
    _count?: true | Pending_DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pending_DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pending_DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pending_DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pending_DocumentMaxAggregateInputType
  }

  export type GetPending_DocumentAggregateType<T extends Pending_DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregatePending_Document]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePending_Document[P]>
      : GetScalarType<T[P], AggregatePending_Document[P]>
  }




  export type Pending_DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Pending_DocumentWhereInput
    orderBy?: Pending_DocumentOrderByWithAggregationInput | Pending_DocumentOrderByWithAggregationInput[]
    by: Pending_DocumentScalarFieldEnum[] | Pending_DocumentScalarFieldEnum
    having?: Pending_DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pending_DocumentCountAggregateInputType | true
    _avg?: Pending_DocumentAvgAggregateInputType
    _sum?: Pending_DocumentSumAggregateInputType
    _min?: Pending_DocumentMinAggregateInputType
    _max?: Pending_DocumentMaxAggregateInputType
  }

  export type Pending_DocumentGroupByOutputType = {
    Id: bigint
    Document_Type: string | null
    Document_No: string | null
    Transaction_Date: Date | null
    Recipient_To: string | null
    Recipient_CC: string | null
    Recipient_Bcc: string | null
    Subject: string | null
    Telegram_Body: string | null
    Body: string | null
    Is_Read: boolean
    Read_Date: Date | null
    Read_Result: string | null
    Is_Sent: boolean
    Sent_Date: Date | null
    Sent_Result: string | null
    Status: boolean | null
    Status_By: string | null
    Status_Date: Date | null
    Remarks: string | null
    Created_By: string | null
    Created_At: Date | null
    ComLocID: string | null
    _count: Pending_DocumentCountAggregateOutputType | null
    _avg: Pending_DocumentAvgAggregateOutputType | null
    _sum: Pending_DocumentSumAggregateOutputType | null
    _min: Pending_DocumentMinAggregateOutputType | null
    _max: Pending_DocumentMaxAggregateOutputType | null
  }

  type GetPending_DocumentGroupByPayload<T extends Pending_DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pending_DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pending_DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pending_DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], Pending_DocumentGroupByOutputType[P]>
        }
      >
    >


  export type Pending_DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Document_Type?: boolean
    Document_No?: boolean
    Transaction_Date?: boolean
    Recipient_To?: boolean
    Recipient_CC?: boolean
    Recipient_Bcc?: boolean
    Subject?: boolean
    Telegram_Body?: boolean
    Body?: boolean
    Is_Read?: boolean
    Read_Date?: boolean
    Read_Result?: boolean
    Is_Sent?: boolean
    Sent_Date?: boolean
    Sent_Result?: boolean
    Status?: boolean
    Status_By?: boolean
    Status_Date?: boolean
    Remarks?: boolean
    Created_By?: boolean
    Created_At?: boolean
    ComLocID?: boolean
  }, ExtArgs["result"]["pending_Document"]>


  export type Pending_DocumentSelectScalar = {
    Id?: boolean
    Document_Type?: boolean
    Document_No?: boolean
    Transaction_Date?: boolean
    Recipient_To?: boolean
    Recipient_CC?: boolean
    Recipient_Bcc?: boolean
    Subject?: boolean
    Telegram_Body?: boolean
    Body?: boolean
    Is_Read?: boolean
    Read_Date?: boolean
    Read_Result?: boolean
    Is_Sent?: boolean
    Sent_Date?: boolean
    Sent_Result?: boolean
    Status?: boolean
    Status_By?: boolean
    Status_Date?: boolean
    Remarks?: boolean
    Created_By?: boolean
    Created_At?: boolean
    ComLocID?: boolean
  }


  export type $Pending_DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pending_Document"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      Document_Type: string | null
      Document_No: string | null
      Transaction_Date: Date | null
      Recipient_To: string | null
      Recipient_CC: string | null
      Recipient_Bcc: string | null
      Subject: string | null
      Telegram_Body: string | null
      Body: string | null
      Is_Read: boolean
      Read_Date: Date | null
      Read_Result: string | null
      Is_Sent: boolean
      Sent_Date: Date | null
      Sent_Result: string | null
      Status: boolean | null
      Status_By: string | null
      Status_Date: Date | null
      Remarks: string | null
      Created_By: string | null
      Created_At: Date | null
      ComLocID: string | null
    }, ExtArgs["result"]["pending_Document"]>
    composites: {}
  }

  type Pending_DocumentGetPayload<S extends boolean | null | undefined | Pending_DocumentDefaultArgs> = $Result.GetResult<Prisma.$Pending_DocumentPayload, S>

  type Pending_DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Pending_DocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Pending_DocumentCountAggregateInputType | true
    }

  export interface Pending_DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pending_Document'], meta: { name: 'Pending_Document' } }
    /**
     * Find zero or one Pending_Document that matches the filter.
     * @param {Pending_DocumentFindUniqueArgs} args - Arguments to find a Pending_Document
     * @example
     * // Get one Pending_Document
     * const pending_Document = await prisma.pending_Document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Pending_DocumentFindUniqueArgs>(args: SelectSubset<T, Pending_DocumentFindUniqueArgs<ExtArgs>>): Prisma__Pending_DocumentClient<$Result.GetResult<Prisma.$Pending_DocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pending_Document that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Pending_DocumentFindUniqueOrThrowArgs} args - Arguments to find a Pending_Document
     * @example
     * // Get one Pending_Document
     * const pending_Document = await prisma.pending_Document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Pending_DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, Pending_DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Pending_DocumentClient<$Result.GetResult<Prisma.$Pending_DocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pending_Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_DocumentFindFirstArgs} args - Arguments to find a Pending_Document
     * @example
     * // Get one Pending_Document
     * const pending_Document = await prisma.pending_Document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Pending_DocumentFindFirstArgs>(args?: SelectSubset<T, Pending_DocumentFindFirstArgs<ExtArgs>>): Prisma__Pending_DocumentClient<$Result.GetResult<Prisma.$Pending_DocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pending_Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_DocumentFindFirstOrThrowArgs} args - Arguments to find a Pending_Document
     * @example
     * // Get one Pending_Document
     * const pending_Document = await prisma.pending_Document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Pending_DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, Pending_DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__Pending_DocumentClient<$Result.GetResult<Prisma.$Pending_DocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pending_Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pending_Documents
     * const pending_Documents = await prisma.pending_Document.findMany()
     * 
     * // Get first 10 Pending_Documents
     * const pending_Documents = await prisma.pending_Document.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const pending_DocumentWithIdOnly = await prisma.pending_Document.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Pending_DocumentFindManyArgs>(args?: SelectSubset<T, Pending_DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Pending_DocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pending_Document.
     * @param {Pending_DocumentCreateArgs} args - Arguments to create a Pending_Document.
     * @example
     * // Create one Pending_Document
     * const Pending_Document = await prisma.pending_Document.create({
     *   data: {
     *     // ... data to create a Pending_Document
     *   }
     * })
     * 
     */
    create<T extends Pending_DocumentCreateArgs>(args: SelectSubset<T, Pending_DocumentCreateArgs<ExtArgs>>): Prisma__Pending_DocumentClient<$Result.GetResult<Prisma.$Pending_DocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pending_Documents.
     * @param {Pending_DocumentCreateManyArgs} args - Arguments to create many Pending_Documents.
     * @example
     * // Create many Pending_Documents
     * const pending_Document = await prisma.pending_Document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Pending_DocumentCreateManyArgs>(args?: SelectSubset<T, Pending_DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pending_Document.
     * @param {Pending_DocumentDeleteArgs} args - Arguments to delete one Pending_Document.
     * @example
     * // Delete one Pending_Document
     * const Pending_Document = await prisma.pending_Document.delete({
     *   where: {
     *     // ... filter to delete one Pending_Document
     *   }
     * })
     * 
     */
    delete<T extends Pending_DocumentDeleteArgs>(args: SelectSubset<T, Pending_DocumentDeleteArgs<ExtArgs>>): Prisma__Pending_DocumentClient<$Result.GetResult<Prisma.$Pending_DocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pending_Document.
     * @param {Pending_DocumentUpdateArgs} args - Arguments to update one Pending_Document.
     * @example
     * // Update one Pending_Document
     * const pending_Document = await prisma.pending_Document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Pending_DocumentUpdateArgs>(args: SelectSubset<T, Pending_DocumentUpdateArgs<ExtArgs>>): Prisma__Pending_DocumentClient<$Result.GetResult<Prisma.$Pending_DocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pending_Documents.
     * @param {Pending_DocumentDeleteManyArgs} args - Arguments to filter Pending_Documents to delete.
     * @example
     * // Delete a few Pending_Documents
     * const { count } = await prisma.pending_Document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Pending_DocumentDeleteManyArgs>(args?: SelectSubset<T, Pending_DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pending_Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pending_Documents
     * const pending_Document = await prisma.pending_Document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Pending_DocumentUpdateManyArgs>(args: SelectSubset<T, Pending_DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pending_Document.
     * @param {Pending_DocumentUpsertArgs} args - Arguments to update or create a Pending_Document.
     * @example
     * // Update or create a Pending_Document
     * const pending_Document = await prisma.pending_Document.upsert({
     *   create: {
     *     // ... data to create a Pending_Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pending_Document we want to update
     *   }
     * })
     */
    upsert<T extends Pending_DocumentUpsertArgs>(args: SelectSubset<T, Pending_DocumentUpsertArgs<ExtArgs>>): Prisma__Pending_DocumentClient<$Result.GetResult<Prisma.$Pending_DocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pending_Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_DocumentCountArgs} args - Arguments to filter Pending_Documents to count.
     * @example
     * // Count the number of Pending_Documents
     * const count = await prisma.pending_Document.count({
     *   where: {
     *     // ... the filter for the Pending_Documents we want to count
     *   }
     * })
    **/
    count<T extends Pending_DocumentCountArgs>(
      args?: Subset<T, Pending_DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pending_DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pending_Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pending_DocumentAggregateArgs>(args: Subset<T, Pending_DocumentAggregateArgs>): Prisma.PrismaPromise<GetPending_DocumentAggregateType<T>>

    /**
     * Group by Pending_Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pending_DocumentGroupByArgs} args - Group by arguments.
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
      T extends Pending_DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pending_DocumentGroupByArgs['orderBy'] }
        : { orderBy?: Pending_DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Pending_DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPending_DocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pending_Document model
   */
  readonly fields: Pending_DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pending_Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Pending_DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Pending_Document model
   */ 
  interface Pending_DocumentFieldRefs {
    readonly Id: FieldRef<"Pending_Document", 'BigInt'>
    readonly Document_Type: FieldRef<"Pending_Document", 'String'>
    readonly Document_No: FieldRef<"Pending_Document", 'String'>
    readonly Transaction_Date: FieldRef<"Pending_Document", 'DateTime'>
    readonly Recipient_To: FieldRef<"Pending_Document", 'String'>
    readonly Recipient_CC: FieldRef<"Pending_Document", 'String'>
    readonly Recipient_Bcc: FieldRef<"Pending_Document", 'String'>
    readonly Subject: FieldRef<"Pending_Document", 'String'>
    readonly Telegram_Body: FieldRef<"Pending_Document", 'String'>
    readonly Body: FieldRef<"Pending_Document", 'String'>
    readonly Is_Read: FieldRef<"Pending_Document", 'Boolean'>
    readonly Read_Date: FieldRef<"Pending_Document", 'DateTime'>
    readonly Read_Result: FieldRef<"Pending_Document", 'String'>
    readonly Is_Sent: FieldRef<"Pending_Document", 'Boolean'>
    readonly Sent_Date: FieldRef<"Pending_Document", 'DateTime'>
    readonly Sent_Result: FieldRef<"Pending_Document", 'String'>
    readonly Status: FieldRef<"Pending_Document", 'Boolean'>
    readonly Status_By: FieldRef<"Pending_Document", 'String'>
    readonly Status_Date: FieldRef<"Pending_Document", 'DateTime'>
    readonly Remarks: FieldRef<"Pending_Document", 'String'>
    readonly Created_By: FieldRef<"Pending_Document", 'String'>
    readonly Created_At: FieldRef<"Pending_Document", 'DateTime'>
    readonly ComLocID: FieldRef<"Pending_Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pending_Document findUnique
   */
  export type Pending_DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Document
     */
    select?: Pending_DocumentSelect<ExtArgs> | null
    /**
     * Filter, which Pending_Document to fetch.
     */
    where: Pending_DocumentWhereUniqueInput
  }

  /**
   * Pending_Document findUniqueOrThrow
   */
  export type Pending_DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Document
     */
    select?: Pending_DocumentSelect<ExtArgs> | null
    /**
     * Filter, which Pending_Document to fetch.
     */
    where: Pending_DocumentWhereUniqueInput
  }

  /**
   * Pending_Document findFirst
   */
  export type Pending_DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Document
     */
    select?: Pending_DocumentSelect<ExtArgs> | null
    /**
     * Filter, which Pending_Document to fetch.
     */
    where?: Pending_DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pending_Documents to fetch.
     */
    orderBy?: Pending_DocumentOrderByWithRelationInput | Pending_DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pending_Documents.
     */
    cursor?: Pending_DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pending_Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pending_Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pending_Documents.
     */
    distinct?: Pending_DocumentScalarFieldEnum | Pending_DocumentScalarFieldEnum[]
  }

  /**
   * Pending_Document findFirstOrThrow
   */
  export type Pending_DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Document
     */
    select?: Pending_DocumentSelect<ExtArgs> | null
    /**
     * Filter, which Pending_Document to fetch.
     */
    where?: Pending_DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pending_Documents to fetch.
     */
    orderBy?: Pending_DocumentOrderByWithRelationInput | Pending_DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pending_Documents.
     */
    cursor?: Pending_DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pending_Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pending_Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pending_Documents.
     */
    distinct?: Pending_DocumentScalarFieldEnum | Pending_DocumentScalarFieldEnum[]
  }

  /**
   * Pending_Document findMany
   */
  export type Pending_DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Document
     */
    select?: Pending_DocumentSelect<ExtArgs> | null
    /**
     * Filter, which Pending_Documents to fetch.
     */
    where?: Pending_DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pending_Documents to fetch.
     */
    orderBy?: Pending_DocumentOrderByWithRelationInput | Pending_DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pending_Documents.
     */
    cursor?: Pending_DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pending_Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pending_Documents.
     */
    skip?: number
    distinct?: Pending_DocumentScalarFieldEnum | Pending_DocumentScalarFieldEnum[]
  }

  /**
   * Pending_Document create
   */
  export type Pending_DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Document
     */
    select?: Pending_DocumentSelect<ExtArgs> | null
    /**
     * The data needed to create a Pending_Document.
     */
    data?: XOR<Pending_DocumentCreateInput, Pending_DocumentUncheckedCreateInput>
  }

  /**
   * Pending_Document createMany
   */
  export type Pending_DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pending_Documents.
     */
    data: Pending_DocumentCreateManyInput | Pending_DocumentCreateManyInput[]
  }

  /**
   * Pending_Document update
   */
  export type Pending_DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Document
     */
    select?: Pending_DocumentSelect<ExtArgs> | null
    /**
     * The data needed to update a Pending_Document.
     */
    data: XOR<Pending_DocumentUpdateInput, Pending_DocumentUncheckedUpdateInput>
    /**
     * Choose, which Pending_Document to update.
     */
    where: Pending_DocumentWhereUniqueInput
  }

  /**
   * Pending_Document updateMany
   */
  export type Pending_DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pending_Documents.
     */
    data: XOR<Pending_DocumentUpdateManyMutationInput, Pending_DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Pending_Documents to update
     */
    where?: Pending_DocumentWhereInput
  }

  /**
   * Pending_Document upsert
   */
  export type Pending_DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Document
     */
    select?: Pending_DocumentSelect<ExtArgs> | null
    /**
     * The filter to search for the Pending_Document to update in case it exists.
     */
    where: Pending_DocumentWhereUniqueInput
    /**
     * In case the Pending_Document found by the `where` argument doesn't exist, create a new Pending_Document with this data.
     */
    create: XOR<Pending_DocumentCreateInput, Pending_DocumentUncheckedCreateInput>
    /**
     * In case the Pending_Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Pending_DocumentUpdateInput, Pending_DocumentUncheckedUpdateInput>
  }

  /**
   * Pending_Document delete
   */
  export type Pending_DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Document
     */
    select?: Pending_DocumentSelect<ExtArgs> | null
    /**
     * Filter which Pending_Document to delete.
     */
    where: Pending_DocumentWhereUniqueInput
  }

  /**
   * Pending_Document deleteMany
   */
  export type Pending_DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pending_Documents to delete
     */
    where?: Pending_DocumentWhereInput
  }

  /**
   * Pending_Document without action
   */
  export type Pending_DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending_Document
     */
    select?: Pending_DocumentSelect<ExtArgs> | null
  }


  /**
   * Model Release_Matrix
   */

  export type AggregateRelease_Matrix = {
    _count: Release_MatrixCountAggregateOutputType | null
    _avg: Release_MatrixAvgAggregateOutputType | null
    _sum: Release_MatrixSumAggregateOutputType | null
    _min: Release_MatrixMinAggregateOutputType | null
    _max: Release_MatrixMaxAggregateOutputType | null
  }

  export type Release_MatrixAvgAggregateOutputType = {
    Id: number | null
    Approval_Level: number | null
  }

  export type Release_MatrixSumAggregateOutputType = {
    Id: bigint | null
    Approval_Level: number | null
  }

  export type Release_MatrixMinAggregateOutputType = {
    Id: bigint | null
    CompanyId: string | null
    ComLocId: string | null
    Document_Type: string | null
    Approver: string | null
    Approval_Level: number | null
    OrganizationCode: string | null
    Approver_Title: string | null
  }

  export type Release_MatrixMaxAggregateOutputType = {
    Id: bigint | null
    CompanyId: string | null
    ComLocId: string | null
    Document_Type: string | null
    Approver: string | null
    Approval_Level: number | null
    OrganizationCode: string | null
    Approver_Title: string | null
  }

  export type Release_MatrixCountAggregateOutputType = {
    Id: number
    CompanyId: number
    ComLocId: number
    Document_Type: number
    Approver: number
    Approval_Level: number
    OrganizationCode: number
    Approver_Title: number
    _all: number
  }


  export type Release_MatrixAvgAggregateInputType = {
    Id?: true
    Approval_Level?: true
  }

  export type Release_MatrixSumAggregateInputType = {
    Id?: true
    Approval_Level?: true
  }

  export type Release_MatrixMinAggregateInputType = {
    Id?: true
    CompanyId?: true
    ComLocId?: true
    Document_Type?: true
    Approver?: true
    Approval_Level?: true
    OrganizationCode?: true
    Approver_Title?: true
  }

  export type Release_MatrixMaxAggregateInputType = {
    Id?: true
    CompanyId?: true
    ComLocId?: true
    Document_Type?: true
    Approver?: true
    Approval_Level?: true
    OrganizationCode?: true
    Approver_Title?: true
  }

  export type Release_MatrixCountAggregateInputType = {
    Id?: true
    CompanyId?: true
    ComLocId?: true
    Document_Type?: true
    Approver?: true
    Approval_Level?: true
    OrganizationCode?: true
    Approver_Title?: true
    _all?: true
  }

  export type Release_MatrixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Release_Matrix to aggregate.
     */
    where?: Release_MatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Release_Matrices to fetch.
     */
    orderBy?: Release_MatrixOrderByWithRelationInput | Release_MatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Release_MatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Release_Matrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Release_Matrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Release_Matrices
    **/
    _count?: true | Release_MatrixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Release_MatrixAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Release_MatrixSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Release_MatrixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Release_MatrixMaxAggregateInputType
  }

  export type GetRelease_MatrixAggregateType<T extends Release_MatrixAggregateArgs> = {
        [P in keyof T & keyof AggregateRelease_Matrix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelease_Matrix[P]>
      : GetScalarType<T[P], AggregateRelease_Matrix[P]>
  }




  export type Release_MatrixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Release_MatrixWhereInput
    orderBy?: Release_MatrixOrderByWithAggregationInput | Release_MatrixOrderByWithAggregationInput[]
    by: Release_MatrixScalarFieldEnum[] | Release_MatrixScalarFieldEnum
    having?: Release_MatrixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Release_MatrixCountAggregateInputType | true
    _avg?: Release_MatrixAvgAggregateInputType
    _sum?: Release_MatrixSumAggregateInputType
    _min?: Release_MatrixMinAggregateInputType
    _max?: Release_MatrixMaxAggregateInputType
  }

  export type Release_MatrixGroupByOutputType = {
    Id: bigint
    CompanyId: string | null
    ComLocId: string | null
    Document_Type: string | null
    Approver: string | null
    Approval_Level: number
    OrganizationCode: string | null
    Approver_Title: string | null
    _count: Release_MatrixCountAggregateOutputType | null
    _avg: Release_MatrixAvgAggregateOutputType | null
    _sum: Release_MatrixSumAggregateOutputType | null
    _min: Release_MatrixMinAggregateOutputType | null
    _max: Release_MatrixMaxAggregateOutputType | null
  }

  type GetRelease_MatrixGroupByPayload<T extends Release_MatrixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Release_MatrixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Release_MatrixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Release_MatrixGroupByOutputType[P]>
            : GetScalarType<T[P], Release_MatrixGroupByOutputType[P]>
        }
      >
    >


  export type Release_MatrixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    CompanyId?: boolean
    ComLocId?: boolean
    Document_Type?: boolean
    Approver?: boolean
    Approval_Level?: boolean
    OrganizationCode?: boolean
    Approver_Title?: boolean
  }, ExtArgs["result"]["release_Matrix"]>


  export type Release_MatrixSelectScalar = {
    Id?: boolean
    CompanyId?: boolean
    ComLocId?: boolean
    Document_Type?: boolean
    Approver?: boolean
    Approval_Level?: boolean
    OrganizationCode?: boolean
    Approver_Title?: boolean
  }


  export type $Release_MatrixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Release_Matrix"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      CompanyId: string | null
      ComLocId: string | null
      Document_Type: string | null
      Approver: string | null
      Approval_Level: number
      OrganizationCode: string | null
      Approver_Title: string | null
    }, ExtArgs["result"]["release_Matrix"]>
    composites: {}
  }

  type Release_MatrixGetPayload<S extends boolean | null | undefined | Release_MatrixDefaultArgs> = $Result.GetResult<Prisma.$Release_MatrixPayload, S>

  type Release_MatrixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Release_MatrixFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Release_MatrixCountAggregateInputType | true
    }

  export interface Release_MatrixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Release_Matrix'], meta: { name: 'Release_Matrix' } }
    /**
     * Find zero or one Release_Matrix that matches the filter.
     * @param {Release_MatrixFindUniqueArgs} args - Arguments to find a Release_Matrix
     * @example
     * // Get one Release_Matrix
     * const release_Matrix = await prisma.release_Matrix.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Release_MatrixFindUniqueArgs>(args: SelectSubset<T, Release_MatrixFindUniqueArgs<ExtArgs>>): Prisma__Release_MatrixClient<$Result.GetResult<Prisma.$Release_MatrixPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Release_Matrix that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Release_MatrixFindUniqueOrThrowArgs} args - Arguments to find a Release_Matrix
     * @example
     * // Get one Release_Matrix
     * const release_Matrix = await prisma.release_Matrix.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Release_MatrixFindUniqueOrThrowArgs>(args: SelectSubset<T, Release_MatrixFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Release_MatrixClient<$Result.GetResult<Prisma.$Release_MatrixPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Release_Matrix that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_MatrixFindFirstArgs} args - Arguments to find a Release_Matrix
     * @example
     * // Get one Release_Matrix
     * const release_Matrix = await prisma.release_Matrix.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Release_MatrixFindFirstArgs>(args?: SelectSubset<T, Release_MatrixFindFirstArgs<ExtArgs>>): Prisma__Release_MatrixClient<$Result.GetResult<Prisma.$Release_MatrixPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Release_Matrix that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_MatrixFindFirstOrThrowArgs} args - Arguments to find a Release_Matrix
     * @example
     * // Get one Release_Matrix
     * const release_Matrix = await prisma.release_Matrix.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Release_MatrixFindFirstOrThrowArgs>(args?: SelectSubset<T, Release_MatrixFindFirstOrThrowArgs<ExtArgs>>): Prisma__Release_MatrixClient<$Result.GetResult<Prisma.$Release_MatrixPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Release_Matrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_MatrixFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Release_Matrices
     * const release_Matrices = await prisma.release_Matrix.findMany()
     * 
     * // Get first 10 Release_Matrices
     * const release_Matrices = await prisma.release_Matrix.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const release_MatrixWithIdOnly = await prisma.release_Matrix.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Release_MatrixFindManyArgs>(args?: SelectSubset<T, Release_MatrixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Release_MatrixPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Release_Matrix.
     * @param {Release_MatrixCreateArgs} args - Arguments to create a Release_Matrix.
     * @example
     * // Create one Release_Matrix
     * const Release_Matrix = await prisma.release_Matrix.create({
     *   data: {
     *     // ... data to create a Release_Matrix
     *   }
     * })
     * 
     */
    create<T extends Release_MatrixCreateArgs>(args: SelectSubset<T, Release_MatrixCreateArgs<ExtArgs>>): Prisma__Release_MatrixClient<$Result.GetResult<Prisma.$Release_MatrixPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Release_Matrices.
     * @param {Release_MatrixCreateManyArgs} args - Arguments to create many Release_Matrices.
     * @example
     * // Create many Release_Matrices
     * const release_Matrix = await prisma.release_Matrix.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Release_MatrixCreateManyArgs>(args?: SelectSubset<T, Release_MatrixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Release_Matrix.
     * @param {Release_MatrixDeleteArgs} args - Arguments to delete one Release_Matrix.
     * @example
     * // Delete one Release_Matrix
     * const Release_Matrix = await prisma.release_Matrix.delete({
     *   where: {
     *     // ... filter to delete one Release_Matrix
     *   }
     * })
     * 
     */
    delete<T extends Release_MatrixDeleteArgs>(args: SelectSubset<T, Release_MatrixDeleteArgs<ExtArgs>>): Prisma__Release_MatrixClient<$Result.GetResult<Prisma.$Release_MatrixPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Release_Matrix.
     * @param {Release_MatrixUpdateArgs} args - Arguments to update one Release_Matrix.
     * @example
     * // Update one Release_Matrix
     * const release_Matrix = await prisma.release_Matrix.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Release_MatrixUpdateArgs>(args: SelectSubset<T, Release_MatrixUpdateArgs<ExtArgs>>): Prisma__Release_MatrixClient<$Result.GetResult<Prisma.$Release_MatrixPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Release_Matrices.
     * @param {Release_MatrixDeleteManyArgs} args - Arguments to filter Release_Matrices to delete.
     * @example
     * // Delete a few Release_Matrices
     * const { count } = await prisma.release_Matrix.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Release_MatrixDeleteManyArgs>(args?: SelectSubset<T, Release_MatrixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Release_Matrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_MatrixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Release_Matrices
     * const release_Matrix = await prisma.release_Matrix.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Release_MatrixUpdateManyArgs>(args: SelectSubset<T, Release_MatrixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Release_Matrix.
     * @param {Release_MatrixUpsertArgs} args - Arguments to update or create a Release_Matrix.
     * @example
     * // Update or create a Release_Matrix
     * const release_Matrix = await prisma.release_Matrix.upsert({
     *   create: {
     *     // ... data to create a Release_Matrix
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Release_Matrix we want to update
     *   }
     * })
     */
    upsert<T extends Release_MatrixUpsertArgs>(args: SelectSubset<T, Release_MatrixUpsertArgs<ExtArgs>>): Prisma__Release_MatrixClient<$Result.GetResult<Prisma.$Release_MatrixPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Release_Matrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_MatrixCountArgs} args - Arguments to filter Release_Matrices to count.
     * @example
     * // Count the number of Release_Matrices
     * const count = await prisma.release_Matrix.count({
     *   where: {
     *     // ... the filter for the Release_Matrices we want to count
     *   }
     * })
    **/
    count<T extends Release_MatrixCountArgs>(
      args?: Subset<T, Release_MatrixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Release_MatrixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Release_Matrix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_MatrixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Release_MatrixAggregateArgs>(args: Subset<T, Release_MatrixAggregateArgs>): Prisma.PrismaPromise<GetRelease_MatrixAggregateType<T>>

    /**
     * Group by Release_Matrix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_MatrixGroupByArgs} args - Group by arguments.
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
      T extends Release_MatrixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Release_MatrixGroupByArgs['orderBy'] }
        : { orderBy?: Release_MatrixGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Release_MatrixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelease_MatrixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Release_Matrix model
   */
  readonly fields: Release_MatrixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Release_Matrix.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Release_MatrixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Release_Matrix model
   */ 
  interface Release_MatrixFieldRefs {
    readonly Id: FieldRef<"Release_Matrix", 'BigInt'>
    readonly CompanyId: FieldRef<"Release_Matrix", 'String'>
    readonly ComLocId: FieldRef<"Release_Matrix", 'String'>
    readonly Document_Type: FieldRef<"Release_Matrix", 'String'>
    readonly Approver: FieldRef<"Release_Matrix", 'String'>
    readonly Approval_Level: FieldRef<"Release_Matrix", 'Int'>
    readonly OrganizationCode: FieldRef<"Release_Matrix", 'String'>
    readonly Approver_Title: FieldRef<"Release_Matrix", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Release_Matrix findUnique
   */
  export type Release_MatrixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix
     */
    select?: Release_MatrixSelect<ExtArgs> | null
    /**
     * Filter, which Release_Matrix to fetch.
     */
    where: Release_MatrixWhereUniqueInput
  }

  /**
   * Release_Matrix findUniqueOrThrow
   */
  export type Release_MatrixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix
     */
    select?: Release_MatrixSelect<ExtArgs> | null
    /**
     * Filter, which Release_Matrix to fetch.
     */
    where: Release_MatrixWhereUniqueInput
  }

  /**
   * Release_Matrix findFirst
   */
  export type Release_MatrixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix
     */
    select?: Release_MatrixSelect<ExtArgs> | null
    /**
     * Filter, which Release_Matrix to fetch.
     */
    where?: Release_MatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Release_Matrices to fetch.
     */
    orderBy?: Release_MatrixOrderByWithRelationInput | Release_MatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Release_Matrices.
     */
    cursor?: Release_MatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Release_Matrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Release_Matrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Release_Matrices.
     */
    distinct?: Release_MatrixScalarFieldEnum | Release_MatrixScalarFieldEnum[]
  }

  /**
   * Release_Matrix findFirstOrThrow
   */
  export type Release_MatrixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix
     */
    select?: Release_MatrixSelect<ExtArgs> | null
    /**
     * Filter, which Release_Matrix to fetch.
     */
    where?: Release_MatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Release_Matrices to fetch.
     */
    orderBy?: Release_MatrixOrderByWithRelationInput | Release_MatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Release_Matrices.
     */
    cursor?: Release_MatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Release_Matrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Release_Matrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Release_Matrices.
     */
    distinct?: Release_MatrixScalarFieldEnum | Release_MatrixScalarFieldEnum[]
  }

  /**
   * Release_Matrix findMany
   */
  export type Release_MatrixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix
     */
    select?: Release_MatrixSelect<ExtArgs> | null
    /**
     * Filter, which Release_Matrices to fetch.
     */
    where?: Release_MatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Release_Matrices to fetch.
     */
    orderBy?: Release_MatrixOrderByWithRelationInput | Release_MatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Release_Matrices.
     */
    cursor?: Release_MatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Release_Matrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Release_Matrices.
     */
    skip?: number
    distinct?: Release_MatrixScalarFieldEnum | Release_MatrixScalarFieldEnum[]
  }

  /**
   * Release_Matrix create
   */
  export type Release_MatrixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix
     */
    select?: Release_MatrixSelect<ExtArgs> | null
    /**
     * The data needed to create a Release_Matrix.
     */
    data?: XOR<Release_MatrixCreateInput, Release_MatrixUncheckedCreateInput>
  }

  /**
   * Release_Matrix createMany
   */
  export type Release_MatrixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Release_Matrices.
     */
    data: Release_MatrixCreateManyInput | Release_MatrixCreateManyInput[]
  }

  /**
   * Release_Matrix update
   */
  export type Release_MatrixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix
     */
    select?: Release_MatrixSelect<ExtArgs> | null
    /**
     * The data needed to update a Release_Matrix.
     */
    data: XOR<Release_MatrixUpdateInput, Release_MatrixUncheckedUpdateInput>
    /**
     * Choose, which Release_Matrix to update.
     */
    where: Release_MatrixWhereUniqueInput
  }

  /**
   * Release_Matrix updateMany
   */
  export type Release_MatrixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Release_Matrices.
     */
    data: XOR<Release_MatrixUpdateManyMutationInput, Release_MatrixUncheckedUpdateManyInput>
    /**
     * Filter which Release_Matrices to update
     */
    where?: Release_MatrixWhereInput
  }

  /**
   * Release_Matrix upsert
   */
  export type Release_MatrixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix
     */
    select?: Release_MatrixSelect<ExtArgs> | null
    /**
     * The filter to search for the Release_Matrix to update in case it exists.
     */
    where: Release_MatrixWhereUniqueInput
    /**
     * In case the Release_Matrix found by the `where` argument doesn't exist, create a new Release_Matrix with this data.
     */
    create: XOR<Release_MatrixCreateInput, Release_MatrixUncheckedCreateInput>
    /**
     * In case the Release_Matrix was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Release_MatrixUpdateInput, Release_MatrixUncheckedUpdateInput>
  }

  /**
   * Release_Matrix delete
   */
  export type Release_MatrixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix
     */
    select?: Release_MatrixSelect<ExtArgs> | null
    /**
     * Filter which Release_Matrix to delete.
     */
    where: Release_MatrixWhereUniqueInput
  }

  /**
   * Release_Matrix deleteMany
   */
  export type Release_MatrixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Release_Matrices to delete
     */
    where?: Release_MatrixWhereInput
  }

  /**
   * Release_Matrix without action
   */
  export type Release_MatrixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix
     */
    select?: Release_MatrixSelect<ExtArgs> | null
  }


  /**
   * Model Release_Matrix_CC
   */

  export type AggregateRelease_Matrix_CC = {
    _count: Release_Matrix_CCCountAggregateOutputType | null
    _avg: Release_Matrix_CCAvgAggregateOutputType | null
    _sum: Release_Matrix_CCSumAggregateOutputType | null
    _min: Release_Matrix_CCMinAggregateOutputType | null
    _max: Release_Matrix_CCMaxAggregateOutputType | null
  }

  export type Release_Matrix_CCAvgAggregateOutputType = {
    Id: number | null
  }

  export type Release_Matrix_CCSumAggregateOutputType = {
    Id: bigint | null
  }

  export type Release_Matrix_CCMinAggregateOutputType = {
    Id: bigint | null
    OrganizationCode: string | null
    DocumentType: string | null
    Email: string | null
    Name: string | null
  }

  export type Release_Matrix_CCMaxAggregateOutputType = {
    Id: bigint | null
    OrganizationCode: string | null
    DocumentType: string | null
    Email: string | null
    Name: string | null
  }

  export type Release_Matrix_CCCountAggregateOutputType = {
    Id: number
    OrganizationCode: number
    DocumentType: number
    Email: number
    Name: number
    _all: number
  }


  export type Release_Matrix_CCAvgAggregateInputType = {
    Id?: true
  }

  export type Release_Matrix_CCSumAggregateInputType = {
    Id?: true
  }

  export type Release_Matrix_CCMinAggregateInputType = {
    Id?: true
    OrganizationCode?: true
    DocumentType?: true
    Email?: true
    Name?: true
  }

  export type Release_Matrix_CCMaxAggregateInputType = {
    Id?: true
    OrganizationCode?: true
    DocumentType?: true
    Email?: true
    Name?: true
  }

  export type Release_Matrix_CCCountAggregateInputType = {
    Id?: true
    OrganizationCode?: true
    DocumentType?: true
    Email?: true
    Name?: true
    _all?: true
  }

  export type Release_Matrix_CCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Release_Matrix_CC to aggregate.
     */
    where?: Release_Matrix_CCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Release_Matrix_CCS to fetch.
     */
    orderBy?: Release_Matrix_CCOrderByWithRelationInput | Release_Matrix_CCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Release_Matrix_CCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Release_Matrix_CCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Release_Matrix_CCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Release_Matrix_CCS
    **/
    _count?: true | Release_Matrix_CCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Release_Matrix_CCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Release_Matrix_CCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Release_Matrix_CCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Release_Matrix_CCMaxAggregateInputType
  }

  export type GetRelease_Matrix_CCAggregateType<T extends Release_Matrix_CCAggregateArgs> = {
        [P in keyof T & keyof AggregateRelease_Matrix_CC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelease_Matrix_CC[P]>
      : GetScalarType<T[P], AggregateRelease_Matrix_CC[P]>
  }




  export type Release_Matrix_CCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Release_Matrix_CCWhereInput
    orderBy?: Release_Matrix_CCOrderByWithAggregationInput | Release_Matrix_CCOrderByWithAggregationInput[]
    by: Release_Matrix_CCScalarFieldEnum[] | Release_Matrix_CCScalarFieldEnum
    having?: Release_Matrix_CCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Release_Matrix_CCCountAggregateInputType | true
    _avg?: Release_Matrix_CCAvgAggregateInputType
    _sum?: Release_Matrix_CCSumAggregateInputType
    _min?: Release_Matrix_CCMinAggregateInputType
    _max?: Release_Matrix_CCMaxAggregateInputType
  }

  export type Release_Matrix_CCGroupByOutputType = {
    Id: bigint
    OrganizationCode: string | null
    DocumentType: string | null
    Email: string | null
    Name: string | null
    _count: Release_Matrix_CCCountAggregateOutputType | null
    _avg: Release_Matrix_CCAvgAggregateOutputType | null
    _sum: Release_Matrix_CCSumAggregateOutputType | null
    _min: Release_Matrix_CCMinAggregateOutputType | null
    _max: Release_Matrix_CCMaxAggregateOutputType | null
  }

  type GetRelease_Matrix_CCGroupByPayload<T extends Release_Matrix_CCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Release_Matrix_CCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Release_Matrix_CCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Release_Matrix_CCGroupByOutputType[P]>
            : GetScalarType<T[P], Release_Matrix_CCGroupByOutputType[P]>
        }
      >
    >


  export type Release_Matrix_CCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    OrganizationCode?: boolean
    DocumentType?: boolean
    Email?: boolean
    Name?: boolean
  }, ExtArgs["result"]["release_Matrix_CC"]>


  export type Release_Matrix_CCSelectScalar = {
    Id?: boolean
    OrganizationCode?: boolean
    DocumentType?: boolean
    Email?: boolean
    Name?: boolean
  }


  export type $Release_Matrix_CCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Release_Matrix_CC"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      OrganizationCode: string | null
      DocumentType: string | null
      Email: string | null
      Name: string | null
    }, ExtArgs["result"]["release_Matrix_CC"]>
    composites: {}
  }

  type Release_Matrix_CCGetPayload<S extends boolean | null | undefined | Release_Matrix_CCDefaultArgs> = $Result.GetResult<Prisma.$Release_Matrix_CCPayload, S>

  type Release_Matrix_CCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Release_Matrix_CCFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Release_Matrix_CCCountAggregateInputType | true
    }

  export interface Release_Matrix_CCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Release_Matrix_CC'], meta: { name: 'Release_Matrix_CC' } }
    /**
     * Find zero or one Release_Matrix_CC that matches the filter.
     * @param {Release_Matrix_CCFindUniqueArgs} args - Arguments to find a Release_Matrix_CC
     * @example
     * // Get one Release_Matrix_CC
     * const release_Matrix_CC = await prisma.release_Matrix_CC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Release_Matrix_CCFindUniqueArgs>(args: SelectSubset<T, Release_Matrix_CCFindUniqueArgs<ExtArgs>>): Prisma__Release_Matrix_CCClient<$Result.GetResult<Prisma.$Release_Matrix_CCPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Release_Matrix_CC that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Release_Matrix_CCFindUniqueOrThrowArgs} args - Arguments to find a Release_Matrix_CC
     * @example
     * // Get one Release_Matrix_CC
     * const release_Matrix_CC = await prisma.release_Matrix_CC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Release_Matrix_CCFindUniqueOrThrowArgs>(args: SelectSubset<T, Release_Matrix_CCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Release_Matrix_CCClient<$Result.GetResult<Prisma.$Release_Matrix_CCPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Release_Matrix_CC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_Matrix_CCFindFirstArgs} args - Arguments to find a Release_Matrix_CC
     * @example
     * // Get one Release_Matrix_CC
     * const release_Matrix_CC = await prisma.release_Matrix_CC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Release_Matrix_CCFindFirstArgs>(args?: SelectSubset<T, Release_Matrix_CCFindFirstArgs<ExtArgs>>): Prisma__Release_Matrix_CCClient<$Result.GetResult<Prisma.$Release_Matrix_CCPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Release_Matrix_CC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_Matrix_CCFindFirstOrThrowArgs} args - Arguments to find a Release_Matrix_CC
     * @example
     * // Get one Release_Matrix_CC
     * const release_Matrix_CC = await prisma.release_Matrix_CC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Release_Matrix_CCFindFirstOrThrowArgs>(args?: SelectSubset<T, Release_Matrix_CCFindFirstOrThrowArgs<ExtArgs>>): Prisma__Release_Matrix_CCClient<$Result.GetResult<Prisma.$Release_Matrix_CCPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Release_Matrix_CCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_Matrix_CCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Release_Matrix_CCS
     * const release_Matrix_CCS = await prisma.release_Matrix_CC.findMany()
     * 
     * // Get first 10 Release_Matrix_CCS
     * const release_Matrix_CCS = await prisma.release_Matrix_CC.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const release_Matrix_CCWithIdOnly = await prisma.release_Matrix_CC.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Release_Matrix_CCFindManyArgs>(args?: SelectSubset<T, Release_Matrix_CCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Release_Matrix_CCPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Release_Matrix_CC.
     * @param {Release_Matrix_CCCreateArgs} args - Arguments to create a Release_Matrix_CC.
     * @example
     * // Create one Release_Matrix_CC
     * const Release_Matrix_CC = await prisma.release_Matrix_CC.create({
     *   data: {
     *     // ... data to create a Release_Matrix_CC
     *   }
     * })
     * 
     */
    create<T extends Release_Matrix_CCCreateArgs>(args: SelectSubset<T, Release_Matrix_CCCreateArgs<ExtArgs>>): Prisma__Release_Matrix_CCClient<$Result.GetResult<Prisma.$Release_Matrix_CCPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Release_Matrix_CCS.
     * @param {Release_Matrix_CCCreateManyArgs} args - Arguments to create many Release_Matrix_CCS.
     * @example
     * // Create many Release_Matrix_CCS
     * const release_Matrix_CC = await prisma.release_Matrix_CC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Release_Matrix_CCCreateManyArgs>(args?: SelectSubset<T, Release_Matrix_CCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Release_Matrix_CC.
     * @param {Release_Matrix_CCDeleteArgs} args - Arguments to delete one Release_Matrix_CC.
     * @example
     * // Delete one Release_Matrix_CC
     * const Release_Matrix_CC = await prisma.release_Matrix_CC.delete({
     *   where: {
     *     // ... filter to delete one Release_Matrix_CC
     *   }
     * })
     * 
     */
    delete<T extends Release_Matrix_CCDeleteArgs>(args: SelectSubset<T, Release_Matrix_CCDeleteArgs<ExtArgs>>): Prisma__Release_Matrix_CCClient<$Result.GetResult<Prisma.$Release_Matrix_CCPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Release_Matrix_CC.
     * @param {Release_Matrix_CCUpdateArgs} args - Arguments to update one Release_Matrix_CC.
     * @example
     * // Update one Release_Matrix_CC
     * const release_Matrix_CC = await prisma.release_Matrix_CC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Release_Matrix_CCUpdateArgs>(args: SelectSubset<T, Release_Matrix_CCUpdateArgs<ExtArgs>>): Prisma__Release_Matrix_CCClient<$Result.GetResult<Prisma.$Release_Matrix_CCPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Release_Matrix_CCS.
     * @param {Release_Matrix_CCDeleteManyArgs} args - Arguments to filter Release_Matrix_CCS to delete.
     * @example
     * // Delete a few Release_Matrix_CCS
     * const { count } = await prisma.release_Matrix_CC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Release_Matrix_CCDeleteManyArgs>(args?: SelectSubset<T, Release_Matrix_CCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Release_Matrix_CCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_Matrix_CCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Release_Matrix_CCS
     * const release_Matrix_CC = await prisma.release_Matrix_CC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Release_Matrix_CCUpdateManyArgs>(args: SelectSubset<T, Release_Matrix_CCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Release_Matrix_CC.
     * @param {Release_Matrix_CCUpsertArgs} args - Arguments to update or create a Release_Matrix_CC.
     * @example
     * // Update or create a Release_Matrix_CC
     * const release_Matrix_CC = await prisma.release_Matrix_CC.upsert({
     *   create: {
     *     // ... data to create a Release_Matrix_CC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Release_Matrix_CC we want to update
     *   }
     * })
     */
    upsert<T extends Release_Matrix_CCUpsertArgs>(args: SelectSubset<T, Release_Matrix_CCUpsertArgs<ExtArgs>>): Prisma__Release_Matrix_CCClient<$Result.GetResult<Prisma.$Release_Matrix_CCPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Release_Matrix_CCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_Matrix_CCCountArgs} args - Arguments to filter Release_Matrix_CCS to count.
     * @example
     * // Count the number of Release_Matrix_CCS
     * const count = await prisma.release_Matrix_CC.count({
     *   where: {
     *     // ... the filter for the Release_Matrix_CCS we want to count
     *   }
     * })
    **/
    count<T extends Release_Matrix_CCCountArgs>(
      args?: Subset<T, Release_Matrix_CCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Release_Matrix_CCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Release_Matrix_CC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_Matrix_CCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Release_Matrix_CCAggregateArgs>(args: Subset<T, Release_Matrix_CCAggregateArgs>): Prisma.PrismaPromise<GetRelease_Matrix_CCAggregateType<T>>

    /**
     * Group by Release_Matrix_CC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Release_Matrix_CCGroupByArgs} args - Group by arguments.
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
      T extends Release_Matrix_CCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Release_Matrix_CCGroupByArgs['orderBy'] }
        : { orderBy?: Release_Matrix_CCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Release_Matrix_CCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelease_Matrix_CCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Release_Matrix_CC model
   */
  readonly fields: Release_Matrix_CCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Release_Matrix_CC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Release_Matrix_CCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Release_Matrix_CC model
   */ 
  interface Release_Matrix_CCFieldRefs {
    readonly Id: FieldRef<"Release_Matrix_CC", 'BigInt'>
    readonly OrganizationCode: FieldRef<"Release_Matrix_CC", 'String'>
    readonly DocumentType: FieldRef<"Release_Matrix_CC", 'String'>
    readonly Email: FieldRef<"Release_Matrix_CC", 'String'>
    readonly Name: FieldRef<"Release_Matrix_CC", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Release_Matrix_CC findUnique
   */
  export type Release_Matrix_CCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix_CC
     */
    select?: Release_Matrix_CCSelect<ExtArgs> | null
    /**
     * Filter, which Release_Matrix_CC to fetch.
     */
    where: Release_Matrix_CCWhereUniqueInput
  }

  /**
   * Release_Matrix_CC findUniqueOrThrow
   */
  export type Release_Matrix_CCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix_CC
     */
    select?: Release_Matrix_CCSelect<ExtArgs> | null
    /**
     * Filter, which Release_Matrix_CC to fetch.
     */
    where: Release_Matrix_CCWhereUniqueInput
  }

  /**
   * Release_Matrix_CC findFirst
   */
  export type Release_Matrix_CCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix_CC
     */
    select?: Release_Matrix_CCSelect<ExtArgs> | null
    /**
     * Filter, which Release_Matrix_CC to fetch.
     */
    where?: Release_Matrix_CCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Release_Matrix_CCS to fetch.
     */
    orderBy?: Release_Matrix_CCOrderByWithRelationInput | Release_Matrix_CCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Release_Matrix_CCS.
     */
    cursor?: Release_Matrix_CCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Release_Matrix_CCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Release_Matrix_CCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Release_Matrix_CCS.
     */
    distinct?: Release_Matrix_CCScalarFieldEnum | Release_Matrix_CCScalarFieldEnum[]
  }

  /**
   * Release_Matrix_CC findFirstOrThrow
   */
  export type Release_Matrix_CCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix_CC
     */
    select?: Release_Matrix_CCSelect<ExtArgs> | null
    /**
     * Filter, which Release_Matrix_CC to fetch.
     */
    where?: Release_Matrix_CCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Release_Matrix_CCS to fetch.
     */
    orderBy?: Release_Matrix_CCOrderByWithRelationInput | Release_Matrix_CCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Release_Matrix_CCS.
     */
    cursor?: Release_Matrix_CCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Release_Matrix_CCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Release_Matrix_CCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Release_Matrix_CCS.
     */
    distinct?: Release_Matrix_CCScalarFieldEnum | Release_Matrix_CCScalarFieldEnum[]
  }

  /**
   * Release_Matrix_CC findMany
   */
  export type Release_Matrix_CCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix_CC
     */
    select?: Release_Matrix_CCSelect<ExtArgs> | null
    /**
     * Filter, which Release_Matrix_CCS to fetch.
     */
    where?: Release_Matrix_CCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Release_Matrix_CCS to fetch.
     */
    orderBy?: Release_Matrix_CCOrderByWithRelationInput | Release_Matrix_CCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Release_Matrix_CCS.
     */
    cursor?: Release_Matrix_CCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Release_Matrix_CCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Release_Matrix_CCS.
     */
    skip?: number
    distinct?: Release_Matrix_CCScalarFieldEnum | Release_Matrix_CCScalarFieldEnum[]
  }

  /**
   * Release_Matrix_CC create
   */
  export type Release_Matrix_CCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix_CC
     */
    select?: Release_Matrix_CCSelect<ExtArgs> | null
    /**
     * The data needed to create a Release_Matrix_CC.
     */
    data?: XOR<Release_Matrix_CCCreateInput, Release_Matrix_CCUncheckedCreateInput>
  }

  /**
   * Release_Matrix_CC createMany
   */
  export type Release_Matrix_CCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Release_Matrix_CCS.
     */
    data: Release_Matrix_CCCreateManyInput | Release_Matrix_CCCreateManyInput[]
  }

  /**
   * Release_Matrix_CC update
   */
  export type Release_Matrix_CCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix_CC
     */
    select?: Release_Matrix_CCSelect<ExtArgs> | null
    /**
     * The data needed to update a Release_Matrix_CC.
     */
    data: XOR<Release_Matrix_CCUpdateInput, Release_Matrix_CCUncheckedUpdateInput>
    /**
     * Choose, which Release_Matrix_CC to update.
     */
    where: Release_Matrix_CCWhereUniqueInput
  }

  /**
   * Release_Matrix_CC updateMany
   */
  export type Release_Matrix_CCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Release_Matrix_CCS.
     */
    data: XOR<Release_Matrix_CCUpdateManyMutationInput, Release_Matrix_CCUncheckedUpdateManyInput>
    /**
     * Filter which Release_Matrix_CCS to update
     */
    where?: Release_Matrix_CCWhereInput
  }

  /**
   * Release_Matrix_CC upsert
   */
  export type Release_Matrix_CCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix_CC
     */
    select?: Release_Matrix_CCSelect<ExtArgs> | null
    /**
     * The filter to search for the Release_Matrix_CC to update in case it exists.
     */
    where: Release_Matrix_CCWhereUniqueInput
    /**
     * In case the Release_Matrix_CC found by the `where` argument doesn't exist, create a new Release_Matrix_CC with this data.
     */
    create: XOR<Release_Matrix_CCCreateInput, Release_Matrix_CCUncheckedCreateInput>
    /**
     * In case the Release_Matrix_CC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Release_Matrix_CCUpdateInput, Release_Matrix_CCUncheckedUpdateInput>
  }

  /**
   * Release_Matrix_CC delete
   */
  export type Release_Matrix_CCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix_CC
     */
    select?: Release_Matrix_CCSelect<ExtArgs> | null
    /**
     * Filter which Release_Matrix_CC to delete.
     */
    where: Release_Matrix_CCWhereUniqueInput
  }

  /**
   * Release_Matrix_CC deleteMany
   */
  export type Release_Matrix_CCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Release_Matrix_CCS to delete
     */
    where?: Release_Matrix_CCWhereInput
  }

  /**
   * Release_Matrix_CC without action
   */
  export type Release_Matrix_CCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Release_Matrix_CC
     */
    select?: Release_Matrix_CCSelect<ExtArgs> | null
  }


  /**
   * Model Reports
   */

  export type AggregateReports = {
    _count: ReportsCountAggregateOutputType | null
    _avg: ReportsAvgAggregateOutputType | null
    _sum: ReportsSumAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  export type ReportsAvgAggregateOutputType = {
    Uniq: number | null
  }

  export type ReportsSumAggregateOutputType = {
    Uniq: bigint | null
  }

  export type ReportsMinAggregateOutputType = {
    Modul: string | null
    Code: string | null
    Name: string | null
    Query: string | null
    Fields: string | null
    Headers: string | null
    ShowAsHeaders: string | null
    ShowAsSubHeaders: string | null
    Filters: string | null
    Formats: string | null
    Totals: string | null
    PrimarySort: string | null
    SecondarySort: string | null
    ThirdSort: string | null
    Uniq: bigint | null
  }

  export type ReportsMaxAggregateOutputType = {
    Modul: string | null
    Code: string | null
    Name: string | null
    Query: string | null
    Fields: string | null
    Headers: string | null
    ShowAsHeaders: string | null
    ShowAsSubHeaders: string | null
    Filters: string | null
    Formats: string | null
    Totals: string | null
    PrimarySort: string | null
    SecondarySort: string | null
    ThirdSort: string | null
    Uniq: bigint | null
  }

  export type ReportsCountAggregateOutputType = {
    Modul: number
    Code: number
    Name: number
    Query: number
    Fields: number
    Headers: number
    ShowAsHeaders: number
    ShowAsSubHeaders: number
    Filters: number
    Formats: number
    Totals: number
    PrimarySort: number
    SecondarySort: number
    ThirdSort: number
    Uniq: number
    _all: number
  }


  export type ReportsAvgAggregateInputType = {
    Uniq?: true
  }

  export type ReportsSumAggregateInputType = {
    Uniq?: true
  }

  export type ReportsMinAggregateInputType = {
    Modul?: true
    Code?: true
    Name?: true
    Query?: true
    Fields?: true
    Headers?: true
    ShowAsHeaders?: true
    ShowAsSubHeaders?: true
    Filters?: true
    Formats?: true
    Totals?: true
    PrimarySort?: true
    SecondarySort?: true
    ThirdSort?: true
    Uniq?: true
  }

  export type ReportsMaxAggregateInputType = {
    Modul?: true
    Code?: true
    Name?: true
    Query?: true
    Fields?: true
    Headers?: true
    ShowAsHeaders?: true
    ShowAsSubHeaders?: true
    Filters?: true
    Formats?: true
    Totals?: true
    PrimarySort?: true
    SecondarySort?: true
    ThirdSort?: true
    Uniq?: true
  }

  export type ReportsCountAggregateInputType = {
    Modul?: true
    Code?: true
    Name?: true
    Query?: true
    Fields?: true
    Headers?: true
    ShowAsHeaders?: true
    ShowAsSubHeaders?: true
    Filters?: true
    Formats?: true
    Totals?: true
    PrimarySort?: true
    SecondarySort?: true
    ThirdSort?: true
    Uniq?: true
    _all?: true
  }

  export type ReportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to aggregate.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationInput | ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportsMaxAggregateInputType
  }

  export type GetReportsAggregateType<T extends ReportsAggregateArgs> = {
        [P in keyof T & keyof AggregateReports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReports[P]>
      : GetScalarType<T[P], AggregateReports[P]>
  }




  export type ReportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportsWhereInput
    orderBy?: ReportsOrderByWithAggregationInput | ReportsOrderByWithAggregationInput[]
    by: ReportsScalarFieldEnum[] | ReportsScalarFieldEnum
    having?: ReportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportsCountAggregateInputType | true
    _avg?: ReportsAvgAggregateInputType
    _sum?: ReportsSumAggregateInputType
    _min?: ReportsMinAggregateInputType
    _max?: ReportsMaxAggregateInputType
  }

  export type ReportsGroupByOutputType = {
    Modul: string | null
    Code: string | null
    Name: string | null
    Query: string | null
    Fields: string | null
    Headers: string | null
    ShowAsHeaders: string | null
    ShowAsSubHeaders: string | null
    Filters: string | null
    Formats: string | null
    Totals: string | null
    PrimarySort: string | null
    SecondarySort: string | null
    ThirdSort: string | null
    Uniq: bigint
    _count: ReportsCountAggregateOutputType | null
    _avg: ReportsAvgAggregateOutputType | null
    _sum: ReportsSumAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  type GetReportsGroupByPayload<T extends ReportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportsGroupByOutputType[P]>
            : GetScalarType<T[P], ReportsGroupByOutputType[P]>
        }
      >
    >


  export type ReportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Modul?: boolean
    Code?: boolean
    Name?: boolean
    Query?: boolean
    Fields?: boolean
    Headers?: boolean
    ShowAsHeaders?: boolean
    ShowAsSubHeaders?: boolean
    Filters?: boolean
    Formats?: boolean
    Totals?: boolean
    PrimarySort?: boolean
    SecondarySort?: boolean
    ThirdSort?: boolean
    Uniq?: boolean
  }, ExtArgs["result"]["reports"]>


  export type ReportsSelectScalar = {
    Modul?: boolean
    Code?: boolean
    Name?: boolean
    Query?: boolean
    Fields?: boolean
    Headers?: boolean
    ShowAsHeaders?: boolean
    ShowAsSubHeaders?: boolean
    Filters?: boolean
    Formats?: boolean
    Totals?: boolean
    PrimarySort?: boolean
    SecondarySort?: boolean
    ThirdSort?: boolean
    Uniq?: boolean
  }


  export type $ReportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reports"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Modul: string | null
      Code: string | null
      Name: string | null
      Query: string | null
      Fields: string | null
      Headers: string | null
      ShowAsHeaders: string | null
      ShowAsSubHeaders: string | null
      Filters: string | null
      Formats: string | null
      Totals: string | null
      PrimarySort: string | null
      SecondarySort: string | null
      ThirdSort: string | null
      Uniq: bigint
    }, ExtArgs["result"]["reports"]>
    composites: {}
  }

  type ReportsGetPayload<S extends boolean | null | undefined | ReportsDefaultArgs> = $Result.GetResult<Prisma.$ReportsPayload, S>

  type ReportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReportsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReportsCountAggregateInputType | true
    }

  export interface ReportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reports'], meta: { name: 'Reports' } }
    /**
     * Find zero or one Reports that matches the filter.
     * @param {ReportsFindUniqueArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportsFindUniqueArgs>(args: SelectSubset<T, ReportsFindUniqueArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reports that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReportsFindUniqueOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindFirstArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportsFindFirstArgs>(args?: SelectSubset<T, ReportsFindFirstArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindFirstOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.reports.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.reports.findMany({ take: 10 })
     * 
     * // Only select the `Modul`
     * const reportsWithModulOnly = await prisma.reports.findMany({ select: { Modul: true } })
     * 
     */
    findMany<T extends ReportsFindManyArgs>(args?: SelectSubset<T, ReportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reports.
     * @param {ReportsCreateArgs} args - Arguments to create a Reports.
     * @example
     * // Create one Reports
     * const Reports = await prisma.reports.create({
     *   data: {
     *     // ... data to create a Reports
     *   }
     * })
     * 
     */
    create<T extends ReportsCreateArgs>(args: SelectSubset<T, ReportsCreateArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reports.
     * @param {ReportsCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportsCreateManyArgs>(args?: SelectSubset<T, ReportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reports.
     * @param {ReportsDeleteArgs} args - Arguments to delete one Reports.
     * @example
     * // Delete one Reports
     * const Reports = await prisma.reports.delete({
     *   where: {
     *     // ... filter to delete one Reports
     *   }
     * })
     * 
     */
    delete<T extends ReportsDeleteArgs>(args: SelectSubset<T, ReportsDeleteArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reports.
     * @param {ReportsUpdateArgs} args - Arguments to update one Reports.
     * @example
     * // Update one Reports
     * const reports = await prisma.reports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportsUpdateArgs>(args: SelectSubset<T, ReportsUpdateArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reports.
     * @param {ReportsDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.reports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportsDeleteManyArgs>(args?: SelectSubset<T, ReportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportsUpdateManyArgs>(args: SelectSubset<T, ReportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reports.
     * @param {ReportsUpsertArgs} args - Arguments to update or create a Reports.
     * @example
     * // Update or create a Reports
     * const reports = await prisma.reports.upsert({
     *   create: {
     *     // ... data to create a Reports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reports we want to update
     *   }
     * })
     */
    upsert<T extends ReportsUpsertArgs>(args: SelectSubset<T, ReportsUpsertArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.reports.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportsCountArgs>(
      args?: Subset<T, ReportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportsAggregateArgs>(args: Subset<T, ReportsAggregateArgs>): Prisma.PrismaPromise<GetReportsAggregateType<T>>

    /**
     * Group by Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsGroupByArgs} args - Group by arguments.
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
      T extends ReportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportsGroupByArgs['orderBy'] }
        : { orderBy?: ReportsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reports model
   */
  readonly fields: ReportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Reports model
   */ 
  interface ReportsFieldRefs {
    readonly Modul: FieldRef<"Reports", 'String'>
    readonly Code: FieldRef<"Reports", 'String'>
    readonly Name: FieldRef<"Reports", 'String'>
    readonly Query: FieldRef<"Reports", 'String'>
    readonly Fields: FieldRef<"Reports", 'String'>
    readonly Headers: FieldRef<"Reports", 'String'>
    readonly ShowAsHeaders: FieldRef<"Reports", 'String'>
    readonly ShowAsSubHeaders: FieldRef<"Reports", 'String'>
    readonly Filters: FieldRef<"Reports", 'String'>
    readonly Formats: FieldRef<"Reports", 'String'>
    readonly Totals: FieldRef<"Reports", 'String'>
    readonly PrimarySort: FieldRef<"Reports", 'String'>
    readonly SecondarySort: FieldRef<"Reports", 'String'>
    readonly ThirdSort: FieldRef<"Reports", 'String'>
    readonly Uniq: FieldRef<"Reports", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Reports findUnique
   */
  export type ReportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports findUniqueOrThrow
   */
  export type ReportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports findFirst
   */
  export type ReportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationInput | ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports findFirstOrThrow
   */
  export type ReportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationInput | ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports findMany
   */
  export type ReportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationInput | ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports create
   */
  export type ReportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * The data needed to create a Reports.
     */
    data?: XOR<ReportsCreateInput, ReportsUncheckedCreateInput>
  }

  /**
   * Reports createMany
   */
  export type ReportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportsCreateManyInput | ReportsCreateManyInput[]
  }

  /**
   * Reports update
   */
  export type ReportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * The data needed to update a Reports.
     */
    data: XOR<ReportsUpdateInput, ReportsUncheckedUpdateInput>
    /**
     * Choose, which Reports to update.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports updateMany
   */
  export type ReportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportsUpdateManyMutationInput, ReportsUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportsWhereInput
  }

  /**
   * Reports upsert
   */
  export type ReportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * The filter to search for the Reports to update in case it exists.
     */
    where: ReportsWhereUniqueInput
    /**
     * In case the Reports found by the `where` argument doesn't exist, create a new Reports with this data.
     */
    create: XOR<ReportsCreateInput, ReportsUncheckedCreateInput>
    /**
     * In case the Reports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportsUpdateInput, ReportsUncheckedUpdateInput>
  }

  /**
   * Reports delete
   */
  export type ReportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Filter which Reports to delete.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports deleteMany
   */
  export type ReportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportsWhereInput
  }

  /**
   * Reports without action
   */
  export type ReportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    Id: number | null
  }

  export type RoleSumAggregateOutputType = {
    Id: bigint | null
  }

  export type RoleMinAggregateOutputType = {
    Id: bigint | null
    Role_Code: string | null
    Role_Name: string | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Deleted: boolean | null
    Deleted_At: Date | null
    Deleted_By: string | null
  }

  export type RoleMaxAggregateOutputType = {
    Id: bigint | null
    Role_Code: string | null
    Role_Name: string | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Deleted: boolean | null
    Deleted_At: Date | null
    Deleted_By: string | null
  }

  export type RoleCountAggregateOutputType = {
    Id: number
    Role_Code: number
    Role_Name: number
    Created_At: number
    Created_By: number
    Updated_At: number
    Updated_By: number
    Deleted: number
    Deleted_At: number
    Deleted_By: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    Id?: true
  }

  export type RoleSumAggregateInputType = {
    Id?: true
  }

  export type RoleMinAggregateInputType = {
    Id?: true
    Role_Code?: true
    Role_Name?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Deleted?: true
    Deleted_At?: true
    Deleted_By?: true
  }

  export type RoleMaxAggregateInputType = {
    Id?: true
    Role_Code?: true
    Role_Name?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Deleted?: true
    Deleted_At?: true
    Deleted_By?: true
  }

  export type RoleCountAggregateInputType = {
    Id?: true
    Role_Code?: true
    Role_Name?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Deleted?: true
    Deleted_At?: true
    Deleted_By?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    Id: bigint
    Role_Code: string | null
    Role_Name: string | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Deleted: boolean
    Deleted_At: Date | null
    Deleted_By: string | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Role_Code?: boolean
    Role_Name?: boolean
    Created_At?: boolean
    Created_By?: boolean
    Updated_At?: boolean
    Updated_By?: boolean
    Deleted?: boolean
    Deleted_At?: boolean
    Deleted_By?: boolean
    Role_Detail?: boolean | Role$Role_DetailArgs<ExtArgs>
    User_Role?: boolean | Role$User_RoleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>


  export type RoleSelectScalar = {
    Id?: boolean
    Role_Code?: boolean
    Role_Name?: boolean
    Created_At?: boolean
    Created_By?: boolean
    Updated_At?: boolean
    Updated_By?: boolean
    Deleted?: boolean
    Deleted_At?: boolean
    Deleted_By?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Role_Detail?: boolean | Role$Role_DetailArgs<ExtArgs>
    User_Role?: boolean | Role$User_RoleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      Role_Detail: Prisma.$Role_DetailPayload<ExtArgs>[]
      User_Role: Prisma.$User_RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      Role_Code: string | null
      Role_Name: string | null
      Created_At: Date | null
      Created_By: string | null
      Updated_At: Date | null
      Updated_By: string | null
      Deleted: boolean
      Deleted_At: Date | null
      Deleted_By: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Role_Detail<T extends Role$Role_DetailArgs<ExtArgs> = {}>(args?: Subset<T, Role$Role_DetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Role_DetailPayload<ExtArgs>, T, "findMany"> | Null>
    User_Role<T extends Role$User_RoleArgs<ExtArgs> = {}>(args?: Subset<T, Role$User_RoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly Id: FieldRef<"Role", 'BigInt'>
    readonly Role_Code: FieldRef<"Role", 'String'>
    readonly Role_Name: FieldRef<"Role", 'String'>
    readonly Created_At: FieldRef<"Role", 'DateTime'>
    readonly Created_By: FieldRef<"Role", 'String'>
    readonly Updated_At: FieldRef<"Role", 'DateTime'>
    readonly Updated_By: FieldRef<"Role", 'String'>
    readonly Deleted: FieldRef<"Role", 'Boolean'>
    readonly Deleted_At: FieldRef<"Role", 'DateTime'>
    readonly Deleted_By: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data?: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.Role_Detail
   */
  export type Role$Role_DetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Detail
     */
    select?: Role_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role_DetailInclude<ExtArgs> | null
    where?: Role_DetailWhereInput
    orderBy?: Role_DetailOrderByWithRelationInput | Role_DetailOrderByWithRelationInput[]
    cursor?: Role_DetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_DetailScalarFieldEnum | Role_DetailScalarFieldEnum[]
  }

  /**
   * Role.User_Role
   */
  export type Role$User_RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: User_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_RoleInclude<ExtArgs> | null
    where?: User_RoleWhereInput
    orderBy?: User_RoleOrderByWithRelationInput | User_RoleOrderByWithRelationInput[]
    cursor?: User_RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_RoleScalarFieldEnum | User_RoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Role_Detail
   */

  export type AggregateRole_Detail = {
    _count: Role_DetailCountAggregateOutputType | null
    _avg: Role_DetailAvgAggregateOutputType | null
    _sum: Role_DetailSumAggregateOutputType | null
    _min: Role_DetailMinAggregateOutputType | null
    _max: Role_DetailMaxAggregateOutputType | null
  }

  export type Role_DetailAvgAggregateOutputType = {
    Id: number | null
    Role_Id: number | null
  }

  export type Role_DetailSumAggregateOutputType = {
    Id: bigint | null
    Role_Id: bigint | null
  }

  export type Role_DetailMinAggregateOutputType = {
    Id: bigint | null
    Role_Id: bigint | null
    ControllerName: string | null
    ActionName: string | null
    Roles: string | null
    Url: string | null
  }

  export type Role_DetailMaxAggregateOutputType = {
    Id: bigint | null
    Role_Id: bigint | null
    ControllerName: string | null
    ActionName: string | null
    Roles: string | null
    Url: string | null
  }

  export type Role_DetailCountAggregateOutputType = {
    Id: number
    Role_Id: number
    ControllerName: number
    ActionName: number
    Roles: number
    Url: number
    _all: number
  }


  export type Role_DetailAvgAggregateInputType = {
    Id?: true
    Role_Id?: true
  }

  export type Role_DetailSumAggregateInputType = {
    Id?: true
    Role_Id?: true
  }

  export type Role_DetailMinAggregateInputType = {
    Id?: true
    Role_Id?: true
    ControllerName?: true
    ActionName?: true
    Roles?: true
    Url?: true
  }

  export type Role_DetailMaxAggregateInputType = {
    Id?: true
    Role_Id?: true
    ControllerName?: true
    ActionName?: true
    Roles?: true
    Url?: true
  }

  export type Role_DetailCountAggregateInputType = {
    Id?: true
    Role_Id?: true
    ControllerName?: true
    ActionName?: true
    Roles?: true
    Url?: true
    _all?: true
  }

  export type Role_DetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role_Detail to aggregate.
     */
    where?: Role_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role_Details to fetch.
     */
    orderBy?: Role_DetailOrderByWithRelationInput | Role_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Role_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Role_Details
    **/
    _count?: true | Role_DetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Role_DetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Role_DetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Role_DetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Role_DetailMaxAggregateInputType
  }

  export type GetRole_DetailAggregateType<T extends Role_DetailAggregateArgs> = {
        [P in keyof T & keyof AggregateRole_Detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole_Detail[P]>
      : GetScalarType<T[P], AggregateRole_Detail[P]>
  }




  export type Role_DetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Role_DetailWhereInput
    orderBy?: Role_DetailOrderByWithAggregationInput | Role_DetailOrderByWithAggregationInput[]
    by: Role_DetailScalarFieldEnum[] | Role_DetailScalarFieldEnum
    having?: Role_DetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Role_DetailCountAggregateInputType | true
    _avg?: Role_DetailAvgAggregateInputType
    _sum?: Role_DetailSumAggregateInputType
    _min?: Role_DetailMinAggregateInputType
    _max?: Role_DetailMaxAggregateInputType
  }

  export type Role_DetailGroupByOutputType = {
    Id: bigint
    Role_Id: bigint
    ControllerName: string | null
    ActionName: string | null
    Roles: string | null
    Url: string | null
    _count: Role_DetailCountAggregateOutputType | null
    _avg: Role_DetailAvgAggregateOutputType | null
    _sum: Role_DetailSumAggregateOutputType | null
    _min: Role_DetailMinAggregateOutputType | null
    _max: Role_DetailMaxAggregateOutputType | null
  }

  type GetRole_DetailGroupByPayload<T extends Role_DetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Role_DetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Role_DetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Role_DetailGroupByOutputType[P]>
            : GetScalarType<T[P], Role_DetailGroupByOutputType[P]>
        }
      >
    >


  export type Role_DetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Role_Id?: boolean
    ControllerName?: boolean
    ActionName?: boolean
    Roles?: boolean
    Url?: boolean
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role_Detail"]>


  export type Role_DetailSelectScalar = {
    Id?: boolean
    Role_Id?: boolean
    ControllerName?: boolean
    ActionName?: boolean
    Roles?: boolean
    Url?: boolean
  }

  export type Role_DetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $Role_DetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role_Detail"
    objects: {
      Role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      Role_Id: bigint
      ControllerName: string | null
      ActionName: string | null
      Roles: string | null
      Url: string | null
    }, ExtArgs["result"]["role_Detail"]>
    composites: {}
  }

  type Role_DetailGetPayload<S extends boolean | null | undefined | Role_DetailDefaultArgs> = $Result.GetResult<Prisma.$Role_DetailPayload, S>

  type Role_DetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Role_DetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Role_DetailCountAggregateInputType | true
    }

  export interface Role_DetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role_Detail'], meta: { name: 'Role_Detail' } }
    /**
     * Find zero or one Role_Detail that matches the filter.
     * @param {Role_DetailFindUniqueArgs} args - Arguments to find a Role_Detail
     * @example
     * // Get one Role_Detail
     * const role_Detail = await prisma.role_Detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Role_DetailFindUniqueArgs>(args: SelectSubset<T, Role_DetailFindUniqueArgs<ExtArgs>>): Prisma__Role_DetailClient<$Result.GetResult<Prisma.$Role_DetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role_Detail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Role_DetailFindUniqueOrThrowArgs} args - Arguments to find a Role_Detail
     * @example
     * // Get one Role_Detail
     * const role_Detail = await prisma.role_Detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Role_DetailFindUniqueOrThrowArgs>(args: SelectSubset<T, Role_DetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Role_DetailClient<$Result.GetResult<Prisma.$Role_DetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role_Detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_DetailFindFirstArgs} args - Arguments to find a Role_Detail
     * @example
     * // Get one Role_Detail
     * const role_Detail = await prisma.role_Detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Role_DetailFindFirstArgs>(args?: SelectSubset<T, Role_DetailFindFirstArgs<ExtArgs>>): Prisma__Role_DetailClient<$Result.GetResult<Prisma.$Role_DetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role_Detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_DetailFindFirstOrThrowArgs} args - Arguments to find a Role_Detail
     * @example
     * // Get one Role_Detail
     * const role_Detail = await prisma.role_Detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Role_DetailFindFirstOrThrowArgs>(args?: SelectSubset<T, Role_DetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__Role_DetailClient<$Result.GetResult<Prisma.$Role_DetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Role_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_DetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role_Details
     * const role_Details = await prisma.role_Detail.findMany()
     * 
     * // Get first 10 Role_Details
     * const role_Details = await prisma.role_Detail.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const role_DetailWithIdOnly = await prisma.role_Detail.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends Role_DetailFindManyArgs>(args?: SelectSubset<T, Role_DetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Role_DetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role_Detail.
     * @param {Role_DetailCreateArgs} args - Arguments to create a Role_Detail.
     * @example
     * // Create one Role_Detail
     * const Role_Detail = await prisma.role_Detail.create({
     *   data: {
     *     // ... data to create a Role_Detail
     *   }
     * })
     * 
     */
    create<T extends Role_DetailCreateArgs>(args: SelectSubset<T, Role_DetailCreateArgs<ExtArgs>>): Prisma__Role_DetailClient<$Result.GetResult<Prisma.$Role_DetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Role_Details.
     * @param {Role_DetailCreateManyArgs} args - Arguments to create many Role_Details.
     * @example
     * // Create many Role_Details
     * const role_Detail = await prisma.role_Detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Role_DetailCreateManyArgs>(args?: SelectSubset<T, Role_DetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role_Detail.
     * @param {Role_DetailDeleteArgs} args - Arguments to delete one Role_Detail.
     * @example
     * // Delete one Role_Detail
     * const Role_Detail = await prisma.role_Detail.delete({
     *   where: {
     *     // ... filter to delete one Role_Detail
     *   }
     * })
     * 
     */
    delete<T extends Role_DetailDeleteArgs>(args: SelectSubset<T, Role_DetailDeleteArgs<ExtArgs>>): Prisma__Role_DetailClient<$Result.GetResult<Prisma.$Role_DetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role_Detail.
     * @param {Role_DetailUpdateArgs} args - Arguments to update one Role_Detail.
     * @example
     * // Update one Role_Detail
     * const role_Detail = await prisma.role_Detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Role_DetailUpdateArgs>(args: SelectSubset<T, Role_DetailUpdateArgs<ExtArgs>>): Prisma__Role_DetailClient<$Result.GetResult<Prisma.$Role_DetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Role_Details.
     * @param {Role_DetailDeleteManyArgs} args - Arguments to filter Role_Details to delete.
     * @example
     * // Delete a few Role_Details
     * const { count } = await prisma.role_Detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Role_DetailDeleteManyArgs>(args?: SelectSubset<T, Role_DetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_DetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role_Details
     * const role_Detail = await prisma.role_Detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Role_DetailUpdateManyArgs>(args: SelectSubset<T, Role_DetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role_Detail.
     * @param {Role_DetailUpsertArgs} args - Arguments to update or create a Role_Detail.
     * @example
     * // Update or create a Role_Detail
     * const role_Detail = await prisma.role_Detail.upsert({
     *   create: {
     *     // ... data to create a Role_Detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role_Detail we want to update
     *   }
     * })
     */
    upsert<T extends Role_DetailUpsertArgs>(args: SelectSubset<T, Role_DetailUpsertArgs<ExtArgs>>): Prisma__Role_DetailClient<$Result.GetResult<Prisma.$Role_DetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Role_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_DetailCountArgs} args - Arguments to filter Role_Details to count.
     * @example
     * // Count the number of Role_Details
     * const count = await prisma.role_Detail.count({
     *   where: {
     *     // ... the filter for the Role_Details we want to count
     *   }
     * })
    **/
    count<T extends Role_DetailCountArgs>(
      args?: Subset<T, Role_DetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Role_DetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role_Detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_DetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Role_DetailAggregateArgs>(args: Subset<T, Role_DetailAggregateArgs>): Prisma.PrismaPromise<GetRole_DetailAggregateType<T>>

    /**
     * Group by Role_Detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_DetailGroupByArgs} args - Group by arguments.
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
      T extends Role_DetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Role_DetailGroupByArgs['orderBy'] }
        : { orderBy?: Role_DetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Role_DetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_DetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role_Detail model
   */
  readonly fields: Role_DetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role_Detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Role_DetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Role_Detail model
   */ 
  interface Role_DetailFieldRefs {
    readonly Id: FieldRef<"Role_Detail", 'BigInt'>
    readonly Role_Id: FieldRef<"Role_Detail", 'BigInt'>
    readonly ControllerName: FieldRef<"Role_Detail", 'String'>
    readonly ActionName: FieldRef<"Role_Detail", 'String'>
    readonly Roles: FieldRef<"Role_Detail", 'String'>
    readonly Url: FieldRef<"Role_Detail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role_Detail findUnique
   */
  export type Role_DetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Detail
     */
    select?: Role_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role_DetailInclude<ExtArgs> | null
    /**
     * Filter, which Role_Detail to fetch.
     */
    where: Role_DetailWhereUniqueInput
  }

  /**
   * Role_Detail findUniqueOrThrow
   */
  export type Role_DetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Detail
     */
    select?: Role_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role_DetailInclude<ExtArgs> | null
    /**
     * Filter, which Role_Detail to fetch.
     */
    where: Role_DetailWhereUniqueInput
  }

  /**
   * Role_Detail findFirst
   */
  export type Role_DetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Detail
     */
    select?: Role_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role_DetailInclude<ExtArgs> | null
    /**
     * Filter, which Role_Detail to fetch.
     */
    where?: Role_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role_Details to fetch.
     */
    orderBy?: Role_DetailOrderByWithRelationInput | Role_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Role_Details.
     */
    cursor?: Role_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Role_Details.
     */
    distinct?: Role_DetailScalarFieldEnum | Role_DetailScalarFieldEnum[]
  }

  /**
   * Role_Detail findFirstOrThrow
   */
  export type Role_DetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Detail
     */
    select?: Role_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role_DetailInclude<ExtArgs> | null
    /**
     * Filter, which Role_Detail to fetch.
     */
    where?: Role_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role_Details to fetch.
     */
    orderBy?: Role_DetailOrderByWithRelationInput | Role_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Role_Details.
     */
    cursor?: Role_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Role_Details.
     */
    distinct?: Role_DetailScalarFieldEnum | Role_DetailScalarFieldEnum[]
  }

  /**
   * Role_Detail findMany
   */
  export type Role_DetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Detail
     */
    select?: Role_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role_DetailInclude<ExtArgs> | null
    /**
     * Filter, which Role_Details to fetch.
     */
    where?: Role_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Role_Details to fetch.
     */
    orderBy?: Role_DetailOrderByWithRelationInput | Role_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Role_Details.
     */
    cursor?: Role_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Role_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Role_Details.
     */
    skip?: number
    distinct?: Role_DetailScalarFieldEnum | Role_DetailScalarFieldEnum[]
  }

  /**
   * Role_Detail create
   */
  export type Role_DetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Detail
     */
    select?: Role_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role_DetailInclude<ExtArgs> | null
    /**
     * The data needed to create a Role_Detail.
     */
    data: XOR<Role_DetailCreateInput, Role_DetailUncheckedCreateInput>
  }

  /**
   * Role_Detail createMany
   */
  export type Role_DetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Role_Details.
     */
    data: Role_DetailCreateManyInput | Role_DetailCreateManyInput[]
  }

  /**
   * Role_Detail update
   */
  export type Role_DetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Detail
     */
    select?: Role_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role_DetailInclude<ExtArgs> | null
    /**
     * The data needed to update a Role_Detail.
     */
    data: XOR<Role_DetailUpdateInput, Role_DetailUncheckedUpdateInput>
    /**
     * Choose, which Role_Detail to update.
     */
    where: Role_DetailWhereUniqueInput
  }

  /**
   * Role_Detail updateMany
   */
  export type Role_DetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Role_Details.
     */
    data: XOR<Role_DetailUpdateManyMutationInput, Role_DetailUncheckedUpdateManyInput>
    /**
     * Filter which Role_Details to update
     */
    where?: Role_DetailWhereInput
  }

  /**
   * Role_Detail upsert
   */
  export type Role_DetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Detail
     */
    select?: Role_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role_DetailInclude<ExtArgs> | null
    /**
     * The filter to search for the Role_Detail to update in case it exists.
     */
    where: Role_DetailWhereUniqueInput
    /**
     * In case the Role_Detail found by the `where` argument doesn't exist, create a new Role_Detail with this data.
     */
    create: XOR<Role_DetailCreateInput, Role_DetailUncheckedCreateInput>
    /**
     * In case the Role_Detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Role_DetailUpdateInput, Role_DetailUncheckedUpdateInput>
  }

  /**
   * Role_Detail delete
   */
  export type Role_DetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Detail
     */
    select?: Role_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role_DetailInclude<ExtArgs> | null
    /**
     * Filter which Role_Detail to delete.
     */
    where: Role_DetailWhereUniqueInput
  }

  /**
   * Role_Detail deleteMany
   */
  export type Role_DetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role_Details to delete
     */
    where?: Role_DetailWhereInput
  }

  /**
   * Role_Detail without action
   */
  export type Role_DetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role_Detail
     */
    select?: Role_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Role_DetailInclude<ExtArgs> | null
  }


  /**
   * Model User_Activity
   */

  export type AggregateUser_Activity = {
    _count: User_ActivityCountAggregateOutputType | null
    _avg: User_ActivityAvgAggregateOutputType | null
    _sum: User_ActivitySumAggregateOutputType | null
    _min: User_ActivityMinAggregateOutputType | null
    _max: User_ActivityMaxAggregateOutputType | null
  }

  export type User_ActivityAvgAggregateOutputType = {
    Id: number | null
  }

  export type User_ActivitySumAggregateOutputType = {
    Id: bigint | null
  }

  export type User_ActivityMinAggregateOutputType = {
    Id: bigint | null
    Username: string | null
    ControllerName: string | null
    ActionName: string | null
    Activity: string | null
    IP_Address: string | null
    Created_Date: Date | null
  }

  export type User_ActivityMaxAggregateOutputType = {
    Id: bigint | null
    Username: string | null
    ControllerName: string | null
    ActionName: string | null
    Activity: string | null
    IP_Address: string | null
    Created_Date: Date | null
  }

  export type User_ActivityCountAggregateOutputType = {
    Id: number
    Username: number
    ControllerName: number
    ActionName: number
    Activity: number
    IP_Address: number
    Created_Date: number
    _all: number
  }


  export type User_ActivityAvgAggregateInputType = {
    Id?: true
  }

  export type User_ActivitySumAggregateInputType = {
    Id?: true
  }

  export type User_ActivityMinAggregateInputType = {
    Id?: true
    Username?: true
    ControllerName?: true
    ActionName?: true
    Activity?: true
    IP_Address?: true
    Created_Date?: true
  }

  export type User_ActivityMaxAggregateInputType = {
    Id?: true
    Username?: true
    ControllerName?: true
    ActionName?: true
    Activity?: true
    IP_Address?: true
    Created_Date?: true
  }

  export type User_ActivityCountAggregateInputType = {
    Id?: true
    Username?: true
    ControllerName?: true
    ActionName?: true
    Activity?: true
    IP_Address?: true
    Created_Date?: true
    _all?: true
  }

  export type User_ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Activity to aggregate.
     */
    where?: User_ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Activities to fetch.
     */
    orderBy?: User_ActivityOrderByWithRelationInput | User_ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Activities
    **/
    _count?: true | User_ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_ActivityMaxAggregateInputType
  }

  export type GetUser_ActivityAggregateType<T extends User_ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Activity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Activity[P]>
      : GetScalarType<T[P], AggregateUser_Activity[P]>
  }




  export type User_ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_ActivityWhereInput
    orderBy?: User_ActivityOrderByWithAggregationInput | User_ActivityOrderByWithAggregationInput[]
    by: User_ActivityScalarFieldEnum[] | User_ActivityScalarFieldEnum
    having?: User_ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_ActivityCountAggregateInputType | true
    _avg?: User_ActivityAvgAggregateInputType
    _sum?: User_ActivitySumAggregateInputType
    _min?: User_ActivityMinAggregateInputType
    _max?: User_ActivityMaxAggregateInputType
  }

  export type User_ActivityGroupByOutputType = {
    Id: bigint
    Username: string | null
    ControllerName: string | null
    ActionName: string | null
    Activity: string | null
    IP_Address: string | null
    Created_Date: Date
    _count: User_ActivityCountAggregateOutputType | null
    _avg: User_ActivityAvgAggregateOutputType | null
    _sum: User_ActivitySumAggregateOutputType | null
    _min: User_ActivityMinAggregateOutputType | null
    _max: User_ActivityMaxAggregateOutputType | null
  }

  type GetUser_ActivityGroupByPayload<T extends User_ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], User_ActivityGroupByOutputType[P]>
        }
      >
    >


  export type User_ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Username?: boolean
    ControllerName?: boolean
    ActionName?: boolean
    Activity?: boolean
    IP_Address?: boolean
    Created_Date?: boolean
    User_Activity?: boolean | User_ActivityDefaultArgs<ExtArgs>
    other_User_Activity?: boolean | User_Activity$other_User_ActivityArgs<ExtArgs>
  }, ExtArgs["result"]["user_Activity"]>


  export type User_ActivitySelectScalar = {
    Id?: boolean
    Username?: boolean
    ControllerName?: boolean
    ActionName?: boolean
    Activity?: boolean
    IP_Address?: boolean
    Created_Date?: boolean
  }

  export type User_ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User_Activity?: boolean | User_ActivityDefaultArgs<ExtArgs>
    other_User_Activity?: boolean | User_Activity$other_User_ActivityArgs<ExtArgs>
  }

  export type $User_ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_Activity"
    objects: {
      User_Activity: Prisma.$User_ActivityPayload<ExtArgs>
      other_User_Activity: Prisma.$User_ActivityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      Username: string | null
      ControllerName: string | null
      ActionName: string | null
      Activity: string | null
      IP_Address: string | null
      Created_Date: Date
    }, ExtArgs["result"]["user_Activity"]>
    composites: {}
  }

  type User_ActivityGetPayload<S extends boolean | null | undefined | User_ActivityDefaultArgs> = $Result.GetResult<Prisma.$User_ActivityPayload, S>

  type User_ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<User_ActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_ActivityCountAggregateInputType | true
    }

  export interface User_ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_Activity'], meta: { name: 'User_Activity' } }
    /**
     * Find zero or one User_Activity that matches the filter.
     * @param {User_ActivityFindUniqueArgs} args - Arguments to find a User_Activity
     * @example
     * // Get one User_Activity
     * const user_Activity = await prisma.user_Activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_ActivityFindUniqueArgs>(args: SelectSubset<T, User_ActivityFindUniqueArgs<ExtArgs>>): Prisma__User_ActivityClient<$Result.GetResult<Prisma.$User_ActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User_Activity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {User_ActivityFindUniqueOrThrowArgs} args - Arguments to find a User_Activity
     * @example
     * // Get one User_Activity
     * const user_Activity = await prisma.user_Activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, User_ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_ActivityClient<$Result.GetResult<Prisma.$User_ActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User_Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ActivityFindFirstArgs} args - Arguments to find a User_Activity
     * @example
     * // Get one User_Activity
     * const user_Activity = await prisma.user_Activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_ActivityFindFirstArgs>(args?: SelectSubset<T, User_ActivityFindFirstArgs<ExtArgs>>): Prisma__User_ActivityClient<$Result.GetResult<Prisma.$User_ActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User_Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ActivityFindFirstOrThrowArgs} args - Arguments to find a User_Activity
     * @example
     * // Get one User_Activity
     * const user_Activity = await prisma.user_Activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, User_ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_ActivityClient<$Result.GetResult<Prisma.$User_ActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more User_Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Activities
     * const user_Activities = await prisma.user_Activity.findMany()
     * 
     * // Get first 10 User_Activities
     * const user_Activities = await prisma.user_Activity.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const user_ActivityWithIdOnly = await prisma.user_Activity.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends User_ActivityFindManyArgs>(args?: SelectSubset<T, User_ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_ActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User_Activity.
     * @param {User_ActivityCreateArgs} args - Arguments to create a User_Activity.
     * @example
     * // Create one User_Activity
     * const User_Activity = await prisma.user_Activity.create({
     *   data: {
     *     // ... data to create a User_Activity
     *   }
     * })
     * 
     */
    create<T extends User_ActivityCreateArgs>(args: SelectSubset<T, User_ActivityCreateArgs<ExtArgs>>): Prisma__User_ActivityClient<$Result.GetResult<Prisma.$User_ActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many User_Activities.
     * @param {User_ActivityCreateManyArgs} args - Arguments to create many User_Activities.
     * @example
     * // Create many User_Activities
     * const user_Activity = await prisma.user_Activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_ActivityCreateManyArgs>(args?: SelectSubset<T, User_ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_Activity.
     * @param {User_ActivityDeleteArgs} args - Arguments to delete one User_Activity.
     * @example
     * // Delete one User_Activity
     * const User_Activity = await prisma.user_Activity.delete({
     *   where: {
     *     // ... filter to delete one User_Activity
     *   }
     * })
     * 
     */
    delete<T extends User_ActivityDeleteArgs>(args: SelectSubset<T, User_ActivityDeleteArgs<ExtArgs>>): Prisma__User_ActivityClient<$Result.GetResult<Prisma.$User_ActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User_Activity.
     * @param {User_ActivityUpdateArgs} args - Arguments to update one User_Activity.
     * @example
     * // Update one User_Activity
     * const user_Activity = await prisma.user_Activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_ActivityUpdateArgs>(args: SelectSubset<T, User_ActivityUpdateArgs<ExtArgs>>): Prisma__User_ActivityClient<$Result.GetResult<Prisma.$User_ActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more User_Activities.
     * @param {User_ActivityDeleteManyArgs} args - Arguments to filter User_Activities to delete.
     * @example
     * // Delete a few User_Activities
     * const { count } = await prisma.user_Activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_ActivityDeleteManyArgs>(args?: SelectSubset<T, User_ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Activities
     * const user_Activity = await prisma.user_Activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_ActivityUpdateManyArgs>(args: SelectSubset<T, User_ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Activity.
     * @param {User_ActivityUpsertArgs} args - Arguments to update or create a User_Activity.
     * @example
     * // Update or create a User_Activity
     * const user_Activity = await prisma.user_Activity.upsert({
     *   create: {
     *     // ... data to create a User_Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Activity we want to update
     *   }
     * })
     */
    upsert<T extends User_ActivityUpsertArgs>(args: SelectSubset<T, User_ActivityUpsertArgs<ExtArgs>>): Prisma__User_ActivityClient<$Result.GetResult<Prisma.$User_ActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of User_Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ActivityCountArgs} args - Arguments to filter User_Activities to count.
     * @example
     * // Count the number of User_Activities
     * const count = await prisma.user_Activity.count({
     *   where: {
     *     // ... the filter for the User_Activities we want to count
     *   }
     * })
    **/
    count<T extends User_ActivityCountArgs>(
      args?: Subset<T, User_ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_ActivityAggregateArgs>(args: Subset<T, User_ActivityAggregateArgs>): Prisma.PrismaPromise<GetUser_ActivityAggregateType<T>>

    /**
     * Group by User_Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ActivityGroupByArgs} args - Group by arguments.
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
      T extends User_ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_ActivityGroupByArgs['orderBy'] }
        : { orderBy?: User_ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_ActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_Activity model
   */
  readonly fields: User_ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User_Activity<T extends User_ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, User_ActivityDefaultArgs<ExtArgs>>): Prisma__User_ActivityClient<$Result.GetResult<Prisma.$User_ActivityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    other_User_Activity<T extends User_Activity$other_User_ActivityArgs<ExtArgs> = {}>(args?: Subset<T, User_Activity$other_User_ActivityArgs<ExtArgs>>): Prisma__User_ActivityClient<$Result.GetResult<Prisma.$User_ActivityPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the User_Activity model
   */ 
  interface User_ActivityFieldRefs {
    readonly Id: FieldRef<"User_Activity", 'BigInt'>
    readonly Username: FieldRef<"User_Activity", 'String'>
    readonly ControllerName: FieldRef<"User_Activity", 'String'>
    readonly ActionName: FieldRef<"User_Activity", 'String'>
    readonly Activity: FieldRef<"User_Activity", 'String'>
    readonly IP_Address: FieldRef<"User_Activity", 'String'>
    readonly Created_Date: FieldRef<"User_Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User_Activity findUnique
   */
  export type User_ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Activity
     */
    select?: User_ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_ActivityInclude<ExtArgs> | null
    /**
     * Filter, which User_Activity to fetch.
     */
    where: User_ActivityWhereUniqueInput
  }

  /**
   * User_Activity findUniqueOrThrow
   */
  export type User_ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Activity
     */
    select?: User_ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_ActivityInclude<ExtArgs> | null
    /**
     * Filter, which User_Activity to fetch.
     */
    where: User_ActivityWhereUniqueInput
  }

  /**
   * User_Activity findFirst
   */
  export type User_ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Activity
     */
    select?: User_ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_ActivityInclude<ExtArgs> | null
    /**
     * Filter, which User_Activity to fetch.
     */
    where?: User_ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Activities to fetch.
     */
    orderBy?: User_ActivityOrderByWithRelationInput | User_ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Activities.
     */
    cursor?: User_ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Activities.
     */
    distinct?: User_ActivityScalarFieldEnum | User_ActivityScalarFieldEnum[]
  }

  /**
   * User_Activity findFirstOrThrow
   */
  export type User_ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Activity
     */
    select?: User_ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_ActivityInclude<ExtArgs> | null
    /**
     * Filter, which User_Activity to fetch.
     */
    where?: User_ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Activities to fetch.
     */
    orderBy?: User_ActivityOrderByWithRelationInput | User_ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Activities.
     */
    cursor?: User_ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Activities.
     */
    distinct?: User_ActivityScalarFieldEnum | User_ActivityScalarFieldEnum[]
  }

  /**
   * User_Activity findMany
   */
  export type User_ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Activity
     */
    select?: User_ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_ActivityInclude<ExtArgs> | null
    /**
     * Filter, which User_Activities to fetch.
     */
    where?: User_ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Activities to fetch.
     */
    orderBy?: User_ActivityOrderByWithRelationInput | User_ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Activities.
     */
    cursor?: User_ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Activities.
     */
    skip?: number
    distinct?: User_ActivityScalarFieldEnum | User_ActivityScalarFieldEnum[]
  }

  /**
   * User_Activity create
   */
  export type User_ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Activity
     */
    select?: User_ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a User_Activity.
     */
    data: XOR<User_ActivityCreateInput, User_ActivityUncheckedCreateInput>
  }

  /**
   * User_Activity createMany
   */
  export type User_ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_Activities.
     */
    data: User_ActivityCreateManyInput | User_ActivityCreateManyInput[]
  }

  /**
   * User_Activity update
   */
  export type User_ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Activity
     */
    select?: User_ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a User_Activity.
     */
    data: XOR<User_ActivityUpdateInput, User_ActivityUncheckedUpdateInput>
    /**
     * Choose, which User_Activity to update.
     */
    where: User_ActivityWhereUniqueInput
  }

  /**
   * User_Activity updateMany
   */
  export type User_ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_Activities.
     */
    data: XOR<User_ActivityUpdateManyMutationInput, User_ActivityUncheckedUpdateManyInput>
    /**
     * Filter which User_Activities to update
     */
    where?: User_ActivityWhereInput
  }

  /**
   * User_Activity upsert
   */
  export type User_ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Activity
     */
    select?: User_ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the User_Activity to update in case it exists.
     */
    where: User_ActivityWhereUniqueInput
    /**
     * In case the User_Activity found by the `where` argument doesn't exist, create a new User_Activity with this data.
     */
    create: XOR<User_ActivityCreateInput, User_ActivityUncheckedCreateInput>
    /**
     * In case the User_Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_ActivityUpdateInput, User_ActivityUncheckedUpdateInput>
  }

  /**
   * User_Activity delete
   */
  export type User_ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Activity
     */
    select?: User_ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_ActivityInclude<ExtArgs> | null
    /**
     * Filter which User_Activity to delete.
     */
    where: User_ActivityWhereUniqueInput
  }

  /**
   * User_Activity deleteMany
   */
  export type User_ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Activities to delete
     */
    where?: User_ActivityWhereInput
  }

  /**
   * User_Activity.other_User_Activity
   */
  export type User_Activity$other_User_ActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Activity
     */
    select?: User_ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_ActivityInclude<ExtArgs> | null
    where?: User_ActivityWhereInput
  }

  /**
   * User_Activity without action
   */
  export type User_ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Activity
     */
    select?: User_ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_ActivityInclude<ExtArgs> | null
  }


  /**
   * Model User_ComLoc
   */

  export type AggregateUser_ComLoc = {
    _count: User_ComLocCountAggregateOutputType | null
    _avg: User_ComLocAvgAggregateOutputType | null
    _sum: User_ComLocSumAggregateOutputType | null
    _min: User_ComLocMinAggregateOutputType | null
    _max: User_ComLocMaxAggregateOutputType | null
  }

  export type User_ComLocAvgAggregateOutputType = {
    Id: number | null
  }

  export type User_ComLocSumAggregateOutputType = {
    Id: bigint | null
  }

  export type User_ComLocMinAggregateOutputType = {
    Id: bigint | null
    Username: string | null
    ComLocID: string | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
  }

  export type User_ComLocMaxAggregateOutputType = {
    Id: bigint | null
    Username: string | null
    ComLocID: string | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
  }

  export type User_ComLocCountAggregateOutputType = {
    Id: number
    Username: number
    ComLocID: number
    Created_At: number
    Created_By: number
    Updated_At: number
    Updated_By: number
    _all: number
  }


  export type User_ComLocAvgAggregateInputType = {
    Id?: true
  }

  export type User_ComLocSumAggregateInputType = {
    Id?: true
  }

  export type User_ComLocMinAggregateInputType = {
    Id?: true
    Username?: true
    ComLocID?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
  }

  export type User_ComLocMaxAggregateInputType = {
    Id?: true
    Username?: true
    ComLocID?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
  }

  export type User_ComLocCountAggregateInputType = {
    Id?: true
    Username?: true
    ComLocID?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    _all?: true
  }

  export type User_ComLocAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_ComLoc to aggregate.
     */
    where?: User_ComLocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_ComLocs to fetch.
     */
    orderBy?: User_ComLocOrderByWithRelationInput | User_ComLocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_ComLocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_ComLocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_ComLocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_ComLocs
    **/
    _count?: true | User_ComLocCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_ComLocAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_ComLocSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_ComLocMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_ComLocMaxAggregateInputType
  }

  export type GetUser_ComLocAggregateType<T extends User_ComLocAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_ComLoc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_ComLoc[P]>
      : GetScalarType<T[P], AggregateUser_ComLoc[P]>
  }




  export type User_ComLocGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_ComLocWhereInput
    orderBy?: User_ComLocOrderByWithAggregationInput | User_ComLocOrderByWithAggregationInput[]
    by: User_ComLocScalarFieldEnum[] | User_ComLocScalarFieldEnum
    having?: User_ComLocScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_ComLocCountAggregateInputType | true
    _avg?: User_ComLocAvgAggregateInputType
    _sum?: User_ComLocSumAggregateInputType
    _min?: User_ComLocMinAggregateInputType
    _max?: User_ComLocMaxAggregateInputType
  }

  export type User_ComLocGroupByOutputType = {
    Id: bigint
    Username: string
    ComLocID: string
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    _count: User_ComLocCountAggregateOutputType | null
    _avg: User_ComLocAvgAggregateOutputType | null
    _sum: User_ComLocSumAggregateOutputType | null
    _min: User_ComLocMinAggregateOutputType | null
    _max: User_ComLocMaxAggregateOutputType | null
  }

  type GetUser_ComLocGroupByPayload<T extends User_ComLocGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_ComLocGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_ComLocGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_ComLocGroupByOutputType[P]>
            : GetScalarType<T[P], User_ComLocGroupByOutputType[P]>
        }
      >
    >


  export type User_ComLocSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Username?: boolean
    ComLocID?: boolean
    Created_At?: boolean
    Created_By?: boolean
    Updated_At?: boolean
    Updated_By?: boolean
  }, ExtArgs["result"]["user_ComLoc"]>


  export type User_ComLocSelectScalar = {
    Id?: boolean
    Username?: boolean
    ComLocID?: boolean
    Created_At?: boolean
    Created_By?: boolean
    Updated_At?: boolean
    Updated_By?: boolean
  }


  export type $User_ComLocPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_ComLoc"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      Username: string
      ComLocID: string
      Created_At: Date | null
      Created_By: string | null
      Updated_At: Date | null
      Updated_By: string | null
    }, ExtArgs["result"]["user_ComLoc"]>
    composites: {}
  }

  type User_ComLocGetPayload<S extends boolean | null | undefined | User_ComLocDefaultArgs> = $Result.GetResult<Prisma.$User_ComLocPayload, S>

  type User_ComLocCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<User_ComLocFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_ComLocCountAggregateInputType | true
    }

  export interface User_ComLocDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_ComLoc'], meta: { name: 'User_ComLoc' } }
    /**
     * Find zero or one User_ComLoc that matches the filter.
     * @param {User_ComLocFindUniqueArgs} args - Arguments to find a User_ComLoc
     * @example
     * // Get one User_ComLoc
     * const user_ComLoc = await prisma.user_ComLoc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_ComLocFindUniqueArgs>(args: SelectSubset<T, User_ComLocFindUniqueArgs<ExtArgs>>): Prisma__User_ComLocClient<$Result.GetResult<Prisma.$User_ComLocPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User_ComLoc that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {User_ComLocFindUniqueOrThrowArgs} args - Arguments to find a User_ComLoc
     * @example
     * // Get one User_ComLoc
     * const user_ComLoc = await prisma.user_ComLoc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_ComLocFindUniqueOrThrowArgs>(args: SelectSubset<T, User_ComLocFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_ComLocClient<$Result.GetResult<Prisma.$User_ComLocPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User_ComLoc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ComLocFindFirstArgs} args - Arguments to find a User_ComLoc
     * @example
     * // Get one User_ComLoc
     * const user_ComLoc = await prisma.user_ComLoc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_ComLocFindFirstArgs>(args?: SelectSubset<T, User_ComLocFindFirstArgs<ExtArgs>>): Prisma__User_ComLocClient<$Result.GetResult<Prisma.$User_ComLocPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User_ComLoc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ComLocFindFirstOrThrowArgs} args - Arguments to find a User_ComLoc
     * @example
     * // Get one User_ComLoc
     * const user_ComLoc = await prisma.user_ComLoc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_ComLocFindFirstOrThrowArgs>(args?: SelectSubset<T, User_ComLocFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_ComLocClient<$Result.GetResult<Prisma.$User_ComLocPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more User_ComLocs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ComLocFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_ComLocs
     * const user_ComLocs = await prisma.user_ComLoc.findMany()
     * 
     * // Get first 10 User_ComLocs
     * const user_ComLocs = await prisma.user_ComLoc.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const user_ComLocWithIdOnly = await prisma.user_ComLoc.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends User_ComLocFindManyArgs>(args?: SelectSubset<T, User_ComLocFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_ComLocPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User_ComLoc.
     * @param {User_ComLocCreateArgs} args - Arguments to create a User_ComLoc.
     * @example
     * // Create one User_ComLoc
     * const User_ComLoc = await prisma.user_ComLoc.create({
     *   data: {
     *     // ... data to create a User_ComLoc
     *   }
     * })
     * 
     */
    create<T extends User_ComLocCreateArgs>(args: SelectSubset<T, User_ComLocCreateArgs<ExtArgs>>): Prisma__User_ComLocClient<$Result.GetResult<Prisma.$User_ComLocPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many User_ComLocs.
     * @param {User_ComLocCreateManyArgs} args - Arguments to create many User_ComLocs.
     * @example
     * // Create many User_ComLocs
     * const user_ComLoc = await prisma.user_ComLoc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_ComLocCreateManyArgs>(args?: SelectSubset<T, User_ComLocCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_ComLoc.
     * @param {User_ComLocDeleteArgs} args - Arguments to delete one User_ComLoc.
     * @example
     * // Delete one User_ComLoc
     * const User_ComLoc = await prisma.user_ComLoc.delete({
     *   where: {
     *     // ... filter to delete one User_ComLoc
     *   }
     * })
     * 
     */
    delete<T extends User_ComLocDeleteArgs>(args: SelectSubset<T, User_ComLocDeleteArgs<ExtArgs>>): Prisma__User_ComLocClient<$Result.GetResult<Prisma.$User_ComLocPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User_ComLoc.
     * @param {User_ComLocUpdateArgs} args - Arguments to update one User_ComLoc.
     * @example
     * // Update one User_ComLoc
     * const user_ComLoc = await prisma.user_ComLoc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_ComLocUpdateArgs>(args: SelectSubset<T, User_ComLocUpdateArgs<ExtArgs>>): Prisma__User_ComLocClient<$Result.GetResult<Prisma.$User_ComLocPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more User_ComLocs.
     * @param {User_ComLocDeleteManyArgs} args - Arguments to filter User_ComLocs to delete.
     * @example
     * // Delete a few User_ComLocs
     * const { count } = await prisma.user_ComLoc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_ComLocDeleteManyArgs>(args?: SelectSubset<T, User_ComLocDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_ComLocs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ComLocUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_ComLocs
     * const user_ComLoc = await prisma.user_ComLoc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_ComLocUpdateManyArgs>(args: SelectSubset<T, User_ComLocUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_ComLoc.
     * @param {User_ComLocUpsertArgs} args - Arguments to update or create a User_ComLoc.
     * @example
     * // Update or create a User_ComLoc
     * const user_ComLoc = await prisma.user_ComLoc.upsert({
     *   create: {
     *     // ... data to create a User_ComLoc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_ComLoc we want to update
     *   }
     * })
     */
    upsert<T extends User_ComLocUpsertArgs>(args: SelectSubset<T, User_ComLocUpsertArgs<ExtArgs>>): Prisma__User_ComLocClient<$Result.GetResult<Prisma.$User_ComLocPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of User_ComLocs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ComLocCountArgs} args - Arguments to filter User_ComLocs to count.
     * @example
     * // Count the number of User_ComLocs
     * const count = await prisma.user_ComLoc.count({
     *   where: {
     *     // ... the filter for the User_ComLocs we want to count
     *   }
     * })
    **/
    count<T extends User_ComLocCountArgs>(
      args?: Subset<T, User_ComLocCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_ComLocCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_ComLoc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ComLocAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_ComLocAggregateArgs>(args: Subset<T, User_ComLocAggregateArgs>): Prisma.PrismaPromise<GetUser_ComLocAggregateType<T>>

    /**
     * Group by User_ComLoc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ComLocGroupByArgs} args - Group by arguments.
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
      T extends User_ComLocGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_ComLocGroupByArgs['orderBy'] }
        : { orderBy?: User_ComLocGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_ComLocGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_ComLocGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_ComLoc model
   */
  readonly fields: User_ComLocFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_ComLoc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_ComLocClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User_ComLoc model
   */ 
  interface User_ComLocFieldRefs {
    readonly Id: FieldRef<"User_ComLoc", 'BigInt'>
    readonly Username: FieldRef<"User_ComLoc", 'String'>
    readonly ComLocID: FieldRef<"User_ComLoc", 'String'>
    readonly Created_At: FieldRef<"User_ComLoc", 'DateTime'>
    readonly Created_By: FieldRef<"User_ComLoc", 'String'>
    readonly Updated_At: FieldRef<"User_ComLoc", 'DateTime'>
    readonly Updated_By: FieldRef<"User_ComLoc", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User_ComLoc findUnique
   */
  export type User_ComLocFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_ComLoc
     */
    select?: User_ComLocSelect<ExtArgs> | null
    /**
     * Filter, which User_ComLoc to fetch.
     */
    where: User_ComLocWhereUniqueInput
  }

  /**
   * User_ComLoc findUniqueOrThrow
   */
  export type User_ComLocFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_ComLoc
     */
    select?: User_ComLocSelect<ExtArgs> | null
    /**
     * Filter, which User_ComLoc to fetch.
     */
    where: User_ComLocWhereUniqueInput
  }

  /**
   * User_ComLoc findFirst
   */
  export type User_ComLocFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_ComLoc
     */
    select?: User_ComLocSelect<ExtArgs> | null
    /**
     * Filter, which User_ComLoc to fetch.
     */
    where?: User_ComLocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_ComLocs to fetch.
     */
    orderBy?: User_ComLocOrderByWithRelationInput | User_ComLocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_ComLocs.
     */
    cursor?: User_ComLocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_ComLocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_ComLocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_ComLocs.
     */
    distinct?: User_ComLocScalarFieldEnum | User_ComLocScalarFieldEnum[]
  }

  /**
   * User_ComLoc findFirstOrThrow
   */
  export type User_ComLocFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_ComLoc
     */
    select?: User_ComLocSelect<ExtArgs> | null
    /**
     * Filter, which User_ComLoc to fetch.
     */
    where?: User_ComLocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_ComLocs to fetch.
     */
    orderBy?: User_ComLocOrderByWithRelationInput | User_ComLocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_ComLocs.
     */
    cursor?: User_ComLocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_ComLocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_ComLocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_ComLocs.
     */
    distinct?: User_ComLocScalarFieldEnum | User_ComLocScalarFieldEnum[]
  }

  /**
   * User_ComLoc findMany
   */
  export type User_ComLocFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_ComLoc
     */
    select?: User_ComLocSelect<ExtArgs> | null
    /**
     * Filter, which User_ComLocs to fetch.
     */
    where?: User_ComLocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_ComLocs to fetch.
     */
    orderBy?: User_ComLocOrderByWithRelationInput | User_ComLocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_ComLocs.
     */
    cursor?: User_ComLocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_ComLocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_ComLocs.
     */
    skip?: number
    distinct?: User_ComLocScalarFieldEnum | User_ComLocScalarFieldEnum[]
  }

  /**
   * User_ComLoc create
   */
  export type User_ComLocCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_ComLoc
     */
    select?: User_ComLocSelect<ExtArgs> | null
    /**
     * The data needed to create a User_ComLoc.
     */
    data: XOR<User_ComLocCreateInput, User_ComLocUncheckedCreateInput>
  }

  /**
   * User_ComLoc createMany
   */
  export type User_ComLocCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_ComLocs.
     */
    data: User_ComLocCreateManyInput | User_ComLocCreateManyInput[]
  }

  /**
   * User_ComLoc update
   */
  export type User_ComLocUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_ComLoc
     */
    select?: User_ComLocSelect<ExtArgs> | null
    /**
     * The data needed to update a User_ComLoc.
     */
    data: XOR<User_ComLocUpdateInput, User_ComLocUncheckedUpdateInput>
    /**
     * Choose, which User_ComLoc to update.
     */
    where: User_ComLocWhereUniqueInput
  }

  /**
   * User_ComLoc updateMany
   */
  export type User_ComLocUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_ComLocs.
     */
    data: XOR<User_ComLocUpdateManyMutationInput, User_ComLocUncheckedUpdateManyInput>
    /**
     * Filter which User_ComLocs to update
     */
    where?: User_ComLocWhereInput
  }

  /**
   * User_ComLoc upsert
   */
  export type User_ComLocUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_ComLoc
     */
    select?: User_ComLocSelect<ExtArgs> | null
    /**
     * The filter to search for the User_ComLoc to update in case it exists.
     */
    where: User_ComLocWhereUniqueInput
    /**
     * In case the User_ComLoc found by the `where` argument doesn't exist, create a new User_ComLoc with this data.
     */
    create: XOR<User_ComLocCreateInput, User_ComLocUncheckedCreateInput>
    /**
     * In case the User_ComLoc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_ComLocUpdateInput, User_ComLocUncheckedUpdateInput>
  }

  /**
   * User_ComLoc delete
   */
  export type User_ComLocDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_ComLoc
     */
    select?: User_ComLocSelect<ExtArgs> | null
    /**
     * Filter which User_ComLoc to delete.
     */
    where: User_ComLocWhereUniqueInput
  }

  /**
   * User_ComLoc deleteMany
   */
  export type User_ComLocDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_ComLocs to delete
     */
    where?: User_ComLocWhereInput
  }

  /**
   * User_ComLoc without action
   */
  export type User_ComLocDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_ComLoc
     */
    select?: User_ComLocSelect<ExtArgs> | null
  }


  /**
   * Model User_Login
   */

  export type AggregateUser_Login = {
    _count: User_LoginCountAggregateOutputType | null
    _avg: User_LoginAvgAggregateOutputType | null
    _sum: User_LoginSumAggregateOutputType | null
    _min: User_LoginMinAggregateOutputType | null
    _max: User_LoginMaxAggregateOutputType | null
  }

  export type User_LoginAvgAggregateOutputType = {
    Id: number | null
    Telegram_Id: number | null
    Room_Id: number | null
  }

  export type User_LoginSumAggregateOutputType = {
    Id: bigint | null
    Telegram_Id: bigint | null
    Room_Id: bigint | null
  }

  export type User_LoginMinAggregateOutputType = {
    Id: bigint | null
    Username: string | null
    Password: string | null
    Email: string | null
    Name: string | null
    ComLocID: string | null
    User_Level: string | null
    Is_Admin: boolean | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Deleted: boolean | null
    Deleted_At: Date | null
    Deleted_By: string | null
    Telegram_Id: bigint | null
    Room_Id: bigint | null
    SuperUser_CrewingApp: boolean | null
  }

  export type User_LoginMaxAggregateOutputType = {
    Id: bigint | null
    Username: string | null
    Password: string | null
    Email: string | null
    Name: string | null
    ComLocID: string | null
    User_Level: string | null
    Is_Admin: boolean | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Deleted: boolean | null
    Deleted_At: Date | null
    Deleted_By: string | null
    Telegram_Id: bigint | null
    Room_Id: bigint | null
    SuperUser_CrewingApp: boolean | null
  }

  export type User_LoginCountAggregateOutputType = {
    Id: number
    Username: number
    Password: number
    Email: number
    Name: number
    ComLocID: number
    User_Level: number
    Is_Admin: number
    Created_At: number
    Created_By: number
    Updated_At: number
    Updated_By: number
    Deleted: number
    Deleted_At: number
    Deleted_By: number
    Telegram_Id: number
    Room_Id: number
    SuperUser_CrewingApp: number
    _all: number
  }


  export type User_LoginAvgAggregateInputType = {
    Id?: true
    Telegram_Id?: true
    Room_Id?: true
  }

  export type User_LoginSumAggregateInputType = {
    Id?: true
    Telegram_Id?: true
    Room_Id?: true
  }

  export type User_LoginMinAggregateInputType = {
    Id?: true
    Username?: true
    Password?: true
    Email?: true
    Name?: true
    ComLocID?: true
    User_Level?: true
    Is_Admin?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Deleted?: true
    Deleted_At?: true
    Deleted_By?: true
    Telegram_Id?: true
    Room_Id?: true
    SuperUser_CrewingApp?: true
  }

  export type User_LoginMaxAggregateInputType = {
    Id?: true
    Username?: true
    Password?: true
    Email?: true
    Name?: true
    ComLocID?: true
    User_Level?: true
    Is_Admin?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Deleted?: true
    Deleted_At?: true
    Deleted_By?: true
    Telegram_Id?: true
    Room_Id?: true
    SuperUser_CrewingApp?: true
  }

  export type User_LoginCountAggregateInputType = {
    Id?: true
    Username?: true
    Password?: true
    Email?: true
    Name?: true
    ComLocID?: true
    User_Level?: true
    Is_Admin?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Deleted?: true
    Deleted_At?: true
    Deleted_By?: true
    Telegram_Id?: true
    Room_Id?: true
    SuperUser_CrewingApp?: true
    _all?: true
  }

  export type User_LoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Login to aggregate.
     */
    where?: User_LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Logins to fetch.
     */
    orderBy?: User_LoginOrderByWithRelationInput | User_LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Logins
    **/
    _count?: true | User_LoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_LoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_LoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_LoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_LoginMaxAggregateInputType
  }

  export type GetUser_LoginAggregateType<T extends User_LoginAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Login]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Login[P]>
      : GetScalarType<T[P], AggregateUser_Login[P]>
  }




  export type User_LoginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_LoginWhereInput
    orderBy?: User_LoginOrderByWithAggregationInput | User_LoginOrderByWithAggregationInput[]
    by: User_LoginScalarFieldEnum[] | User_LoginScalarFieldEnum
    having?: User_LoginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_LoginCountAggregateInputType | true
    _avg?: User_LoginAvgAggregateInputType
    _sum?: User_LoginSumAggregateInputType
    _min?: User_LoginMinAggregateInputType
    _max?: User_LoginMaxAggregateInputType
  }

  export type User_LoginGroupByOutputType = {
    Id: bigint
    Username: string
    Password: string
    Email: string | null
    Name: string | null
    ComLocID: string | null
    User_Level: string | null
    Is_Admin: boolean
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Deleted: boolean
    Deleted_At: Date | null
    Deleted_By: string | null
    Telegram_Id: bigint | null
    Room_Id: bigint | null
    SuperUser_CrewingApp: boolean
    _count: User_LoginCountAggregateOutputType | null
    _avg: User_LoginAvgAggregateOutputType | null
    _sum: User_LoginSumAggregateOutputType | null
    _min: User_LoginMinAggregateOutputType | null
    _max: User_LoginMaxAggregateOutputType | null
  }

  type GetUser_LoginGroupByPayload<T extends User_LoginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_LoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_LoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_LoginGroupByOutputType[P]>
            : GetScalarType<T[P], User_LoginGroupByOutputType[P]>
        }
      >
    >


  export type User_LoginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Username?: boolean
    Password?: boolean
    Email?: boolean
    Name?: boolean
    ComLocID?: boolean
    User_Level?: boolean
    Is_Admin?: boolean
    Created_At?: boolean
    Created_By?: boolean
    Updated_At?: boolean
    Updated_By?: boolean
    Deleted?: boolean
    Deleted_At?: boolean
    Deleted_By?: boolean
    Telegram_Id?: boolean
    Room_Id?: boolean
    SuperUser_CrewingApp?: boolean
  }, ExtArgs["result"]["user_Login"]>


  export type User_LoginSelectScalar = {
    Id?: boolean
    Username?: boolean
    Password?: boolean
    Email?: boolean
    Name?: boolean
    ComLocID?: boolean
    User_Level?: boolean
    Is_Admin?: boolean
    Created_At?: boolean
    Created_By?: boolean
    Updated_At?: boolean
    Updated_By?: boolean
    Deleted?: boolean
    Deleted_At?: boolean
    Deleted_By?: boolean
    Telegram_Id?: boolean
    Room_Id?: boolean
    SuperUser_CrewingApp?: boolean
  }


  export type $User_LoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_Login"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      Username: string
      Password: string
      Email: string | null
      Name: string | null
      ComLocID: string | null
      User_Level: string | null
      Is_Admin: boolean
      Created_At: Date | null
      Created_By: string | null
      Updated_At: Date | null
      Updated_By: string | null
      Deleted: boolean
      Deleted_At: Date | null
      Deleted_By: string | null
      Telegram_Id: bigint | null
      Room_Id: bigint | null
      SuperUser_CrewingApp: boolean
    }, ExtArgs["result"]["user_Login"]>
    composites: {}
  }

  type User_LoginGetPayload<S extends boolean | null | undefined | User_LoginDefaultArgs> = $Result.GetResult<Prisma.$User_LoginPayload, S>

  type User_LoginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<User_LoginFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_LoginCountAggregateInputType | true
    }

  export interface User_LoginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_Login'], meta: { name: 'User_Login' } }
    /**
     * Find zero or one User_Login that matches the filter.
     * @param {User_LoginFindUniqueArgs} args - Arguments to find a User_Login
     * @example
     * // Get one User_Login
     * const user_Login = await prisma.user_Login.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_LoginFindUniqueArgs>(args: SelectSubset<T, User_LoginFindUniqueArgs<ExtArgs>>): Prisma__User_LoginClient<$Result.GetResult<Prisma.$User_LoginPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User_Login that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {User_LoginFindUniqueOrThrowArgs} args - Arguments to find a User_Login
     * @example
     * // Get one User_Login
     * const user_Login = await prisma.user_Login.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_LoginFindUniqueOrThrowArgs>(args: SelectSubset<T, User_LoginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_LoginClient<$Result.GetResult<Prisma.$User_LoginPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User_Login that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LoginFindFirstArgs} args - Arguments to find a User_Login
     * @example
     * // Get one User_Login
     * const user_Login = await prisma.user_Login.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_LoginFindFirstArgs>(args?: SelectSubset<T, User_LoginFindFirstArgs<ExtArgs>>): Prisma__User_LoginClient<$Result.GetResult<Prisma.$User_LoginPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User_Login that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LoginFindFirstOrThrowArgs} args - Arguments to find a User_Login
     * @example
     * // Get one User_Login
     * const user_Login = await prisma.user_Login.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_LoginFindFirstOrThrowArgs>(args?: SelectSubset<T, User_LoginFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_LoginClient<$Result.GetResult<Prisma.$User_LoginPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more User_Logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LoginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Logins
     * const user_Logins = await prisma.user_Login.findMany()
     * 
     * // Get first 10 User_Logins
     * const user_Logins = await prisma.user_Login.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const user_LoginWithIdOnly = await prisma.user_Login.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends User_LoginFindManyArgs>(args?: SelectSubset<T, User_LoginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_LoginPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User_Login.
     * @param {User_LoginCreateArgs} args - Arguments to create a User_Login.
     * @example
     * // Create one User_Login
     * const User_Login = await prisma.user_Login.create({
     *   data: {
     *     // ... data to create a User_Login
     *   }
     * })
     * 
     */
    create<T extends User_LoginCreateArgs>(args: SelectSubset<T, User_LoginCreateArgs<ExtArgs>>): Prisma__User_LoginClient<$Result.GetResult<Prisma.$User_LoginPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many User_Logins.
     * @param {User_LoginCreateManyArgs} args - Arguments to create many User_Logins.
     * @example
     * // Create many User_Logins
     * const user_Login = await prisma.user_Login.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_LoginCreateManyArgs>(args?: SelectSubset<T, User_LoginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_Login.
     * @param {User_LoginDeleteArgs} args - Arguments to delete one User_Login.
     * @example
     * // Delete one User_Login
     * const User_Login = await prisma.user_Login.delete({
     *   where: {
     *     // ... filter to delete one User_Login
     *   }
     * })
     * 
     */
    delete<T extends User_LoginDeleteArgs>(args: SelectSubset<T, User_LoginDeleteArgs<ExtArgs>>): Prisma__User_LoginClient<$Result.GetResult<Prisma.$User_LoginPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User_Login.
     * @param {User_LoginUpdateArgs} args - Arguments to update one User_Login.
     * @example
     * // Update one User_Login
     * const user_Login = await prisma.user_Login.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_LoginUpdateArgs>(args: SelectSubset<T, User_LoginUpdateArgs<ExtArgs>>): Prisma__User_LoginClient<$Result.GetResult<Prisma.$User_LoginPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more User_Logins.
     * @param {User_LoginDeleteManyArgs} args - Arguments to filter User_Logins to delete.
     * @example
     * // Delete a few User_Logins
     * const { count } = await prisma.user_Login.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_LoginDeleteManyArgs>(args?: SelectSubset<T, User_LoginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LoginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Logins
     * const user_Login = await prisma.user_Login.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_LoginUpdateManyArgs>(args: SelectSubset<T, User_LoginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Login.
     * @param {User_LoginUpsertArgs} args - Arguments to update or create a User_Login.
     * @example
     * // Update or create a User_Login
     * const user_Login = await prisma.user_Login.upsert({
     *   create: {
     *     // ... data to create a User_Login
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Login we want to update
     *   }
     * })
     */
    upsert<T extends User_LoginUpsertArgs>(args: SelectSubset<T, User_LoginUpsertArgs<ExtArgs>>): Prisma__User_LoginClient<$Result.GetResult<Prisma.$User_LoginPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of User_Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LoginCountArgs} args - Arguments to filter User_Logins to count.
     * @example
     * // Count the number of User_Logins
     * const count = await prisma.user_Login.count({
     *   where: {
     *     // ... the filter for the User_Logins we want to count
     *   }
     * })
    **/
    count<T extends User_LoginCountArgs>(
      args?: Subset<T, User_LoginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_LoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_LoginAggregateArgs>(args: Subset<T, User_LoginAggregateArgs>): Prisma.PrismaPromise<GetUser_LoginAggregateType<T>>

    /**
     * Group by User_Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_LoginGroupByArgs} args - Group by arguments.
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
      T extends User_LoginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_LoginGroupByArgs['orderBy'] }
        : { orderBy?: User_LoginGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_LoginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_LoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_Login model
   */
  readonly fields: User_LoginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Login.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_LoginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User_Login model
   */ 
  interface User_LoginFieldRefs {
    readonly Id: FieldRef<"User_Login", 'BigInt'>
    readonly Username: FieldRef<"User_Login", 'String'>
    readonly Password: FieldRef<"User_Login", 'String'>
    readonly Email: FieldRef<"User_Login", 'String'>
    readonly Name: FieldRef<"User_Login", 'String'>
    readonly ComLocID: FieldRef<"User_Login", 'String'>
    readonly User_Level: FieldRef<"User_Login", 'String'>
    readonly Is_Admin: FieldRef<"User_Login", 'Boolean'>
    readonly Created_At: FieldRef<"User_Login", 'DateTime'>
    readonly Created_By: FieldRef<"User_Login", 'String'>
    readonly Updated_At: FieldRef<"User_Login", 'DateTime'>
    readonly Updated_By: FieldRef<"User_Login", 'String'>
    readonly Deleted: FieldRef<"User_Login", 'Boolean'>
    readonly Deleted_At: FieldRef<"User_Login", 'DateTime'>
    readonly Deleted_By: FieldRef<"User_Login", 'String'>
    readonly Telegram_Id: FieldRef<"User_Login", 'BigInt'>
    readonly Room_Id: FieldRef<"User_Login", 'BigInt'>
    readonly SuperUser_CrewingApp: FieldRef<"User_Login", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User_Login findUnique
   */
  export type User_LoginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Login
     */
    select?: User_LoginSelect<ExtArgs> | null
    /**
     * Filter, which User_Login to fetch.
     */
    where: User_LoginWhereUniqueInput
  }

  /**
   * User_Login findUniqueOrThrow
   */
  export type User_LoginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Login
     */
    select?: User_LoginSelect<ExtArgs> | null
    /**
     * Filter, which User_Login to fetch.
     */
    where: User_LoginWhereUniqueInput
  }

  /**
   * User_Login findFirst
   */
  export type User_LoginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Login
     */
    select?: User_LoginSelect<ExtArgs> | null
    /**
     * Filter, which User_Login to fetch.
     */
    where?: User_LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Logins to fetch.
     */
    orderBy?: User_LoginOrderByWithRelationInput | User_LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Logins.
     */
    cursor?: User_LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Logins.
     */
    distinct?: User_LoginScalarFieldEnum | User_LoginScalarFieldEnum[]
  }

  /**
   * User_Login findFirstOrThrow
   */
  export type User_LoginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Login
     */
    select?: User_LoginSelect<ExtArgs> | null
    /**
     * Filter, which User_Login to fetch.
     */
    where?: User_LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Logins to fetch.
     */
    orderBy?: User_LoginOrderByWithRelationInput | User_LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Logins.
     */
    cursor?: User_LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Logins.
     */
    distinct?: User_LoginScalarFieldEnum | User_LoginScalarFieldEnum[]
  }

  /**
   * User_Login findMany
   */
  export type User_LoginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Login
     */
    select?: User_LoginSelect<ExtArgs> | null
    /**
     * Filter, which User_Logins to fetch.
     */
    where?: User_LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Logins to fetch.
     */
    orderBy?: User_LoginOrderByWithRelationInput | User_LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Logins.
     */
    cursor?: User_LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Logins.
     */
    skip?: number
    distinct?: User_LoginScalarFieldEnum | User_LoginScalarFieldEnum[]
  }

  /**
   * User_Login create
   */
  export type User_LoginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Login
     */
    select?: User_LoginSelect<ExtArgs> | null
    /**
     * The data needed to create a User_Login.
     */
    data: XOR<User_LoginCreateInput, User_LoginUncheckedCreateInput>
  }

  /**
   * User_Login createMany
   */
  export type User_LoginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_Logins.
     */
    data: User_LoginCreateManyInput | User_LoginCreateManyInput[]
  }

  /**
   * User_Login update
   */
  export type User_LoginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Login
     */
    select?: User_LoginSelect<ExtArgs> | null
    /**
     * The data needed to update a User_Login.
     */
    data: XOR<User_LoginUpdateInput, User_LoginUncheckedUpdateInput>
    /**
     * Choose, which User_Login to update.
     */
    where: User_LoginWhereUniqueInput
  }

  /**
   * User_Login updateMany
   */
  export type User_LoginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_Logins.
     */
    data: XOR<User_LoginUpdateManyMutationInput, User_LoginUncheckedUpdateManyInput>
    /**
     * Filter which User_Logins to update
     */
    where?: User_LoginWhereInput
  }

  /**
   * User_Login upsert
   */
  export type User_LoginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Login
     */
    select?: User_LoginSelect<ExtArgs> | null
    /**
     * The filter to search for the User_Login to update in case it exists.
     */
    where: User_LoginWhereUniqueInput
    /**
     * In case the User_Login found by the `where` argument doesn't exist, create a new User_Login with this data.
     */
    create: XOR<User_LoginCreateInput, User_LoginUncheckedCreateInput>
    /**
     * In case the User_Login was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_LoginUpdateInput, User_LoginUncheckedUpdateInput>
  }

  /**
   * User_Login delete
   */
  export type User_LoginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Login
     */
    select?: User_LoginSelect<ExtArgs> | null
    /**
     * Filter which User_Login to delete.
     */
    where: User_LoginWhereUniqueInput
  }

  /**
   * User_Login deleteMany
   */
  export type User_LoginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Logins to delete
     */
    where?: User_LoginWhereInput
  }

  /**
   * User_Login without action
   */
  export type User_LoginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Login
     */
    select?: User_LoginSelect<ExtArgs> | null
  }


  /**
   * Model User_Role
   */

  export type AggregateUser_Role = {
    _count: User_RoleCountAggregateOutputType | null
    _avg: User_RoleAvgAggregateOutputType | null
    _sum: User_RoleSumAggregateOutputType | null
    _min: User_RoleMinAggregateOutputType | null
    _max: User_RoleMaxAggregateOutputType | null
  }

  export type User_RoleAvgAggregateOutputType = {
    Id: number | null
    Role_Id: number | null
    Role_Crewing_Id: number | null
  }

  export type User_RoleSumAggregateOutputType = {
    Id: bigint | null
    Role_Id: bigint | null
    Role_Crewing_Id: bigint | null
  }

  export type User_RoleMinAggregateOutputType = {
    Id: bigint | null
    Username: string | null
    Role_Id: bigint | null
    Role_Crewing_Id: bigint | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Deleted: boolean | null
    Deleted_At: Date | null
    Deleted_By: string | null
  }

  export type User_RoleMaxAggregateOutputType = {
    Id: bigint | null
    Username: string | null
    Role_Id: bigint | null
    Role_Crewing_Id: bigint | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Deleted: boolean | null
    Deleted_At: Date | null
    Deleted_By: string | null
  }

  export type User_RoleCountAggregateOutputType = {
    Id: number
    Username: number
    Role_Id: number
    Role_Crewing_Id: number
    Created_At: number
    Created_By: number
    Updated_At: number
    Updated_By: number
    Deleted: number
    Deleted_At: number
    Deleted_By: number
    _all: number
  }


  export type User_RoleAvgAggregateInputType = {
    Id?: true
    Role_Id?: true
    Role_Crewing_Id?: true
  }

  export type User_RoleSumAggregateInputType = {
    Id?: true
    Role_Id?: true
    Role_Crewing_Id?: true
  }

  export type User_RoleMinAggregateInputType = {
    Id?: true
    Username?: true
    Role_Id?: true
    Role_Crewing_Id?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Deleted?: true
    Deleted_At?: true
    Deleted_By?: true
  }

  export type User_RoleMaxAggregateInputType = {
    Id?: true
    Username?: true
    Role_Id?: true
    Role_Crewing_Id?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Deleted?: true
    Deleted_At?: true
    Deleted_By?: true
  }

  export type User_RoleCountAggregateInputType = {
    Id?: true
    Username?: true
    Role_Id?: true
    Role_Crewing_Id?: true
    Created_At?: true
    Created_By?: true
    Updated_At?: true
    Updated_By?: true
    Deleted?: true
    Deleted_At?: true
    Deleted_By?: true
    _all?: true
  }

  export type User_RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Role to aggregate.
     */
    where?: User_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Roles to fetch.
     */
    orderBy?: User_RoleOrderByWithRelationInput | User_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Roles
    **/
    _count?: true | User_RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_RoleMaxAggregateInputType
  }

  export type GetUser_RoleAggregateType<T extends User_RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Role[P]>
      : GetScalarType<T[P], AggregateUser_Role[P]>
  }




  export type User_RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_RoleWhereInput
    orderBy?: User_RoleOrderByWithAggregationInput | User_RoleOrderByWithAggregationInput[]
    by: User_RoleScalarFieldEnum[] | User_RoleScalarFieldEnum
    having?: User_RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_RoleCountAggregateInputType | true
    _avg?: User_RoleAvgAggregateInputType
    _sum?: User_RoleSumAggregateInputType
    _min?: User_RoleMinAggregateInputType
    _max?: User_RoleMaxAggregateInputType
  }

  export type User_RoleGroupByOutputType = {
    Id: bigint
    Username: string | null
    Role_Id: bigint
    Role_Crewing_Id: bigint | null
    Created_At: Date | null
    Created_By: string | null
    Updated_At: Date | null
    Updated_By: string | null
    Deleted: boolean
    Deleted_At: Date | null
    Deleted_By: string | null
    _count: User_RoleCountAggregateOutputType | null
    _avg: User_RoleAvgAggregateOutputType | null
    _sum: User_RoleSumAggregateOutputType | null
    _min: User_RoleMinAggregateOutputType | null
    _max: User_RoleMaxAggregateOutputType | null
  }

  type GetUser_RoleGroupByPayload<T extends User_RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_RoleGroupByOutputType[P]>
            : GetScalarType<T[P], User_RoleGroupByOutputType[P]>
        }
      >
    >


  export type User_RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Username?: boolean
    Role_Id?: boolean
    Role_Crewing_Id?: boolean
    Created_At?: boolean
    Created_By?: boolean
    Updated_At?: boolean
    Updated_By?: boolean
    Deleted?: boolean
    Deleted_At?: boolean
    Deleted_By?: boolean
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_Role"]>


  export type User_RoleSelectScalar = {
    Id?: boolean
    Username?: boolean
    Role_Id?: boolean
    Role_Crewing_Id?: boolean
    Created_At?: boolean
    Created_By?: boolean
    Updated_At?: boolean
    Updated_By?: boolean
    Deleted?: boolean
    Deleted_At?: boolean
    Deleted_By?: boolean
  }

  export type User_RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $User_RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_Role"
    objects: {
      Role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: bigint
      Username: string | null
      Role_Id: bigint
      Role_Crewing_Id: bigint | null
      Created_At: Date | null
      Created_By: string | null
      Updated_At: Date | null
      Updated_By: string | null
      Deleted: boolean
      Deleted_At: Date | null
      Deleted_By: string | null
    }, ExtArgs["result"]["user_Role"]>
    composites: {}
  }

  type User_RoleGetPayload<S extends boolean | null | undefined | User_RoleDefaultArgs> = $Result.GetResult<Prisma.$User_RolePayload, S>

  type User_RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<User_RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_RoleCountAggregateInputType | true
    }

  export interface User_RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_Role'], meta: { name: 'User_Role' } }
    /**
     * Find zero or one User_Role that matches the filter.
     * @param {User_RoleFindUniqueArgs} args - Arguments to find a User_Role
     * @example
     * // Get one User_Role
     * const user_Role = await prisma.user_Role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_RoleFindUniqueArgs>(args: SelectSubset<T, User_RoleFindUniqueArgs<ExtArgs>>): Prisma__User_RoleClient<$Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User_Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {User_RoleFindUniqueOrThrowArgs} args - Arguments to find a User_Role
     * @example
     * // Get one User_Role
     * const user_Role = await prisma.user_Role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, User_RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_RoleClient<$Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User_Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleFindFirstArgs} args - Arguments to find a User_Role
     * @example
     * // Get one User_Role
     * const user_Role = await prisma.user_Role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_RoleFindFirstArgs>(args?: SelectSubset<T, User_RoleFindFirstArgs<ExtArgs>>): Prisma__User_RoleClient<$Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User_Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleFindFirstOrThrowArgs} args - Arguments to find a User_Role
     * @example
     * // Get one User_Role
     * const user_Role = await prisma.user_Role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, User_RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_RoleClient<$Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more User_Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Roles
     * const user_Roles = await prisma.user_Role.findMany()
     * 
     * // Get first 10 User_Roles
     * const user_Roles = await prisma.user_Role.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const user_RoleWithIdOnly = await prisma.user_Role.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends User_RoleFindManyArgs>(args?: SelectSubset<T, User_RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User_Role.
     * @param {User_RoleCreateArgs} args - Arguments to create a User_Role.
     * @example
     * // Create one User_Role
     * const User_Role = await prisma.user_Role.create({
     *   data: {
     *     // ... data to create a User_Role
     *   }
     * })
     * 
     */
    create<T extends User_RoleCreateArgs>(args: SelectSubset<T, User_RoleCreateArgs<ExtArgs>>): Prisma__User_RoleClient<$Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many User_Roles.
     * @param {User_RoleCreateManyArgs} args - Arguments to create many User_Roles.
     * @example
     * // Create many User_Roles
     * const user_Role = await prisma.user_Role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_RoleCreateManyArgs>(args?: SelectSubset<T, User_RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_Role.
     * @param {User_RoleDeleteArgs} args - Arguments to delete one User_Role.
     * @example
     * // Delete one User_Role
     * const User_Role = await prisma.user_Role.delete({
     *   where: {
     *     // ... filter to delete one User_Role
     *   }
     * })
     * 
     */
    delete<T extends User_RoleDeleteArgs>(args: SelectSubset<T, User_RoleDeleteArgs<ExtArgs>>): Prisma__User_RoleClient<$Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User_Role.
     * @param {User_RoleUpdateArgs} args - Arguments to update one User_Role.
     * @example
     * // Update one User_Role
     * const user_Role = await prisma.user_Role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_RoleUpdateArgs>(args: SelectSubset<T, User_RoleUpdateArgs<ExtArgs>>): Prisma__User_RoleClient<$Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more User_Roles.
     * @param {User_RoleDeleteManyArgs} args - Arguments to filter User_Roles to delete.
     * @example
     * // Delete a few User_Roles
     * const { count } = await prisma.user_Role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_RoleDeleteManyArgs>(args?: SelectSubset<T, User_RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Roles
     * const user_Role = await prisma.user_Role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_RoleUpdateManyArgs>(args: SelectSubset<T, User_RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Role.
     * @param {User_RoleUpsertArgs} args - Arguments to update or create a User_Role.
     * @example
     * // Update or create a User_Role
     * const user_Role = await prisma.user_Role.upsert({
     *   create: {
     *     // ... data to create a User_Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Role we want to update
     *   }
     * })
     */
    upsert<T extends User_RoleUpsertArgs>(args: SelectSubset<T, User_RoleUpsertArgs<ExtArgs>>): Prisma__User_RoleClient<$Result.GetResult<Prisma.$User_RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of User_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleCountArgs} args - Arguments to filter User_Roles to count.
     * @example
     * // Count the number of User_Roles
     * const count = await prisma.user_Role.count({
     *   where: {
     *     // ... the filter for the User_Roles we want to count
     *   }
     * })
    **/
    count<T extends User_RoleCountArgs>(
      args?: Subset<T, User_RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_RoleAggregateArgs>(args: Subset<T, User_RoleAggregateArgs>): Prisma.PrismaPromise<GetUser_RoleAggregateType<T>>

    /**
     * Group by User_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_RoleGroupByArgs} args - Group by arguments.
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
      T extends User_RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_RoleGroupByArgs['orderBy'] }
        : { orderBy?: User_RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_RoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_Role model
   */
  readonly fields: User_RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the User_Role model
   */ 
  interface User_RoleFieldRefs {
    readonly Id: FieldRef<"User_Role", 'BigInt'>
    readonly Username: FieldRef<"User_Role", 'String'>
    readonly Role_Id: FieldRef<"User_Role", 'BigInt'>
    readonly Role_Crewing_Id: FieldRef<"User_Role", 'BigInt'>
    readonly Created_At: FieldRef<"User_Role", 'DateTime'>
    readonly Created_By: FieldRef<"User_Role", 'String'>
    readonly Updated_At: FieldRef<"User_Role", 'DateTime'>
    readonly Updated_By: FieldRef<"User_Role", 'String'>
    readonly Deleted: FieldRef<"User_Role", 'Boolean'>
    readonly Deleted_At: FieldRef<"User_Role", 'DateTime'>
    readonly Deleted_By: FieldRef<"User_Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User_Role findUnique
   */
  export type User_RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: User_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_RoleInclude<ExtArgs> | null
    /**
     * Filter, which User_Role to fetch.
     */
    where: User_RoleWhereUniqueInput
  }

  /**
   * User_Role findUniqueOrThrow
   */
  export type User_RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: User_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_RoleInclude<ExtArgs> | null
    /**
     * Filter, which User_Role to fetch.
     */
    where: User_RoleWhereUniqueInput
  }

  /**
   * User_Role findFirst
   */
  export type User_RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: User_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_RoleInclude<ExtArgs> | null
    /**
     * Filter, which User_Role to fetch.
     */
    where?: User_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Roles to fetch.
     */
    orderBy?: User_RoleOrderByWithRelationInput | User_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Roles.
     */
    cursor?: User_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Roles.
     */
    distinct?: User_RoleScalarFieldEnum | User_RoleScalarFieldEnum[]
  }

  /**
   * User_Role findFirstOrThrow
   */
  export type User_RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: User_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_RoleInclude<ExtArgs> | null
    /**
     * Filter, which User_Role to fetch.
     */
    where?: User_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Roles to fetch.
     */
    orderBy?: User_RoleOrderByWithRelationInput | User_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Roles.
     */
    cursor?: User_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Roles.
     */
    distinct?: User_RoleScalarFieldEnum | User_RoleScalarFieldEnum[]
  }

  /**
   * User_Role findMany
   */
  export type User_RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: User_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_RoleInclude<ExtArgs> | null
    /**
     * Filter, which User_Roles to fetch.
     */
    where?: User_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Roles to fetch.
     */
    orderBy?: User_RoleOrderByWithRelationInput | User_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Roles.
     */
    cursor?: User_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Roles.
     */
    skip?: number
    distinct?: User_RoleScalarFieldEnum | User_RoleScalarFieldEnum[]
  }

  /**
   * User_Role create
   */
  export type User_RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: User_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a User_Role.
     */
    data: XOR<User_RoleCreateInput, User_RoleUncheckedCreateInput>
  }

  /**
   * User_Role createMany
   */
  export type User_RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_Roles.
     */
    data: User_RoleCreateManyInput | User_RoleCreateManyInput[]
  }

  /**
   * User_Role update
   */
  export type User_RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: User_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a User_Role.
     */
    data: XOR<User_RoleUpdateInput, User_RoleUncheckedUpdateInput>
    /**
     * Choose, which User_Role to update.
     */
    where: User_RoleWhereUniqueInput
  }

  /**
   * User_Role updateMany
   */
  export type User_RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_Roles.
     */
    data: XOR<User_RoleUpdateManyMutationInput, User_RoleUncheckedUpdateManyInput>
    /**
     * Filter which User_Roles to update
     */
    where?: User_RoleWhereInput
  }

  /**
   * User_Role upsert
   */
  export type User_RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: User_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the User_Role to update in case it exists.
     */
    where: User_RoleWhereUniqueInput
    /**
     * In case the User_Role found by the `where` argument doesn't exist, create a new User_Role with this data.
     */
    create: XOR<User_RoleCreateInput, User_RoleUncheckedCreateInput>
    /**
     * In case the User_Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_RoleUpdateInput, User_RoleUncheckedUpdateInput>
  }

  /**
   * User_Role delete
   */
  export type User_RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: User_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_RoleInclude<ExtArgs> | null
    /**
     * Filter which User_Role to delete.
     */
    where: User_RoleWhereUniqueInput
  }

  /**
   * User_Role deleteMany
   */
  export type User_RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Roles to delete
     */
    where?: User_RoleWhereInput
  }

  /**
   * User_Role without action
   */
  export type User_RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Role
     */
    select?: User_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_RoleInclude<ExtArgs> | null
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


  export const Notification_CCScalarFieldEnum: {
    Id: 'Id',
    EmailTo: 'EmailTo',
    EmailCC: 'EmailCC'
  };

  export type Notification_CCScalarFieldEnum = (typeof Notification_CCScalarFieldEnum)[keyof typeof Notification_CCScalarFieldEnum]


  export const Pending_ApprovalsScalarFieldEnum: {
    Id: 'Id',
    Document_Type: 'Document_Type',
    Document_Number: 'Document_Number',
    Approver: 'Approver',
    Approve_Level: 'Approve_Level',
    Status: 'Status',
    Revision: 'Revision',
    Created_At: 'Created_At',
    Created_By: 'Created_By',
    Updated_At: 'Updated_At',
    Updated_By: 'Updated_By',
    Approver_Title: 'Approver_Title'
  };

  export type Pending_ApprovalsScalarFieldEnum = (typeof Pending_ApprovalsScalarFieldEnum)[keyof typeof Pending_ApprovalsScalarFieldEnum]


  export const Pending_DocumentScalarFieldEnum: {
    Id: 'Id',
    Document_Type: 'Document_Type',
    Document_No: 'Document_No',
    Transaction_Date: 'Transaction_Date',
    Recipient_To: 'Recipient_To',
    Recipient_CC: 'Recipient_CC',
    Recipient_Bcc: 'Recipient_Bcc',
    Subject: 'Subject',
    Telegram_Body: 'Telegram_Body',
    Body: 'Body',
    Is_Read: 'Is_Read',
    Read_Date: 'Read_Date',
    Read_Result: 'Read_Result',
    Is_Sent: 'Is_Sent',
    Sent_Date: 'Sent_Date',
    Sent_Result: 'Sent_Result',
    Status: 'Status',
    Status_By: 'Status_By',
    Status_Date: 'Status_Date',
    Remarks: 'Remarks',
    Created_By: 'Created_By',
    Created_At: 'Created_At',
    ComLocID: 'ComLocID'
  };

  export type Pending_DocumentScalarFieldEnum = (typeof Pending_DocumentScalarFieldEnum)[keyof typeof Pending_DocumentScalarFieldEnum]


  export const Release_MatrixScalarFieldEnum: {
    Id: 'Id',
    CompanyId: 'CompanyId',
    ComLocId: 'ComLocId',
    Document_Type: 'Document_Type',
    Approver: 'Approver',
    Approval_Level: 'Approval_Level',
    OrganizationCode: 'OrganizationCode',
    Approver_Title: 'Approver_Title'
  };

  export type Release_MatrixScalarFieldEnum = (typeof Release_MatrixScalarFieldEnum)[keyof typeof Release_MatrixScalarFieldEnum]


  export const Release_Matrix_CCScalarFieldEnum: {
    Id: 'Id',
    OrganizationCode: 'OrganizationCode',
    DocumentType: 'DocumentType',
    Email: 'Email',
    Name: 'Name'
  };

  export type Release_Matrix_CCScalarFieldEnum = (typeof Release_Matrix_CCScalarFieldEnum)[keyof typeof Release_Matrix_CCScalarFieldEnum]


  export const ReportsScalarFieldEnum: {
    Modul: 'Modul',
    Code: 'Code',
    Name: 'Name',
    Query: 'Query',
    Fields: 'Fields',
    Headers: 'Headers',
    ShowAsHeaders: 'ShowAsHeaders',
    ShowAsSubHeaders: 'ShowAsSubHeaders',
    Filters: 'Filters',
    Formats: 'Formats',
    Totals: 'Totals',
    PrimarySort: 'PrimarySort',
    SecondarySort: 'SecondarySort',
    ThirdSort: 'ThirdSort',
    Uniq: 'Uniq'
  };

  export type ReportsScalarFieldEnum = (typeof ReportsScalarFieldEnum)[keyof typeof ReportsScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    Id: 'Id',
    Role_Code: 'Role_Code',
    Role_Name: 'Role_Name',
    Created_At: 'Created_At',
    Created_By: 'Created_By',
    Updated_At: 'Updated_At',
    Updated_By: 'Updated_By',
    Deleted: 'Deleted',
    Deleted_At: 'Deleted_At',
    Deleted_By: 'Deleted_By'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const Role_DetailScalarFieldEnum: {
    Id: 'Id',
    Role_Id: 'Role_Id',
    ControllerName: 'ControllerName',
    ActionName: 'ActionName',
    Roles: 'Roles',
    Url: 'Url'
  };

  export type Role_DetailScalarFieldEnum = (typeof Role_DetailScalarFieldEnum)[keyof typeof Role_DetailScalarFieldEnum]


  export const User_ActivityScalarFieldEnum: {
    Id: 'Id',
    Username: 'Username',
    ControllerName: 'ControllerName',
    ActionName: 'ActionName',
    Activity: 'Activity',
    IP_Address: 'IP_Address',
    Created_Date: 'Created_Date'
  };

  export type User_ActivityScalarFieldEnum = (typeof User_ActivityScalarFieldEnum)[keyof typeof User_ActivityScalarFieldEnum]


  export const User_ComLocScalarFieldEnum: {
    Id: 'Id',
    Username: 'Username',
    ComLocID: 'ComLocID',
    Created_At: 'Created_At',
    Created_By: 'Created_By',
    Updated_At: 'Updated_At',
    Updated_By: 'Updated_By'
  };

  export type User_ComLocScalarFieldEnum = (typeof User_ComLocScalarFieldEnum)[keyof typeof User_ComLocScalarFieldEnum]


  export const User_LoginScalarFieldEnum: {
    Id: 'Id',
    Username: 'Username',
    Password: 'Password',
    Email: 'Email',
    Name: 'Name',
    ComLocID: 'ComLocID',
    User_Level: 'User_Level',
    Is_Admin: 'Is_Admin',
    Created_At: 'Created_At',
    Created_By: 'Created_By',
    Updated_At: 'Updated_At',
    Updated_By: 'Updated_By',
    Deleted: 'Deleted',
    Deleted_At: 'Deleted_At',
    Deleted_By: 'Deleted_By',
    Telegram_Id: 'Telegram_Id',
    Room_Id: 'Room_Id',
    SuperUser_CrewingApp: 'SuperUser_CrewingApp'
  };

  export type User_LoginScalarFieldEnum = (typeof User_LoginScalarFieldEnum)[keyof typeof User_LoginScalarFieldEnum]


  export const User_RoleScalarFieldEnum: {
    Id: 'Id',
    Username: 'Username',
    Role_Id: 'Role_Id',
    Role_Crewing_Id: 'Role_Crewing_Id',
    Created_At: 'Created_At',
    Created_By: 'Created_By',
    Updated_At: 'Updated_At',
    Updated_By: 'Updated_By',
    Deleted: 'Deleted',
    Deleted_At: 'Deleted_At',
    Deleted_By: 'Deleted_By'
  };

  export type User_RoleScalarFieldEnum = (typeof User_RoleScalarFieldEnum)[keyof typeof User_RoleScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type Notification_CCWhereInput = {
    AND?: Notification_CCWhereInput | Notification_CCWhereInput[]
    OR?: Notification_CCWhereInput[]
    NOT?: Notification_CCWhereInput | Notification_CCWhereInput[]
    Id?: BigIntFilter<"Notification_CC"> | bigint | number
    EmailTo?: StringNullableFilter<"Notification_CC"> | string | null
    EmailCC?: StringNullableFilter<"Notification_CC"> | string | null
  }

  export type Notification_CCOrderByWithRelationInput = {
    Id?: SortOrder
    EmailTo?: SortOrderInput | SortOrder
    EmailCC?: SortOrderInput | SortOrder
  }

  export type Notification_CCWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: Notification_CCWhereInput | Notification_CCWhereInput[]
    OR?: Notification_CCWhereInput[]
    NOT?: Notification_CCWhereInput | Notification_CCWhereInput[]
    EmailTo?: StringNullableFilter<"Notification_CC"> | string | null
    EmailCC?: StringNullableFilter<"Notification_CC"> | string | null
  }, "Id">

  export type Notification_CCOrderByWithAggregationInput = {
    Id?: SortOrder
    EmailTo?: SortOrderInput | SortOrder
    EmailCC?: SortOrderInput | SortOrder
    _count?: Notification_CCCountOrderByAggregateInput
    _avg?: Notification_CCAvgOrderByAggregateInput
    _max?: Notification_CCMaxOrderByAggregateInput
    _min?: Notification_CCMinOrderByAggregateInput
    _sum?: Notification_CCSumOrderByAggregateInput
  }

  export type Notification_CCScalarWhereWithAggregatesInput = {
    AND?: Notification_CCScalarWhereWithAggregatesInput | Notification_CCScalarWhereWithAggregatesInput[]
    OR?: Notification_CCScalarWhereWithAggregatesInput[]
    NOT?: Notification_CCScalarWhereWithAggregatesInput | Notification_CCScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"Notification_CC"> | bigint | number
    EmailTo?: StringNullableWithAggregatesFilter<"Notification_CC"> | string | null
    EmailCC?: StringNullableWithAggregatesFilter<"Notification_CC"> | string | null
  }

  export type Pending_ApprovalsWhereInput = {
    AND?: Pending_ApprovalsWhereInput | Pending_ApprovalsWhereInput[]
    OR?: Pending_ApprovalsWhereInput[]
    NOT?: Pending_ApprovalsWhereInput | Pending_ApprovalsWhereInput[]
    Id?: BigIntFilter<"Pending_Approvals"> | bigint | number
    Document_Type?: StringNullableFilter<"Pending_Approvals"> | string | null
    Document_Number?: StringNullableFilter<"Pending_Approvals"> | string | null
    Approver?: StringNullableFilter<"Pending_Approvals"> | string | null
    Approve_Level?: IntFilter<"Pending_Approvals"> | number
    Status?: BoolNullableFilter<"Pending_Approvals"> | boolean | null
    Revision?: IntFilter<"Pending_Approvals"> | number
    Created_At?: DateTimeNullableFilter<"Pending_Approvals"> | Date | string | null
    Created_By?: StringNullableFilter<"Pending_Approvals"> | string | null
    Updated_At?: DateTimeNullableFilter<"Pending_Approvals"> | Date | string | null
    Updated_By?: StringNullableFilter<"Pending_Approvals"> | string | null
    Approver_Title?: StringNullableFilter<"Pending_Approvals"> | string | null
  }

  export type Pending_ApprovalsOrderByWithRelationInput = {
    Id?: SortOrder
    Document_Type?: SortOrderInput | SortOrder
    Document_Number?: SortOrderInput | SortOrder
    Approver?: SortOrderInput | SortOrder
    Approve_Level?: SortOrder
    Status?: SortOrderInput | SortOrder
    Revision?: SortOrder
    Created_At?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Updated_At?: SortOrderInput | SortOrder
    Updated_By?: SortOrderInput | SortOrder
    Approver_Title?: SortOrderInput | SortOrder
  }

  export type Pending_ApprovalsWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: Pending_ApprovalsWhereInput | Pending_ApprovalsWhereInput[]
    OR?: Pending_ApprovalsWhereInput[]
    NOT?: Pending_ApprovalsWhereInput | Pending_ApprovalsWhereInput[]
    Document_Type?: StringNullableFilter<"Pending_Approvals"> | string | null
    Document_Number?: StringNullableFilter<"Pending_Approvals"> | string | null
    Approver?: StringNullableFilter<"Pending_Approvals"> | string | null
    Approve_Level?: IntFilter<"Pending_Approvals"> | number
    Status?: BoolNullableFilter<"Pending_Approvals"> | boolean | null
    Revision?: IntFilter<"Pending_Approvals"> | number
    Created_At?: DateTimeNullableFilter<"Pending_Approvals"> | Date | string | null
    Created_By?: StringNullableFilter<"Pending_Approvals"> | string | null
    Updated_At?: DateTimeNullableFilter<"Pending_Approvals"> | Date | string | null
    Updated_By?: StringNullableFilter<"Pending_Approvals"> | string | null
    Approver_Title?: StringNullableFilter<"Pending_Approvals"> | string | null
  }, "Id">

  export type Pending_ApprovalsOrderByWithAggregationInput = {
    Id?: SortOrder
    Document_Type?: SortOrderInput | SortOrder
    Document_Number?: SortOrderInput | SortOrder
    Approver?: SortOrderInput | SortOrder
    Approve_Level?: SortOrder
    Status?: SortOrderInput | SortOrder
    Revision?: SortOrder
    Created_At?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Updated_At?: SortOrderInput | SortOrder
    Updated_By?: SortOrderInput | SortOrder
    Approver_Title?: SortOrderInput | SortOrder
    _count?: Pending_ApprovalsCountOrderByAggregateInput
    _avg?: Pending_ApprovalsAvgOrderByAggregateInput
    _max?: Pending_ApprovalsMaxOrderByAggregateInput
    _min?: Pending_ApprovalsMinOrderByAggregateInput
    _sum?: Pending_ApprovalsSumOrderByAggregateInput
  }

  export type Pending_ApprovalsScalarWhereWithAggregatesInput = {
    AND?: Pending_ApprovalsScalarWhereWithAggregatesInput | Pending_ApprovalsScalarWhereWithAggregatesInput[]
    OR?: Pending_ApprovalsScalarWhereWithAggregatesInput[]
    NOT?: Pending_ApprovalsScalarWhereWithAggregatesInput | Pending_ApprovalsScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"Pending_Approvals"> | bigint | number
    Document_Type?: StringNullableWithAggregatesFilter<"Pending_Approvals"> | string | null
    Document_Number?: StringNullableWithAggregatesFilter<"Pending_Approvals"> | string | null
    Approver?: StringNullableWithAggregatesFilter<"Pending_Approvals"> | string | null
    Approve_Level?: IntWithAggregatesFilter<"Pending_Approvals"> | number
    Status?: BoolNullableWithAggregatesFilter<"Pending_Approvals"> | boolean | null
    Revision?: IntWithAggregatesFilter<"Pending_Approvals"> | number
    Created_At?: DateTimeNullableWithAggregatesFilter<"Pending_Approvals"> | Date | string | null
    Created_By?: StringNullableWithAggregatesFilter<"Pending_Approvals"> | string | null
    Updated_At?: DateTimeNullableWithAggregatesFilter<"Pending_Approvals"> | Date | string | null
    Updated_By?: StringNullableWithAggregatesFilter<"Pending_Approvals"> | string | null
    Approver_Title?: StringNullableWithAggregatesFilter<"Pending_Approvals"> | string | null
  }

  export type Pending_DocumentWhereInput = {
    AND?: Pending_DocumentWhereInput | Pending_DocumentWhereInput[]
    OR?: Pending_DocumentWhereInput[]
    NOT?: Pending_DocumentWhereInput | Pending_DocumentWhereInput[]
    Id?: BigIntFilter<"Pending_Document"> | bigint | number
    Document_Type?: StringNullableFilter<"Pending_Document"> | string | null
    Document_No?: StringNullableFilter<"Pending_Document"> | string | null
    Transaction_Date?: DateTimeNullableFilter<"Pending_Document"> | Date | string | null
    Recipient_To?: StringNullableFilter<"Pending_Document"> | string | null
    Recipient_CC?: StringNullableFilter<"Pending_Document"> | string | null
    Recipient_Bcc?: StringNullableFilter<"Pending_Document"> | string | null
    Subject?: StringNullableFilter<"Pending_Document"> | string | null
    Telegram_Body?: StringNullableFilter<"Pending_Document"> | string | null
    Body?: StringNullableFilter<"Pending_Document"> | string | null
    Is_Read?: BoolFilter<"Pending_Document"> | boolean
    Read_Date?: DateTimeNullableFilter<"Pending_Document"> | Date | string | null
    Read_Result?: StringNullableFilter<"Pending_Document"> | string | null
    Is_Sent?: BoolFilter<"Pending_Document"> | boolean
    Sent_Date?: DateTimeNullableFilter<"Pending_Document"> | Date | string | null
    Sent_Result?: StringNullableFilter<"Pending_Document"> | string | null
    Status?: BoolNullableFilter<"Pending_Document"> | boolean | null
    Status_By?: StringNullableFilter<"Pending_Document"> | string | null
    Status_Date?: DateTimeNullableFilter<"Pending_Document"> | Date | string | null
    Remarks?: StringNullableFilter<"Pending_Document"> | string | null
    Created_By?: StringNullableFilter<"Pending_Document"> | string | null
    Created_At?: DateTimeNullableFilter<"Pending_Document"> | Date | string | null
    ComLocID?: StringNullableFilter<"Pending_Document"> | string | null
  }

  export type Pending_DocumentOrderByWithRelationInput = {
    Id?: SortOrder
    Document_Type?: SortOrderInput | SortOrder
    Document_No?: SortOrderInput | SortOrder
    Transaction_Date?: SortOrderInput | SortOrder
    Recipient_To?: SortOrderInput | SortOrder
    Recipient_CC?: SortOrderInput | SortOrder
    Recipient_Bcc?: SortOrderInput | SortOrder
    Subject?: SortOrderInput | SortOrder
    Telegram_Body?: SortOrderInput | SortOrder
    Body?: SortOrderInput | SortOrder
    Is_Read?: SortOrder
    Read_Date?: SortOrderInput | SortOrder
    Read_Result?: SortOrderInput | SortOrder
    Is_Sent?: SortOrder
    Sent_Date?: SortOrderInput | SortOrder
    Sent_Result?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    Status_By?: SortOrderInput | SortOrder
    Status_Date?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Created_At?: SortOrderInput | SortOrder
    ComLocID?: SortOrderInput | SortOrder
  }

  export type Pending_DocumentWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: Pending_DocumentWhereInput | Pending_DocumentWhereInput[]
    OR?: Pending_DocumentWhereInput[]
    NOT?: Pending_DocumentWhereInput | Pending_DocumentWhereInput[]
    Document_Type?: StringNullableFilter<"Pending_Document"> | string | null
    Document_No?: StringNullableFilter<"Pending_Document"> | string | null
    Transaction_Date?: DateTimeNullableFilter<"Pending_Document"> | Date | string | null
    Recipient_To?: StringNullableFilter<"Pending_Document"> | string | null
    Recipient_CC?: StringNullableFilter<"Pending_Document"> | string | null
    Recipient_Bcc?: StringNullableFilter<"Pending_Document"> | string | null
    Subject?: StringNullableFilter<"Pending_Document"> | string | null
    Telegram_Body?: StringNullableFilter<"Pending_Document"> | string | null
    Body?: StringNullableFilter<"Pending_Document"> | string | null
    Is_Read?: BoolFilter<"Pending_Document"> | boolean
    Read_Date?: DateTimeNullableFilter<"Pending_Document"> | Date | string | null
    Read_Result?: StringNullableFilter<"Pending_Document"> | string | null
    Is_Sent?: BoolFilter<"Pending_Document"> | boolean
    Sent_Date?: DateTimeNullableFilter<"Pending_Document"> | Date | string | null
    Sent_Result?: StringNullableFilter<"Pending_Document"> | string | null
    Status?: BoolNullableFilter<"Pending_Document"> | boolean | null
    Status_By?: StringNullableFilter<"Pending_Document"> | string | null
    Status_Date?: DateTimeNullableFilter<"Pending_Document"> | Date | string | null
    Remarks?: StringNullableFilter<"Pending_Document"> | string | null
    Created_By?: StringNullableFilter<"Pending_Document"> | string | null
    Created_At?: DateTimeNullableFilter<"Pending_Document"> | Date | string | null
    ComLocID?: StringNullableFilter<"Pending_Document"> | string | null
  }, "Id">

  export type Pending_DocumentOrderByWithAggregationInput = {
    Id?: SortOrder
    Document_Type?: SortOrderInput | SortOrder
    Document_No?: SortOrderInput | SortOrder
    Transaction_Date?: SortOrderInput | SortOrder
    Recipient_To?: SortOrderInput | SortOrder
    Recipient_CC?: SortOrderInput | SortOrder
    Recipient_Bcc?: SortOrderInput | SortOrder
    Subject?: SortOrderInput | SortOrder
    Telegram_Body?: SortOrderInput | SortOrder
    Body?: SortOrderInput | SortOrder
    Is_Read?: SortOrder
    Read_Date?: SortOrderInput | SortOrder
    Read_Result?: SortOrderInput | SortOrder
    Is_Sent?: SortOrder
    Sent_Date?: SortOrderInput | SortOrder
    Sent_Result?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    Status_By?: SortOrderInput | SortOrder
    Status_Date?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Created_At?: SortOrderInput | SortOrder
    ComLocID?: SortOrderInput | SortOrder
    _count?: Pending_DocumentCountOrderByAggregateInput
    _avg?: Pending_DocumentAvgOrderByAggregateInput
    _max?: Pending_DocumentMaxOrderByAggregateInput
    _min?: Pending_DocumentMinOrderByAggregateInput
    _sum?: Pending_DocumentSumOrderByAggregateInput
  }

  export type Pending_DocumentScalarWhereWithAggregatesInput = {
    AND?: Pending_DocumentScalarWhereWithAggregatesInput | Pending_DocumentScalarWhereWithAggregatesInput[]
    OR?: Pending_DocumentScalarWhereWithAggregatesInput[]
    NOT?: Pending_DocumentScalarWhereWithAggregatesInput | Pending_DocumentScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"Pending_Document"> | bigint | number
    Document_Type?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Document_No?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Transaction_Date?: DateTimeNullableWithAggregatesFilter<"Pending_Document"> | Date | string | null
    Recipient_To?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Recipient_CC?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Recipient_Bcc?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Subject?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Telegram_Body?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Body?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Is_Read?: BoolWithAggregatesFilter<"Pending_Document"> | boolean
    Read_Date?: DateTimeNullableWithAggregatesFilter<"Pending_Document"> | Date | string | null
    Read_Result?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Is_Sent?: BoolWithAggregatesFilter<"Pending_Document"> | boolean
    Sent_Date?: DateTimeNullableWithAggregatesFilter<"Pending_Document"> | Date | string | null
    Sent_Result?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Status?: BoolNullableWithAggregatesFilter<"Pending_Document"> | boolean | null
    Status_By?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Status_Date?: DateTimeNullableWithAggregatesFilter<"Pending_Document"> | Date | string | null
    Remarks?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Created_By?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
    Created_At?: DateTimeNullableWithAggregatesFilter<"Pending_Document"> | Date | string | null
    ComLocID?: StringNullableWithAggregatesFilter<"Pending_Document"> | string | null
  }

  export type Release_MatrixWhereInput = {
    AND?: Release_MatrixWhereInput | Release_MatrixWhereInput[]
    OR?: Release_MatrixWhereInput[]
    NOT?: Release_MatrixWhereInput | Release_MatrixWhereInput[]
    Id?: BigIntFilter<"Release_Matrix"> | bigint | number
    CompanyId?: StringNullableFilter<"Release_Matrix"> | string | null
    ComLocId?: StringNullableFilter<"Release_Matrix"> | string | null
    Document_Type?: StringNullableFilter<"Release_Matrix"> | string | null
    Approver?: StringNullableFilter<"Release_Matrix"> | string | null
    Approval_Level?: IntFilter<"Release_Matrix"> | number
    OrganizationCode?: StringNullableFilter<"Release_Matrix"> | string | null
    Approver_Title?: StringNullableFilter<"Release_Matrix"> | string | null
  }

  export type Release_MatrixOrderByWithRelationInput = {
    Id?: SortOrder
    CompanyId?: SortOrderInput | SortOrder
    ComLocId?: SortOrderInput | SortOrder
    Document_Type?: SortOrderInput | SortOrder
    Approver?: SortOrderInput | SortOrder
    Approval_Level?: SortOrder
    OrganizationCode?: SortOrderInput | SortOrder
    Approver_Title?: SortOrderInput | SortOrder
  }

  export type Release_MatrixWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: Release_MatrixWhereInput | Release_MatrixWhereInput[]
    OR?: Release_MatrixWhereInput[]
    NOT?: Release_MatrixWhereInput | Release_MatrixWhereInput[]
    CompanyId?: StringNullableFilter<"Release_Matrix"> | string | null
    ComLocId?: StringNullableFilter<"Release_Matrix"> | string | null
    Document_Type?: StringNullableFilter<"Release_Matrix"> | string | null
    Approver?: StringNullableFilter<"Release_Matrix"> | string | null
    Approval_Level?: IntFilter<"Release_Matrix"> | number
    OrganizationCode?: StringNullableFilter<"Release_Matrix"> | string | null
    Approver_Title?: StringNullableFilter<"Release_Matrix"> | string | null
  }, "Id">

  export type Release_MatrixOrderByWithAggregationInput = {
    Id?: SortOrder
    CompanyId?: SortOrderInput | SortOrder
    ComLocId?: SortOrderInput | SortOrder
    Document_Type?: SortOrderInput | SortOrder
    Approver?: SortOrderInput | SortOrder
    Approval_Level?: SortOrder
    OrganizationCode?: SortOrderInput | SortOrder
    Approver_Title?: SortOrderInput | SortOrder
    _count?: Release_MatrixCountOrderByAggregateInput
    _avg?: Release_MatrixAvgOrderByAggregateInput
    _max?: Release_MatrixMaxOrderByAggregateInput
    _min?: Release_MatrixMinOrderByAggregateInput
    _sum?: Release_MatrixSumOrderByAggregateInput
  }

  export type Release_MatrixScalarWhereWithAggregatesInput = {
    AND?: Release_MatrixScalarWhereWithAggregatesInput | Release_MatrixScalarWhereWithAggregatesInput[]
    OR?: Release_MatrixScalarWhereWithAggregatesInput[]
    NOT?: Release_MatrixScalarWhereWithAggregatesInput | Release_MatrixScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"Release_Matrix"> | bigint | number
    CompanyId?: StringNullableWithAggregatesFilter<"Release_Matrix"> | string | null
    ComLocId?: StringNullableWithAggregatesFilter<"Release_Matrix"> | string | null
    Document_Type?: StringNullableWithAggregatesFilter<"Release_Matrix"> | string | null
    Approver?: StringNullableWithAggregatesFilter<"Release_Matrix"> | string | null
    Approval_Level?: IntWithAggregatesFilter<"Release_Matrix"> | number
    OrganizationCode?: StringNullableWithAggregatesFilter<"Release_Matrix"> | string | null
    Approver_Title?: StringNullableWithAggregatesFilter<"Release_Matrix"> | string | null
  }

  export type Release_Matrix_CCWhereInput = {
    AND?: Release_Matrix_CCWhereInput | Release_Matrix_CCWhereInput[]
    OR?: Release_Matrix_CCWhereInput[]
    NOT?: Release_Matrix_CCWhereInput | Release_Matrix_CCWhereInput[]
    Id?: BigIntFilter<"Release_Matrix_CC"> | bigint | number
    OrganizationCode?: StringNullableFilter<"Release_Matrix_CC"> | string | null
    DocumentType?: StringNullableFilter<"Release_Matrix_CC"> | string | null
    Email?: StringNullableFilter<"Release_Matrix_CC"> | string | null
    Name?: StringNullableFilter<"Release_Matrix_CC"> | string | null
  }

  export type Release_Matrix_CCOrderByWithRelationInput = {
    Id?: SortOrder
    OrganizationCode?: SortOrderInput | SortOrder
    DocumentType?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
  }

  export type Release_Matrix_CCWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: Release_Matrix_CCWhereInput | Release_Matrix_CCWhereInput[]
    OR?: Release_Matrix_CCWhereInput[]
    NOT?: Release_Matrix_CCWhereInput | Release_Matrix_CCWhereInput[]
    OrganizationCode?: StringNullableFilter<"Release_Matrix_CC"> | string | null
    DocumentType?: StringNullableFilter<"Release_Matrix_CC"> | string | null
    Email?: StringNullableFilter<"Release_Matrix_CC"> | string | null
    Name?: StringNullableFilter<"Release_Matrix_CC"> | string | null
  }, "Id">

  export type Release_Matrix_CCOrderByWithAggregationInput = {
    Id?: SortOrder
    OrganizationCode?: SortOrderInput | SortOrder
    DocumentType?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: Release_Matrix_CCCountOrderByAggregateInput
    _avg?: Release_Matrix_CCAvgOrderByAggregateInput
    _max?: Release_Matrix_CCMaxOrderByAggregateInput
    _min?: Release_Matrix_CCMinOrderByAggregateInput
    _sum?: Release_Matrix_CCSumOrderByAggregateInput
  }

  export type Release_Matrix_CCScalarWhereWithAggregatesInput = {
    AND?: Release_Matrix_CCScalarWhereWithAggregatesInput | Release_Matrix_CCScalarWhereWithAggregatesInput[]
    OR?: Release_Matrix_CCScalarWhereWithAggregatesInput[]
    NOT?: Release_Matrix_CCScalarWhereWithAggregatesInput | Release_Matrix_CCScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"Release_Matrix_CC"> | bigint | number
    OrganizationCode?: StringNullableWithAggregatesFilter<"Release_Matrix_CC"> | string | null
    DocumentType?: StringNullableWithAggregatesFilter<"Release_Matrix_CC"> | string | null
    Email?: StringNullableWithAggregatesFilter<"Release_Matrix_CC"> | string | null
    Name?: StringNullableWithAggregatesFilter<"Release_Matrix_CC"> | string | null
  }

  export type ReportsWhereInput = {
    AND?: ReportsWhereInput | ReportsWhereInput[]
    OR?: ReportsWhereInput[]
    NOT?: ReportsWhereInput | ReportsWhereInput[]
    Modul?: StringNullableFilter<"Reports"> | string | null
    Code?: StringNullableFilter<"Reports"> | string | null
    Name?: StringNullableFilter<"Reports"> | string | null
    Query?: StringNullableFilter<"Reports"> | string | null
    Fields?: StringNullableFilter<"Reports"> | string | null
    Headers?: StringNullableFilter<"Reports"> | string | null
    ShowAsHeaders?: StringNullableFilter<"Reports"> | string | null
    ShowAsSubHeaders?: StringNullableFilter<"Reports"> | string | null
    Filters?: StringNullableFilter<"Reports"> | string | null
    Formats?: StringNullableFilter<"Reports"> | string | null
    Totals?: StringNullableFilter<"Reports"> | string | null
    PrimarySort?: StringNullableFilter<"Reports"> | string | null
    SecondarySort?: StringNullableFilter<"Reports"> | string | null
    ThirdSort?: StringNullableFilter<"Reports"> | string | null
    Uniq?: BigIntFilter<"Reports"> | bigint | number
  }

  export type ReportsOrderByWithRelationInput = {
    Modul?: SortOrderInput | SortOrder
    Code?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Query?: SortOrderInput | SortOrder
    Fields?: SortOrderInput | SortOrder
    Headers?: SortOrderInput | SortOrder
    ShowAsHeaders?: SortOrderInput | SortOrder
    ShowAsSubHeaders?: SortOrderInput | SortOrder
    Filters?: SortOrderInput | SortOrder
    Formats?: SortOrderInput | SortOrder
    Totals?: SortOrderInput | SortOrder
    PrimarySort?: SortOrderInput | SortOrder
    SecondarySort?: SortOrderInput | SortOrder
    ThirdSort?: SortOrderInput | SortOrder
    Uniq?: SortOrder
  }

  export type ReportsWhereUniqueInput = Prisma.AtLeast<{
    Uniq?: bigint | number
    AND?: ReportsWhereInput | ReportsWhereInput[]
    OR?: ReportsWhereInput[]
    NOT?: ReportsWhereInput | ReportsWhereInput[]
    Modul?: StringNullableFilter<"Reports"> | string | null
    Code?: StringNullableFilter<"Reports"> | string | null
    Name?: StringNullableFilter<"Reports"> | string | null
    Query?: StringNullableFilter<"Reports"> | string | null
    Fields?: StringNullableFilter<"Reports"> | string | null
    Headers?: StringNullableFilter<"Reports"> | string | null
    ShowAsHeaders?: StringNullableFilter<"Reports"> | string | null
    ShowAsSubHeaders?: StringNullableFilter<"Reports"> | string | null
    Filters?: StringNullableFilter<"Reports"> | string | null
    Formats?: StringNullableFilter<"Reports"> | string | null
    Totals?: StringNullableFilter<"Reports"> | string | null
    PrimarySort?: StringNullableFilter<"Reports"> | string | null
    SecondarySort?: StringNullableFilter<"Reports"> | string | null
    ThirdSort?: StringNullableFilter<"Reports"> | string | null
  }, "Uniq">

  export type ReportsOrderByWithAggregationInput = {
    Modul?: SortOrderInput | SortOrder
    Code?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Query?: SortOrderInput | SortOrder
    Fields?: SortOrderInput | SortOrder
    Headers?: SortOrderInput | SortOrder
    ShowAsHeaders?: SortOrderInput | SortOrder
    ShowAsSubHeaders?: SortOrderInput | SortOrder
    Filters?: SortOrderInput | SortOrder
    Formats?: SortOrderInput | SortOrder
    Totals?: SortOrderInput | SortOrder
    PrimarySort?: SortOrderInput | SortOrder
    SecondarySort?: SortOrderInput | SortOrder
    ThirdSort?: SortOrderInput | SortOrder
    Uniq?: SortOrder
    _count?: ReportsCountOrderByAggregateInput
    _avg?: ReportsAvgOrderByAggregateInput
    _max?: ReportsMaxOrderByAggregateInput
    _min?: ReportsMinOrderByAggregateInput
    _sum?: ReportsSumOrderByAggregateInput
  }

  export type ReportsScalarWhereWithAggregatesInput = {
    AND?: ReportsScalarWhereWithAggregatesInput | ReportsScalarWhereWithAggregatesInput[]
    OR?: ReportsScalarWhereWithAggregatesInput[]
    NOT?: ReportsScalarWhereWithAggregatesInput | ReportsScalarWhereWithAggregatesInput[]
    Modul?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    Code?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    Name?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    Query?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    Fields?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    Headers?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    ShowAsHeaders?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    ShowAsSubHeaders?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    Filters?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    Formats?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    Totals?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    PrimarySort?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    SecondarySort?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    ThirdSort?: StringNullableWithAggregatesFilter<"Reports"> | string | null
    Uniq?: BigIntWithAggregatesFilter<"Reports"> | bigint | number
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    Id?: BigIntFilter<"Role"> | bigint | number
    Role_Code?: StringNullableFilter<"Role"> | string | null
    Role_Name?: StringNullableFilter<"Role"> | string | null
    Created_At?: DateTimeNullableFilter<"Role"> | Date | string | null
    Created_By?: StringNullableFilter<"Role"> | string | null
    Updated_At?: DateTimeNullableFilter<"Role"> | Date | string | null
    Updated_By?: StringNullableFilter<"Role"> | string | null
    Deleted?: BoolFilter<"Role"> | boolean
    Deleted_At?: DateTimeNullableFilter<"Role"> | Date | string | null
    Deleted_By?: StringNullableFilter<"Role"> | string | null
    Role_Detail?: Role_DetailListRelationFilter
    User_Role?: User_RoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    Id?: SortOrder
    Role_Code?: SortOrderInput | SortOrder
    Role_Name?: SortOrderInput | SortOrder
    Created_At?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Updated_At?: SortOrderInput | SortOrder
    Updated_By?: SortOrderInput | SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrderInput | SortOrder
    Deleted_By?: SortOrderInput | SortOrder
    Role_Detail?: Role_DetailOrderByRelationAggregateInput
    User_Role?: User_RoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    Role_Code?: StringNullableFilter<"Role"> | string | null
    Role_Name?: StringNullableFilter<"Role"> | string | null
    Created_At?: DateTimeNullableFilter<"Role"> | Date | string | null
    Created_By?: StringNullableFilter<"Role"> | string | null
    Updated_At?: DateTimeNullableFilter<"Role"> | Date | string | null
    Updated_By?: StringNullableFilter<"Role"> | string | null
    Deleted?: BoolFilter<"Role"> | boolean
    Deleted_At?: DateTimeNullableFilter<"Role"> | Date | string | null
    Deleted_By?: StringNullableFilter<"Role"> | string | null
    Role_Detail?: Role_DetailListRelationFilter
    User_Role?: User_RoleListRelationFilter
  }, "Id">

  export type RoleOrderByWithAggregationInput = {
    Id?: SortOrder
    Role_Code?: SortOrderInput | SortOrder
    Role_Name?: SortOrderInput | SortOrder
    Created_At?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Updated_At?: SortOrderInput | SortOrder
    Updated_By?: SortOrderInput | SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrderInput | SortOrder
    Deleted_By?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"Role"> | bigint | number
    Role_Code?: StringNullableWithAggregatesFilter<"Role"> | string | null
    Role_Name?: StringNullableWithAggregatesFilter<"Role"> | string | null
    Created_At?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    Created_By?: StringNullableWithAggregatesFilter<"Role"> | string | null
    Updated_At?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    Updated_By?: StringNullableWithAggregatesFilter<"Role"> | string | null
    Deleted?: BoolWithAggregatesFilter<"Role"> | boolean
    Deleted_At?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    Deleted_By?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type Role_DetailWhereInput = {
    AND?: Role_DetailWhereInput | Role_DetailWhereInput[]
    OR?: Role_DetailWhereInput[]
    NOT?: Role_DetailWhereInput | Role_DetailWhereInput[]
    Id?: BigIntFilter<"Role_Detail"> | bigint | number
    Role_Id?: BigIntFilter<"Role_Detail"> | bigint | number
    ControllerName?: StringNullableFilter<"Role_Detail"> | string | null
    ActionName?: StringNullableFilter<"Role_Detail"> | string | null
    Roles?: StringNullableFilter<"Role_Detail"> | string | null
    Url?: StringNullableFilter<"Role_Detail"> | string | null
    Role?: XOR<RoleRelationFilter, RoleWhereInput>
  }

  export type Role_DetailOrderByWithRelationInput = {
    Id?: SortOrder
    Role_Id?: SortOrder
    ControllerName?: SortOrderInput | SortOrder
    ActionName?: SortOrderInput | SortOrder
    Roles?: SortOrderInput | SortOrder
    Url?: SortOrderInput | SortOrder
    Role?: RoleOrderByWithRelationInput
  }

  export type Role_DetailWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: Role_DetailWhereInput | Role_DetailWhereInput[]
    OR?: Role_DetailWhereInput[]
    NOT?: Role_DetailWhereInput | Role_DetailWhereInput[]
    Role_Id?: BigIntFilter<"Role_Detail"> | bigint | number
    ControllerName?: StringNullableFilter<"Role_Detail"> | string | null
    ActionName?: StringNullableFilter<"Role_Detail"> | string | null
    Roles?: StringNullableFilter<"Role_Detail"> | string | null
    Url?: StringNullableFilter<"Role_Detail"> | string | null
    Role?: XOR<RoleRelationFilter, RoleWhereInput>
  }, "Id">

  export type Role_DetailOrderByWithAggregationInput = {
    Id?: SortOrder
    Role_Id?: SortOrder
    ControllerName?: SortOrderInput | SortOrder
    ActionName?: SortOrderInput | SortOrder
    Roles?: SortOrderInput | SortOrder
    Url?: SortOrderInput | SortOrder
    _count?: Role_DetailCountOrderByAggregateInput
    _avg?: Role_DetailAvgOrderByAggregateInput
    _max?: Role_DetailMaxOrderByAggregateInput
    _min?: Role_DetailMinOrderByAggregateInput
    _sum?: Role_DetailSumOrderByAggregateInput
  }

  export type Role_DetailScalarWhereWithAggregatesInput = {
    AND?: Role_DetailScalarWhereWithAggregatesInput | Role_DetailScalarWhereWithAggregatesInput[]
    OR?: Role_DetailScalarWhereWithAggregatesInput[]
    NOT?: Role_DetailScalarWhereWithAggregatesInput | Role_DetailScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"Role_Detail"> | bigint | number
    Role_Id?: BigIntWithAggregatesFilter<"Role_Detail"> | bigint | number
    ControllerName?: StringNullableWithAggregatesFilter<"Role_Detail"> | string | null
    ActionName?: StringNullableWithAggregatesFilter<"Role_Detail"> | string | null
    Roles?: StringNullableWithAggregatesFilter<"Role_Detail"> | string | null
    Url?: StringNullableWithAggregatesFilter<"Role_Detail"> | string | null
  }

  export type User_ActivityWhereInput = {
    AND?: User_ActivityWhereInput | User_ActivityWhereInput[]
    OR?: User_ActivityWhereInput[]
    NOT?: User_ActivityWhereInput | User_ActivityWhereInput[]
    Id?: BigIntFilter<"User_Activity"> | bigint | number
    Username?: StringNullableFilter<"User_Activity"> | string | null
    ControllerName?: StringNullableFilter<"User_Activity"> | string | null
    ActionName?: StringNullableFilter<"User_Activity"> | string | null
    Activity?: StringNullableFilter<"User_Activity"> | string | null
    IP_Address?: StringNullableFilter<"User_Activity"> | string | null
    Created_Date?: DateTimeFilter<"User_Activity"> | Date | string
    User_Activity?: XOR<User_ActivityRelationFilter, User_ActivityWhereInput>
    other_User_Activity?: XOR<User_ActivityNullableRelationFilter, User_ActivityWhereInput> | null
  }

  export type User_ActivityOrderByWithRelationInput = {
    Id?: SortOrder
    Username?: SortOrderInput | SortOrder
    ControllerName?: SortOrderInput | SortOrder
    ActionName?: SortOrderInput | SortOrder
    Activity?: SortOrderInput | SortOrder
    IP_Address?: SortOrderInput | SortOrder
    Created_Date?: SortOrder
    User_Activity?: User_ActivityOrderByWithRelationInput
    other_User_Activity?: User_ActivityOrderByWithRelationInput
  }

  export type User_ActivityWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: User_ActivityWhereInput | User_ActivityWhereInput[]
    OR?: User_ActivityWhereInput[]
    NOT?: User_ActivityWhereInput | User_ActivityWhereInput[]
    Username?: StringNullableFilter<"User_Activity"> | string | null
    ControllerName?: StringNullableFilter<"User_Activity"> | string | null
    ActionName?: StringNullableFilter<"User_Activity"> | string | null
    Activity?: StringNullableFilter<"User_Activity"> | string | null
    IP_Address?: StringNullableFilter<"User_Activity"> | string | null
    Created_Date?: DateTimeFilter<"User_Activity"> | Date | string
    User_Activity?: XOR<User_ActivityRelationFilter, User_ActivityWhereInput>
    other_User_Activity?: XOR<User_ActivityNullableRelationFilter, User_ActivityWhereInput> | null
  }, "Id">

  export type User_ActivityOrderByWithAggregationInput = {
    Id?: SortOrder
    Username?: SortOrderInput | SortOrder
    ControllerName?: SortOrderInput | SortOrder
    ActionName?: SortOrderInput | SortOrder
    Activity?: SortOrderInput | SortOrder
    IP_Address?: SortOrderInput | SortOrder
    Created_Date?: SortOrder
    _count?: User_ActivityCountOrderByAggregateInput
    _avg?: User_ActivityAvgOrderByAggregateInput
    _max?: User_ActivityMaxOrderByAggregateInput
    _min?: User_ActivityMinOrderByAggregateInput
    _sum?: User_ActivitySumOrderByAggregateInput
  }

  export type User_ActivityScalarWhereWithAggregatesInput = {
    AND?: User_ActivityScalarWhereWithAggregatesInput | User_ActivityScalarWhereWithAggregatesInput[]
    OR?: User_ActivityScalarWhereWithAggregatesInput[]
    NOT?: User_ActivityScalarWhereWithAggregatesInput | User_ActivityScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"User_Activity"> | bigint | number
    Username?: StringNullableWithAggregatesFilter<"User_Activity"> | string | null
    ControllerName?: StringNullableWithAggregatesFilter<"User_Activity"> | string | null
    ActionName?: StringNullableWithAggregatesFilter<"User_Activity"> | string | null
    Activity?: StringNullableWithAggregatesFilter<"User_Activity"> | string | null
    IP_Address?: StringNullableWithAggregatesFilter<"User_Activity"> | string | null
    Created_Date?: DateTimeWithAggregatesFilter<"User_Activity"> | Date | string
  }

  export type User_ComLocWhereInput = {
    AND?: User_ComLocWhereInput | User_ComLocWhereInput[]
    OR?: User_ComLocWhereInput[]
    NOT?: User_ComLocWhereInput | User_ComLocWhereInput[]
    Id?: BigIntFilter<"User_ComLoc"> | bigint | number
    Username?: StringFilter<"User_ComLoc"> | string
    ComLocID?: StringFilter<"User_ComLoc"> | string
    Created_At?: DateTimeNullableFilter<"User_ComLoc"> | Date | string | null
    Created_By?: StringNullableFilter<"User_ComLoc"> | string | null
    Updated_At?: DateTimeNullableFilter<"User_ComLoc"> | Date | string | null
    Updated_By?: StringNullableFilter<"User_ComLoc"> | string | null
  }

  export type User_ComLocOrderByWithRelationInput = {
    Id?: SortOrder
    Username?: SortOrder
    ComLocID?: SortOrder
    Created_At?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Updated_At?: SortOrderInput | SortOrder
    Updated_By?: SortOrderInput | SortOrder
  }

  export type User_ComLocWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: User_ComLocWhereInput | User_ComLocWhereInput[]
    OR?: User_ComLocWhereInput[]
    NOT?: User_ComLocWhereInput | User_ComLocWhereInput[]
    Username?: StringFilter<"User_ComLoc"> | string
    ComLocID?: StringFilter<"User_ComLoc"> | string
    Created_At?: DateTimeNullableFilter<"User_ComLoc"> | Date | string | null
    Created_By?: StringNullableFilter<"User_ComLoc"> | string | null
    Updated_At?: DateTimeNullableFilter<"User_ComLoc"> | Date | string | null
    Updated_By?: StringNullableFilter<"User_ComLoc"> | string | null
  }, "Id">

  export type User_ComLocOrderByWithAggregationInput = {
    Id?: SortOrder
    Username?: SortOrder
    ComLocID?: SortOrder
    Created_At?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Updated_At?: SortOrderInput | SortOrder
    Updated_By?: SortOrderInput | SortOrder
    _count?: User_ComLocCountOrderByAggregateInput
    _avg?: User_ComLocAvgOrderByAggregateInput
    _max?: User_ComLocMaxOrderByAggregateInput
    _min?: User_ComLocMinOrderByAggregateInput
    _sum?: User_ComLocSumOrderByAggregateInput
  }

  export type User_ComLocScalarWhereWithAggregatesInput = {
    AND?: User_ComLocScalarWhereWithAggregatesInput | User_ComLocScalarWhereWithAggregatesInput[]
    OR?: User_ComLocScalarWhereWithAggregatesInput[]
    NOT?: User_ComLocScalarWhereWithAggregatesInput | User_ComLocScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"User_ComLoc"> | bigint | number
    Username?: StringWithAggregatesFilter<"User_ComLoc"> | string
    ComLocID?: StringWithAggregatesFilter<"User_ComLoc"> | string
    Created_At?: DateTimeNullableWithAggregatesFilter<"User_ComLoc"> | Date | string | null
    Created_By?: StringNullableWithAggregatesFilter<"User_ComLoc"> | string | null
    Updated_At?: DateTimeNullableWithAggregatesFilter<"User_ComLoc"> | Date | string | null
    Updated_By?: StringNullableWithAggregatesFilter<"User_ComLoc"> | string | null
  }

  export type User_LoginWhereInput = {
    AND?: User_LoginWhereInput | User_LoginWhereInput[]
    OR?: User_LoginWhereInput[]
    NOT?: User_LoginWhereInput | User_LoginWhereInput[]
    Id?: BigIntFilter<"User_Login"> | bigint | number
    Username?: StringFilter<"User_Login"> | string
    Password?: StringFilter<"User_Login"> | string
    Email?: StringNullableFilter<"User_Login"> | string | null
    Name?: StringNullableFilter<"User_Login"> | string | null
    ComLocID?: StringNullableFilter<"User_Login"> | string | null
    User_Level?: StringNullableFilter<"User_Login"> | string | null
    Is_Admin?: BoolFilter<"User_Login"> | boolean
    Created_At?: DateTimeNullableFilter<"User_Login"> | Date | string | null
    Created_By?: StringNullableFilter<"User_Login"> | string | null
    Updated_At?: DateTimeNullableFilter<"User_Login"> | Date | string | null
    Updated_By?: StringNullableFilter<"User_Login"> | string | null
    Deleted?: BoolFilter<"User_Login"> | boolean
    Deleted_At?: DateTimeNullableFilter<"User_Login"> | Date | string | null
    Deleted_By?: StringNullableFilter<"User_Login"> | string | null
    Telegram_Id?: BigIntNullableFilter<"User_Login"> | bigint | number | null
    Room_Id?: BigIntNullableFilter<"User_Login"> | bigint | number | null
    SuperUser_CrewingApp?: BoolFilter<"User_Login"> | boolean
  }

  export type User_LoginOrderByWithRelationInput = {
    Id?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    Email?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    ComLocID?: SortOrderInput | SortOrder
    User_Level?: SortOrderInput | SortOrder
    Is_Admin?: SortOrder
    Created_At?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Updated_At?: SortOrderInput | SortOrder
    Updated_By?: SortOrderInput | SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrderInput | SortOrder
    Deleted_By?: SortOrderInput | SortOrder
    Telegram_Id?: SortOrderInput | SortOrder
    Room_Id?: SortOrderInput | SortOrder
    SuperUser_CrewingApp?: SortOrder
  }

  export type User_LoginWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    Username?: string
    AND?: User_LoginWhereInput | User_LoginWhereInput[]
    OR?: User_LoginWhereInput[]
    NOT?: User_LoginWhereInput | User_LoginWhereInput[]
    Password?: StringFilter<"User_Login"> | string
    Email?: StringNullableFilter<"User_Login"> | string | null
    Name?: StringNullableFilter<"User_Login"> | string | null
    ComLocID?: StringNullableFilter<"User_Login"> | string | null
    User_Level?: StringNullableFilter<"User_Login"> | string | null
    Is_Admin?: BoolFilter<"User_Login"> | boolean
    Created_At?: DateTimeNullableFilter<"User_Login"> | Date | string | null
    Created_By?: StringNullableFilter<"User_Login"> | string | null
    Updated_At?: DateTimeNullableFilter<"User_Login"> | Date | string | null
    Updated_By?: StringNullableFilter<"User_Login"> | string | null
    Deleted?: BoolFilter<"User_Login"> | boolean
    Deleted_At?: DateTimeNullableFilter<"User_Login"> | Date | string | null
    Deleted_By?: StringNullableFilter<"User_Login"> | string | null
    Telegram_Id?: BigIntNullableFilter<"User_Login"> | bigint | number | null
    Room_Id?: BigIntNullableFilter<"User_Login"> | bigint | number | null
    SuperUser_CrewingApp?: BoolFilter<"User_Login"> | boolean
  }, "Id" | "Username">

  export type User_LoginOrderByWithAggregationInput = {
    Id?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    Email?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    ComLocID?: SortOrderInput | SortOrder
    User_Level?: SortOrderInput | SortOrder
    Is_Admin?: SortOrder
    Created_At?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Updated_At?: SortOrderInput | SortOrder
    Updated_By?: SortOrderInput | SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrderInput | SortOrder
    Deleted_By?: SortOrderInput | SortOrder
    Telegram_Id?: SortOrderInput | SortOrder
    Room_Id?: SortOrderInput | SortOrder
    SuperUser_CrewingApp?: SortOrder
    _count?: User_LoginCountOrderByAggregateInput
    _avg?: User_LoginAvgOrderByAggregateInput
    _max?: User_LoginMaxOrderByAggregateInput
    _min?: User_LoginMinOrderByAggregateInput
    _sum?: User_LoginSumOrderByAggregateInput
  }

  export type User_LoginScalarWhereWithAggregatesInput = {
    AND?: User_LoginScalarWhereWithAggregatesInput | User_LoginScalarWhereWithAggregatesInput[]
    OR?: User_LoginScalarWhereWithAggregatesInput[]
    NOT?: User_LoginScalarWhereWithAggregatesInput | User_LoginScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"User_Login"> | bigint | number
    Username?: StringWithAggregatesFilter<"User_Login"> | string
    Password?: StringWithAggregatesFilter<"User_Login"> | string
    Email?: StringNullableWithAggregatesFilter<"User_Login"> | string | null
    Name?: StringNullableWithAggregatesFilter<"User_Login"> | string | null
    ComLocID?: StringNullableWithAggregatesFilter<"User_Login"> | string | null
    User_Level?: StringNullableWithAggregatesFilter<"User_Login"> | string | null
    Is_Admin?: BoolWithAggregatesFilter<"User_Login"> | boolean
    Created_At?: DateTimeNullableWithAggregatesFilter<"User_Login"> | Date | string | null
    Created_By?: StringNullableWithAggregatesFilter<"User_Login"> | string | null
    Updated_At?: DateTimeNullableWithAggregatesFilter<"User_Login"> | Date | string | null
    Updated_By?: StringNullableWithAggregatesFilter<"User_Login"> | string | null
    Deleted?: BoolWithAggregatesFilter<"User_Login"> | boolean
    Deleted_At?: DateTimeNullableWithAggregatesFilter<"User_Login"> | Date | string | null
    Deleted_By?: StringNullableWithAggregatesFilter<"User_Login"> | string | null
    Telegram_Id?: BigIntNullableWithAggregatesFilter<"User_Login"> | bigint | number | null
    Room_Id?: BigIntNullableWithAggregatesFilter<"User_Login"> | bigint | number | null
    SuperUser_CrewingApp?: BoolWithAggregatesFilter<"User_Login"> | boolean
  }

  export type User_RoleWhereInput = {
    AND?: User_RoleWhereInput | User_RoleWhereInput[]
    OR?: User_RoleWhereInput[]
    NOT?: User_RoleWhereInput | User_RoleWhereInput[]
    Id?: BigIntFilter<"User_Role"> | bigint | number
    Username?: StringNullableFilter<"User_Role"> | string | null
    Role_Id?: BigIntFilter<"User_Role"> | bigint | number
    Role_Crewing_Id?: BigIntNullableFilter<"User_Role"> | bigint | number | null
    Created_At?: DateTimeNullableFilter<"User_Role"> | Date | string | null
    Created_By?: StringNullableFilter<"User_Role"> | string | null
    Updated_At?: DateTimeNullableFilter<"User_Role"> | Date | string | null
    Updated_By?: StringNullableFilter<"User_Role"> | string | null
    Deleted?: BoolFilter<"User_Role"> | boolean
    Deleted_At?: DateTimeNullableFilter<"User_Role"> | Date | string | null
    Deleted_By?: StringNullableFilter<"User_Role"> | string | null
    Role?: XOR<RoleRelationFilter, RoleWhereInput>
  }

  export type User_RoleOrderByWithRelationInput = {
    Id?: SortOrder
    Username?: SortOrderInput | SortOrder
    Role_Id?: SortOrder
    Role_Crewing_Id?: SortOrderInput | SortOrder
    Created_At?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Updated_At?: SortOrderInput | SortOrder
    Updated_By?: SortOrderInput | SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrderInput | SortOrder
    Deleted_By?: SortOrderInput | SortOrder
    Role?: RoleOrderByWithRelationInput
  }

  export type User_RoleWhereUniqueInput = Prisma.AtLeast<{
    Id?: bigint | number
    AND?: User_RoleWhereInput | User_RoleWhereInput[]
    OR?: User_RoleWhereInput[]
    NOT?: User_RoleWhereInput | User_RoleWhereInput[]
    Username?: StringNullableFilter<"User_Role"> | string | null
    Role_Id?: BigIntFilter<"User_Role"> | bigint | number
    Role_Crewing_Id?: BigIntNullableFilter<"User_Role"> | bigint | number | null
    Created_At?: DateTimeNullableFilter<"User_Role"> | Date | string | null
    Created_By?: StringNullableFilter<"User_Role"> | string | null
    Updated_At?: DateTimeNullableFilter<"User_Role"> | Date | string | null
    Updated_By?: StringNullableFilter<"User_Role"> | string | null
    Deleted?: BoolFilter<"User_Role"> | boolean
    Deleted_At?: DateTimeNullableFilter<"User_Role"> | Date | string | null
    Deleted_By?: StringNullableFilter<"User_Role"> | string | null
    Role?: XOR<RoleRelationFilter, RoleWhereInput>
  }, "Id">

  export type User_RoleOrderByWithAggregationInput = {
    Id?: SortOrder
    Username?: SortOrderInput | SortOrder
    Role_Id?: SortOrder
    Role_Crewing_Id?: SortOrderInput | SortOrder
    Created_At?: SortOrderInput | SortOrder
    Created_By?: SortOrderInput | SortOrder
    Updated_At?: SortOrderInput | SortOrder
    Updated_By?: SortOrderInput | SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrderInput | SortOrder
    Deleted_By?: SortOrderInput | SortOrder
    _count?: User_RoleCountOrderByAggregateInput
    _avg?: User_RoleAvgOrderByAggregateInput
    _max?: User_RoleMaxOrderByAggregateInput
    _min?: User_RoleMinOrderByAggregateInput
    _sum?: User_RoleSumOrderByAggregateInput
  }

  export type User_RoleScalarWhereWithAggregatesInput = {
    AND?: User_RoleScalarWhereWithAggregatesInput | User_RoleScalarWhereWithAggregatesInput[]
    OR?: User_RoleScalarWhereWithAggregatesInput[]
    NOT?: User_RoleScalarWhereWithAggregatesInput | User_RoleScalarWhereWithAggregatesInput[]
    Id?: BigIntWithAggregatesFilter<"User_Role"> | bigint | number
    Username?: StringNullableWithAggregatesFilter<"User_Role"> | string | null
    Role_Id?: BigIntWithAggregatesFilter<"User_Role"> | bigint | number
    Role_Crewing_Id?: BigIntNullableWithAggregatesFilter<"User_Role"> | bigint | number | null
    Created_At?: DateTimeNullableWithAggregatesFilter<"User_Role"> | Date | string | null
    Created_By?: StringNullableWithAggregatesFilter<"User_Role"> | string | null
    Updated_At?: DateTimeNullableWithAggregatesFilter<"User_Role"> | Date | string | null
    Updated_By?: StringNullableWithAggregatesFilter<"User_Role"> | string | null
    Deleted?: BoolWithAggregatesFilter<"User_Role"> | boolean
    Deleted_At?: DateTimeNullableWithAggregatesFilter<"User_Role"> | Date | string | null
    Deleted_By?: StringNullableWithAggregatesFilter<"User_Role"> | string | null
  }

  export type Notification_CCCreateInput = {
    Id?: bigint | number
    EmailTo?: string | null
    EmailCC?: string | null
  }

  export type Notification_CCUncheckedCreateInput = {
    Id?: bigint | number
    EmailTo?: string | null
    EmailCC?: string | null
  }

  export type Notification_CCUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    EmailTo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailCC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Notification_CCUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    EmailTo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailCC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Notification_CCCreateManyInput = {
    EmailTo?: string | null
    EmailCC?: string | null
  }

  export type Notification_CCUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    EmailTo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailCC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Notification_CCUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    EmailTo?: NullableStringFieldUpdateOperationsInput | string | null
    EmailCC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Pending_ApprovalsCreateInput = {
    Id?: bigint | number
    Document_Type?: string | null
    Document_Number?: string | null
    Approver?: string | null
    Approve_Level?: number
    Status?: boolean | null
    Revision?: number
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Approver_Title?: string | null
  }

  export type Pending_ApprovalsUncheckedCreateInput = {
    Id?: bigint | number
    Document_Type?: string | null
    Document_Number?: string | null
    Approver?: string | null
    Approve_Level?: number
    Status?: boolean | null
    Revision?: number
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Approver_Title?: string | null
  }

  export type Pending_ApprovalsUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Document_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Approver?: NullableStringFieldUpdateOperationsInput | string | null
    Approve_Level?: IntFieldUpdateOperationsInput | number
    Status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Revision?: IntFieldUpdateOperationsInput | number
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Approver_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Pending_ApprovalsUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Document_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Approver?: NullableStringFieldUpdateOperationsInput | string | null
    Approve_Level?: IntFieldUpdateOperationsInput | number
    Status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Revision?: IntFieldUpdateOperationsInput | number
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Approver_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Pending_ApprovalsCreateManyInput = {
    Document_Type?: string | null
    Document_Number?: string | null
    Approver?: string | null
    Approve_Level?: number
    Status?: boolean | null
    Revision?: number
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Approver_Title?: string | null
  }

  export type Pending_ApprovalsUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Document_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Approver?: NullableStringFieldUpdateOperationsInput | string | null
    Approve_Level?: IntFieldUpdateOperationsInput | number
    Status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Revision?: IntFieldUpdateOperationsInput | number
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Approver_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Pending_ApprovalsUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Document_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Approver?: NullableStringFieldUpdateOperationsInput | string | null
    Approve_Level?: IntFieldUpdateOperationsInput | number
    Status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Revision?: IntFieldUpdateOperationsInput | number
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Approver_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Pending_DocumentCreateInput = {
    Id?: bigint | number
    Document_Type?: string | null
    Document_No?: string | null
    Transaction_Date?: Date | string | null
    Recipient_To?: string | null
    Recipient_CC?: string | null
    Recipient_Bcc?: string | null
    Subject?: string | null
    Telegram_Body?: string | null
    Body?: string | null
    Is_Read?: boolean
    Read_Date?: Date | string | null
    Read_Result?: string | null
    Is_Sent?: boolean
    Sent_Date?: Date | string | null
    Sent_Result?: string | null
    Status?: boolean | null
    Status_By?: string | null
    Status_Date?: Date | string | null
    Remarks?: string | null
    Created_By?: string | null
    Created_At?: Date | string | null
    ComLocID?: string | null
  }

  export type Pending_DocumentUncheckedCreateInput = {
    Id?: bigint | number
    Document_Type?: string | null
    Document_No?: string | null
    Transaction_Date?: Date | string | null
    Recipient_To?: string | null
    Recipient_CC?: string | null
    Recipient_Bcc?: string | null
    Subject?: string | null
    Telegram_Body?: string | null
    Body?: string | null
    Is_Read?: boolean
    Read_Date?: Date | string | null
    Read_Result?: string | null
    Is_Sent?: boolean
    Sent_Date?: Date | string | null
    Sent_Result?: string | null
    Status?: boolean | null
    Status_By?: string | null
    Status_Date?: Date | string | null
    Remarks?: string | null
    Created_By?: string | null
    Created_At?: Date | string | null
    ComLocID?: string | null
  }

  export type Pending_DocumentUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Document_No?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Recipient_To?: NullableStringFieldUpdateOperationsInput | string | null
    Recipient_CC?: NullableStringFieldUpdateOperationsInput | string | null
    Recipient_Bcc?: NullableStringFieldUpdateOperationsInput | string | null
    Subject?: NullableStringFieldUpdateOperationsInput | string | null
    Telegram_Body?: NullableStringFieldUpdateOperationsInput | string | null
    Body?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Read?: BoolFieldUpdateOperationsInput | boolean
    Read_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Read_Result?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Sent?: BoolFieldUpdateOperationsInput | boolean
    Sent_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sent_Result?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Status_By?: NullableStringFieldUpdateOperationsInput | string | null
    Status_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComLocID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Pending_DocumentUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Document_No?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Recipient_To?: NullableStringFieldUpdateOperationsInput | string | null
    Recipient_CC?: NullableStringFieldUpdateOperationsInput | string | null
    Recipient_Bcc?: NullableStringFieldUpdateOperationsInput | string | null
    Subject?: NullableStringFieldUpdateOperationsInput | string | null
    Telegram_Body?: NullableStringFieldUpdateOperationsInput | string | null
    Body?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Read?: BoolFieldUpdateOperationsInput | boolean
    Read_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Read_Result?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Sent?: BoolFieldUpdateOperationsInput | boolean
    Sent_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sent_Result?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Status_By?: NullableStringFieldUpdateOperationsInput | string | null
    Status_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComLocID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Pending_DocumentCreateManyInput = {
    Document_Type?: string | null
    Document_No?: string | null
    Transaction_Date?: Date | string | null
    Recipient_To?: string | null
    Recipient_CC?: string | null
    Recipient_Bcc?: string | null
    Subject?: string | null
    Telegram_Body?: string | null
    Body?: string | null
    Is_Read?: boolean
    Read_Date?: Date | string | null
    Read_Result?: string | null
    Is_Sent?: boolean
    Sent_Date?: Date | string | null
    Sent_Result?: string | null
    Status?: boolean | null
    Status_By?: string | null
    Status_Date?: Date | string | null
    Remarks?: string | null
    Created_By?: string | null
    Created_At?: Date | string | null
    ComLocID?: string | null
  }

  export type Pending_DocumentUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Document_No?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Recipient_To?: NullableStringFieldUpdateOperationsInput | string | null
    Recipient_CC?: NullableStringFieldUpdateOperationsInput | string | null
    Recipient_Bcc?: NullableStringFieldUpdateOperationsInput | string | null
    Subject?: NullableStringFieldUpdateOperationsInput | string | null
    Telegram_Body?: NullableStringFieldUpdateOperationsInput | string | null
    Body?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Read?: BoolFieldUpdateOperationsInput | boolean
    Read_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Read_Result?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Sent?: BoolFieldUpdateOperationsInput | boolean
    Sent_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sent_Result?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Status_By?: NullableStringFieldUpdateOperationsInput | string | null
    Status_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComLocID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Pending_DocumentUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Document_No?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Recipient_To?: NullableStringFieldUpdateOperationsInput | string | null
    Recipient_CC?: NullableStringFieldUpdateOperationsInput | string | null
    Recipient_Bcc?: NullableStringFieldUpdateOperationsInput | string | null
    Subject?: NullableStringFieldUpdateOperationsInput | string | null
    Telegram_Body?: NullableStringFieldUpdateOperationsInput | string | null
    Body?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Read?: BoolFieldUpdateOperationsInput | boolean
    Read_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Read_Result?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Sent?: BoolFieldUpdateOperationsInput | boolean
    Sent_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sent_Result?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Status_By?: NullableStringFieldUpdateOperationsInput | string | null
    Status_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ComLocID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Release_MatrixCreateInput = {
    Id?: bigint | number
    CompanyId?: string | null
    ComLocId?: string | null
    Document_Type?: string | null
    Approver?: string | null
    Approval_Level?: number
    OrganizationCode?: string | null
    Approver_Title?: string | null
  }

  export type Release_MatrixUncheckedCreateInput = {
    Id?: bigint | number
    CompanyId?: string | null
    ComLocId?: string | null
    Document_Type?: string | null
    Approver?: string | null
    Approval_Level?: number
    OrganizationCode?: string | null
    Approver_Title?: string | null
  }

  export type Release_MatrixUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    ComLocId?: NullableStringFieldUpdateOperationsInput | string | null
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approver?: NullableStringFieldUpdateOperationsInput | string | null
    Approval_Level?: IntFieldUpdateOperationsInput | number
    OrganizationCode?: NullableStringFieldUpdateOperationsInput | string | null
    Approver_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Release_MatrixUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    ComLocId?: NullableStringFieldUpdateOperationsInput | string | null
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approver?: NullableStringFieldUpdateOperationsInput | string | null
    Approval_Level?: IntFieldUpdateOperationsInput | number
    OrganizationCode?: NullableStringFieldUpdateOperationsInput | string | null
    Approver_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Release_MatrixCreateManyInput = {
    CompanyId?: string | null
    ComLocId?: string | null
    Document_Type?: string | null
    Approver?: string | null
    Approval_Level?: number
    OrganizationCode?: string | null
    Approver_Title?: string | null
  }

  export type Release_MatrixUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    ComLocId?: NullableStringFieldUpdateOperationsInput | string | null
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approver?: NullableStringFieldUpdateOperationsInput | string | null
    Approval_Level?: IntFieldUpdateOperationsInput | number
    OrganizationCode?: NullableStringFieldUpdateOperationsInput | string | null
    Approver_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Release_MatrixUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    ComLocId?: NullableStringFieldUpdateOperationsInput | string | null
    Document_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approver?: NullableStringFieldUpdateOperationsInput | string | null
    Approval_Level?: IntFieldUpdateOperationsInput | number
    OrganizationCode?: NullableStringFieldUpdateOperationsInput | string | null
    Approver_Title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Release_Matrix_CCCreateInput = {
    Id?: bigint | number
    OrganizationCode?: string | null
    DocumentType?: string | null
    Email?: string | null
    Name?: string | null
  }

  export type Release_Matrix_CCUncheckedCreateInput = {
    Id?: bigint | number
    OrganizationCode?: string | null
    DocumentType?: string | null
    Email?: string | null
    Name?: string | null
  }

  export type Release_Matrix_CCUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    OrganizationCode?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Release_Matrix_CCUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    OrganizationCode?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Release_Matrix_CCCreateManyInput = {
    OrganizationCode?: string | null
    DocumentType?: string | null
    Email?: string | null
    Name?: string | null
  }

  export type Release_Matrix_CCUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    OrganizationCode?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Release_Matrix_CCUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    OrganizationCode?: NullableStringFieldUpdateOperationsInput | string | null
    DocumentType?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportsCreateInput = {
    Modul?: string | null
    Code?: string | null
    Name?: string | null
    Query?: string | null
    Fields?: string | null
    Headers?: string | null
    ShowAsHeaders?: string | null
    ShowAsSubHeaders?: string | null
    Filters?: string | null
    Formats?: string | null
    Totals?: string | null
    PrimarySort?: string | null
    SecondarySort?: string | null
    ThirdSort?: string | null
    Uniq?: bigint | number
  }

  export type ReportsUncheckedCreateInput = {
    Modul?: string | null
    Code?: string | null
    Name?: string | null
    Query?: string | null
    Fields?: string | null
    Headers?: string | null
    ShowAsHeaders?: string | null
    ShowAsSubHeaders?: string | null
    Filters?: string | null
    Formats?: string | null
    Totals?: string | null
    PrimarySort?: string | null
    SecondarySort?: string | null
    ThirdSort?: string | null
    Uniq?: bigint | number
  }

  export type ReportsUpdateInput = {
    Modul?: NullableStringFieldUpdateOperationsInput | string | null
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Query?: NullableStringFieldUpdateOperationsInput | string | null
    Fields?: NullableStringFieldUpdateOperationsInput | string | null
    Headers?: NullableStringFieldUpdateOperationsInput | string | null
    ShowAsHeaders?: NullableStringFieldUpdateOperationsInput | string | null
    ShowAsSubHeaders?: NullableStringFieldUpdateOperationsInput | string | null
    Filters?: NullableStringFieldUpdateOperationsInput | string | null
    Formats?: NullableStringFieldUpdateOperationsInput | string | null
    Totals?: NullableStringFieldUpdateOperationsInput | string | null
    PrimarySort?: NullableStringFieldUpdateOperationsInput | string | null
    SecondarySort?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdSort?: NullableStringFieldUpdateOperationsInput | string | null
    Uniq?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReportsUncheckedUpdateInput = {
    Modul?: NullableStringFieldUpdateOperationsInput | string | null
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Query?: NullableStringFieldUpdateOperationsInput | string | null
    Fields?: NullableStringFieldUpdateOperationsInput | string | null
    Headers?: NullableStringFieldUpdateOperationsInput | string | null
    ShowAsHeaders?: NullableStringFieldUpdateOperationsInput | string | null
    ShowAsSubHeaders?: NullableStringFieldUpdateOperationsInput | string | null
    Filters?: NullableStringFieldUpdateOperationsInput | string | null
    Formats?: NullableStringFieldUpdateOperationsInput | string | null
    Totals?: NullableStringFieldUpdateOperationsInput | string | null
    PrimarySort?: NullableStringFieldUpdateOperationsInput | string | null
    SecondarySort?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdSort?: NullableStringFieldUpdateOperationsInput | string | null
    Uniq?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReportsCreateManyInput = {
    Modul?: string | null
    Code?: string | null
    Name?: string | null
    Query?: string | null
    Fields?: string | null
    Headers?: string | null
    ShowAsHeaders?: string | null
    ShowAsSubHeaders?: string | null
    Filters?: string | null
    Formats?: string | null
    Totals?: string | null
    PrimarySort?: string | null
    SecondarySort?: string | null
    ThirdSort?: string | null
  }

  export type ReportsUpdateManyMutationInput = {
    Modul?: NullableStringFieldUpdateOperationsInput | string | null
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Query?: NullableStringFieldUpdateOperationsInput | string | null
    Fields?: NullableStringFieldUpdateOperationsInput | string | null
    Headers?: NullableStringFieldUpdateOperationsInput | string | null
    ShowAsHeaders?: NullableStringFieldUpdateOperationsInput | string | null
    ShowAsSubHeaders?: NullableStringFieldUpdateOperationsInput | string | null
    Filters?: NullableStringFieldUpdateOperationsInput | string | null
    Formats?: NullableStringFieldUpdateOperationsInput | string | null
    Totals?: NullableStringFieldUpdateOperationsInput | string | null
    PrimarySort?: NullableStringFieldUpdateOperationsInput | string | null
    SecondarySort?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdSort?: NullableStringFieldUpdateOperationsInput | string | null
    Uniq?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReportsUncheckedUpdateManyInput = {
    Modul?: NullableStringFieldUpdateOperationsInput | string | null
    Code?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Query?: NullableStringFieldUpdateOperationsInput | string | null
    Fields?: NullableStringFieldUpdateOperationsInput | string | null
    Headers?: NullableStringFieldUpdateOperationsInput | string | null
    ShowAsHeaders?: NullableStringFieldUpdateOperationsInput | string | null
    ShowAsSubHeaders?: NullableStringFieldUpdateOperationsInput | string | null
    Filters?: NullableStringFieldUpdateOperationsInput | string | null
    Formats?: NullableStringFieldUpdateOperationsInput | string | null
    Totals?: NullableStringFieldUpdateOperationsInput | string | null
    PrimarySort?: NullableStringFieldUpdateOperationsInput | string | null
    SecondarySort?: NullableStringFieldUpdateOperationsInput | string | null
    ThirdSort?: NullableStringFieldUpdateOperationsInput | string | null
    Uniq?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type RoleCreateInput = {
    Id?: bigint | number
    Role_Code?: string | null
    Role_Name?: string | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
    Role_Detail?: Role_DetailCreateNestedManyWithoutRoleInput
    User_Role?: User_RoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    Id?: bigint | number
    Role_Code?: string | null
    Role_Name?: string | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
    Role_Detail?: Role_DetailUncheckedCreateNestedManyWithoutRoleInput
    User_Role?: User_RoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Detail?: Role_DetailUpdateManyWithoutRoleNestedInput
    User_Role?: User_RoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Detail?: Role_DetailUncheckedUpdateManyWithoutRoleNestedInput
    User_Role?: User_RoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    Role_Code?: string | null
    Role_Name?: string | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Role_DetailCreateInput = {
    Id?: bigint | number
    ControllerName?: string | null
    ActionName?: string | null
    Roles?: string | null
    Url?: string | null
    Role: RoleCreateNestedOneWithoutRole_DetailInput
  }

  export type Role_DetailUncheckedCreateInput = {
    Id?: bigint | number
    Role_Id: bigint | number
    ControllerName?: string | null
    ActionName?: string | null
    Roles?: string | null
    Url?: string | null
  }

  export type Role_DetailUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Roles?: NullableStringFieldUpdateOperationsInput | string | null
    Url?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: RoleUpdateOneRequiredWithoutRole_DetailNestedInput
  }

  export type Role_DetailUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Id?: BigIntFieldUpdateOperationsInput | bigint | number
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Roles?: NullableStringFieldUpdateOperationsInput | string | null
    Url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Role_DetailCreateManyInput = {
    Role_Id: bigint | number
    ControllerName?: string | null
    ActionName?: string | null
    Roles?: string | null
    Url?: string | null
  }

  export type Role_DetailUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Roles?: NullableStringFieldUpdateOperationsInput | string | null
    Url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Role_DetailUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Id?: BigIntFieldUpdateOperationsInput | bigint | number
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Roles?: NullableStringFieldUpdateOperationsInput | string | null
    Url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_ActivityCreateInput = {
    Username?: string | null
    ControllerName?: string | null
    ActionName?: string | null
    Activity?: string | null
    IP_Address?: string | null
    Created_Date: Date | string
    User_Activity?: User_ActivityCreateNestedOneWithoutOther_User_ActivityInput
    other_User_Activity?: User_ActivityCreateNestedOneWithoutUser_ActivityInput
  }

  export type User_ActivityUncheckedCreateInput = {
    Id?: bigint | number
    Username?: string | null
    ControllerName?: string | null
    ActionName?: string | null
    Activity?: string | null
    IP_Address?: string | null
    Created_Date: Date | string
    other_User_Activity?: User_ActivityUncheckedCreateNestedOneWithoutUser_ActivityInput
  }

  export type User_ActivityUpdateInput = {
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Activity?: NullableStringFieldUpdateOperationsInput | string | null
    IP_Address?: NullableStringFieldUpdateOperationsInput | string | null
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    User_Activity?: User_ActivityUpdateOneRequiredWithoutOther_User_ActivityNestedInput
    other_User_Activity?: User_ActivityUpdateOneWithoutUser_ActivityNestedInput
  }

  export type User_ActivityUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Activity?: NullableStringFieldUpdateOperationsInput | string | null
    IP_Address?: NullableStringFieldUpdateOperationsInput | string | null
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    other_User_Activity?: User_ActivityUncheckedUpdateOneWithoutUser_ActivityNestedInput
  }

  export type User_ActivityCreateManyInput = {
    Username?: string | null
    ControllerName?: string | null
    ActionName?: string | null
    Activity?: string | null
    IP_Address?: string | null
    Created_Date: Date | string
  }

  export type User_ActivityUpdateManyMutationInput = {
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Activity?: NullableStringFieldUpdateOperationsInput | string | null
    IP_Address?: NullableStringFieldUpdateOperationsInput | string | null
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_ActivityUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Activity?: NullableStringFieldUpdateOperationsInput | string | null
    IP_Address?: NullableStringFieldUpdateOperationsInput | string | null
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_ComLocCreateInput = {
    Id?: bigint | number
    Username: string
    ComLocID: string
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
  }

  export type User_ComLocUncheckedCreateInput = {
    Id?: bigint | number
    Username: string
    ComLocID: string
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
  }

  export type User_ComLocUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: StringFieldUpdateOperationsInput | string
    ComLocID?: StringFieldUpdateOperationsInput | string
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_ComLocUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: StringFieldUpdateOperationsInput | string
    ComLocID?: StringFieldUpdateOperationsInput | string
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_ComLocCreateManyInput = {
    Username: string
    ComLocID: string
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
  }

  export type User_ComLocUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: StringFieldUpdateOperationsInput | string
    ComLocID?: StringFieldUpdateOperationsInput | string
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_ComLocUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: StringFieldUpdateOperationsInput | string
    ComLocID?: StringFieldUpdateOperationsInput | string
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_LoginCreateInput = {
    Id?: bigint | number
    Username: string
    Password: string
    Email?: string | null
    Name?: string | null
    ComLocID?: string | null
    User_Level?: string | null
    Is_Admin?: boolean
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
    Telegram_Id?: bigint | number | null
    Room_Id?: bigint | number | null
    SuperUser_CrewingApp?: boolean
  }

  export type User_LoginUncheckedCreateInput = {
    Id?: bigint | number
    Username: string
    Password: string
    Email?: string | null
    Name?: string | null
    ComLocID?: string | null
    User_Level?: string | null
    Is_Admin?: boolean
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
    Telegram_Id?: bigint | number | null
    Room_Id?: bigint | number | null
    SuperUser_CrewingApp?: boolean
  }

  export type User_LoginUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    ComLocID?: NullableStringFieldUpdateOperationsInput | string | null
    User_Level?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Admin?: BoolFieldUpdateOperationsInput | boolean
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
    Telegram_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Room_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SuperUser_CrewingApp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_LoginUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    ComLocID?: NullableStringFieldUpdateOperationsInput | string | null
    User_Level?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Admin?: BoolFieldUpdateOperationsInput | boolean
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
    Telegram_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Room_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SuperUser_CrewingApp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_LoginCreateManyInput = {
    Username: string
    Password: string
    Email?: string | null
    Name?: string | null
    ComLocID?: string | null
    User_Level?: string | null
    Is_Admin?: boolean
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
    Telegram_Id?: bigint | number | null
    Room_Id?: bigint | number | null
    SuperUser_CrewingApp?: boolean
  }

  export type User_LoginUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    ComLocID?: NullableStringFieldUpdateOperationsInput | string | null
    User_Level?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Admin?: BoolFieldUpdateOperationsInput | boolean
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
    Telegram_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Room_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SuperUser_CrewingApp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_LoginUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    ComLocID?: NullableStringFieldUpdateOperationsInput | string | null
    User_Level?: NullableStringFieldUpdateOperationsInput | string | null
    Is_Admin?: BoolFieldUpdateOperationsInput | boolean
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
    Telegram_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Room_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    SuperUser_CrewingApp?: BoolFieldUpdateOperationsInput | boolean
  }

  export type User_RoleCreateInput = {
    Id?: bigint | number
    Username?: string | null
    Role_Crewing_Id?: bigint | number | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
    Role: RoleCreateNestedOneWithoutUser_RoleInput
  }

  export type User_RoleUncheckedCreateInput = {
    Id?: bigint | number
    Username?: string | null
    Role_Id: bigint | number
    Role_Crewing_Id?: bigint | number | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
  }

  export type User_RoleUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Crewing_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
    Role?: RoleUpdateOneRequiredWithoutUser_RoleNestedInput
  }

  export type User_RoleUncheckedUpdateInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Crewing_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_RoleCreateManyInput = {
    Username?: string | null
    Role_Id: bigint | number
    Role_Crewing_Id?: bigint | number | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
  }

  export type User_RoleUpdateManyMutationInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Crewing_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_RoleUncheckedUpdateManyInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Crewing_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Notification_CCCountOrderByAggregateInput = {
    Id?: SortOrder
    EmailTo?: SortOrder
    EmailCC?: SortOrder
  }

  export type Notification_CCAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type Notification_CCMaxOrderByAggregateInput = {
    Id?: SortOrder
    EmailTo?: SortOrder
    EmailCC?: SortOrder
  }

  export type Notification_CCMinOrderByAggregateInput = {
    Id?: SortOrder
    EmailTo?: SortOrder
    EmailCC?: SortOrder
  }

  export type Notification_CCSumOrderByAggregateInput = {
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type Pending_ApprovalsCountOrderByAggregateInput = {
    Id?: SortOrder
    Document_Type?: SortOrder
    Document_Number?: SortOrder
    Approver?: SortOrder
    Approve_Level?: SortOrder
    Status?: SortOrder
    Revision?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Approver_Title?: SortOrder
  }

  export type Pending_ApprovalsAvgOrderByAggregateInput = {
    Id?: SortOrder
    Approve_Level?: SortOrder
    Revision?: SortOrder
  }

  export type Pending_ApprovalsMaxOrderByAggregateInput = {
    Id?: SortOrder
    Document_Type?: SortOrder
    Document_Number?: SortOrder
    Approver?: SortOrder
    Approve_Level?: SortOrder
    Status?: SortOrder
    Revision?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Approver_Title?: SortOrder
  }

  export type Pending_ApprovalsMinOrderByAggregateInput = {
    Id?: SortOrder
    Document_Type?: SortOrder
    Document_Number?: SortOrder
    Approver?: SortOrder
    Approve_Level?: SortOrder
    Status?: SortOrder
    Revision?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Approver_Title?: SortOrder
  }

  export type Pending_ApprovalsSumOrderByAggregateInput = {
    Id?: SortOrder
    Approve_Level?: SortOrder
    Revision?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Pending_DocumentCountOrderByAggregateInput = {
    Id?: SortOrder
    Document_Type?: SortOrder
    Document_No?: SortOrder
    Transaction_Date?: SortOrder
    Recipient_To?: SortOrder
    Recipient_CC?: SortOrder
    Recipient_Bcc?: SortOrder
    Subject?: SortOrder
    Telegram_Body?: SortOrder
    Body?: SortOrder
    Is_Read?: SortOrder
    Read_Date?: SortOrder
    Read_Result?: SortOrder
    Is_Sent?: SortOrder
    Sent_Date?: SortOrder
    Sent_Result?: SortOrder
    Status?: SortOrder
    Status_By?: SortOrder
    Status_Date?: SortOrder
    Remarks?: SortOrder
    Created_By?: SortOrder
    Created_At?: SortOrder
    ComLocID?: SortOrder
  }

  export type Pending_DocumentAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type Pending_DocumentMaxOrderByAggregateInput = {
    Id?: SortOrder
    Document_Type?: SortOrder
    Document_No?: SortOrder
    Transaction_Date?: SortOrder
    Recipient_To?: SortOrder
    Recipient_CC?: SortOrder
    Recipient_Bcc?: SortOrder
    Subject?: SortOrder
    Telegram_Body?: SortOrder
    Body?: SortOrder
    Is_Read?: SortOrder
    Read_Date?: SortOrder
    Read_Result?: SortOrder
    Is_Sent?: SortOrder
    Sent_Date?: SortOrder
    Sent_Result?: SortOrder
    Status?: SortOrder
    Status_By?: SortOrder
    Status_Date?: SortOrder
    Remarks?: SortOrder
    Created_By?: SortOrder
    Created_At?: SortOrder
    ComLocID?: SortOrder
  }

  export type Pending_DocumentMinOrderByAggregateInput = {
    Id?: SortOrder
    Document_Type?: SortOrder
    Document_No?: SortOrder
    Transaction_Date?: SortOrder
    Recipient_To?: SortOrder
    Recipient_CC?: SortOrder
    Recipient_Bcc?: SortOrder
    Subject?: SortOrder
    Telegram_Body?: SortOrder
    Body?: SortOrder
    Is_Read?: SortOrder
    Read_Date?: SortOrder
    Read_Result?: SortOrder
    Is_Sent?: SortOrder
    Sent_Date?: SortOrder
    Sent_Result?: SortOrder
    Status?: SortOrder
    Status_By?: SortOrder
    Status_Date?: SortOrder
    Remarks?: SortOrder
    Created_By?: SortOrder
    Created_At?: SortOrder
    ComLocID?: SortOrder
  }

  export type Pending_DocumentSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Release_MatrixCountOrderByAggregateInput = {
    Id?: SortOrder
    CompanyId?: SortOrder
    ComLocId?: SortOrder
    Document_Type?: SortOrder
    Approver?: SortOrder
    Approval_Level?: SortOrder
    OrganizationCode?: SortOrder
    Approver_Title?: SortOrder
  }

  export type Release_MatrixAvgOrderByAggregateInput = {
    Id?: SortOrder
    Approval_Level?: SortOrder
  }

  export type Release_MatrixMaxOrderByAggregateInput = {
    Id?: SortOrder
    CompanyId?: SortOrder
    ComLocId?: SortOrder
    Document_Type?: SortOrder
    Approver?: SortOrder
    Approval_Level?: SortOrder
    OrganizationCode?: SortOrder
    Approver_Title?: SortOrder
  }

  export type Release_MatrixMinOrderByAggregateInput = {
    Id?: SortOrder
    CompanyId?: SortOrder
    ComLocId?: SortOrder
    Document_Type?: SortOrder
    Approver?: SortOrder
    Approval_Level?: SortOrder
    OrganizationCode?: SortOrder
    Approver_Title?: SortOrder
  }

  export type Release_MatrixSumOrderByAggregateInput = {
    Id?: SortOrder
    Approval_Level?: SortOrder
  }

  export type Release_Matrix_CCCountOrderByAggregateInput = {
    Id?: SortOrder
    OrganizationCode?: SortOrder
    DocumentType?: SortOrder
    Email?: SortOrder
    Name?: SortOrder
  }

  export type Release_Matrix_CCAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type Release_Matrix_CCMaxOrderByAggregateInput = {
    Id?: SortOrder
    OrganizationCode?: SortOrder
    DocumentType?: SortOrder
    Email?: SortOrder
    Name?: SortOrder
  }

  export type Release_Matrix_CCMinOrderByAggregateInput = {
    Id?: SortOrder
    OrganizationCode?: SortOrder
    DocumentType?: SortOrder
    Email?: SortOrder
    Name?: SortOrder
  }

  export type Release_Matrix_CCSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type ReportsCountOrderByAggregateInput = {
    Modul?: SortOrder
    Code?: SortOrder
    Name?: SortOrder
    Query?: SortOrder
    Fields?: SortOrder
    Headers?: SortOrder
    ShowAsHeaders?: SortOrder
    ShowAsSubHeaders?: SortOrder
    Filters?: SortOrder
    Formats?: SortOrder
    Totals?: SortOrder
    PrimarySort?: SortOrder
    SecondarySort?: SortOrder
    ThirdSort?: SortOrder
    Uniq?: SortOrder
  }

  export type ReportsAvgOrderByAggregateInput = {
    Uniq?: SortOrder
  }

  export type ReportsMaxOrderByAggregateInput = {
    Modul?: SortOrder
    Code?: SortOrder
    Name?: SortOrder
    Query?: SortOrder
    Fields?: SortOrder
    Headers?: SortOrder
    ShowAsHeaders?: SortOrder
    ShowAsSubHeaders?: SortOrder
    Filters?: SortOrder
    Formats?: SortOrder
    Totals?: SortOrder
    PrimarySort?: SortOrder
    SecondarySort?: SortOrder
    ThirdSort?: SortOrder
    Uniq?: SortOrder
  }

  export type ReportsMinOrderByAggregateInput = {
    Modul?: SortOrder
    Code?: SortOrder
    Name?: SortOrder
    Query?: SortOrder
    Fields?: SortOrder
    Headers?: SortOrder
    ShowAsHeaders?: SortOrder
    ShowAsSubHeaders?: SortOrder
    Filters?: SortOrder
    Formats?: SortOrder
    Totals?: SortOrder
    PrimarySort?: SortOrder
    SecondarySort?: SortOrder
    ThirdSort?: SortOrder
    Uniq?: SortOrder
  }

  export type ReportsSumOrderByAggregateInput = {
    Uniq?: SortOrder
  }

  export type Role_DetailListRelationFilter = {
    every?: Role_DetailWhereInput
    some?: Role_DetailWhereInput
    none?: Role_DetailWhereInput
  }

  export type User_RoleListRelationFilter = {
    every?: User_RoleWhereInput
    some?: User_RoleWhereInput
    none?: User_RoleWhereInput
  }

  export type Role_DetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    Id?: SortOrder
    Role_Code?: SortOrder
    Role_Name?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrder
    Deleted_By?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    Id?: SortOrder
    Role_Code?: SortOrder
    Role_Name?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrder
    Deleted_By?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    Id?: SortOrder
    Role_Code?: SortOrder
    Role_Name?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrder
    Deleted_By?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type Role_DetailCountOrderByAggregateInput = {
    Id?: SortOrder
    Role_Id?: SortOrder
    ControllerName?: SortOrder
    ActionName?: SortOrder
    Roles?: SortOrder
    Url?: SortOrder
  }

  export type Role_DetailAvgOrderByAggregateInput = {
    Id?: SortOrder
    Role_Id?: SortOrder
  }

  export type Role_DetailMaxOrderByAggregateInput = {
    Id?: SortOrder
    Role_Id?: SortOrder
    ControllerName?: SortOrder
    ActionName?: SortOrder
    Roles?: SortOrder
    Url?: SortOrder
  }

  export type Role_DetailMinOrderByAggregateInput = {
    Id?: SortOrder
    Role_Id?: SortOrder
    ControllerName?: SortOrder
    ActionName?: SortOrder
    Roles?: SortOrder
    Url?: SortOrder
  }

  export type Role_DetailSumOrderByAggregateInput = {
    Id?: SortOrder
    Role_Id?: SortOrder
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

  export type User_ActivityRelationFilter = {
    is?: User_ActivityWhereInput
    isNot?: User_ActivityWhereInput
  }

  export type User_ActivityNullableRelationFilter = {
    is?: User_ActivityWhereInput | null
    isNot?: User_ActivityWhereInput | null
  }

  export type User_ActivityCountOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    ControllerName?: SortOrder
    ActionName?: SortOrder
    Activity?: SortOrder
    IP_Address?: SortOrder
    Created_Date?: SortOrder
  }

  export type User_ActivityAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type User_ActivityMaxOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    ControllerName?: SortOrder
    ActionName?: SortOrder
    Activity?: SortOrder
    IP_Address?: SortOrder
    Created_Date?: SortOrder
  }

  export type User_ActivityMinOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    ControllerName?: SortOrder
    ActionName?: SortOrder
    Activity?: SortOrder
    IP_Address?: SortOrder
    Created_Date?: SortOrder
  }

  export type User_ActivitySumOrderByAggregateInput = {
    Id?: SortOrder
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

  export type User_ComLocCountOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    ComLocID?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
  }

  export type User_ComLocAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type User_ComLocMaxOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    ComLocID?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
  }

  export type User_ComLocMinOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    ComLocID?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
  }

  export type User_ComLocSumOrderByAggregateInput = {
    Id?: SortOrder
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type User_LoginCountOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    Email?: SortOrder
    Name?: SortOrder
    ComLocID?: SortOrder
    User_Level?: SortOrder
    Is_Admin?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrder
    Deleted_By?: SortOrder
    Telegram_Id?: SortOrder
    Room_Id?: SortOrder
    SuperUser_CrewingApp?: SortOrder
  }

  export type User_LoginAvgOrderByAggregateInput = {
    Id?: SortOrder
    Telegram_Id?: SortOrder
    Room_Id?: SortOrder
  }

  export type User_LoginMaxOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    Email?: SortOrder
    Name?: SortOrder
    ComLocID?: SortOrder
    User_Level?: SortOrder
    Is_Admin?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrder
    Deleted_By?: SortOrder
    Telegram_Id?: SortOrder
    Room_Id?: SortOrder
    SuperUser_CrewingApp?: SortOrder
  }

  export type User_LoginMinOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Password?: SortOrder
    Email?: SortOrder
    Name?: SortOrder
    ComLocID?: SortOrder
    User_Level?: SortOrder
    Is_Admin?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrder
    Deleted_By?: SortOrder
    Telegram_Id?: SortOrder
    Room_Id?: SortOrder
    SuperUser_CrewingApp?: SortOrder
  }

  export type User_LoginSumOrderByAggregateInput = {
    Id?: SortOrder
    Telegram_Id?: SortOrder
    Room_Id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type User_RoleCountOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Role_Id?: SortOrder
    Role_Crewing_Id?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrder
    Deleted_By?: SortOrder
  }

  export type User_RoleAvgOrderByAggregateInput = {
    Id?: SortOrder
    Role_Id?: SortOrder
    Role_Crewing_Id?: SortOrder
  }

  export type User_RoleMaxOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Role_Id?: SortOrder
    Role_Crewing_Id?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrder
    Deleted_By?: SortOrder
  }

  export type User_RoleMinOrderByAggregateInput = {
    Id?: SortOrder
    Username?: SortOrder
    Role_Id?: SortOrder
    Role_Crewing_Id?: SortOrder
    Created_At?: SortOrder
    Created_By?: SortOrder
    Updated_At?: SortOrder
    Updated_By?: SortOrder
    Deleted?: SortOrder
    Deleted_At?: SortOrder
    Deleted_By?: SortOrder
  }

  export type User_RoleSumOrderByAggregateInput = {
    Id?: SortOrder
    Role_Id?: SortOrder
    Role_Crewing_Id?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Role_DetailCreateNestedManyWithoutRoleInput = {
    create?: XOR<Role_DetailCreateWithoutRoleInput, Role_DetailUncheckedCreateWithoutRoleInput> | Role_DetailCreateWithoutRoleInput[] | Role_DetailUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Role_DetailCreateOrConnectWithoutRoleInput | Role_DetailCreateOrConnectWithoutRoleInput[]
    createMany?: Role_DetailCreateManyRoleInputEnvelope
    connect?: Role_DetailWhereUniqueInput | Role_DetailWhereUniqueInput[]
  }

  export type User_RoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<User_RoleCreateWithoutRoleInput, User_RoleUncheckedCreateWithoutRoleInput> | User_RoleCreateWithoutRoleInput[] | User_RoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: User_RoleCreateOrConnectWithoutRoleInput | User_RoleCreateOrConnectWithoutRoleInput[]
    createMany?: User_RoleCreateManyRoleInputEnvelope
    connect?: User_RoleWhereUniqueInput | User_RoleWhereUniqueInput[]
  }

  export type Role_DetailUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<Role_DetailCreateWithoutRoleInput, Role_DetailUncheckedCreateWithoutRoleInput> | Role_DetailCreateWithoutRoleInput[] | Role_DetailUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Role_DetailCreateOrConnectWithoutRoleInput | Role_DetailCreateOrConnectWithoutRoleInput[]
    createMany?: Role_DetailCreateManyRoleInputEnvelope
    connect?: Role_DetailWhereUniqueInput | Role_DetailWhereUniqueInput[]
  }

  export type User_RoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<User_RoleCreateWithoutRoleInput, User_RoleUncheckedCreateWithoutRoleInput> | User_RoleCreateWithoutRoleInput[] | User_RoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: User_RoleCreateOrConnectWithoutRoleInput | User_RoleCreateOrConnectWithoutRoleInput[]
    createMany?: User_RoleCreateManyRoleInputEnvelope
    connect?: User_RoleWhereUniqueInput | User_RoleWhereUniqueInput[]
  }

  export type Role_DetailUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Role_DetailCreateWithoutRoleInput, Role_DetailUncheckedCreateWithoutRoleInput> | Role_DetailCreateWithoutRoleInput[] | Role_DetailUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Role_DetailCreateOrConnectWithoutRoleInput | Role_DetailCreateOrConnectWithoutRoleInput[]
    upsert?: Role_DetailUpsertWithWhereUniqueWithoutRoleInput | Role_DetailUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: Role_DetailCreateManyRoleInputEnvelope
    set?: Role_DetailWhereUniqueInput | Role_DetailWhereUniqueInput[]
    disconnect?: Role_DetailWhereUniqueInput | Role_DetailWhereUniqueInput[]
    delete?: Role_DetailWhereUniqueInput | Role_DetailWhereUniqueInput[]
    connect?: Role_DetailWhereUniqueInput | Role_DetailWhereUniqueInput[]
    update?: Role_DetailUpdateWithWhereUniqueWithoutRoleInput | Role_DetailUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: Role_DetailUpdateManyWithWhereWithoutRoleInput | Role_DetailUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: Role_DetailScalarWhereInput | Role_DetailScalarWhereInput[]
  }

  export type User_RoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<User_RoleCreateWithoutRoleInput, User_RoleUncheckedCreateWithoutRoleInput> | User_RoleCreateWithoutRoleInput[] | User_RoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: User_RoleCreateOrConnectWithoutRoleInput | User_RoleCreateOrConnectWithoutRoleInput[]
    upsert?: User_RoleUpsertWithWhereUniqueWithoutRoleInput | User_RoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: User_RoleCreateManyRoleInputEnvelope
    set?: User_RoleWhereUniqueInput | User_RoleWhereUniqueInput[]
    disconnect?: User_RoleWhereUniqueInput | User_RoleWhereUniqueInput[]
    delete?: User_RoleWhereUniqueInput | User_RoleWhereUniqueInput[]
    connect?: User_RoleWhereUniqueInput | User_RoleWhereUniqueInput[]
    update?: User_RoleUpdateWithWhereUniqueWithoutRoleInput | User_RoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: User_RoleUpdateManyWithWhereWithoutRoleInput | User_RoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: User_RoleScalarWhereInput | User_RoleScalarWhereInput[]
  }

  export type Role_DetailUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Role_DetailCreateWithoutRoleInput, Role_DetailUncheckedCreateWithoutRoleInput> | Role_DetailCreateWithoutRoleInput[] | Role_DetailUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Role_DetailCreateOrConnectWithoutRoleInput | Role_DetailCreateOrConnectWithoutRoleInput[]
    upsert?: Role_DetailUpsertWithWhereUniqueWithoutRoleInput | Role_DetailUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: Role_DetailCreateManyRoleInputEnvelope
    set?: Role_DetailWhereUniqueInput | Role_DetailWhereUniqueInput[]
    disconnect?: Role_DetailWhereUniqueInput | Role_DetailWhereUniqueInput[]
    delete?: Role_DetailWhereUniqueInput | Role_DetailWhereUniqueInput[]
    connect?: Role_DetailWhereUniqueInput | Role_DetailWhereUniqueInput[]
    update?: Role_DetailUpdateWithWhereUniqueWithoutRoleInput | Role_DetailUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: Role_DetailUpdateManyWithWhereWithoutRoleInput | Role_DetailUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: Role_DetailScalarWhereInput | Role_DetailScalarWhereInput[]
  }

  export type User_RoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<User_RoleCreateWithoutRoleInput, User_RoleUncheckedCreateWithoutRoleInput> | User_RoleCreateWithoutRoleInput[] | User_RoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: User_RoleCreateOrConnectWithoutRoleInput | User_RoleCreateOrConnectWithoutRoleInput[]
    upsert?: User_RoleUpsertWithWhereUniqueWithoutRoleInput | User_RoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: User_RoleCreateManyRoleInputEnvelope
    set?: User_RoleWhereUniqueInput | User_RoleWhereUniqueInput[]
    disconnect?: User_RoleWhereUniqueInput | User_RoleWhereUniqueInput[]
    delete?: User_RoleWhereUniqueInput | User_RoleWhereUniqueInput[]
    connect?: User_RoleWhereUniqueInput | User_RoleWhereUniqueInput[]
    update?: User_RoleUpdateWithWhereUniqueWithoutRoleInput | User_RoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: User_RoleUpdateManyWithWhereWithoutRoleInput | User_RoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: User_RoleScalarWhereInput | User_RoleScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutRole_DetailInput = {
    create?: XOR<RoleCreateWithoutRole_DetailInput, RoleUncheckedCreateWithoutRole_DetailInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRole_DetailInput
    connect?: RoleWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRole_DetailNestedInput = {
    create?: XOR<RoleCreateWithoutRole_DetailInput, RoleUncheckedCreateWithoutRole_DetailInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRole_DetailInput
    upsert?: RoleUpsertWithoutRole_DetailInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRole_DetailInput, RoleUpdateWithoutRole_DetailInput>, RoleUncheckedUpdateWithoutRole_DetailInput>
  }

  export type User_ActivityCreateNestedOneWithoutOther_User_ActivityInput = {
    create?: XOR<User_ActivityCreateWithoutOther_User_ActivityInput, User_ActivityUncheckedCreateWithoutOther_User_ActivityInput>
    connectOrCreate?: User_ActivityCreateOrConnectWithoutOther_User_ActivityInput
    connect?: User_ActivityWhereUniqueInput
  }

  export type User_ActivityCreateNestedOneWithoutUser_ActivityInput = {
    create?: XOR<User_ActivityCreateWithoutUser_ActivityInput, User_ActivityUncheckedCreateWithoutUser_ActivityInput>
    connectOrCreate?: User_ActivityCreateOrConnectWithoutUser_ActivityInput
    connect?: User_ActivityWhereUniqueInput
  }

  export type User_ActivityUncheckedCreateNestedOneWithoutUser_ActivityInput = {
    create?: XOR<User_ActivityCreateWithoutUser_ActivityInput, User_ActivityUncheckedCreateWithoutUser_ActivityInput>
    connectOrCreate?: User_ActivityCreateOrConnectWithoutUser_ActivityInput
    connect?: User_ActivityWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type User_ActivityUpdateOneRequiredWithoutOther_User_ActivityNestedInput = {
    create?: XOR<User_ActivityCreateWithoutOther_User_ActivityInput, User_ActivityUncheckedCreateWithoutOther_User_ActivityInput>
    connectOrCreate?: User_ActivityCreateOrConnectWithoutOther_User_ActivityInput
    upsert?: User_ActivityUpsertWithoutOther_User_ActivityInput
    connect?: User_ActivityWhereUniqueInput
    update?: XOR<XOR<User_ActivityUpdateToOneWithWhereWithoutOther_User_ActivityInput, User_ActivityUpdateWithoutOther_User_ActivityInput>, User_ActivityUncheckedUpdateWithoutOther_User_ActivityInput>
  }

  export type User_ActivityUpdateOneWithoutUser_ActivityNestedInput = {
    create?: XOR<User_ActivityCreateWithoutUser_ActivityInput, User_ActivityUncheckedCreateWithoutUser_ActivityInput>
    connectOrCreate?: User_ActivityCreateOrConnectWithoutUser_ActivityInput
    upsert?: User_ActivityUpsertWithoutUser_ActivityInput
    disconnect?: User_ActivityWhereInput | boolean
    delete?: User_ActivityWhereInput | boolean
    connect?: User_ActivityWhereUniqueInput
    update?: XOR<XOR<User_ActivityUpdateToOneWithWhereWithoutUser_ActivityInput, User_ActivityUpdateWithoutUser_ActivityInput>, User_ActivityUncheckedUpdateWithoutUser_ActivityInput>
  }

  export type User_ActivityUncheckedUpdateOneWithoutUser_ActivityNestedInput = {
    create?: XOR<User_ActivityCreateWithoutUser_ActivityInput, User_ActivityUncheckedCreateWithoutUser_ActivityInput>
    connectOrCreate?: User_ActivityCreateOrConnectWithoutUser_ActivityInput
    upsert?: User_ActivityUpsertWithoutUser_ActivityInput
    disconnect?: User_ActivityWhereInput | boolean
    delete?: User_ActivityWhereInput | boolean
    connect?: User_ActivityWhereUniqueInput
    update?: XOR<XOR<User_ActivityUpdateToOneWithWhereWithoutUser_ActivityInput, User_ActivityUpdateWithoutUser_ActivityInput>, User_ActivityUncheckedUpdateWithoutUser_ActivityInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type RoleCreateNestedOneWithoutUser_RoleInput = {
    create?: XOR<RoleCreateWithoutUser_RoleInput, RoleUncheckedCreateWithoutUser_RoleInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUser_RoleInput
    connect?: RoleWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutUser_RoleNestedInput = {
    create?: XOR<RoleCreateWithoutUser_RoleInput, RoleUncheckedCreateWithoutUser_RoleInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUser_RoleInput
    upsert?: RoleUpsertWithoutUser_RoleInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUser_RoleInput, RoleUpdateWithoutUser_RoleInput>, RoleUncheckedUpdateWithoutUser_RoleInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Role_DetailCreateWithoutRoleInput = {
    Id?: bigint | number
    ControllerName?: string | null
    ActionName?: string | null
    Roles?: string | null
    Url?: string | null
  }

  export type Role_DetailUncheckedCreateWithoutRoleInput = {
    Id?: bigint | number
    ControllerName?: string | null
    ActionName?: string | null
    Roles?: string | null
    Url?: string | null
  }

  export type Role_DetailCreateOrConnectWithoutRoleInput = {
    where: Role_DetailWhereUniqueInput
    create: XOR<Role_DetailCreateWithoutRoleInput, Role_DetailUncheckedCreateWithoutRoleInput>
  }

  export type Role_DetailCreateManyRoleInputEnvelope = {
    data: Role_DetailCreateManyRoleInput | Role_DetailCreateManyRoleInput[]
  }

  export type User_RoleCreateWithoutRoleInput = {
    Id?: bigint | number
    Username?: string | null
    Role_Crewing_Id?: bigint | number | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
  }

  export type User_RoleUncheckedCreateWithoutRoleInput = {
    Id?: bigint | number
    Username?: string | null
    Role_Crewing_Id?: bigint | number | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
  }

  export type User_RoleCreateOrConnectWithoutRoleInput = {
    where: User_RoleWhereUniqueInput
    create: XOR<User_RoleCreateWithoutRoleInput, User_RoleUncheckedCreateWithoutRoleInput>
  }

  export type User_RoleCreateManyRoleInputEnvelope = {
    data: User_RoleCreateManyRoleInput | User_RoleCreateManyRoleInput[]
  }

  export type Role_DetailUpsertWithWhereUniqueWithoutRoleInput = {
    where: Role_DetailWhereUniqueInput
    update: XOR<Role_DetailUpdateWithoutRoleInput, Role_DetailUncheckedUpdateWithoutRoleInput>
    create: XOR<Role_DetailCreateWithoutRoleInput, Role_DetailUncheckedCreateWithoutRoleInput>
  }

  export type Role_DetailUpdateWithWhereUniqueWithoutRoleInput = {
    where: Role_DetailWhereUniqueInput
    data: XOR<Role_DetailUpdateWithoutRoleInput, Role_DetailUncheckedUpdateWithoutRoleInput>
  }

  export type Role_DetailUpdateManyWithWhereWithoutRoleInput = {
    where: Role_DetailScalarWhereInput
    data: XOR<Role_DetailUpdateManyMutationInput, Role_DetailUncheckedUpdateManyWithoutRoleInput>
  }

  export type Role_DetailScalarWhereInput = {
    AND?: Role_DetailScalarWhereInput | Role_DetailScalarWhereInput[]
    OR?: Role_DetailScalarWhereInput[]
    NOT?: Role_DetailScalarWhereInput | Role_DetailScalarWhereInput[]
    Id?: BigIntFilter<"Role_Detail"> | bigint | number
    Role_Id?: BigIntFilter<"Role_Detail"> | bigint | number
    ControllerName?: StringNullableFilter<"Role_Detail"> | string | null
    ActionName?: StringNullableFilter<"Role_Detail"> | string | null
    Roles?: StringNullableFilter<"Role_Detail"> | string | null
    Url?: StringNullableFilter<"Role_Detail"> | string | null
  }

  export type User_RoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: User_RoleWhereUniqueInput
    update: XOR<User_RoleUpdateWithoutRoleInput, User_RoleUncheckedUpdateWithoutRoleInput>
    create: XOR<User_RoleCreateWithoutRoleInput, User_RoleUncheckedCreateWithoutRoleInput>
  }

  export type User_RoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: User_RoleWhereUniqueInput
    data: XOR<User_RoleUpdateWithoutRoleInput, User_RoleUncheckedUpdateWithoutRoleInput>
  }

  export type User_RoleUpdateManyWithWhereWithoutRoleInput = {
    where: User_RoleScalarWhereInput
    data: XOR<User_RoleUpdateManyMutationInput, User_RoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type User_RoleScalarWhereInput = {
    AND?: User_RoleScalarWhereInput | User_RoleScalarWhereInput[]
    OR?: User_RoleScalarWhereInput[]
    NOT?: User_RoleScalarWhereInput | User_RoleScalarWhereInput[]
    Id?: BigIntFilter<"User_Role"> | bigint | number
    Username?: StringNullableFilter<"User_Role"> | string | null
    Role_Id?: BigIntFilter<"User_Role"> | bigint | number
    Role_Crewing_Id?: BigIntNullableFilter<"User_Role"> | bigint | number | null
    Created_At?: DateTimeNullableFilter<"User_Role"> | Date | string | null
    Created_By?: StringNullableFilter<"User_Role"> | string | null
    Updated_At?: DateTimeNullableFilter<"User_Role"> | Date | string | null
    Updated_By?: StringNullableFilter<"User_Role"> | string | null
    Deleted?: BoolFilter<"User_Role"> | boolean
    Deleted_At?: DateTimeNullableFilter<"User_Role"> | Date | string | null
    Deleted_By?: StringNullableFilter<"User_Role"> | string | null
  }

  export type RoleCreateWithoutRole_DetailInput = {
    Id?: bigint | number
    Role_Code?: string | null
    Role_Name?: string | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
    User_Role?: User_RoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRole_DetailInput = {
    Id?: bigint | number
    Role_Code?: string | null
    Role_Name?: string | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
    User_Role?: User_RoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRole_DetailInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRole_DetailInput, RoleUncheckedCreateWithoutRole_DetailInput>
  }

  export type RoleUpsertWithoutRole_DetailInput = {
    update: XOR<RoleUpdateWithoutRole_DetailInput, RoleUncheckedUpdateWithoutRole_DetailInput>
    create: XOR<RoleCreateWithoutRole_DetailInput, RoleUncheckedCreateWithoutRole_DetailInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRole_DetailInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRole_DetailInput, RoleUncheckedUpdateWithoutRole_DetailInput>
  }

  export type RoleUpdateWithoutRole_DetailInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
    User_Role?: User_RoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRole_DetailInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
    User_Role?: User_RoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type User_ActivityCreateWithoutOther_User_ActivityInput = {
    Username?: string | null
    ControllerName?: string | null
    ActionName?: string | null
    Activity?: string | null
    IP_Address?: string | null
    Created_Date: Date | string
    User_Activity?: User_ActivityCreateNestedOneWithoutOther_User_ActivityInput
  }

  export type User_ActivityUncheckedCreateWithoutOther_User_ActivityInput = {
    Id?: bigint | number
    Username?: string | null
    ControllerName?: string | null
    ActionName?: string | null
    Activity?: string | null
    IP_Address?: string | null
    Created_Date: Date | string
  }

  export type User_ActivityCreateOrConnectWithoutOther_User_ActivityInput = {
    where: User_ActivityWhereUniqueInput
    create: XOR<User_ActivityCreateWithoutOther_User_ActivityInput, User_ActivityUncheckedCreateWithoutOther_User_ActivityInput>
  }

  export type User_ActivityCreateWithoutUser_ActivityInput = {
    Username?: string | null
    ControllerName?: string | null
    ActionName?: string | null
    Activity?: string | null
    IP_Address?: string | null
    Created_Date: Date | string
    other_User_Activity?: User_ActivityCreateNestedOneWithoutUser_ActivityInput
  }

  export type User_ActivityUncheckedCreateWithoutUser_ActivityInput = {
    Username?: string | null
    ControllerName?: string | null
    ActionName?: string | null
    Activity?: string | null
    IP_Address?: string | null
    Created_Date: Date | string
    other_User_Activity?: User_ActivityUncheckedCreateNestedOneWithoutUser_ActivityInput
  }

  export type User_ActivityCreateOrConnectWithoutUser_ActivityInput = {
    where: User_ActivityWhereUniqueInput
    create: XOR<User_ActivityCreateWithoutUser_ActivityInput, User_ActivityUncheckedCreateWithoutUser_ActivityInput>
  }

  export type User_ActivityUpsertWithoutOther_User_ActivityInput = {
    update: XOR<User_ActivityUpdateWithoutOther_User_ActivityInput, User_ActivityUncheckedUpdateWithoutOther_User_ActivityInput>
    create: XOR<User_ActivityCreateWithoutOther_User_ActivityInput, User_ActivityUncheckedCreateWithoutOther_User_ActivityInput>
    where?: User_ActivityWhereInput
  }

  export type User_ActivityUpdateToOneWithWhereWithoutOther_User_ActivityInput = {
    where?: User_ActivityWhereInput
    data: XOR<User_ActivityUpdateWithoutOther_User_ActivityInput, User_ActivityUncheckedUpdateWithoutOther_User_ActivityInput>
  }

  export type User_ActivityUpdateWithoutOther_User_ActivityInput = {
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Activity?: NullableStringFieldUpdateOperationsInput | string | null
    IP_Address?: NullableStringFieldUpdateOperationsInput | string | null
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    User_Activity?: User_ActivityUpdateOneRequiredWithoutOther_User_ActivityNestedInput
  }

  export type User_ActivityUncheckedUpdateWithoutOther_User_ActivityInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Activity?: NullableStringFieldUpdateOperationsInput | string | null
    IP_Address?: NullableStringFieldUpdateOperationsInput | string | null
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_ActivityUpsertWithoutUser_ActivityInput = {
    update: XOR<User_ActivityUpdateWithoutUser_ActivityInput, User_ActivityUncheckedUpdateWithoutUser_ActivityInput>
    create: XOR<User_ActivityCreateWithoutUser_ActivityInput, User_ActivityUncheckedCreateWithoutUser_ActivityInput>
    where?: User_ActivityWhereInput
  }

  export type User_ActivityUpdateToOneWithWhereWithoutUser_ActivityInput = {
    where?: User_ActivityWhereInput
    data: XOR<User_ActivityUpdateWithoutUser_ActivityInput, User_ActivityUncheckedUpdateWithoutUser_ActivityInput>
  }

  export type User_ActivityUpdateWithoutUser_ActivityInput = {
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Activity?: NullableStringFieldUpdateOperationsInput | string | null
    IP_Address?: NullableStringFieldUpdateOperationsInput | string | null
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    other_User_Activity?: User_ActivityUpdateOneWithoutUser_ActivityNestedInput
  }

  export type User_ActivityUncheckedUpdateWithoutUser_ActivityInput = {
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Activity?: NullableStringFieldUpdateOperationsInput | string | null
    IP_Address?: NullableStringFieldUpdateOperationsInput | string | null
    Created_Date?: DateTimeFieldUpdateOperationsInput | Date | string
    other_User_Activity?: User_ActivityUncheckedUpdateOneWithoutUser_ActivityNestedInput
  }

  export type RoleCreateWithoutUser_RoleInput = {
    Id?: bigint | number
    Role_Code?: string | null
    Role_Name?: string | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
    Role_Detail?: Role_DetailCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUser_RoleInput = {
    Id?: bigint | number
    Role_Code?: string | null
    Role_Name?: string | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
    Role_Detail?: Role_DetailUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUser_RoleInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUser_RoleInput, RoleUncheckedCreateWithoutUser_RoleInput>
  }

  export type RoleUpsertWithoutUser_RoleInput = {
    update: XOR<RoleUpdateWithoutUser_RoleInput, RoleUncheckedUpdateWithoutUser_RoleInput>
    create: XOR<RoleCreateWithoutUser_RoleInput, RoleUncheckedCreateWithoutUser_RoleInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUser_RoleInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUser_RoleInput, RoleUncheckedUpdateWithoutUser_RoleInput>
  }

  export type RoleUpdateWithoutUser_RoleInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Detail?: Role_DetailUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUser_RoleInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Role_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Detail?: Role_DetailUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type Role_DetailCreateManyRoleInput = {
    ControllerName?: string | null
    ActionName?: string | null
    Roles?: string | null
    Url?: string | null
  }

  export type User_RoleCreateManyRoleInput = {
    Username?: string | null
    Role_Crewing_Id?: bigint | number | null
    Created_At?: Date | string | null
    Created_By?: string | null
    Updated_At?: Date | string | null
    Updated_By?: string | null
    Deleted?: boolean
    Deleted_At?: Date | string | null
    Deleted_By?: string | null
  }

  export type Role_DetailUpdateWithoutRoleInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Roles?: NullableStringFieldUpdateOperationsInput | string | null
    Url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Role_DetailUncheckedUpdateWithoutRoleInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Roles?: NullableStringFieldUpdateOperationsInput | string | null
    Url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Role_DetailUncheckedUpdateManyWithoutRoleInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    ControllerName?: NullableStringFieldUpdateOperationsInput | string | null
    ActionName?: NullableStringFieldUpdateOperationsInput | string | null
    Roles?: NullableStringFieldUpdateOperationsInput | string | null
    Url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_RoleUpdateWithoutRoleInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Crewing_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_RoleUncheckedUpdateWithoutRoleInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Crewing_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_RoleUncheckedUpdateManyWithoutRoleInput = {
    Id?: BigIntFieldUpdateOperationsInput | bigint | number
    Username?: NullableStringFieldUpdateOperationsInput | string | null
    Role_Crewing_Id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Created_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Created_By?: NullableStringFieldUpdateOperationsInput | string | null
    Updated_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Updated_By?: NullableStringFieldUpdateOperationsInput | string | null
    Deleted?: BoolFieldUpdateOperationsInput | boolean
    Deleted_At?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Deleted_By?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Notification_CCDefaultArgs instead
     */
    export type Notification_CCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Notification_CCDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Pending_ApprovalsDefaultArgs instead
     */
    export type Pending_ApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Pending_ApprovalsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Pending_DocumentDefaultArgs instead
     */
    export type Pending_DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Pending_DocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Release_MatrixDefaultArgs instead
     */
    export type Release_MatrixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Release_MatrixDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Release_Matrix_CCDefaultArgs instead
     */
    export type Release_Matrix_CCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Release_Matrix_CCDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReportsDefaultArgs instead
     */
    export type ReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReportsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Role_DetailDefaultArgs instead
     */
    export type Role_DetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Role_DetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use User_ActivityDefaultArgs instead
     */
    export type User_ActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = User_ActivityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use User_ComLocDefaultArgs instead
     */
    export type User_ComLocArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = User_ComLocDefaultArgs<ExtArgs>
    /**
     * @deprecated Use User_LoginDefaultArgs instead
     */
    export type User_LoginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = User_LoginDefaultArgs<ExtArgs>
    /**
     * @deprecated Use User_RoleDefaultArgs instead
     */
    export type User_RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = User_RoleDefaultArgs<ExtArgs>

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