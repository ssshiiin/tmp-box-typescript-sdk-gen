import { newSerializeFolderLocks } from "../schemas.generated.js";
import { newDeserializeFolderLocks } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeFolderLock } from "../schemas.generated.js";
import { newDeserializeFolderLock } from "../schemas.generated.js";
import { FolderLocks } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { FolderLock } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface GetFolderLocksQueryParamsArg {
    readonly folderId: string;
}
export interface CreateFolderLockRequestBodyArgLockedOperationsField {
    readonly move: boolean;
    readonly delete: boolean;
}
export interface CreateFolderLockRequestBodyArgFolderField {
    readonly type: string;
    readonly id: string;
}
export interface CreateFolderLockRequestBodyArg {
    readonly lockedOperations?: CreateFolderLockRequestBodyArgLockedOperationsField;
    readonly folder: CreateFolderLockRequestBodyArgFolderField;
}
export class FolderLocksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderLocksManager, "getFolderLocks" | "createFolderLock" | "deleteFolderLockById">) {
        Object.assign(this, fields);
    }
    async getFolderLocks(queryParams: GetFolderLocksQueryParamsArg): Promise<FolderLocks> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folder_locks") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderLocks(deserializeJson(response.text));
    }
    async createFolderLock(requestBody: CreateFolderLockRequestBodyArg): Promise<FolderLock> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folder_locks") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderLock(deserializeJson(response.text));
    }
    async deleteFolderLockById(folderLockId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folder_locks/", folderLockId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeGetFolderLocksQueryParamsArg(val: GetFolderLocksQueryParamsArg): Json {
    return { ["folderId"]: val.folderId };
}
export function newDeserializeGetFolderLocksQueryParamsArg(val: any): GetFolderLocksQueryParamsArg {
    const folderId: string = val.folderId;
    return { folderId: folderId } satisfies GetFolderLocksQueryParamsArg;
}
export function newSerializeCreateFolderLockRequestBodyArgLockedOperationsField(val: CreateFolderLockRequestBodyArgLockedOperationsField): Json {
    return { ["move"]: val.move, ["delete"]: val.delete };
}
export function newDeserializeCreateFolderLockRequestBodyArgLockedOperationsField(val: any): CreateFolderLockRequestBodyArgLockedOperationsField {
    const move: boolean = val.move;
    const _delete: boolean = val.delete;
    return { move: move, delete: _delete } satisfies CreateFolderLockRequestBodyArgLockedOperationsField;
}
export function newSerializeCreateFolderLockRequestBodyArgFolderField(val: CreateFolderLockRequestBodyArgFolderField): Json {
    return { ["type"]: val.type, ["id"]: val.id };
}
export function newDeserializeCreateFolderLockRequestBodyArgFolderField(val: any): CreateFolderLockRequestBodyArgFolderField {
    const type: string = val.type;
    const id: string = val.id;
    return { type: type, id: id } satisfies CreateFolderLockRequestBodyArgFolderField;
}
export function newSerializeCreateFolderLockRequestBodyArg(val: CreateFolderLockRequestBodyArg): Json {
    return { ["lockedOperations"]: val.lockedOperations == void 0 ? void 0 : newSerializeCreateFolderLockRequestBodyArgLockedOperationsField(val.lockedOperations), ["folder"]: newSerializeCreateFolderLockRequestBodyArgFolderField(val.folder) };
}
export function newDeserializeCreateFolderLockRequestBodyArg(val: any): CreateFolderLockRequestBodyArg {
    const lockedOperations: undefined | CreateFolderLockRequestBodyArgLockedOperationsField = val.lockedOperations == void 0 ? void 0 : newDeserializeCreateFolderLockRequestBodyArgLockedOperationsField(val.lockedOperations);
    const folder: CreateFolderLockRequestBodyArgFolderField = newDeserializeCreateFolderLockRequestBodyArgFolderField(val.folder);
    return { lockedOperations: lockedOperations, folder: folder } satisfies CreateFolderLockRequestBodyArg;
}
