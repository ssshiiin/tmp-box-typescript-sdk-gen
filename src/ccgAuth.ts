import { fetch, FetchOptions, FetchResponse } from './fetch.js';
import {
  AccessToken,
  TokenRequest,
  TokenRequestBoxSubjectType,
  TokenRequestGrantType,
} from './authSchemas';

export type CcgConfig = {
  clientId: string;
  clientSecret: string;
  enterpriseId?: string;
  userId?: string;
};

export class CcgAuth {
  config: CcgConfig;
  token?: string;
  subjectId: string;
  subjectType: string;

  constructor({ config }: Pick<CcgAuth, 'config'>) {
    if (!config.enterpriseId && !config.userId) {
      throw new Error('Enterprise ID or User ID is needed');
    }
    this.config = config;

    if (this.config.enterpriseId) {
      this.subjectId = this.config.enterpriseId!;
      this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    } else {
      this.subjectId = this.config.userId!;
      this.subjectType = 'user' as TokenRequestBoxSubjectType;
    }
  }

  async retrieveToken() {
    if (!this.token) {
      await this.refreshToken();
    }
    return this.token!;
  }

  async refreshToken() {
    const requestBody = {
      grant_type: 'client_credentials' as TokenRequestGrantType,
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      box_subject_id: this.subjectId,
      box_subject_type: this.subjectType,
    } as TokenRequest;

    const response = (await fetch('https://api.box.com/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams(
        requestBody as unknown as Record<string, string>
      ).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    } as FetchOptions)) as FetchResponse;

    const tokenResponse = JSON.parse(response.text) as AccessToken;
    this.token = tokenResponse.access_token;
    return this.token;
  }

  async authenticateUser(userId: string) {
    this.subjectId = userId;
    this.subjectType = 'user' as TokenRequestBoxSubjectType;
    return this.refreshToken();
  }

  async authenticateEnterprise(enterpriseId: string) {
    this.subjectId = enterpriseId;
    this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    return this.refreshToken();
  }
}
