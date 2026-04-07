import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/Character.interface.ts';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})

export class CharacterListComponent { 

  // el input recibe un array de personajes del componente padre, es requerido y se tipa con la interfaz Character.
   // El input() crea una señal que contiene el valor enviado por el padre
  characters = input.required<Character[]>()
  
  listName = input.required<string>();

  
   getPowerClass = (power: number) => {
    if (power >= 9000) return 'text-danger';
    if (power > 8000 && power < 9000) return 'text-warning';
    return 'text-success';
  };

}
