import { Component, signal } from "@angular/core"; 

@Component({
    templateUrl: './counter-page.component.html',
    styleUrl: './counter-page.component.css'


})
export class CounterPagesComponent {

    counter = 10;

    counterSignal = signal(10);

    constructor() {    
        // No es recomendable usar setInterval en Angular, pero lo hago para 
        // mostrar la diferencia entre usar un signal y no usarlo.    
        setInterval(() => {
            // Si pongo la linea this.counter += 1;  sola por el zonelness, Angular no se 
            // entera que el valor de counter ha cambiado, por lo tanto no se actualiza la vista.
            this.counter += 1; 
            // En cambio, si uso el signal, Angular se entera que el valor ha cambiado y actualiza la vista.
            // la siguiente linea es como se debe usar el signal para actualizar su valor.  
            // puedo provar descomentar y comentar la linea del signal para ver la diferencia.
            //this.counterSignal.update((current) => current + 1);
            console.log('tickt');
        }, 2000);   
    }


    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update((current) => current + value);
    }
    decreaseBy(value: number) {
        if (this.counter <= 0) return;
        this.counter -= value;
        this.counterSignal.update((current) => current - value);
    }
    set() {
        this.counter = 0;
        this.counterSignal.set(0);
    }

}