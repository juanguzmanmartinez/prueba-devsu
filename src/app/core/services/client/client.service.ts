import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {}

  public genericGET<T>(
    endpoint: string,
    headers: HttpHeaders = new HttpHeaders()
  ) {
    const options = { headers };
    return this.http.get<T>(endpoint, options);
  }

  public genericPOST<T>(
    endpoint: string,
    body: Object,
    headers: HttpHeaders = new HttpHeaders()
  ) {
    const options = { headers };
    return this.http.post<T>(endpoint, body, options);
  }

  public genericPUT<T>(
    endpoint: string,
    body: Object,
    headers: HttpHeaders = new HttpHeaders()
  ) {
    const options = { headers };
    return this.http.put<T>(endpoint, body, options);
  }

  public genericDEL<T>(
    endpoint: string,
    headers: HttpHeaders = new HttpHeaders()
  ) {
    const options = { headers };
    return this.http.delete<T>(endpoint, options);
  }
}
