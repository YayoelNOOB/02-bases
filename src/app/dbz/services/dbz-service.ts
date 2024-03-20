import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/characters.interface';


//El decorador Injectable es un decorador que le dice a Angular que es un servicio.
@Injectable({
  //ProvideIn: 'root' nos hace nuestro servicio un singleton y evita que lo pongamos en providers en app.module.ts
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  //Para agregar el nuevo personaje dentro del arreglo se tiene que emitir que es lo que ya hicimos en add-character-components.ts

  addCharacter( character: Character ): void{

    //Aquí se hace un spreed para evitar poner name: character.name, power: character.power y solo ponemos ...character
    const newCharacter: Character = { id: uuid(), ...character };


    //push para agregarlo al final y onshift al inicio del arreglo
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter ( index: number): void{
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById( id: string ){
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
