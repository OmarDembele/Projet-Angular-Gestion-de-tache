

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TacheModel } from '../model/TacheModel';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-liste-tache',
  templateUrl: './liste-tache.component.html',
  styleUrls: ['./liste-tache.component.css']
})
export class ListeTacheComponent {

 constructor (private crudService : CrudService, private router : ActivatedRoute) {}
  @Input() tache:any;
  @Output() tacheToDelete:EventEmitter<any> = new EventEmitter();
  @Output() tacheToEdit : EventEmitter<any> = new EventEmitter();
  @Output() tacheToEdit2 : EventEmitter<any> = new EventEmitter();

  handleDelete(){ 
    this.tacheToDelete.emit();
  }

  handleEdit(myForm2: NgForm){
    this.handleDelete();
    this.tache.libelle=myForm2.value.libelle;
    this.tache.etat=myForm2.value.etat;
    this.tacheToEdit.emit(this.tache);
  }
  
  handleEdit2(myForm3: NgForm){
    this.tache.etat="EXECUTER";
    this.tacheToEdit.emit(myForm3);
    this.tacheToEdit2.emit(myForm3); 
  }

  
    id: any ;
    ngOnInit() {
    this.router.paramMap.subscribe(params=>{ this.id=params.get('id');
    });
    this.crudService.getOne(+this.id).subscribe((data: any) => this.tache= data);
  }

}
