import { IProduct } from '../interfaces/produtc.interface';

export class Product implements IProduct {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
  constructor(product: IProduct) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.logo = product.logo;
    this.date_release = product.date_release;
    this.date_revision = product.date_revision;
  }
}
