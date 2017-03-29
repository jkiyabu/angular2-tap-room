import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  addingTap = null;
  selectedKeg = null;
  epicodus = null;
  alert = "";
  totalSells = 0;

  kegs: Keg[] = [
    new Keg('Bells Two Hearted', 100, 5, 3),
    new Keg('Great Divide Denver', 150, 7, 4),
    new Keg('Narragansett', 175, 7, 6)
  ];

  finishedAdding(brand, price, alcoholContent, pintPrice) {
    this.kegs.push(new Keg(brand, price, alcoholContent, pintPrice));
    this.addingTap = null;
  }

  addTap() {
    this.addingTap = true;

  }

  editKeg(currentKeg) {
    this.selectedKeg = currentKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  sellPint(currentKeg) {
    if (currentKeg.pint > 0) {
      currentKeg.pint =  currentKeg.pint - 1;
      this.totalSells = this.totalSells + currentKeg.pintPrice;
    } else {
      alert(currentKeg.brand + " is empty!" )
    }

    if(currentKeg.pint <= 10) {
      currentKeg.alert = "Atention!!!"
    }
  }

  kegLevel(currentKeg) {
    if (currentKeg.pint <= 62 && currentKeg.pint > 10) {
      return "yellow";
    } else if (currentKeg.pint <= 10) {
      return "red";
    } else {
      return "green";
    }
  }


}

export class Keg {
  pint: number = 124;
  alert: string = "";
  constructor(public brand: string, public price: number, public alcoholContent: number, public pintPrice: number) {}
}