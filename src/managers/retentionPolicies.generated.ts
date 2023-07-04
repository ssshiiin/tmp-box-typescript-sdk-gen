import { newSerializeRetentionPolicies } from "../schemas.generated.js";
import { newDeserializeRetentionPolicies } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeRetentionPolicy } from "../schemas.generated.js";
import { newDeserializeRetentionPolicy } from "../schemas.generated.js";
import { newSerializeUserMini } from "../schemas.generated.js";
import { newDeserializeUserMini } from "../schemas.generated.js";
import { RetentionPolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { RetentionPolicy } from "../schemas.generated.js";
import { UserMini } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export type GetRetentionPoliciesQueryParamsArgPolicyTypeField = "finite" | "indefinite";
export interface GetRetentionPoliciesQueryParamsArg {
    readonly policyName?: string;
    readonly policyType?: GetRetentionPoliciesQueryParamsArgPolicyTypeField;
    readonly createdByUserId?: string;
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export type CreateRetentionPolicyRequestBodyArgPolicyTypeField = "finite" | "indefinite";
export type CreateRetentionPolicyRequestBodyArgDispositionActionField = "permanently_delete" | "remove_retention";
export type CreateRetentionPolicyRequestBodyArgRetentionTypeField = "modifiable" | "non-modifiable";
export interface CreateRetentionPolicyRequestBodyArg {
    readonly policyName: string;
    readonly description?: string;
    readonly policyType: CreateRetentionPolicyRequestBodyArgPolicyTypeField;
    readonly dispositionAction: CreateRetentionPolicyRequestBodyArgDispositionActionField;
    readonly retentionLength?: string;
    readonly retentionType?: CreateRetentionPolicyRequestBodyArgRetentionTypeField;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
}
export interface GetRetentionPolicyByIdQueryParamsArg {
    readonly fields?: string;
}
export type UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = "permanently_delete" | "remove_retention";
export interface UpdateRetentionPolicyByIdRequestBodyArg {
    readonly policyName?: string;
    readonly description?: string;
    readonly dispositionAction?: UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField;
    readonly retentionType?: string;
    readonly retentionLength?: string;
    readonly status?: string;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
}
export class RetentionPoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RetentionPoliciesManager, "getRetentionPolicies" | "createRetentionPolicy" | "getRetentionPolicyById" | "updateRetentionPolicyById" | "deleteRetentionPolicyById">) {
        Object.assign(this, fields);
    }
    async getRetentionPolicies(queryParams: undefined | GetRetentionPoliciesQueryParamsArg = {} satisfies GetRetentionPoliciesQueryParamsArg): Promise<RetentionPolicies> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeRetentionPolicies(deserializeJson(response.text));
    }
    async createRetentionPolicy(requestBody: CreateRetentionPolicyRequestBodyArg): Promise<RetentionPolicy> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeRetentionPolicy(deserializeJson(response.text));
    }
    async getRetentionPolicyById(retentionPolicyId: string, queryParams: undefined | GetRetentionPolicyByIdQueryParamsArg = {} satisfies GetRetentionPolicyByIdQueryParamsArg): Promise<RetentionPolicy> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId) as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeRetentionPolicy(deserializeJson(response.text));
    }
    async updateRetentionPolicyById(retentionPolicyId: string, requestBody: UpdateRetentionPolicyByIdRequestBodyArg): Promise<RetentionPolicy> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeRetentionPolicy(deserializeJson(response.text));
    }
    async deleteRetentionPolicyById(retentionPolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeGetRetentionPoliciesQueryParamsArgPolicyTypeField(val: GetRetentionPoliciesQueryParamsArgPolicyTypeField): Json {
    return val;
}
export function newDeserializeGetRetentionPoliciesQueryParamsArgPolicyTypeField(val: any): GetRetentionPoliciesQueryParamsArgPolicyTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetRetentionPoliciesQueryParamsArgPolicyTypeField\"";
    }
    if (val == "finite") {
        return "finite";
    }
    if (val == "indefinite") {
        return "indefinite";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGetRetentionPoliciesQueryParamsArg(val: GetRetentionPoliciesQueryParamsArg): Json {
    return { ["policyName"]: val.policyName, ["policyType"]: val.policyType == void 0 ? void 0 : newSerializeGetRetentionPoliciesQueryParamsArgPolicyTypeField(val.policyType), ["createdByUserId"]: val.createdByUserId, ["fields"]: val.fields, ["limit"]: val.limit, ["marker"]: val.marker };
}
export function newDeserializeGetRetentionPoliciesQueryParamsArg(val: any): GetRetentionPoliciesQueryParamsArg {
    const policyName: undefined | string = isJson(val.policyName, "string") ? val.policyName : void 0;
    const policyType: undefined | GetRetentionPoliciesQueryParamsArgPolicyTypeField = val.policyType == void 0 ? void 0 : newDeserializeGetRetentionPoliciesQueryParamsArgPolicyTypeField(val.policyType);
    const createdByUserId: undefined | string = isJson(val.createdByUserId, "string") ? val.createdByUserId : void 0;
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    return { policyName: policyName, policyType: policyType, createdByUserId: createdByUserId, fields: fields, limit: limit, marker: marker } satisfies GetRetentionPoliciesQueryParamsArg;
}
export function newSerializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val: CreateRetentionPolicyRequestBodyArgPolicyTypeField): Json {
    return val;
}
export function newDeserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val: any): CreateRetentionPolicyRequestBodyArgPolicyTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateRetentionPolicyRequestBodyArgPolicyTypeField\"";
    }
    if (val == "finite") {
        return "finite";
    }
    if (val == "indefinite") {
        return "indefinite";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val: CreateRetentionPolicyRequestBodyArgDispositionActionField): Json {
    return val;
}
export function newDeserializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val: any): CreateRetentionPolicyRequestBodyArgDispositionActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateRetentionPolicyRequestBodyArgDispositionActionField\"";
    }
    if (val == "permanently_delete") {
        return "permanently_delete";
    }
    if (val == "remove_retention") {
        return "remove_retention";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val: CreateRetentionPolicyRequestBodyArgRetentionTypeField): Json {
    return val;
}
export function newDeserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val: any): CreateRetentionPolicyRequestBodyArgRetentionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateRetentionPolicyRequestBodyArgRetentionTypeField\"";
    }
    if (val == "modifiable") {
        return "modifiable";
    }
    if (val == "non-modifiable") {
        return "non-modifiable";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateRetentionPolicyRequestBodyArg(val: CreateRetentionPolicyRequestBodyArg): Json {
    return { ["policyName"]: val.policyName, ["description"]: val.description, ["policyType"]: newSerializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val.policyType), ["dispositionAction"]: newSerializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val.dispositionAction), ["retentionLength"]: val.retentionLength, ["retentionType"]: val.retentionType == void 0 ? void 0 : newSerializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val.retentionType), ["canOwnerExtendRetention"]: val.canOwnerExtendRetention, ["areOwnersNotified"]: val.areOwnersNotified, ["customNotificationRecipients"]: val.customNotificationRecipients == void 0 ? void 0 : val.customNotificationRecipients.map(function (item: UserMini): any {
            return newSerializeUserMini(item);
        }) as readonly any[] };
}
export function newDeserializeCreateRetentionPolicyRequestBodyArg(val: any): CreateRetentionPolicyRequestBodyArg {
    const policyName: string = val.policyName;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const policyType: CreateRetentionPolicyRequestBodyArgPolicyTypeField = newDeserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val.policyType);
    const dispositionAction: CreateRetentionPolicyRequestBodyArgDispositionActionField = newDeserializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val.dispositionAction);
    const retentionLength: undefined | string = isJson(val.retentionLength, "string") ? val.retentionLength : void 0;
    const retentionType: undefined | CreateRetentionPolicyRequestBodyArgRetentionTypeField = val.retentionType == void 0 ? void 0 : newDeserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val.retentionType);
    const canOwnerExtendRetention: undefined | boolean = isJson(val.canOwnerExtendRetention, "boolean") ? val.canOwnerExtendRetention : void 0;
    const areOwnersNotified: undefined | boolean = isJson(val.areOwnersNotified, "boolean") ? val.areOwnersNotified : void 0;
    const customNotificationRecipients: undefined | readonly UserMini[] = isJson(val.customNotificationRecipients, "array") ? val.customNotificationRecipients.map(function (itm: Json): any {
        return newDeserializeUserMini(itm);
    }) as readonly any[] : void 0;
    return { policyName: policyName, description: description, policyType: policyType, dispositionAction: dispositionAction, retentionLength: retentionLength, retentionType: retentionType, canOwnerExtendRetention: canOwnerExtendRetention, areOwnersNotified: areOwnersNotified, customNotificationRecipients: customNotificationRecipients } satisfies CreateRetentionPolicyRequestBodyArg;
}
export function newSerializeGetRetentionPolicyByIdQueryParamsArg(val: GetRetentionPolicyByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetRetentionPolicyByIdQueryParamsArg(val: any): GetRetentionPolicyByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetRetentionPolicyByIdQueryParamsArg;
}
export function newSerializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val: UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField): Json {
    return val;
}
export function newDeserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val: any): UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField\"";
    }
    if (val == "permanently_delete") {
        return "permanently_delete";
    }
    if (val == "remove_retention") {
        return "remove_retention";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUpdateRetentionPolicyByIdRequestBodyArg(val: UpdateRetentionPolicyByIdRequestBodyArg): Json {
    return { ["policyName"]: val.policyName, ["description"]: val.description, ["dispositionAction"]: val.dispositionAction == void 0 ? void 0 : newSerializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val.dispositionAction), ["retentionType"]: val.retentionType, ["retentionLength"]: val.retentionLength, ["status"]: val.status, ["canOwnerExtendRetention"]: val.canOwnerExtendRetention, ["areOwnersNotified"]: val.areOwnersNotified, ["customNotificationRecipients"]: val.customNotificationRecipients == void 0 ? void 0 : val.customNotificationRecipients.map(function (item: UserMini): any {
            return newSerializeUserMini(item);
        }) as readonly any[] };
}
export function newDeserializeUpdateRetentionPolicyByIdRequestBodyArg(val: any): UpdateRetentionPolicyByIdRequestBodyArg {
    const policyName: undefined | string = isJson(val.policyName, "string") ? val.policyName : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const dispositionAction: undefined | UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = val.dispositionAction == void 0 ? void 0 : newDeserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val.dispositionAction);
    const retentionType: undefined | string = isJson(val.retentionType, "string") ? val.retentionType : void 0;
    const retentionLength: undefined | string = isJson(val.retentionLength, "string") ? val.retentionLength : void 0;
    const status: undefined | string = isJson(val.status, "string") ? val.status : void 0;
    const canOwnerExtendRetention: undefined | boolean = isJson(val.canOwnerExtendRetention, "boolean") ? val.canOwnerExtendRetention : void 0;
    const areOwnersNotified: undefined | boolean = isJson(val.areOwnersNotified, "boolean") ? val.areOwnersNotified : void 0;
    const customNotificationRecipients: undefined | readonly UserMini[] = isJson(val.customNotificationRecipients, "array") ? val.customNotificationRecipients.map(function (itm: Json): any {
        return newDeserializeUserMini(itm);
    }) as readonly any[] : void 0;
    return { policyName: policyName, description: description, dispositionAction: dispositionAction, retentionType: retentionType, retentionLength: retentionLength, status: status, canOwnerExtendRetention: canOwnerExtendRetention, areOwnersNotified: areOwnersNotified, customNotificationRecipients: customNotificationRecipients } satisfies UpdateRetentionPolicyByIdRequestBodyArg;
}
