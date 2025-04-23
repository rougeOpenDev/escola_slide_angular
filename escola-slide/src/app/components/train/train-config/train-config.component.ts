import { Component } from '@angular/core';
import { TrainConfigService } from '../../../services/train-config.service';

@Component({
  selector: 'app-train-config',
  templateUrl: './train-config.component.html',
  styleUrls: ['./train-config.component.scss']
})
export class TrainConfigComponent {

  
  public manobras = { "manobras": [
      { "tipo": "vertical", "nome": "McTwist", "descricao": "Rotação de 540 graus no ar em uma rampa vertical." },
      { "tipo": "vertical", "nome": "Indy Grab", "descricao": "Segurar o shape com a mão traseira enquanto está no ar." },
      { "tipo": "vertical", "nome": "Mute Grab", "descricao": "Segurar o shape com a mão dianteira entre os pés." },
      { "tipo": "vertical", "nome": "Lien Air", "descricao": "Indy Grab com rotação frontal de 180°." },
      { "tipo": "vertical", "nome": "Stalefish", "descricao": "Segurar o shape atrás do pé traseiro com a mão traseira." },
      { "tipo": "vertical", "nome": "Japan Air", "descricao": "Segurar o shape com a mão dianteira e flexionar as pernas." },
      { "tipo": "vertical", "nome": "Christ Air", "descricao": "Largar o skate no ar e abrir os braços como uma cruz." },
      { "tipo": "vertical", "nome": "540", "descricao": "Girar 540° no ar antes de pousar." },
      { "tipo": "vertical", "nome": "720", "descricao": "Girar 720° no ar antes de pousar." },
      { "tipo": "borda", "nome": "Nosegrind", "descricao": "Deslizar sobre a borda apoiado apenas no truck dianteiro." },
      { "tipo": "borda", "nome": "5-0 Grind", "descricao": "Deslizar sobre a borda apoiado apenas no truck traseiro." },
      { "tipo": "borda", "nome": "Smith Grind", "descricao": "Deslizar com o truck traseiro na borda enquanto o dianteiro fica do lado oposto." },
      { "tipo": "borda", "nome": "Feeble Grind", "descricao": "Deslizar com o truck traseiro enquanto o shape cruza a borda." },
      { "tipo": "corrimão", "nome": "Boardslide", "descricao": "O shape desliza perpendicularmente ao corrimão, entre os trucks." },
      { "tipo": "corrimão", "nome": "Lipslide", "descricao": "Semelhante ao Boardslide, mas cruzando o shape por cima do corrimão antes de deslizar." },
      { "tipo": "corrimão", "nome": "50-50 Grind", "descricao": "Ambos os trucks deslizam pelo corrimão." },
      { "tipo": "solo", "nome": "Ollie", "descricao": "Pulo básico onde o skatista levanta o shape sem usar as mãos." },
      { "tipo": "solo", "nome": "Kickflip", "descricao": "O skate gira em torno do seu eixo horizontal enquanto o skatista pula." },
      { "tipo": "solo", "nome": "Heelflip", "descricao": "Versão do Kickflip, mas o skate gira para o lado contrário com o calcanhar." }
    ]
  };
  

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
