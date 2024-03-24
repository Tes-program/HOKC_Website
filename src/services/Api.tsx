/* eslint-disable @typescript-eslint/no-explicit-any */
const apiUrl = import.meta.env.BACKEND_URL as string;

export class RestApiService {
  private constructor() {}

  public static setAuthorizationToken(token: string) {
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
    return headers;
  }

  public static async post<T>(url: string, data: any, token: string) {
    const headers = this.setAuthorizationToken(token);
    const response = await fetch(`${apiUrl}${url}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return response.json() as Promise<T>;
  }
}
