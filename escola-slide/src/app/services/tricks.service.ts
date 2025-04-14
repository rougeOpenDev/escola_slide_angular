import { Injectable } from '@angular/core';
import { Manobra } from '../models/manobra';

@Injectable({
  providedIn: 'root'
})
export class TricksService {

  private manobras: Manobra[] = [
    { id: 1, nome: 'Ollie', descricao: 'Manobra básica de skate...' },
    { id: 2, nome: 'Kickflip', descricao: 'Flip básico...' },
    { id: 3, nome: 'Heelflip', descricao: 'Flip com o calcanhar...' },
    { id: 4, nome: 'Pop Shove-it', descricao: 'Giro de 180 graus...' },
    { id: 5, nome: 'Frontside 180', descricao: 'Giro de 180 graus para frente...' },
    { id: 6, nome: 'Backside 180', descricao: 'Giro de 180 graus para trás...' },
    { id: 7, nome: 'Varial Kickflip', descricao: 'Combinação de shove-it e kickflip...' },
    { id: 8, nome: 'Hardflip', descricao: 'Combinação de frontside shove-it e kickflip...' },
    { id: 9, nome: 'Inward Heelflip', descricao: 'Combinação de backside shove-it e heelflip...' },
    { id: 10, nome: '360 Flip', descricao: 'Combinação de 360 shove-it e kickflip...' },
    { id: 11, nome: 'Laser Flip', descricao: 'Combinação de 360 shove-it e heelflip...' },
    { id: 12, nome: 'Bigspin', descricao: 'Giro de 360 graus com shove-it...' },
    { id: 13, nome: 'Impossible', descricao: 'Giro completo da prancha ao redor do pé...' },
    { id: 14, nome: 'No Comply', descricao: 'Manobra feita sem um dos pés na prancha...' },
    { id: 15, nome: 'Boneless', descricao: 'Manobra feita segurando a prancha com a mão...' },
    { id: 16, nome: 'Manual', descricao: 'Equilíbrio em duas rodas...' },
    { id: 17, nome: 'Nose Manual', descricao: 'Equilíbrio em duas rodas na parte frontal...' },
    { id: 18, nome: 'Smith Grind', descricao: 'Grind com a parte traseira da prancha...' },
    { id: 19, nome: 'Feeble Grind', descricao: 'Grind com a parte traseira da prancha e o eixo dianteiro...' },
    { id: 20, nome: '50-50 Grind', descricao: 'Grind com ambos os eixos...' },
    { id: 21, nome: '5-0 Grind', descricao: 'Grind com o eixo traseiro...' },
    { id: 22, nome: 'Nose Grind', descricao: 'Grind com o eixo dianteiro...' },
    { id: 23, nome: 'Crooked Grind', descricao: 'Grind com o eixo dianteiro em ângulo...' },
    { id: 24, nome: 'Overcrook Grind', descricao: 'Grind com o eixo dianteiro em ângulo extremo...' },
    { id: 25, nome: 'Bluntslide', descricao: 'Slide com a parte traseira da prancha...' },
    { id: 26, nome: 'Noseslide', descricao: 'Slide com a parte frontal da prancha...' },
    { id: 27, nome: 'Tailslide', descricao: 'Slide com a parte traseira da prancha...' },
    { id: 28, nome: 'Boardslide', descricao: 'Slide com a parte central da prancha...' },
    { id: 29, nome: 'Lipslide', descricao: 'Slide com a parte central da prancha após um ollie...' },
    { id: 30, nome: 'Darkslide', descricao: 'Slide com a parte de baixo da prancha...' },
    { id: 31, nome: 'Casper Flip', descricao: 'Flip com a prancha de cabeça para baixo...' },
    { id: 32, nome: 'Primo Slide', descricao: 'Slide com a prancha de lado...' },
    { id: 33, nome: 'Primo Flip', descricao: 'Flip com a prancha de lado...' },
    { id: 34, nome: 'Hospital Flip', descricao: 'Combinação de kickflip e casper flip...' },
    { id: 35, nome: 'Dragon Flip', descricao: 'Combinação de 360 flip e casper flip...' },
    { id: 36, nome: 'Gazelle Flip', descricao: 'Combinação de 540 shove-it e kickflip...' },
    { id: 37, nome: 'Bigflip', descricao: 'Combinação de bigspin e kickflip...' },
    { id: 38, nome: 'Bigheel', descricao: 'Combinação de bigspin e heelflip...' },
    { id: 39, nome: 'Double Kickflip', descricao: 'Dois kickflips em um salto...' },
    { id: 40, nome: 'Double Heelflip', descricao: 'Dois heelflips em um salto...' },
    { id: 41, nome: 'Triple Kickflip', descricao: 'Três kickflips em um salto...' },
    { id: 42, nome: 'Triple Heelflip', descricao: 'Três heelflips em um salto...' },
    { id: 43, nome: 'Quad Kickflip', descricao: 'Quatro kickflips em um salto...' },
    { id: 44, nome: 'Quad Heelflip', descricao: 'Quatro heelflips em um salto...' },
    { id: 45, nome: 'Pressure Flip', descricao: 'Flip usando pressão dos pés...' },
    { id: 46, nome: 'Underflip', descricao: 'Flip feito com a parte de baixo da prancha...' },
    { id: 47, nome: 'Late Flip', descricao: 'Flip feito no final do salto...' },
    { id: 48, nome: 'Late Shove-it', descricao: 'Shove-it feito no final do salto...' },
    { id: 49, nome: 'Late Kickflip', descricao: 'Kickflip feito no final do salto...' },
    { id: 50, nome: 'Late Heelflip', descricao: 'Heelflip feito no final do salto...' }
  ];

  getManobras(): Manobra[] {
    return this.manobras;
  }
}
