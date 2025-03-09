import { Component } from '@angular/core';
import { TrainConfigService } from '../../../services/train-config.service';

@Component({
  selector: 'app-train-config',
  templateUrl: './train-config.component.html',
  styleUrls: ['./train-config.component.scss']
})
export class TrainConfigComponent {
  step: number;

  constructor(private trainConfigService: TrainConfigService) {
    this.step = this.trainConfigService.getStep();
  }

  nextStep() {
    this.trainConfigService.setStep(this.step + 1);
    this.step = this.trainConfigService.getStep();
  }

  previousStep() {
    this.trainConfigService.setStep(this.step - 1);
    this.step = this.trainConfigService.getStep();
  }
}
