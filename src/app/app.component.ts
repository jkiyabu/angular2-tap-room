import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  selectedKeg = null;
  addingTap = null;
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

  finishedEditing() {
    this.selectedKeg = null;
  }


  addKeg(newKegFromChild: Keg) {
      this.kegs.push(newKegFromChild);
  }

  editKeg(currentKeg) {
    this.selectedKeg = currentKeg;
  }

// Done------------------------------
  

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
}
