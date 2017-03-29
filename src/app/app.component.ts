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
  currentTime = new Date();
  hours = this.currentTime.getHours();
  minutes = this.currentTime.getMinutes();
  time = this.currentTime.getHours();

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
      currentKeg.totalSells =   currentKeg.totalSells + currentKeg.pintPrice;
      currentKeg.profit = currentKeg.totalSells - currentKeg.price;

    } else {
      alert(currentKeg.brand + " is empty!" )
    }

    if(currentKeg.pint <= 10) {
      currentKeg.alert = "Atention!!!"
    }


  }

  profitColor(currentKeg) {
    if (currentKeg.totalSells < currentKeg.price) {
      return "red";
    } else {
      return "green";
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

  happyHour(currentKeg) {
    if (this.hours >= 16) {
      for (var keg of this.kegs)
      keg.pintPrice = keg.pintPrice - 2;
    }
    return true;
  }


}

export class Keg {
  pint: number = 124;
  alert: string = "";
  totalSells: number = 0;
  profit: number = 0;

  constructor(public brand: string, public price: number, public alcoholContent: number, public pintPrice: number) {}
}
