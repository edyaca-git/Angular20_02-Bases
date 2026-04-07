import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/Character.interface.ts';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  // El output() crea un EventEmitter que se usará para emitir el nuevo personaje al componente padre.
  newCharacter = output<Character>();

  addCharacter() {
      if ( !this.name() || !this.power() || this.power() < 0) 
        return;
  
      const newCharacter: Character = {
        id: Math.floor(Math.random() * 10000), // Genera un ID aleatorio para el nuevo personaje  
        name: this.name(),
        power: this.power()
      };
  
     
      // Emitimos o enviamos el nuevo personaje al componente padre para que lo agregue a la lista de personajes.
      this.newCharacter.emit(newCharacter); 
      this.resetFields() ;
  
    }
  
    resetFields() {
      this.name.set('');
      this.power.set(0);
    }
}

