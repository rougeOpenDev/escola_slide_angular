import { style } from '@angular/animations';
import { StickyDirection } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-destaque-insta',
  templateUrl: './destaque-insta.component.html',
  styleUrl: './destaque-insta.component.scss'
})
export class DestaqueInstaComponent  implements OnInit{

  public manobras = [
    { tipo: ["vertical"], base: ["base", "fakie", "switch"], nome: "McTwist", descricao: "Rotação de 540 graus no ar em uma rampa vertical." },
    { tipo: ["vertical"], base: ["base", "fakie"], nome: "Indy Grab", descricao: "Segurar o shape com a mão traseira enquanto está no ar." },
    { tipo: ["vertical"], base: ["base", "switch"], nome: "Mute Grab", descricao: "Segurar o shape com a mão dianteira entre os pés." },
    { tipo: ["vertical"], base: ["base"], nome: "Lien Air", descricao: "Indy Grab com rotação frontal de 180°." },
    { tipo: ["vertical"], base: ["base", "switch"], nome: "Stalefish", descricao: "Segurar o shape atrás do pé traseiro com a mão traseira." },
    { tipo: ["vertical"], base: ["base"], nome: "Japan Air", descricao: "Segurar o shape com a mão dianteira e flexionar as pernas." },
    { tipo: ["vertical"], base: ["base"], nome: "Christ Air", descricao: "Largar o skate no ar e abrir os braços como uma cruz." },
    { tipo: ["vertical"], base: ["base"], nome: "540", descricao: "Girar 540° no ar antes de pousar." },
    { tipo: ["vertical"], base: ["base"], nome: "720", descricao: "Girar 720° no ar antes de pousar." },
    { tipo: ["vertical"], base: ["base"], nome: "900", descricao: "Girar 900° no ar antes de pousar." },
    { tipo: ["vertical"], base: ["base"], nome: "1080", descricao: "Girar 1080° no ar antes de pousar." },
    { tipo: ["borda"], base: ["base", "fakie"], nome: "Nosegrind", descricao: "Deslizar sobre a borda apoiado apenas no truck dianteiro." },
    { tipo: ["borda"], base: ["base", "switch"], nome: "5-0 Grind", descricao: "Deslizar sobre a borda apoiado apenas no truck traseiro." },
    { tipo: ["borda"], base: ["base"], nome: "Smith Grind", descricao: "Deslizar com o truck traseiro na borda enquanto o dianteiro fica do lado oposto." },
    { tipo: ["borda"], base: ["base"], nome: "Feeble Grind", descricao: "Deslizar com o truck traseiro enquanto o shape cruza a borda." },
    { tipo: ["borda", "corrimão"], base: ["base", "switch"], nome: "Crooked Grind", descricao: "Deslizar apenas com o truck dianteiro inclinado na borda." },
    { tipo: ["borda", "corrimão"], base: ["base", "switch"], nome: "Noseslide", descricao: "Deslizar com a parte frontal do shape sobre a borda ou corrimão." },
    { tipo: ["borda", "corrimão"], base: ["base", "switch"], nome: "Tailslide", descricao: "Deslizar com a parte traseira do shape sobre a borda ou corrimão." },
    { tipo: ["solo"], base: ["base", "switch", "fakie"], nome: "Ollie", descricao: "Pulo básico onde o skatista levanta o shape sem usar as mãos." },
    { tipo: ["solo"], base: ["base", "switch", "fakie"], nome: "Kickflip", descricao: "O skate gira em torno do seu eixo horizontal enquanto o skatista pula." },
    { tipo: ["solo"], base: ["base", "switch", "fakie"], nome: "Heelflip", descricao: "Versão do Kickflip, mas o skate gira para o lado contrário com o calcanhar." },
    { tipo: ["solo"], base: ["base", "switch"], nome: "Hardflip", descricao: "Combinação de Kickflip com um Frontside Pop Shove-it." },
    { tipo: ["solo"], base: ["base", "switch"], nome: "Varial Kickflip", descricao: "Combinação de Kickflip com um Pop Shove-it." },
    { tipo: ["solo"], base: ["base", "switch"], nome: "360 Flip", descricao: "O skate faz um Kickflip enquanto gira 360° no ar." },
    { tipo: ["solo"], base: ["base", "switch"], nome: "Bigspin", descricao: "Combinação de 360 Pop Shove-it com rotação do corpo de 180°." },
    { tipo: ["solo"], base: ["base", "switch"], nome: "Laser Flip", descricao: "Combinação de Heelflip com um 360 Shove-it." },
    { tipo: ["solo"], base: ["base", "switch"], nome: "Pressure Flip", descricao: "Flip feito apenas com pressão dos pés sem uso do pop." },
    { tipo: ["solo"], base: ["base", "switch"], nome: "Impossible", descricao: "O skate gira verticalmente ao redor do pé traseiro." },
    { tipo: ["solo"], base: ["base", "switch", "fakie"], nome: "Shove-it", descricao: "O skate gira 180° sem girar no eixo horizontal." },
    { tipo: ["solo"], base: ["base", "switch", "fakie"], nome: "Pop Shove-it", descricao: "Versão mais alta do Shove-it, com um pop na execução." },
    { tipo: ["solo"], base: ["base", "switch"], nome: "No Comply", descricao: "Tirar o pé dianteiro do skate e bater o tail para fazê-lo girar." },
    { tipo: ["solo"], base: ["base", "switch"], nome: "Darkslide", descricao: "Deslizar de cabeça para baixo, com o grip tape virado para baixo." }
  ];


  
  public manobrasPesquisar: any[] = [];

  public filtrarManobras (termo:String):void{
    this.manobrasPesquisar = this.manobras.filter((manobra)=>
      manobra.nome.toLowerCase().includes(termo.toLowerCase()) ||
    manobra.descricao.toLowerCase().includes(termo.toLowerCase()) ||
    manobra.tipo.some((tipo)=> tipo.includes(termo.toLowerCase()) ||
    manobra.base.some((base)=>base.includes(termo.toLowerCase()))
  )

    )

    if(this.manobrasPesquisar.length === 0){
      this.manobrasPesquisar.push({
        nome: "Não listado",
        descricao: "Nenhuma manobra encontrada.",
        tipo: "-",
        
      })
    }
  }
  ngOnInit() {
    const inputManobras = document.getElementById("inputManobras");
    inputManobras?.addEventListener("input",(event:Event)=>{
      const valor = (event.target as HTMLInputElement).value;
      this.filtrarManobras(valor)
    })
//     this.manobrasPesquisar = [...this.manobras];
//    this.manobrasPesquisar = this.manobras.filter((manobra)=>{
//  return manobra.nome.includes("flip")
//    })
  }

  manobraAprovar(){
    const buttonAdicionar = document.getElementById("buttonAdicionar");
    buttonAdicionar?.addEventListener('click',(event:Event)=>{
      const novaManobra = []
     novaManobra.push(this.manobras)

    })
  }
};


