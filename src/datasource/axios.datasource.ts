import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export class AxiosDatasource {
  private readonly apiVersion: string = process.env.NEXT_PUBLIC_API_VERSION;
  public readonly axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  private constructor() {}

  private static _instance: AxiosDatasource = new AxiosDatasource();
  public static instance(): AxiosDatasource {
    return this._instance;
  }

  public post<T>(endpoint: string, body: unknown, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.axios.post(`${this.apiVersion}/${endpoint}`, body, config);
  }
}
