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
export type TimelineSkillCardTypeField = 'skill_card';
export type TimelineSkillCardSkillCardTypeField = 'timeline';
export interface TimelineSkillCardSkillCardTitleField {
  readonly code?: string;
  readonly message: string;
}
export type TimelineSkillCardSkillTypeField = 'service';
export class TimelineSkillCardSkillField {
  readonly type: TimelineSkillCardSkillTypeField =
    'service' as TimelineSkillCardSkillTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<TimelineSkillCardSkillField, 'type'> &
      Partial<Pick<TimelineSkillCardSkillField, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface TimelineSkillCardSkillFieldInput {
  readonly type?: TimelineSkillCardSkillTypeField;
  readonly id: string;
}
export type TimelineSkillCardInvocationTypeField = 'skill_invocation';
export class TimelineSkillCardInvocationField {
  readonly type: TimelineSkillCardInvocationTypeField =
    'skill_invocation' as TimelineSkillCardInvocationTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<TimelineSkillCardInvocationField, 'type'> &
      Partial<Pick<TimelineSkillCardInvocationField, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface TimelineSkillCardInvocationFieldInput {
  readonly type?: TimelineSkillCardInvocationTypeField;
  readonly id: string;
}
export interface TimelineSkillCardEntriesAppearsField {
  readonly start?: number;
  readonly end?: number;
}
export interface TimelineSkillCardEntriesField {
  readonly text?: string;
  readonly appears?: readonly TimelineSkillCardEntriesAppearsField[];
  readonly imageUrl?: string;
}
export class TimelineSkillCard {
  readonly createdAt?: DateTime;
  readonly type: TimelineSkillCardTypeField =
    'skill_card' as TimelineSkillCardTypeField;
  readonly skillCardType: TimelineSkillCardSkillCardTypeField =
    'timeline' as TimelineSkillCardSkillCardTypeField;
  readonly skillCardTitle?: TimelineSkillCardSkillCardTitleField;
  readonly skill!: TimelineSkillCardSkillField;
  readonly invocation!: TimelineSkillCardInvocationField;
  readonly duration?: number;
  readonly entries!: readonly TimelineSkillCardEntriesField[];
  constructor(
    fields: Omit<TimelineSkillCard, 'type' | 'skillCardType'> &
      Partial<Pick<TimelineSkillCard, 'type' | 'skillCardType'>>
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
export interface TimelineSkillCardInput {
  readonly createdAt?: DateTime;
  readonly type?: TimelineSkillCardTypeField;
  readonly skillCardType?: TimelineSkillCardSkillCardTypeField;
  readonly skillCardTitle?: TimelineSkillCardSkillCardTitleField;
  readonly skill: TimelineSkillCardSkillField;
  readonly invocation: TimelineSkillCardInvocationField;
  readonly duration?: number;
  readonly entries: readonly TimelineSkillCardEntriesField[];
}
export function serializeTimelineSkillCardTypeField(
  val: TimelineSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardTypeField(
  val: any
): TimelineSkillCardTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TimelineSkillCardTypeField"',
    });
  }
  if (val == 'skill_card') {
    return 'skill_card';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTimelineSkillCardSkillCardTypeField(
  val: TimelineSkillCardSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardSkillCardTypeField(
  val: any
): TimelineSkillCardSkillCardTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TimelineSkillCardSkillCardTypeField"',
    });
  }
  if (val == 'timeline') {
    return 'timeline';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTimelineSkillCardSkillCardTitleField(
  val: TimelineSkillCardSkillCardTitleField
): SerializedData {
  return {
    ['code']: val.code == void 0 ? void 0 : val.code,
    ['message']: val.message,
  };
}
export function deserializeTimelineSkillCardSkillCardTitleField(
  val: any
): TimelineSkillCardSkillCardTitleField {
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  const message: string = val.message;
  return {
    code: code,
    message: message,
  } satisfies TimelineSkillCardSkillCardTitleField;
}
export function serializeTimelineSkillCardSkillTypeField(
  val: TimelineSkillCardSkillTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardSkillTypeField(
  val: any
): TimelineSkillCardSkillTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TimelineSkillCardSkillTypeField"',
    });
  }
  if (val == 'service') {
    return 'service';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTimelineSkillCardSkillField(
  val: TimelineSkillCardSkillField
): SerializedData {
  return {
    ['type']: serializeTimelineSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTimelineSkillCardSkillField(
  val: any
): TimelineSkillCardSkillField {
  const type: TimelineSkillCardSkillTypeField =
    deserializeTimelineSkillCardSkillTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies TimelineSkillCardSkillField;
}
export function serializeTimelineSkillCardSkillFieldInput(
  val: TimelineSkillCardSkillFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTimelineSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTimelineSkillCardSkillFieldInput(
  val: any
): TimelineSkillCardSkillFieldInput {
  const type: undefined | TimelineSkillCardSkillTypeField =
    val.type == void 0
      ? void 0
      : deserializeTimelineSkillCardSkillTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies TimelineSkillCardSkillFieldInput;
}
export function serializeTimelineSkillCardInvocationTypeField(
  val: TimelineSkillCardInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardInvocationTypeField(
  val: any
): TimelineSkillCardInvocationTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TimelineSkillCardInvocationTypeField"',
    });
  }
  if (val == 'skill_invocation') {
    return 'skill_invocation';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTimelineSkillCardInvocationField(
  val: TimelineSkillCardInvocationField
): SerializedData {
  return {
    ['type']: serializeTimelineSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTimelineSkillCardInvocationField(
  val: any
): TimelineSkillCardInvocationField {
  const type: TimelineSkillCardInvocationTypeField =
    deserializeTimelineSkillCardInvocationTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies TimelineSkillCardInvocationField;
}
export function serializeTimelineSkillCardInvocationFieldInput(
  val: TimelineSkillCardInvocationFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTimelineSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTimelineSkillCardInvocationFieldInput(
  val: any
): TimelineSkillCardInvocationFieldInput {
  const type: undefined | TimelineSkillCardInvocationTypeField =
    val.type == void 0
      ? void 0
      : deserializeTimelineSkillCardInvocationTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies TimelineSkillCardInvocationFieldInput;
}
export function serializeTimelineSkillCardEntriesAppearsField(
  val: TimelineSkillCardEntriesAppearsField
): SerializedData {
  return {
    ['start']: val.start == void 0 ? void 0 : val.start,
    ['end']: val.end == void 0 ? void 0 : val.end,
  };
}
export function deserializeTimelineSkillCardEntriesAppearsField(
  val: any
): TimelineSkillCardEntriesAppearsField {
  const start: undefined | number = val.start == void 0 ? void 0 : val.start;
  const end: undefined | number = val.end == void 0 ? void 0 : val.end;
  return {
    start: start,
    end: end,
  } satisfies TimelineSkillCardEntriesAppearsField;
}
export function serializeTimelineSkillCardEntriesField(
  val: TimelineSkillCardEntriesField
): SerializedData {
  return {
    ['text']: val.text == void 0 ? void 0 : val.text,
    ['appears']:
      val.appears == void 0
        ? void 0
        : (val.appears.map(function (
            item: TimelineSkillCardEntriesAppearsField
          ): SerializedData {
            return serializeTimelineSkillCardEntriesAppearsField(item);
          }) as readonly any[]),
    ['image_url']: val.imageUrl == void 0 ? void 0 : val.imageUrl,
  };
}
export function deserializeTimelineSkillCardEntriesField(
  val: any
): TimelineSkillCardEntriesField {
  const text: undefined | string = val.text == void 0 ? void 0 : val.text;
  const appears: undefined | readonly TimelineSkillCardEntriesAppearsField[] =
    val.appears == void 0
      ? void 0
      : sdIsList(val.appears)
      ? (val.appears.map(function (
          itm: SerializedData
        ): TimelineSkillCardEntriesAppearsField {
          return deserializeTimelineSkillCardEntriesAppearsField(itm);
        }) as readonly any[])
      : [];
  const imageUrl: undefined | string =
    val.image_url == void 0 ? void 0 : val.image_url;
  return {
    text: text,
    appears: appears,
    imageUrl: imageUrl,
  } satisfies TimelineSkillCardEntriesField;
}
export function serializeTimelineSkillCard(
  val: TimelineSkillCard
): SerializedData {
  return {
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['type']: serializeTimelineSkillCardTypeField(val.type),
    ['skill_card_type']: serializeTimelineSkillCardSkillCardTypeField(
      val.skillCardType
    ),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeTimelineSkillCardSkillCardTitleField(val.skillCardTitle),
    ['skill']: serializeTimelineSkillCardSkillField(val.skill),
    ['invocation']: serializeTimelineSkillCardInvocationField(val.invocation),
    ['duration']: val.duration == void 0 ? void 0 : val.duration,
    ['entries']: val.entries.map(function (
      item: TimelineSkillCardEntriesField
    ): SerializedData {
      return serializeTimelineSkillCardEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTimelineSkillCard(val: any): TimelineSkillCard {
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const type: TimelineSkillCardTypeField =
    deserializeTimelineSkillCardTypeField(val.type);
  const skillCardType: TimelineSkillCardSkillCardTypeField =
    deserializeTimelineSkillCardSkillCardTypeField(val.skill_card_type);
  const skillCardTitle: undefined | TimelineSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeTimelineSkillCardSkillCardTitleField(val.skill_card_title);
  const skill: TimelineSkillCardSkillField =
    deserializeTimelineSkillCardSkillField(val.skill);
  const invocation: TimelineSkillCardInvocationField =
    deserializeTimelineSkillCardInvocationField(val.invocation);
  const duration: undefined | number =
    val.duration == void 0 ? void 0 : val.duration;
  const entries: readonly TimelineSkillCardEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (
        itm: SerializedData
      ): TimelineSkillCardEntriesField {
        return deserializeTimelineSkillCardEntriesField(itm);
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
  } satisfies TimelineSkillCard;
}
export function serializeTimelineSkillCardInput(
  val: TimelineSkillCardInput
): SerializedData {
  return {
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTimelineSkillCardTypeField(val.type),
    ['skillCardType']:
      val.skillCardType == void 0
        ? void 0
        : serializeTimelineSkillCardSkillCardTypeField(val.skillCardType),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeTimelineSkillCardSkillCardTitleField(val.skillCardTitle),
    ['skill']: serializeTimelineSkillCardSkillField(val.skill),
    ['invocation']: serializeTimelineSkillCardInvocationField(val.invocation),
    ['duration']: val.duration == void 0 ? void 0 : val.duration,
    ['entries']: val.entries.map(function (
      item: TimelineSkillCardEntriesField
    ): SerializedData {
      return serializeTimelineSkillCardEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTimelineSkillCardInput(
  val: any
): TimelineSkillCardInput {
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const type: undefined | TimelineSkillCardTypeField =
    val.type == void 0
      ? void 0
      : deserializeTimelineSkillCardTypeField(val.type);
  const skillCardType: undefined | TimelineSkillCardSkillCardTypeField =
    val.skillCardType == void 0
      ? void 0
      : deserializeTimelineSkillCardSkillCardTypeField(val.skillCardType);
  const skillCardTitle: undefined | TimelineSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeTimelineSkillCardSkillCardTitleField(val.skill_card_title);
  const skill: TimelineSkillCardSkillField =
    deserializeTimelineSkillCardSkillField(val.skill);
  const invocation: TimelineSkillCardInvocationField =
    deserializeTimelineSkillCardInvocationField(val.invocation);
  const duration: undefined | number =
    val.duration == void 0 ? void 0 : val.duration;
  const entries: readonly TimelineSkillCardEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (
        itm: SerializedData
      ): TimelineSkillCardEntriesField {
        return deserializeTimelineSkillCardEntriesField(itm);
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
  } satisfies TimelineSkillCardInput;
}
