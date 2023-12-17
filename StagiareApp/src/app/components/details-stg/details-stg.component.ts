import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {update} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";
import {Stagiare} from "../../stagiare";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceStgService} from "../../services/service-stg.service";

@Component({
  selector: 'app-details-stg',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './details-stg.component.html',
  styleUrl: './details-stg.component.css'
})
export class DetailsStgComponent implements OnInit{
  /*
stagiare={
  id:1,
  nom:"Omar",
  prenom:"faji",
  adresseamil:"OmarFj@gmail.com"
}
  etatStg: boolean=false;

  modifierStg() {
    this.stagiare={
      id:2,
      nom:"karim",
      prenom:"itadori",
      adresseamil:"karimIt@gmail.com"
    }
  }

    protected readonly update = update;
*/
  id:number=0;
  stg:Stagiare=new Stagiare();
  constructor(private route:ActivatedRoute,private router:Router,private stgService:ServiceStgService) {

  }
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.stgService.getStg(this.id).subscribe(
        data=>{
          console.log(data)
          this.stg=data;
        },error=>console.log(error)
    );
  }

  updateStg() {
    this.stgService.updateStg(this.id,this.stg).subscribe(
        data=>
          console.log(data),
              error=>console.log(error));
          this.router.navigate(['/list']);


  }
}
