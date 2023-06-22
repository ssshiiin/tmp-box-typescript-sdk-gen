import {
  AccessToken,
  TokenRequest,
  TokenRequestGrantType,
} from './authSchemas.js';
import { Authentication } from './auth.js';
import { NetworkSession } from './network.js';
import { fetch, FetchOptions, FetchResponse } from './fetch.js';

const BOX_OAUTH2_AUTH_URL = 'https://account.box.com/api/oauth2/authorize';
const BOX_OAUTH2_TOKEN_URL = 'https://api.box.com/oauth2/token';
const BOX_OAUTH2_GRANT_TYPE: TokenRequestGrantType = 'authorization_code',
  BOX_REFRESH_TOKEN_GRANT_TYPE: TokenRequestGrantType = 'refresh_token';

/**
 * Determines if a given string could represent an authorization code or token.
 *
 * @param {string} codeOrToken The code or token to check.
 * @returns {boolean} True if codeOrToken is valid, false if not.
 * @private
 */
function isValidCodeOrToken(codeOrToken: string) {
  return typeof codeOrToken === 'string' && codeOrToken.length > 0;
}

/**
 * Determines if a token grant response is valid
 *
 * @param {Object} responseBody the body of the response to check
 * @returns {boolean} True if response body has expected fields, false if not.
 * @private
 */
function isValidOAuthTokenResponse(responseBody: Record<string, any>) {
  if (!isValidCodeOrToken(responseBody.access_token)) {
    return false;
  }
  if (typeof responseBody.expires_in !== 'number') {
    return false;
  }
  return isValidCodeOrToken(responseBody.refresh_token);
}

/**
 *  A class managing the configuration for OAuth authentication.
 * @typedef {Object} OAuthConfig
 */
export interface OAuthConfig {
  clientId: string;
  clientSecret: string;
}

/**
 * A class that manages the retrieval and storage of access tokens for a given app user.
 * @param {OAuthConfig} config The OAuthConfig instance.
 * @typedef {Object} OAuthConfig
 */
export class OAuth implements Authentication {
  config: OAuthConfig;
  token?: AccessToken;

  constructor({ config }: { config: OAuthConfig }) {
    this.config = config;
  }

  /**
   * Get the authorization URL for the app user.
   * @param {Object} options The parameters for the authorization URL.
   * @param {string} options.clientId The Client ID of the application that is requesting to authenticate the user.
   * @param {string} options.redirectUri The URI to which Box redirects the browser after the user has granted or denied the application permission.
   * @param {string} options.responseType The type of response we'd like to receive. Must be 'code'.
   * @param {string} [options.state] A custom string of your choice. Box will pass the same string to the redirect URL when authentication is complete.
   * @param {string} [options.scope] A comma-separated list of application scopes you'd like to authenticate the user for.
   */
  getAuthorizeUrl(options?: {
    clientId?: string;
    redirectUri?: string;
    responseType?: string;
    state?: string;
    scope?: string;
  }): string {
    const params: Record<string, string | undefined> = {
      client_id: options?.clientId || this.config.clientId,
      response_type: options?.responseType || 'code',
    };
    if (options?.redirectUri) {
      params['redirect_uri'] = options?.redirectUri;
    }
    if (options?.state) {
      params.state = options?.state;
    }
    if (options?.scope) {
      params.scope = options?.scope;
    }
    return `${BOX_OAUTH2_AUTH_URL}?${new URLSearchParams(
      params as unknown as Record<string, string>
    ).toString()}`;
  }

  /**
   * Acquires token info using an authorization code.
   * @param {string} authorizationCode The authorization code acquired from the first step of the OAuth 2.0 process.
   * @param networkSession An object to keep network session state
   */
  async getTokensAuthorizationCodeGrant(
    authorizationCode: string,
    networkSession?: NetworkSession
  ): Promise<string> {
    const requestBody: TokenRequest = {
      grant_type: BOX_OAUTH2_GRANT_TYPE,
      code: authorizationCode,
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
    };
    const params: FetchOptions = {
      method: 'POST',
      headers: {} as Record<string, any>,
      body: new URLSearchParams(
        requestBody as unknown as Record<string, string>
      ).toString(),
      contentType: 'application/x-www-form-urlencoded',
      networkSession,
    };

    const response = (await fetch(
      BOX_OAUTH2_TOKEN_URL,
      params
    )) as FetchResponse;

    const tokenResponse = JSON.parse(response.text) as AccessToken;
    if (!isValidOAuthTokenResponse(tokenResponse)) {
      throw new Error('Invalid token response');
    }
    this.token = tokenResponse;
    return this.token!.access_token!;
  }

  /**
   * Get the access token for the app user.  If the token is not cached or is expired, a new one will be fetched.
   * @param networkSession An object to keep network session state
   * @returns {Promise<string>} A promise resolving to the access token.
   */
  async retrieveToken(networkSession?: NetworkSession): Promise<string> {
    if (!this.token) {
      throw Error(
        'Access and refresh tokens not available. Authenticate before making any API call first.'
      );
    }
    return this.token.access_token as string;
  }

  /**
   * Get a new access token for the app user.
   * @param networkSession An object to keep network session state
   * @returns {Promise<string>} A promise resolving to the access token.
   */
  async refreshToken(
    networkSession?: NetworkSession
  ): Promise<string | undefined> {
    const requestBody: TokenRequest = {
      grant_type: BOX_REFRESH_TOKEN_GRANT_TYPE,
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      refresh_token: this.token!.refresh_token,
    };
    const params: FetchOptions = {
      method: 'POST',
      headers: {} as Record<string, any>,
      body: new URLSearchParams(
        requestBody as unknown as Record<string, string>
      ).toString(),
      contentType: 'application/x-www-form-urlencoded',
      networkSession,
    };

    const response = (await fetch(
      BOX_OAUTH2_TOKEN_URL,
      params
    )) as FetchResponse;
    this.token = JSON.parse(response.text) as AccessToken;
    return this.token.access_token;
  }
}
