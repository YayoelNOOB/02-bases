import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // El eventEmitter nos ayuda a crear una instancia de emisor de eventos. Se tiene que decorar con @Output()
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name:'',
    power: 0
  };

  emitCharacter(): void{
    console.log(this.character);
    // El if es para que nadie pueda enviar un personaje sin nombre
    if( this.character.name.length === 0 ) return;
    //Si tiene nombre hay que emitir el personaje con la siguiente línea
    this.onNewCharacter.emit(this.character);

    this.character.name = '';
    this.character.power = 0
  }

}
