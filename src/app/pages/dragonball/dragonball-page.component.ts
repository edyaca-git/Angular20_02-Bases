import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  // importo ngClass para usarlo en el template y mostrar el color del texto dependiendo del poder del personaje.
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {

  name = signal('Goten');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Yamcha', power: 3000 },
  ]);


  // solo se usapara mostrarlo con computed aqui todos son rojos ya que ponerle color diferente es mas complejo, 
  // pero se puede hacer con una funcion que reciba el poder y devuelva la clase correspondiente.
  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  });

 // esta funcion se puede usar en el template para mostrar el color del texto dependiendo del poder del personaje.
  getPowerClass(power: number): string {
    if (power >= 9000) return 'text-danger';
    if (power > 8000 && power < 9000)  return 'text-warning';
    return 'text-success';
  }

  addCharacter() {
    if ( !this.name() || !this.power() || this.power() < 0) 
      return;

    const newCharacter: Character = {
      id: Math.max(...this.characters().map(c => c.id)) + 1,
      name: this.name(),
      power: this.power()
    };

   
    this.characters.update(chars => [...chars, newCharacter]);
    this.resetFields() ;

  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
