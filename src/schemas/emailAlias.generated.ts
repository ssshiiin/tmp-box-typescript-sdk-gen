import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type EmailAliasTypeField = 'email_alias';
export interface EmailAlias {
  readonly id?: string;
  readonly type?: EmailAliasTypeField;
  readonly email?: string;
  readonly isConfirmed?: boolean;
}
export function serializeEmailAliasTypeField(
  val: EmailAliasTypeField
): SerializedData {
  return val;
}
export function deserializeEmailAliasTypeField(val: any): EmailAliasTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "EmailAliasTypeField"',
    });
  }
  if (val == 'email_alias') {
    return 'email_alias';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeEmailAlias(val: EmailAlias): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeEmailAliasTypeField(val.type),
    ['email']: val.email == void 0 ? void 0 : val.email,
    ['is_confirmed']: val.isConfirmed == void 0 ? void 0 : val.isConfirmed,
  };
}
export function deserializeEmailAlias(val: any): EmailAlias {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | EmailAliasTypeField =
    val.type == void 0 ? void 0 : deserializeEmailAliasTypeField(val.type);
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  const isConfirmed: undefined | boolean =
    val.is_confirmed == void 0 ? void 0 : val.is_confirmed;
  return {
    id: id,
    type: type,
    email: email,
    isConfirmed: isConfirmed,
  } satisfies EmailAlias;
}
