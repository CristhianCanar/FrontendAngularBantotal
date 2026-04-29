import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-form.html',
  styleUrl: './search-form.css',
})
export class SearchForm {
  idBusqueda!: number;
  title: string = "Buscar";

  @Output() search = new EventEmitter<number>();

  onSubmit(form: any) {
    if (form.valid) {
      this.search.emit(this.idBusqueda);
    }
  }
}
