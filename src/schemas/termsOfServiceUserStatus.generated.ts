import { serializeTermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { deserializeTermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { TermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type TermsOfServiceUserStatusTypeField = 'terms_of_service_user_status';
export class TermsOfServiceUserStatus {
  readonly id!: string;
  readonly type: TermsOfServiceUserStatusTypeField =
    'terms_of_service_user_status' as TermsOfServiceUserStatusTypeField;
  readonly tos?: TermsOfServiceBase;
  readonly user?: UserMini;
  readonly isAccepted?: boolean;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  constructor(
    fields: Omit<TermsOfServiceUserStatus, 'type'> &
      Partial<Pick<TermsOfServiceUserStatus, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.tos) {
      this.tos = fields.tos;
    }
    if (fields.user) {
      this.user = fields.user;
    }
    if (fields.isAccepted) {
      this.isAccepted = fields.isAccepted;
    }
    if (fields.createdAt) {
      this.createdAt = fields.createdAt;
    }
    if (fields.modifiedAt) {
      this.modifiedAt = fields.modifiedAt;
    }
  }
}
export interface TermsOfServiceUserStatusInput {
  readonly id: string;
  readonly type?: TermsOfServiceUserStatusTypeField;
  readonly tos?: TermsOfServiceBase;
  readonly user?: UserMini;
  readonly isAccepted?: boolean;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
}
export function serializeTermsOfServiceUserStatusTypeField(
  val: TermsOfServiceUserStatusTypeField
): SerializedData {
  return val;
}
export function deserializeTermsOfServiceUserStatusTypeField(
  val: any
): TermsOfServiceUserStatusTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TermsOfServiceUserStatusTypeField"',
    });
  }
  if (val == 'terms_of_service_user_status') {
    return 'terms_of_service_user_status';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTermsOfServiceUserStatus(
  val: TermsOfServiceUserStatus
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeTermsOfServiceUserStatusTypeField(val.type),
    ['tos']: val.tos == void 0 ? void 0 : serializeTermsOfServiceBase(val.tos),
    ['user']: val.user == void 0 ? void 0 : serializeUserMini(val.user),
    ['is_accepted']: val.isAccepted == void 0 ? void 0 : val.isAccepted,
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
  };
}
export function deserializeTermsOfServiceUserStatus(
  val: any
): TermsOfServiceUserStatus {
  const id: string = val.id;
  const type: TermsOfServiceUserStatusTypeField =
    deserializeTermsOfServiceUserStatusTypeField(val.type);
  const tos: undefined | TermsOfServiceBase =
    val.tos == void 0 ? void 0 : deserializeTermsOfServiceBase(val.tos);
  const user: undefined | UserMini =
    val.user == void 0 ? void 0 : deserializeUserMini(val.user);
  const isAccepted: undefined | boolean =
    val.is_accepted == void 0 ? void 0 : val.is_accepted;
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  return {
    id: id,
    type: type,
    tos: tos,
    user: user,
    isAccepted: isAccepted,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies TermsOfServiceUserStatus;
}
export function serializeTermsOfServiceUserStatusInput(
  val: TermsOfServiceUserStatusInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTermsOfServiceUserStatusTypeField(val.type),
    ['tos']: val.tos == void 0 ? void 0 : serializeTermsOfServiceBase(val.tos),
    ['user']: val.user == void 0 ? void 0 : serializeUserMini(val.user),
    ['is_accepted']: val.isAccepted == void 0 ? void 0 : val.isAccepted,
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
  };
}
export function deserializeTermsOfServiceUserStatusInput(
  val: any
): TermsOfServiceUserStatusInput {
  const id: string = val.id;
  const type: undefined | TermsOfServiceUserStatusTypeField =
    val.type == void 0
      ? void 0
      : deserializeTermsOfServiceUserStatusTypeField(val.type);
  const tos: undefined | TermsOfServiceBase =
    val.tos == void 0 ? void 0 : deserializeTermsOfServiceBase(val.tos);
  const user: undefined | UserMini =
    val.user == void 0 ? void 0 : deserializeUserMini(val.user);
  const isAccepted: undefined | boolean =
    val.is_accepted == void 0 ? void 0 : val.is_accepted;
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  return {
    id: id,
    type: type,
    tos: tos,
    user: user,
    isAccepted: isAccepted,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies TermsOfServiceUserStatusInput;
}
