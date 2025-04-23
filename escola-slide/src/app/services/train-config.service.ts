import { Injectable } from '@angular/core';
import { Manobra } from '../models/manobra';

@Injectable({
  providedIn: 'root'
})
export class TrainConfigService {

  private _step: number = 1;
  private _selectedManobras: Manobra[] = [];

  // métodos para adicionar/remover manobras, limpar estado, etc.
  addManobra(m: Manobra) { /* ... */ }
  removeManobra(m: Manobra) { /* ... */ }

  get step(): number {
    return this._step;
  }

  set step(step: number) {
    this._step = step;
  }

  get selectedManobras(): Manobra[] {
    return this._selectedManobras;
  }

  set selectedManobras(manobras: Manobra[]) {
    this._selectedManobras = manobras;
  }
}
