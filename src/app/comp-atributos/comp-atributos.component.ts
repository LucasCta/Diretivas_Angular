import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo:string = "enabled";
  trocar():void {
    if (this.estilo === "disabled") {
      this.estilo = "enabled";
    } else {
      this.estilo = "disabled";
    }
  }

  corFundo:string = "Aqua";
  corFonte:string = "Green";

  item:string = "";
  lista:string[] = [];
  adicionarLista() {
    this.lista.push(this.item);
  }

  isEnabledBlock:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
