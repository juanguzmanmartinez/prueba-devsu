import {
  Component,
  OnInit,
  Input,
  ContentChildren,
  TemplateRef,
  QueryList,
} from '@angular/core';
import { IProduct } from '../../interfaces/produtc.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() 'dataSource': any[];
  @Input() headerTemplate: any;
  @Input() rowTemplate: any;
  constructor() {}

  ngOnInit(): void {}
}
