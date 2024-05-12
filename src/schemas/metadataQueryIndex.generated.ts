import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type MetadataQueryIndexStatusField = 'building' | 'active' | 'disabled';
export type MetadataQueryIndexFieldsSortDirectionField = 'asc' | 'desc';
export interface MetadataQueryIndexFieldsField {
  readonly key?: string;
  readonly sortDirection?: MetadataQueryIndexFieldsSortDirectionField;
}
export interface MetadataQueryIndex {
  readonly id?: string;
  readonly type: string;
  readonly status: MetadataQueryIndexStatusField;
  readonly fields?: readonly MetadataQueryIndexFieldsField[];
}
export function serializeMetadataQueryIndexStatusField(
  val: MetadataQueryIndexStatusField
): SerializedData {
  return val;
}
export function deserializeMetadataQueryIndexStatusField(
  val: any
): MetadataQueryIndexStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "MetadataQueryIndexStatusField"',
    });
  }
  if (val == 'building') {
    return 'building';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeMetadataQueryIndexFieldsSortDirectionField(
  val: MetadataQueryIndexFieldsSortDirectionField
): SerializedData {
  return val;
}
export function deserializeMetadataQueryIndexFieldsSortDirectionField(
  val: any
): MetadataQueryIndexFieldsSortDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "MetadataQueryIndexFieldsSortDirectionField"',
    });
  }
  if (val == 'asc') {
    return 'asc';
  }
  if (val == 'desc') {
    return 'desc';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeMetadataQueryIndexFieldsField(
  val: MetadataQueryIndexFieldsField
): SerializedData {
  return {
    ['key']: val.key == void 0 ? void 0 : val.key,
    ['sort_direction']:
      val.sortDirection == void 0
        ? void 0
        : serializeMetadataQueryIndexFieldsSortDirectionField(
            val.sortDirection
          ),
  };
}
export function deserializeMetadataQueryIndexFieldsField(
  val: any
): MetadataQueryIndexFieldsField {
  const key: undefined | string = val.key == void 0 ? void 0 : val.key;
  const sortDirection: undefined | MetadataQueryIndexFieldsSortDirectionField =
    val.sort_direction == void 0
      ? void 0
      : deserializeMetadataQueryIndexFieldsSortDirectionField(
          val.sort_direction
        );
  return {
    key: key,
    sortDirection: sortDirection,
  } satisfies MetadataQueryIndexFieldsField;
}
export function serializeMetadataQueryIndex(
  val: MetadataQueryIndex
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type,
    ['status']: serializeMetadataQueryIndexStatusField(val.status),
    ['fields']:
      val.fields == void 0
        ? void 0
        : (val.fields.map(function (
            item: MetadataQueryIndexFieldsField
          ): SerializedData {
            return serializeMetadataQueryIndexFieldsField(item);
          }) as readonly any[]),
  };
}
export function deserializeMetadataQueryIndex(val: any): MetadataQueryIndex {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: string = val.type;
  const status: MetadataQueryIndexStatusField =
    deserializeMetadataQueryIndexStatusField(val.status);
  const fields: undefined | readonly MetadataQueryIndexFieldsField[] =
    val.fields == void 0
      ? void 0
      : sdIsList(val.fields)
      ? (val.fields.map(function (
          itm: SerializedData
        ): MetadataQueryIndexFieldsField {
          return deserializeMetadataQueryIndexFieldsField(itm);
        }) as readonly any[])
      : [];
  return {
    id: id,
    type: type,
    status: status,
    fields: fields,
  } satisfies MetadataQueryIndex;
}
