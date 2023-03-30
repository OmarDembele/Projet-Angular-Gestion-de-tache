import { Component, Input } from '@angular/core';
import { TacheModel } from '../model/TacheModel';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent {
  event :any;
  constructor(private crudService : CrudService){}

  taches:any = this.crudService.getAll().subscribe((data: any)=> this.taches=data);

  addTache(tache:any){
    this.crudService.addTache(tache).subscribe(
      (res: any)=> {
        console.log(res);
        this.crudService.getAll().subscribe(
          (data: any)=> this.taches =data
        );
      },
      (err: any)=>console.log(err)
    );
  };

  modifyTache(tache: TacheModel){
    this.deleteTache(tache);
    this.addTache(tache);
    this.crudService.updateTache(this.taches).subscribe((res: any)=> {
      console.log(res);
        this.crudService.getAll().subscribe(
          (data: any)=> this.taches=data
        );
    },
    (err: any)=>console.log(err)
  )
  }

  deleteTache(tache: TacheModel) {
    this.crudService.deleteTache(tache).subscribe(
      (res: any)=>{
        console.log(res);
        this.crudService.getAll().subscribe(
          (data: any)=> this.taches=data
        );
      },
      (err: any)=>console.log(err)
    )
  }

}
