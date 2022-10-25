import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public nom: string;
  public color: string = "red";
  constructor() {
    this.nom = "dasha";
  }

  public changeColor(): void {
    this.color == "red" ? (this.color = "green") : this.color == "red";
  }

  ngOnInit(): void {}
}
