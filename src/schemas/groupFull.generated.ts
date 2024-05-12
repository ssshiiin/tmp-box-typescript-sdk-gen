import { serializeGroupBaseTypeField } from './groupBase.generated.js';
import { deserializeGroupBaseTypeField } from './groupBase.generated.js';
import { serializeGroupBase } from './groupBase.generated.js';
import { deserializeGroupBase } from './groupBase.generated.js';
import { serializeGroupMiniGroupTypeField } from './groupMini.generated.js';
import { deserializeGroupMiniGroupTypeField } from './groupMini.generated.js';
import { serializeGroupMini } from './groupMini.generated.js';
import { deserializeGroupMini } from './groupMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { serializeGroup } from './group.generated.js';
import { deserializeGroup } from './group.generated.js';
import { GroupBaseTypeField } from './groupBase.generated.js';
import { GroupBase } from './groupBase.generated.js';
import { GroupMiniGroupTypeField } from './groupMini.generated.js';
import { GroupMini } from './groupMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { Group } from './group.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type GroupFullInvitabilityLevelField =
  | 'admins_only'
  | 'admins_and_members'
  | 'all_managed_users';
export type GroupFullMemberViewabilityLevelField =
  | 'admins_only'
  | 'admins_and_members'
  | 'all_managed_users';
export interface GroupFullPermissionsField {
  readonly canInviteAsCollaborator?: boolean;
}
export class GroupFull extends Group {
  readonly provenance?: string;
  readonly externalSyncIdentifier?: string;
  readonly description?: string;
  readonly invitabilityLevel?: GroupFullInvitabilityLevelField;
  readonly memberViewabilityLevel?: GroupFullMemberViewabilityLevelField;
  readonly permissions?: GroupFullPermissionsField;
  constructor(fields: GroupFull) {
    super(fields);
  }
}
export function serializeGroupFullInvitabilityLevelField(
  val: GroupFullInvitabilityLevelField
): SerializedData {
  return val;
}
export function deserializeGroupFullInvitabilityLevelField(
  val: any
): GroupFullInvitabilityLevelField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GroupFullInvitabilityLevelField"',
    });
  }
  if (val == 'admins_only') {
    return 'admins_only';
  }
  if (val == 'admins_and_members') {
    return 'admins_and_members';
  }
  if (val == 'all_managed_users') {
    return 'all_managed_users';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeGroupFullMemberViewabilityLevelField(
  val: GroupFullMemberViewabilityLevelField
): SerializedData {
  return val;
}
export function deserializeGroupFullMemberViewabilityLevelField(
  val: any
): GroupFullMemberViewabilityLevelField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GroupFullMemberViewabilityLevelField"',
    });
  }
  if (val == 'admins_only') {
    return 'admins_only';
  }
  if (val == 'admins_and_members') {
    return 'admins_and_members';
  }
  if (val == 'all_managed_users') {
    return 'all_managed_users';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeGroupFullPermissionsField(
  val: GroupFullPermissionsField
): SerializedData {
  return {
    ['can_invite_as_collaborator']:
      val.canInviteAsCollaborator == void 0
        ? void 0
        : val.canInviteAsCollaborator,
  };
}
export function deserializeGroupFullPermissionsField(
  val: any
): GroupFullPermissionsField {
  const canInviteAsCollaborator: undefined | boolean =
    val.can_invite_as_collaborator == void 0
      ? void 0
      : val.can_invite_as_collaborator;
  return {
    canInviteAsCollaborator: canInviteAsCollaborator,
  } satisfies GroupFullPermissionsField;
}
export function serializeGroupFull(val: GroupFull): SerializedData {
  const base: any = serializeGroup(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "GroupFull"' });
  }
  return {
    ...base,
    ...{
      ['provenance']: val.provenance == void 0 ? void 0 : val.provenance,
      ['external_sync_identifier']:
        val.externalSyncIdentifier == void 0
          ? void 0
          : val.externalSyncIdentifier,
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['invitability_level']:
        val.invitabilityLevel == void 0
          ? void 0
          : serializeGroupFullInvitabilityLevelField(val.invitabilityLevel),
      ['member_viewability_level']:
        val.memberViewabilityLevel == void 0
          ? void 0
          : serializeGroupFullMemberViewabilityLevelField(
              val.memberViewabilityLevel
            ),
      ['permissions']:
        val.permissions == void 0
          ? void 0
          : serializeGroupFullPermissionsField(val.permissions),
    },
  };
}
export function deserializeGroupFull(val: any): GroupFull {
  const provenance: undefined | string =
    val.provenance == void 0 ? void 0 : val.provenance;
  const externalSyncIdentifier: undefined | string =
    val.external_sync_identifier == void 0
      ? void 0
      : val.external_sync_identifier;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const invitabilityLevel: undefined | GroupFullInvitabilityLevelField =
    val.invitability_level == void 0
      ? void 0
      : deserializeGroupFullInvitabilityLevelField(val.invitability_level);
  const memberViewabilityLevel:
    | undefined
    | GroupFullMemberViewabilityLevelField =
    val.member_viewability_level == void 0
      ? void 0
      : deserializeGroupFullMemberViewabilityLevelField(
          val.member_viewability_level
        );
  const permissions: undefined | GroupFullPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeGroupFullPermissionsField(val.permissions);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const groupType: undefined | GroupMiniGroupTypeField =
    val.group_type == void 0
      ? void 0
      : deserializeGroupMiniGroupTypeField(val.group_type);
  const id: string = val.id;
  const type: GroupBaseTypeField = deserializeGroupBaseTypeField(val.type);
  return {
    provenance: provenance,
    externalSyncIdentifier: externalSyncIdentifier,
    description: description,
    invitabilityLevel: invitabilityLevel,
    memberViewabilityLevel: memberViewabilityLevel,
    permissions: permissions,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    name: name,
    groupType: groupType,
    id: id,
    type: type,
  } satisfies GroupFull;
}
