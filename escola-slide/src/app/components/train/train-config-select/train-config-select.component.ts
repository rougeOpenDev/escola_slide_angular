import { Component } from '@angular/core';
import { Manobra } from 'src/app/models/manobra';
import { TrainConfigService } from 'src/app/services/train-config.service';
import { TricksService } from 'src/app/services/tricks.service';

@Component({
  selector: 'app-train-config-select',
  templateUrl: './train-config-select.component.html',
  styleUrls: ['./train-config-select.component.scss']
})
export class TrainConfigSelectComponent {

  manobras: Manobra[] = [];        // lista de manobras disponíveis
  filteredManobras: Manobra[] = [];
  selectedManobras: Manobra[] = []; // estado atual de manobras selecionadas
  searchTerm: string = '';

  constructor(
    private trainConfigService: TrainConfigService,
    private tricksService: TricksService
  ) {}

  ngOnInit(): void {
    // Buscar manobras do serviço
    this.manobras = this.tricksService.getManobras();
    this.filteredManobras = [...this.manobras];

    // Carrega as manobras já selecionadas do serviço
    this.selectedManobras = this.trainConfigService.selectedManobras;
  }

  onSearchChange(): void {
    this.filteredManobras = this.tricksService.filtrarManobras(this.searchTerm);
  }

  isSelected(manobra: Manobra): boolean {
    return this.selectedManobras.some(m => m.id === manobra.id);
  }

  toggleManobra(manobra: Manobra): void {
    if (this.isSelected(manobra)) {
      this.removeManobra(manobra);
    } else {
      this.selectedManobras.push(manobra);
    }
    // Atualiza no serviço
    this.trainConfigService.selectedManobras = this.selectedManobras;
  }

  removeManobra(manobra: Manobra): void {
    this.selectedManobras = this.selectedManobras.filter(m => m.id !== manobra.id);
    this.trainConfigService.selectedManobras = this.selectedManobras;
  }

  goBack(): void {
    // Navegar ou mudar step
  }

  goNext(): void {
    // Navegar ou mudar step
  }
}
