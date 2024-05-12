import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type TermsOfServiceBaseTypeField = 'terms_of_service';
export class TermsOfServiceBase {
  readonly id!: string;
  readonly type: TermsOfServiceBaseTypeField =
    'terms_of_service' as TermsOfServiceBaseTypeField;
  constructor(
    fields: Omit<TermsOfServiceBase, 'type'> &
      Partial<Pick<TermsOfServiceBase, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
  }
}
export interface TermsOfServiceBaseInput {
  readonly id: string;
  readonly type?: TermsOfServiceBaseTypeField;
}
export function serializeTermsOfServiceBaseTypeField(
  val: TermsOfServiceBaseTypeField
): SerializedData {
  return val;
}
export function deserializeTermsOfServiceBaseTypeField(
  val: any
): TermsOfServiceBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TermsOfServiceBaseTypeField"',
    });
  }
  if (val == 'terms_of_service') {
    return 'terms_of_service';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTermsOfServiceBase(
  val: TermsOfServiceBase
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeTermsOfServiceBaseTypeField(val.type),
  };
}
export function deserializeTermsOfServiceBase(val: any): TermsOfServiceBase {
  const id: string = val.id;
  const type: TermsOfServiceBaseTypeField =
    deserializeTermsOfServiceBaseTypeField(val.type);
  return { id: id, type: type } satisfies TermsOfServiceBase;
}
export function serializeTermsOfServiceBaseInput(
  val: TermsOfServiceBaseInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTermsOfServiceBaseTypeField(val.type),
  };
}
export function deserializeTermsOfServiceBaseInput(
  val: any
): TermsOfServiceBaseInput {
  const id: string = val.id;
  const type: undefined | TermsOfServiceBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeTermsOfServiceBaseTypeField(val.type);
  return { id: id, type: type } satisfies TermsOfServiceBaseInput;
}
