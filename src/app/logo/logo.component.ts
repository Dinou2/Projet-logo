import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  public logoListe:any=[{
    id:1,
    nom:"Logo n°1",
    descrp:"Consulter N°1",
    img:"/assets/img/l1.jpg",
    statut: "news",
  },
  {
    id:2,
    nom:"Logo n°2",
    descrp:"Consulter N°2",
    img:"/assets/img/l2.jpg",
    statut: "news",
  },
  {
    id:3,
    nom:"Logo n°3",
    descrp:"Consulter N°3",
    img:"/assets/img/l3.jpg"
  },
  {
    id:4,
    nom:"Logo n°4",
    descrp:"Consulter N°4",
    img:"/assets/img/l4.jpg",
    statut: "news",
  }];

  public newVariable!:boolean;

  afficheNew ():void{
    this.newVariable=!this.newVariable;
  }
  
}
