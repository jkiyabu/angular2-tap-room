import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByAlcoholContent: string = "allKegs";

  onChange(optionFromMenu) {
    this.filterByAlcoholContent = optionFromMenu;
  }

  editButtonHasBeenClicked(currentKeg: Keg[]) {
    this.clickSender.emit(currentKeg);
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


}
