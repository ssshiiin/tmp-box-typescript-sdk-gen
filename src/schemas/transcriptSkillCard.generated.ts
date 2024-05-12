import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type TranscriptSkillCardTypeField = 'skill_card';
export type TranscriptSkillCardSkillCardTypeField = 'transcript';
export interface TranscriptSkillCardSkillCardTitleField {
  readonly code?: string;
  readonly message: string;
}
export type TranscriptSkillCardSkillTypeField = 'service';
export class TranscriptSkillCardSkillField {
  readonly type: TranscriptSkillCardSkillTypeField =
    'service' as TranscriptSkillCardSkillTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<TranscriptSkillCardSkillField, 'type'> &
      Partial<Pick<TranscriptSkillCardSkillField, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface TranscriptSkillCardSkillFieldInput {
  readonly type?: TranscriptSkillCardSkillTypeField;
  readonly id: string;
}
export type TranscriptSkillCardInvocationTypeField = 'skill_invocation';
export class TranscriptSkillCardInvocationField {
  readonly type: TranscriptSkillCardInvocationTypeField =
    'skill_invocation' as TranscriptSkillCardInvocationTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<TranscriptSkillCardInvocationField, 'type'> &
      Partial<Pick<TranscriptSkillCardInvocationField, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface TranscriptSkillCardInvocationFieldInput {
  readonly type?: TranscriptSkillCardInvocationTypeField;
  readonly id: string;
}
export interface TranscriptSkillCardEntriesAppearsField {
  readonly start?: number;
}
export interface TranscriptSkillCardEntriesField {
  readonly text?: string;
  readonly appears?: readonly TranscriptSkillCardEntriesAppearsField[];
}
export class TranscriptSkillCard {
  readonly createdAt?: DateTime;
  readonly type: TranscriptSkillCardTypeField =
    'skill_card' as TranscriptSkillCardTypeField;
  readonly skillCardType: TranscriptSkillCardSkillCardTypeField =
    'transcript' as TranscriptSkillCardSkillCardTypeField;
  readonly skillCardTitle?: TranscriptSkillCardSkillCardTitleField;
  readonly skill!: TranscriptSkillCardSkillField;
  readonly invocation!: TranscriptSkillCardInvocationField;
  readonly duration?: number;
  readonly entries!: readonly TranscriptSkillCardEntriesField[];
  constructor(
    fields: Omit<TranscriptSkillCard, 'type' | 'skillCardType'> &
      Partial<Pick<TranscriptSkillCard, 'type' | 'skillCardType'>>
  ) {
    if (fields.createdAt) {
      this.createdAt = fields.createdAt;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.skillCardType) {
      this.skillCardType = fields.skillCardType;
    }
    if (fields.skillCardTitle) {
      this.skillCardTitle = fields.skillCardTitle;
    }
    if (fields.skill) {
      this.skill = fields.skill;
    }
    if (fields.invocation) {
      this.invocation = fields.invocation;
    }
    if (fields.duration) {
      this.duration = fields.duration;
    }
    if (fields.entries) {
      this.entries = fields.entries;
    }
  }
}
export interface TranscriptSkillCardInput {
  readonly createdAt?: DateTime;
  readonly type?: TranscriptSkillCardTypeField;
  readonly skillCardType?: TranscriptSkillCardSkillCardTypeField;
  readonly skillCardTitle?: TranscriptSkillCardSkillCardTitleField;
  readonly skill: TranscriptSkillCardSkillField;
  readonly invocation: TranscriptSkillCardInvocationField;
  readonly duration?: number;
  readonly entries: readonly TranscriptSkillCardEntriesField[];
}
export function serializeTranscriptSkillCardTypeField(
  val: TranscriptSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeTranscriptSkillCardTypeField(
  val: any
): TranscriptSkillCardTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TranscriptSkillCardTypeField"',
    });
  }
  if (val == 'skill_card') {
    return 'skill_card';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTranscriptSkillCardSkillCardTypeField(
  val: TranscriptSkillCardSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeTranscriptSkillCardSkillCardTypeField(
  val: any
): TranscriptSkillCardSkillCardTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TranscriptSkillCardSkillCardTypeField"',
    });
  }
  if (val == 'transcript') {
    return 'transcript';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTranscriptSkillCardSkillCardTitleField(
  val: TranscriptSkillCardSkillCardTitleField
): SerializedData {
  return {
    ['code']: val.code == void 0 ? void 0 : val.code,
    ['message']: val.message,
  };
}
export function deserializeTranscriptSkillCardSkillCardTitleField(
  val: any
): TranscriptSkillCardSkillCardTitleField {
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  const message: string = val.message;
  return {
    code: code,
    message: message,
  } satisfies TranscriptSkillCardSkillCardTitleField;
}
export function serializeTranscriptSkillCardSkillTypeField(
  val: TranscriptSkillCardSkillTypeField
): SerializedData {
  return val;
}
export function deserializeTranscriptSkillCardSkillTypeField(
  val: any
): TranscriptSkillCardSkillTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TranscriptSkillCardSkillTypeField"',
    });
  }
  if (val == 'service') {
    return 'service';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTranscriptSkillCardSkillField(
  val: TranscriptSkillCardSkillField
): SerializedData {
  return {
    ['type']: serializeTranscriptSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTranscriptSkillCardSkillField(
  val: any
): TranscriptSkillCardSkillField {
  const type: TranscriptSkillCardSkillTypeField =
    deserializeTranscriptSkillCardSkillTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies TranscriptSkillCardSkillField;
}
export function serializeTranscriptSkillCardSkillFieldInput(
  val: TranscriptSkillCardSkillFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTranscriptSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTranscriptSkillCardSkillFieldInput(
  val: any
): TranscriptSkillCardSkillFieldInput {
  const type: undefined | TranscriptSkillCardSkillTypeField =
    val.type == void 0
      ? void 0
      : deserializeTranscriptSkillCardSkillTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies TranscriptSkillCardSkillFieldInput;
}
export function serializeTranscriptSkillCardInvocationTypeField(
  val: TranscriptSkillCardInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeTranscriptSkillCardInvocationTypeField(
  val: any
): TranscriptSkillCardInvocationTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "TranscriptSkillCardInvocationTypeField"',
    });
  }
  if (val == 'skill_invocation') {
    return 'skill_invocation';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTranscriptSkillCardInvocationField(
  val: TranscriptSkillCardInvocationField
): SerializedData {
  return {
    ['type']: serializeTranscriptSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTranscriptSkillCardInvocationField(
  val: any
): TranscriptSkillCardInvocationField {
  const type: TranscriptSkillCardInvocationTypeField =
    deserializeTranscriptSkillCardInvocationTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies TranscriptSkillCardInvocationField;
}
export function serializeTranscriptSkillCardInvocationFieldInput(
  val: TranscriptSkillCardInvocationFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTranscriptSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTranscriptSkillCardInvocationFieldInput(
  val: any
): TranscriptSkillCardInvocationFieldInput {
  const type: undefined | TranscriptSkillCardInvocationTypeField =
    val.type == void 0
      ? void 0
      : deserializeTranscriptSkillCardInvocationTypeField(val.type);
  const id: string = val.id;
  return {
    type: type,
    id: id,
  } satisfies TranscriptSkillCardInvocationFieldInput;
}
export function serializeTranscriptSkillCardEntriesAppearsField(
  val: TranscriptSkillCardEntriesAppearsField
): SerializedData {
  return { ['start']: val.start == void 0 ? void 0 : val.start };
}
export function deserializeTranscriptSkillCardEntriesAppearsField(
  val: any
): TranscriptSkillCardEntriesAppearsField {
  const start: undefined | number = val.start == void 0 ? void 0 : val.start;
  return { start: start } satisfies TranscriptSkillCardEntriesAppearsField;
}
export function serializeTranscriptSkillCardEntriesField(
  val: TranscriptSkillCardEntriesField
): SerializedData {
  return {
    ['text']: val.text == void 0 ? void 0 : val.text,
    ['appears']:
      val.appears == void 0
        ? void 0
        : (val.appears.map(function (
            item: TranscriptSkillCardEntriesAppearsField
          ): SerializedData {
            return serializeTranscriptSkillCardEntriesAppearsField(item);
          }) as readonly any[]),
  };
}
export function deserializeTranscriptSkillCardEntriesField(
  val: any
): TranscriptSkillCardEntriesField {
  const text: undefined | string = val.text == void 0 ? void 0 : val.text;
  const appears: undefined | readonly TranscriptSkillCardEntriesAppearsField[] =
    val.appears == void 0
      ? void 0
      : sdIsList(val.appears)
      ? (val.appears.map(function (
          itm: SerializedData
        ): TranscriptSkillCardEntriesAppearsField {
          return deserializeTranscriptSkillCardEntriesAppearsField(itm);
        }) as readonly any[])
      : [];
  return {
    text: text,
    appears: appears,
  } satisfies TranscriptSkillCardEntriesField;
}
export function serializeTranscriptSkillCard(
  val: TranscriptSkillCard
): SerializedData {
  return {
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['type']: serializeTranscriptSkillCardTypeField(val.type),
    ['skill_card_type']: serializeTranscriptSkillCardSkillCardTypeField(
      val.skillCardType
    ),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeTranscriptSkillCardSkillCardTitleField(val.skillCardTitle),
    ['skill']: serializeTranscriptSkillCardSkillField(val.skill),
    ['invocation']: serializeTranscriptSkillCardInvocationField(val.invocation),
    ['duration']: val.duration == void 0 ? void 0 : val.duration,
    ['entries']: val.entries.map(function (
      item: TranscriptSkillCardEntriesField
    ): SerializedData {
      return serializeTranscriptSkillCardEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTranscriptSkillCard(val: any): TranscriptSkillCard {
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const type: TranscriptSkillCardTypeField =
    deserializeTranscriptSkillCardTypeField(val.type);
  const skillCardType: TranscriptSkillCardSkillCardTypeField =
    deserializeTranscriptSkillCardSkillCardTypeField(val.skill_card_type);
  const skillCardTitle: undefined | TranscriptSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeTranscriptSkillCardSkillCardTitleField(val.skill_card_title);
  const skill: TranscriptSkillCardSkillField =
    deserializeTranscriptSkillCardSkillField(val.skill);
  const invocation: TranscriptSkillCardInvocationField =
    deserializeTranscriptSkillCardInvocationField(val.invocation);
  const duration: undefined | number =
    val.duration == void 0 ? void 0 : val.duration;
  const entries: readonly TranscriptSkillCardEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (
        itm: SerializedData
      ): TranscriptSkillCardEntriesField {
        return deserializeTranscriptSkillCardEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    skill: skill,
    invocation: invocation,
    duration: duration,
    entries: entries,
  } satisfies TranscriptSkillCard;
}
export function serializeTranscriptSkillCardInput(
  val: TranscriptSkillCardInput
): SerializedData {
  return {
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTranscriptSkillCardTypeField(val.type),
    ['skillCardType']:
      val.skillCardType == void 0
        ? void 0
        : serializeTranscriptSkillCardSkillCardTypeField(val.skillCardType),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeTranscriptSkillCardSkillCardTitleField(val.skillCardTitle),
    ['skill']: serializeTranscriptSkillCardSkillField(val.skill),
    ['invocation']: serializeTranscriptSkillCardInvocationField(val.invocation),
    ['duration']: val.duration == void 0 ? void 0 : val.duration,
    ['entries']: val.entries.map(function (
      item: TranscriptSkillCardEntriesField
    ): SerializedData {
      return serializeTranscriptSkillCardEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTranscriptSkillCardInput(
  val: any
): TranscriptSkillCardInput {
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const type: undefined | TranscriptSkillCardTypeField =
    val.type == void 0
      ? void 0
      : deserializeTranscriptSkillCardTypeField(val.type);
  const skillCardType: undefined | TranscriptSkillCardSkillCardTypeField =
    val.skillCardType == void 0
      ? void 0
      : deserializeTranscriptSkillCardSkillCardTypeField(val.skillCardType);
  const skillCardTitle: undefined | TranscriptSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeTranscriptSkillCardSkillCardTitleField(val.skill_card_title);
  const skill: TranscriptSkillCardSkillField =
    deserializeTranscriptSkillCardSkillField(val.skill);
  const invocation: TranscriptSkillCardInvocationField =
    deserializeTranscriptSkillCardInvocationField(val.invocation);
  const duration: undefined | number =
    val.duration == void 0 ? void 0 : val.duration;
  const entries: readonly TranscriptSkillCardEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (
        itm: SerializedData
      ): TranscriptSkillCardEntriesField {
        return deserializeTranscriptSkillCardEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    skill: skill,
    invocation: invocation,
    duration: duration,
    entries: entries,
  } satisfies TranscriptSkillCardInput;
}
