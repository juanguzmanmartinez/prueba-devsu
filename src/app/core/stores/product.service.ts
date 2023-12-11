import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IProduct } from '../interfaces/produtc.interface';
const asdad = {
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
  private productSubject = new BehaviorSubject<IProduct>(asdad);

  //   private editionModeSaveSubject =
  //     new BehaviorSubject<ECapacitiesStepEditionMode>(null);

  //   private editionModeStepStatusSubject =
  //     new BehaviorSubject<ECapacityStepStatus>(null);
  //   private editionModeResetStepStatusSubject = new BehaviorSubject<boolean>(
  //     null
  //   );

  //   public defaultEditionModeSelection: ECapacitiesStepEditionMode =
  //     ECapacitiesStepEditionMode.calendar;
  //   public defaultEditionModeSelectionSaved: boolean;

  //   get editionModeStepStatus$(): Observable<ECapacityStepStatus> {
  //     return this.editionModeStepStatusSubject
  //       .asObservable()
  //       .pipe(filter((value) => !!value));
  //   }

  //   set editionModeStepStatus(editionModeDisabled: ECapacityStepStatus) {
  //     this.editionModeStepStatusSubject.next(editionModeDisabled);
  //   }

  //   get editionModeResetStepStatus$(): Observable<boolean> {
  //     return this.editionModeResetStepStatusSubject
  //       .asObservable()
  //       .pipe(filter((value) => !!value));
  //   }

  //   set editionModeResetStepStatus(editionModeResetStep: boolean) {
  //     this.editionModeResetStepStatusSubject.next(editionModeResetStep);
  //   }

  get product$(): Observable<IProduct> {
    return this.productSubject.asObservable();
  }

  set product(groupOrDrugstoreCancel: IProduct) {
    this.productSubject.next(groupOrDrugstoreCancel);
  }

  //   get editionModeSave$(): Observable<ECapacitiesStepEditionMode> {
  //     return this.editionModeSaveSubject
  //       .asObservable()
  //       .pipe(filter((value) => !!value));
  //   }

  //   set editionModeSave(editionModeSelection: ECapacitiesStepEditionMode) {
  //     this.editionModeSaveSubject.next(editionModeSelection);
  //   }

  constructor() {}
}
