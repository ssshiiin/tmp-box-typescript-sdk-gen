import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type FolderMetadataManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export type GetFolderMetadataByIdScopeArg = "global" | "enterprise";
export type CreateFolderMetadataByIdScopeArg = "global" | "enterprise";
export interface CreateFolderMetadataByIdRequestBodyArg {
}
export type DeleteFolderMetadataByIdScopeArg = "global" | "enterprise";
export declare class FolderMetadataManager {
    readonly auth: FolderMetadataManagerAuthField;
    constructor(fields: Omit<FolderMetadataManager, "getFolderMetadata" | "getFolderMetadataById" | "createFolderMetadataById" | "deleteFolderMetadataById">);
    getFolderMetadata(folderId: string): Promise<any>;
    getFolderMetadataById(folderId: string, scope: GetFolderMetadataByIdScopeArg, templateKey: string): Promise<any>;
    createFolderMetadataById(folderId: string, scope: CreateFolderMetadataByIdScopeArg, templateKey: string, requestBody: CreateFolderMetadataByIdRequestBodyArg): Promise<any>;
    deleteFolderMetadataById(folderId: string, scope: DeleteFolderMetadataByIdScopeArg, templateKey: string): Promise<any>;
}
