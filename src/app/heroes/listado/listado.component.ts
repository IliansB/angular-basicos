import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroeBorrado: string = '';
  public heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado);
  }
}
