import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalDeleteProductsService } from './modal-delete-products.service';

@Component({
  selector: 'app-modal-delete-products',
  templateUrl: './modal-delete-products.component.html',
  styleUrls: ['./modal-delete-products.component.scss'],
})
export class ModalDeleteProductsComponent implements OnInit {
  @Output() onSubmitForm = new EventEmitter<any>();
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

  nameProduct!: string;
  modalText!: string;

  ngOnInit(): void {}
  close(data: any) {
    this.closeModal.emit({ data: data });
  }
}
