import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  isAliveCard:boolean = true;
  produtos:string[] = [];
  menuType:string = "";

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ];
  }

  adicionar() {
    this.produtos.push("Lucas");
  }
  remover(index: number){
    this.produtos.splice(index,1);
  }

  ngOnInit(): void {
  }

}

