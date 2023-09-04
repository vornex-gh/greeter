import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {

  constructor() { }

  getSaludo(): string {
    const horaActual = new Date().getHours();
    if (horaActual >= 5 && horaActual < 12) {
      return 'Good morning';
    } else if (horaActual >= 12 && horaActual < 18) {
      return 'Good afternoon';
    } else {
      return 'Good night';
    }
  }
}
