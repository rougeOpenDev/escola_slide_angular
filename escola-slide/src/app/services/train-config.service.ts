import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainConfigService {
  private step: number = 1;

  getStep(): number {
    return this.step;
  }

  setStep(step: number): void {
    this.step = step;
  }
}
