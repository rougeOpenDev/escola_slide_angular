import { Injectable } from '@angular/core';
import { Manobra } from '../models/manobra';

@Injectable({
  providedIn: 'root'
})
export class TricksService {

  private manobras: Manobra[] = [
    { id: 1, tipo: ["vertical"], base: ["base", "fakie", "switch"], nome: "McTwist", descricao: "Rotação de 540 graus no ar em uma rampa vertical." },
    { id: 2, tipo: ["vertical"], base: ["base", "fakie"], nome: "Indy Grab", descricao: "Segurar o shape com a mão traseira enquanto está no ar." },
    { id: 3, tipo: ["vertical"], base: ["base", "switch"], nome: "Mute Grab", descricao: "Segurar o shape com a mão dianteira entre os pés." },
    { id: 4, tipo: ["vertical"], base: ["base"], nome: "Lien Air", descricao: "Indy Grab com rotação frontal de 180°." },
    { id: 5, tipo: ["vertical"], base: ["base", "switch"], nome: "Stalefish", descricao: "Segurar o shape atrás do pé traseiro com a mão traseira." },
    { id: 6, tipo: ["vertical"], base: ["base"], nome: "Japan Air", descricao: "Segurar o shape com a mão dianteira e flexionar as pernas." },
    { id: 7, tipo: ["vertical"], base: ["base"], nome: "Christ Air", descricao: "Largar o skate no ar e abrir os braços como uma cruz." },
    { id: 8, tipo: ["vertical"], base: ["base"], nome: "540", descricao: "Girar 540° no ar antes de pousar." },
    { id: 9, tipo: ["vertical"], base: ["base"], nome: "720", descricao: "Girar 720° no ar antes de pousar." },
    { id: 10, tipo: ["vertical"], base: ["base"], nome: "900", descricao: "Girar 900° no ar antes de pousar." },
    { id: 11, tipo: ["vertical"], base: ["base"], nome: "1080", descricao: "Girar 1080° no ar antes de pousar." },
    { id: 12, tipo: ["borda"], base: ["base", "fakie"], nome: "Nosegrind", descricao: "Deslizar sobre a borda apoiado apenas no truck dianteiro." },
    { id: 13, tipo: ["borda"], base: ["base", "switch"], nome: "5-0 Grind", descricao: "Deslizar sobre a borda apoiado apenas no truck traseiro." },
    { id: 14, tipo: ["borda"], base: ["base"], nome: "Smith Grind", descricao: "Deslizar com o truck traseiro na borda enquanto o dianteiro fica do lado oposto." },
    { id: 15, tipo: ["borda"], base: ["base"], nome: "Feeble Grind", descricao: "Deslizar com o truck traseiro enquanto o shape cruza a borda." },
    { id: 16, tipo: ["borda", "corrimão"], base: ["base", "switch"], nome: "Crooked Grind", descricao: "Deslizar apenas com o truck dianteiro inclinado na borda." },
    { id: 17, tipo: ["borda", "corrimão"], base: ["base", "switch"], nome: "Noseslide", descricao: "Deslizar com a parte frontal do shape sobre a borda ou corrimão." },
    { id: 18, tipo: ["borda", "corrimão"], base: ["base", "switch"], nome: "Tailslide", descricao: "Deslizar com a parte traseira do shape sobre a borda ou corrimão." },
    { id: 19, tipo: ["solo"], base: ["base", "switch", "fakie"], nome: "Ollie", descricao: "Pulo básico onde o skatista levanta o shape sem usar as mãos." },
    { id: 20, tipo: ["solo"], base: ["base", "switch", "fakie"], nome: "Kickflip", descricao: "O skate gira em torno do seu eixo horizontal enquanto o skatista pula." },
    { id: 21, tipo: ["solo"], base: ["base", "switch", "fakie"], nome: "Heelflip", descricao: "Versão do Kickflip, mas o skate gira para o lado contrário com o calcanhar." },
    { id: 22, tipo: ["solo"], base: ["base", "switch"], nome: "Hardflip", descricao: "Combinação de Kickflip com um Frontside Pop Shove-it." },
    { id: 23, tipo: ["solo"], base: ["base", "switch"], nome: "Varial Kickflip", descricao: "Combinação de Kickflip com um Pop Shove-it." },
    { id: 24, tipo: ["solo"], base: ["base", "switch"], nome: "360 Flip", descricao: "O skate faz um Kickflip enquanto gira 360° no ar." },
    { id: 25, tipo: ["solo"], base: ["base", "switch"], nome: "Bigspin", descricao: "Combinação de 360 Pop Shove-it com rotação do corpo de 180°." },
    { id: 26, tipo: ["solo"], base: ["base", "switch"], nome: "Laser Flip", descricao: "Combinação de Heelflip com um 360 Shove-it." },
    { id: 27, tipo: ["solo"], base: ["base", "switch"], nome: "Pressure Flip", descricao: "Flip feito apenas com pressão dos pés sem uso do pop." },
    { id: 28, tipo: ["solo"], base: ["base", "switch"], nome: "Impossible", descricao: "O skate gira verticalmente ao redor do pé traseiro." },
    { id: 29, tipo: ["solo"], base: ["base", "switch", "fakie"], nome: "Shove-it", descricao: "O skate gira 180° sem girar no eixo horizontal." },
    { id: 30, tipo: ["solo"], base: ["base", "switch", "fakie"], nome: "Pop Shove-it", descricao: "Versão mais alta do Shove-it, com um pop na execução." },
    { id: 31, tipo: ["solo"], base: ["base", "switch"], nome: "No Comply", descricao: "Tirar o pé dianteiro do skate e bater o tail para fazê-lo girar." },
    { id: 32, tipo: ["solo"], base: ["base", "switch"], nome: "Darkslide", descricao: "Deslizar de cabeça para baixo, com o grip tape virado para baixo." }
  ];

  filtrarManobras(termo: string):Manobra[]{
    const resultado = this.manobras.filter((manobra)=>manobra.nome.toLowerCase().includes(termo.toLowerCase()) || manobra.descricao.toLowerCase().includes(termo.toLowerCase()) || manobra.tipo.some((tipo)=> tipo.toLowerCase().includes(termo.toLowerCase())) || manobra.base.some((base)=> base.toLowerCase().includes(termo.toLowerCase()))
  );

  if(resultado.length === 0 ){
    return[
      {
        id: 0,
        nome: "Não listado",
        descricao: "Nenhuma manobra encontrada.",
        tipo: ["-"],
        base: ["-"]
      }
    ]
  }
  return resultado
  }
  getManobras(): Manobra[] {
    return this.manobras;
  }

  getManobrasById(id:number): Manobra | undefined {
    return this.manobras.find(manobra => manobra.id == id)
  }
}
