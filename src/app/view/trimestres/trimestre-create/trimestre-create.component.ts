import {Component, OnInit} from '@angular/core';
import {TrimestreService} from "src/app/controller/service/trimestre.service";
import {Trimestre} from "src/app/controller/model/trimestre";

@Component({
  selector: 'app-trimestre-create',
  templateUrl: './trimestre-create.component.html',
  styleUrls: ['./trimestre-create.component.css']
})
export class TrimestreCreateComponent implements OnInit{

  constructor(private trimestreService: TrimestreService) { }
  ngOnInit(): void{
  }
  public save(): void{
    this.trimestreService.save().subscribe(data=>{
    if(data == 1 ){
      this.trimestres.push({...this.trimestre});
      alert('SAVE SUCCESS');
    }else{
      alert('SAVE ERROR ::: REF EXIST');
    }
    });
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
