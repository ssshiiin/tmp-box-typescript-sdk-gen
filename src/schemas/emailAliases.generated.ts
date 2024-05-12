import { serializeEmailAlias } from './emailAlias.generated.js';
import { deserializeEmailAlias } from './emailAlias.generated.js';
import { EmailAlias } from './emailAlias.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface EmailAliases {
  readonly totalCount?: number;
  readonly entries?: readonly EmailAlias[];
}
export function serializeEmailAliases(val: EmailAliases): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: EmailAlias): SerializedData {
            return serializeEmailAlias(item);
          }) as readonly any[]),
  };
}
export function deserializeEmailAliases(val: any): EmailAliases {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const entries: undefined | readonly EmailAlias[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): EmailAlias {
          return deserializeEmailAlias(itm);
        }) as readonly any[])
      : [];
  return { totalCount: totalCount, entries: entries } satisfies EmailAliases;
}
