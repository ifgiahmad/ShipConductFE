
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.Notification_CCScalarFieldEnum = {
  Id: 'Id',
  EmailTo: 'EmailTo',
  EmailCC: 'EmailCC'
};

exports.Prisma.Pending_ApprovalsScalarFieldEnum = {
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

exports.Prisma.Pending_DocumentScalarFieldEnum = {
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

exports.Prisma.Release_MatrixScalarFieldEnum = {
  Id: 'Id',
  CompanyId: 'CompanyId',
  ComLocId: 'ComLocId',
  Document_Type: 'Document_Type',
  Approver: 'Approver',
  Approval_Level: 'Approval_Level',
  OrganizationCode: 'OrganizationCode',
  Approver_Title: 'Approver_Title'
};

exports.Prisma.Release_Matrix_CCScalarFieldEnum = {
  Id: 'Id',
  OrganizationCode: 'OrganizationCode',
  DocumentType: 'DocumentType',
  Email: 'Email',
  Name: 'Name'
};

exports.Prisma.ReportsScalarFieldEnum = {
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

exports.Prisma.RoleScalarFieldEnum = {
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

exports.Prisma.Role_DetailScalarFieldEnum = {
  Id: 'Id',
  Role_Id: 'Role_Id',
  ControllerName: 'ControllerName',
  ActionName: 'ActionName',
  Roles: 'Roles',
  Url: 'Url'
};

exports.Prisma.User_ActivityScalarFieldEnum = {
  Id: 'Id',
  Username: 'Username',
  ControllerName: 'ControllerName',
  ActionName: 'ActionName',
  Activity: 'Activity',
  IP_Address: 'IP_Address',
  Created_Date: 'Created_Date'
};

exports.Prisma.User_ComLocScalarFieldEnum = {
  Id: 'Id',
  Username: 'Username',
  ComLocID: 'ComLocID',
  Created_At: 'Created_At',
  Created_By: 'Created_By',
  Updated_At: 'Updated_At',
  Updated_By: 'Updated_By'
};

exports.Prisma.User_LoginScalarFieldEnum = {
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

exports.Prisma.User_RoleScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
