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
    this.step = this.trainConfigService.step;
  }

  nextStep() {
    this.trainConfigService.step = this.step + 1;
    this.step = this.trainConfigService.step;
  }

  previousStep() {
    this.trainConfigService.step = this.step - 1;
    this.step = this.trainConfigService.step;
  }
}
