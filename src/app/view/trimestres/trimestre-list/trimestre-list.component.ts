import {Component, OnInit} from '@angular/core';
import {Trimestre} from "../../../controller/model/trimestre";
import {TrimestreService} from "../../../controller/service/trimestre.service";

@Component({
  selector: 'app-trimestre-list',
  templateUrl: './trimestre-list.component.html',
  styleUrls: ['./trimestre-list.component.css']
})
export class TrimestreListComponent implements OnInit{
  constructor(private trimestreService: TrimestreService) { }
  ngOnInit(): void {
    this.findAll();
  }
  public deleteByRef(trimestre:Trimestre , index: number): void{
    console.log('haaa ref' +  trimestre.ref);
    this.trimestreService.deleteByRef(trimestre.ref).subscribe(data => {
      if (data > 0){
        this.trimestres.splice(index,1);
      }else{
        alert('DEL ERROR');
      }
    });
  }
  public findAll(): void{
    this.trimestreService.findAll().subscribe(data => this.trimestres = data);
  }
  get trimestre(): Trimestre {
    return this.trimestreService.trimestre;
  }

  set trimestre(value: Trimestre) {
    this.trimestreService.trimestre = value;
  }

  get trimestres(): Array<Trimestre> {
    return this.trimestreService.trimestres;
  }

  set trimestres(value: Array<Trimestre>) {
    this.trimestreService.trimestres= value;
  }
}
