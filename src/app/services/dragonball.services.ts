
import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/Character.interface.ts';


function loadFromLocalStorage(): Character[] {
  const data = localStorage.getItem('characters');
  return data ? JSON.parse(data) : [];
}


@Injectable({
  providedIn: 'root'
})
export class DragonballServices {

    characters = signal<Character[]>(loadFromLocalStorage());


  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  }); 

  addCharacter(newCharacter: Character) {
    this.characters.update(chars => [...chars, newCharacter]);
  }


}
