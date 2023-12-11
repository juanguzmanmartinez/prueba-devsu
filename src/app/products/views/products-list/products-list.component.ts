import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { ColumnNameList } from 'src/app/core/constants/products';
import { IProduct } from 'src/app/core/interfaces/produtc.interface';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { ModalDeleteProductsService } from '../../components/modal-delete-products/modal-delete-products.service';
import { DropdownComponent } from 'src/app/core/components/dropdown/dropdown.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductStoreService } from 'src/app/core/stores/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  @ViewChild('dropDown') dropDown!: DropdownComponent;
  form!: FormGroup;
  searchValue = '';
  showOptions = false;

  headerTemplate!: TemplateRef<any>;
  rowTemplate!: TemplateRef<any>;

  dataList: IProduct[] = [];
  dataSource: IProduct[] = [];

  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 5;
  totalPages = 0;
  currentPage = 1;

  columns = [
    ColumnNameList.logo,
    ColumnNameList.name,
    ColumnNameList.description,
    ColumnNameList.dateRelease,
    ColumnNameList.dateRevision,
    ColumnNameList.actions,
  ];
  columnsBody = [
    'logo',
    'name',
    'description',
    'date_release',
    'date_revision',
    'actions',
  ];

  constructor(
    private _productsService: ProductsService,
    private _router: Router,
    private modalService: ModalDeleteProductsService,
    private viewContainerRef: ViewContainerRef,
    private _fb: FormBuilder,
    private _productStoreService: ProductStoreService
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      searchValue: '',
    });
    this.getProductsList();

    this.form.valueChanges.subscribe((res) => {
      if (res.searchValue) {
        this.searchValues(res.searchValue);
      } else {
        this.dataSource = this.dataList;
      }
    });
  }
  getProductsList() {
    this._productsService
      .getProductsList()
      .subscribe((productsResponse: IProduct[]) => {
        if (productsResponse) {
          this.dataList = productsResponse;
          this.setProducts();
          this.calculatePages();
        }
      });
  }

  goToAdd() {
    this._router.navigate(['/add']);
  }
  deleteProduct(producto: IProduct) {
    this.modalService.setRootViewContainerRef(this.viewContainerRef);
    this.modalService
      .addDynamicComponent(producto.name)
      ?.afterClosed.subscribe((response) => {
        if (response) {
          this._productsService.deleteProduct(producto.id).subscribe({
            next: (res) => {
              this.getProductsList();
            },
            error: (error) => {
              this.getProductsList();
            },
          });
        }
      });
  }

  editProduct(producto: IProduct) {
    this._productStoreService.product = producto;
    this._router.navigate([`/edit/${producto.id}`]);
  }

  onChangePageSize() {
    this.calculatePages();
    this.setProducts();
  }
  setProducts() {
    this.dataSource = this.dataList.slice(
      this.currentPage * this.pageSize - this.pageSize,
      this.pageSize * this.currentPage
    );
  }
  searchValues(value: string) {
    this.dataSource = this.dataList.filter((product) =>
      product.name.includes(value)
    );
  }
  calculatePages() {
    this.totalPages = Math.ceil(this.dataList.length / this.pageSize);
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.setProducts();
  }
  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  ngOnDestroy(): void {}
}
