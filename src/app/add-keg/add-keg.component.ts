import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {

  @Output() newKegSender = new EventEmitter();

  finishedAdding(brand, price, alcoholContent, pintPrice) {
    var newKegToAdd: Keg = new Keg(brand, price, alcoholContent, pintPrice);
    this.newKegSender.emit(newKegToAdd);
    // this.addingTap = null;
  }




}
