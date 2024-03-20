import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { DbzService } from '../services/dbz-service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //Toda la información que se había puesto aquí se ha movido a un servicio (dbz-service.ts)

  //En el constructor que se borró al crear el componente moveremos todas las dependencias y las estamos inyectando

  //Se recomienda poner los servicios privados 👇🏻 para solucionar los errores que tenemos se pueden usar los getters

  constructor( private dbzService: DbzService) {}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string):void {
    this.dbzService.deleteCharacterById (id);
  }

  onNewCharacter( character: Character) {
    this.dbzService.addCharacter( character);
  }

}
