import { Injectable } from '@angular/core';
import { Manobra } from '../models/manobra';

@Injectable({
  providedIn: 'root'
})
export class TricksService {

  private manobras: Manobra[] = [
    { id: 1, nome: 'Ollie', descricao: 'Manobra básica de skate...' },
    { id: 2, nome: 'Kickflip', descricao: 'Flip básico...' },
    // etc.
  ];

  getManobras(): Manobra[] {
    return this.manobras;
  }
}
