import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interfaces/produtc.interface';
const productDefault = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: '',
  date_revision: '',
};

@Injectable({
  providedIn: 'root',
})
export class ProductStoreService {
  private productSubject = new BehaviorSubject<IProduct>(productDefault);

  get product$(): Observable<IProduct> {
    return this.productSubject.asObservable();
  }

  set product(product: IProduct) {
    this.productSubject.next(product);
  }

  constructor() {}
}
