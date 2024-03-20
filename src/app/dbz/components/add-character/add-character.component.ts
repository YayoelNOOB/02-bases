import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // El eventEmitter nos ayuda a crear una instancia de emisor de eventos. Se tiene que decorar con @Output()
  // y sirve para agregar al personaje.
  // El output nos ayuda a subscribirnos lo que significa que estamos escuchando las emisiones de un objeto
  @Output()
  //Esta es la instancia de emisor de evento
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power: 0
  };

  emitCharacter(): void{

    //Debuger es un breakpoint que al llegar a este, se para la operación.
    //debugger;

    console.log(this.character);
    // El if es para que nadie pueda enviar un personaje sin nombre
    if( this.character.name.length === 0 ) return;
    //Si tiene nombre hay que emitir el personaje con la siguiente línea
    this.onNewCharacter.emit(this.character);

    // Esta línea es para que al dar un enter o en el botón nos limpie nuestros campos de name y power
    this.character = { name: '', power: 0 };
  }

}
