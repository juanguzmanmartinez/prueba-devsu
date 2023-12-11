import { Injectable } from '@angular/core';
import { ClientService } from '../client/client.service';
import { Observable, map, take } from 'rxjs';
import { IProduct } from '../../interfaces/produtc.interface';
import { environment } from 'src/environments/environment';
@Injectable()
export class ProductsService {
  private readonly URL_BASE = environment.url;

  constructor(private client: ClientService) {}

  getProductsList(): Observable<IProduct[]> {
    return this.client.genericGET<IProduct[]>(this.URL_BASE).pipe(
      take(1),
      map((response: IProduct[]) => {
        return response ? response : [];
      })
    );
  }
  addProducts(body: IProduct): Observable<IProduct> {
    return this.client.genericPOST<IProduct>(this.URL_BASE, body).pipe(take(1));
  }

  deleteProduct(productId: string, body?: any): Observable<any> {
    const endpoint = `${this.URL_BASE}/?id=${productId}`;
    return this.client.genericDEL<any>(endpoint, body).pipe(take(1));
  }

  validateProductId(productId: string) {
    const endpoint = `${this.URL_BASE}/verification/?id=${productId}`;
    return this.client.genericGET<boolean>(endpoint).pipe(take(1));
  }
  updateProduct(productId: string, body: IProduct): Observable<any> {
    const endpoint = `${this.URL_BASE}/?id=${productId}`;
    return this.client.genericPUT<any>(endpoint, body).pipe(take(1));
  }
}
