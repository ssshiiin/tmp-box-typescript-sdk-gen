import { Classification } from "../schemas.generated.js";
import { deserializeClassification } from "../schemas.generated.js";
import { serializeClassification } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type FolderClassificationsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export class FolderClassificationsManager {
    readonly auth!: FolderClassificationsManagerAuthField;
    constructor(fields: Omit<FolderClassificationsManager, "getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFolderMetadataEnterpriseSecurityClassification" | "deleteFolderMetadataEnterpriseSecurityClassification">) {
        Object.assign(this, fields);
    }
    async getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeClassification(deserializeJSON(response.text) as JSON);
    }
    async createFolderMetadataEnterpriseSecurityClassification(folderId: string, requestBody: CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeClassification(deserializeJSON(response.text) as JSON);
    }
    async deleteFolderMetadataEnterpriseSecurityClassification(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
