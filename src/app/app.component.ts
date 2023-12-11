import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prueba-devsu';

  items: any[] = []; // Tu lista de elementos
  displayedItems: any[] = [];
  resultsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
  pages: number[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.updateDisplayedItems();
  }

  updateDisplayedItems() {
    // Lógica para paginar y filtrar elementos
    // Aquí debes implementar la lógica específica para tu aplicación
  }

  changePageSize() {
    this.currentPage = 1;
    this.updateDisplayedItems();
  }

  search() {
    this.currentPage = 1;
    this.updateDisplayedItems();
  }

  setPage(page: number) {
    this.currentPage = page;
    this.updateDisplayedItems();
  }
}
