import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout-tache',
  templateUrl: './ajout-tache.component.html',
  styleUrls: ['./ajout-tache.component.css']
})
export class AjoutTacheComponent {
  @Output() tacheToAdd:EventEmitter<any> = new EventEmitter();
  handleAdd(myForm:NgForm){
    this.tacheToAdd.emit(myForm.value);
    myForm.reset();
  }
}
