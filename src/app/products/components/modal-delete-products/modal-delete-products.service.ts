import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalDeleteProductsComponent } from './modal-delete-products.component';

@Injectable({
  providedIn: 'root',
})
export class ModalDeleteProductsService {
  constructor(private factoryResolver: ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver;
  }
  private rootViewContainer!: ViewContainerRef;
  private submitFormSubject = new Subject<any>();

  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent(nameProduct: string) {
    if (!this.rootViewContainer) {
      console.error(
        'ViewContainerRef no está configurado. Utiliza setRootViewContainerRef para configurarlo.'
      );
      return;
    }

    const factory = this.factoryResolver.resolveComponentFactory(
      ModalDeleteProductsComponent
    );
    const component = factory.create(this.rootViewContainer.injector);
    this.rootViewContainer.insert(component.hostView);

    component.instance.nameProduct = nameProduct;

    component.instance.closeModal.subscribe((response) => {
      this.removeDynamicComponent(component);
      this.submitFormSubject.next(response.data);
    });

    return { afterClosed: this.getSubmitFormObservable() };
  }

  removeDynamicComponent(component: any) {
    component.destroy();
  }

  getSubmitFormObservable(): Observable<any> {
    return this.submitFormSubject.asObservable();
  }
}
