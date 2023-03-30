
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-tache-executer',
  templateUrl: './tache-executer.component.html',
  styleUrls: ['./tache-executer.component.css']
})
export class TacheExecuterComponent {
  @Output() tacheToDelete: EventEmitter<any> = new EventEmitter();
  constructor (private crudService : CrudService, private router : ActivatedRoute) {}

  handleDelete(){ 
    this.tacheToDelete.emit();
  }
  
  @Input() tache:any;
    id: any ;
    ngOnInit() {
    this.router.paramMap.subscribe(params=>{ this.id=params.get('id');
    });
    this.crudService.getOne(+this.id).subscribe((data: any) => this.tache= data);
  }
}
