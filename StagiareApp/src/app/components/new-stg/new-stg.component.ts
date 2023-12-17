import { Component } from '@angular/core';
import {Stagiare} from "../../stagiare";
import {ServiceStgService} from "../../services/service-stg.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-stg',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-stg.component.html',
  styleUrl: './new-stg.component.css'
})
export class NewStgComponent {
stg:Stagiare = new Stagiare();
constructor(private service:ServiceStgService,private router:Router) {
}
ajouterStg(){
  this.service.AddStg(this.stg).subscribe(
      (data)=>{
        console.log("Donnees recuperees",data);
      },
      (error)=>{
        console.log("Erreur lors de la req",error);
      }
  );
  this.router.navigate(['/list']);
}
}
