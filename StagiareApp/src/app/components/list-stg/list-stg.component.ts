import {Component, OnInit} from '@angular/core';
import {ServiceStgService} from "../../services/service-stg.service";
import {Stagiare} from "../../stagiare";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-list-stg',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './list-stg.component.html',
  styleUrl: './list-stg.component.css'
})
export class ListStgComponent implements OnInit{
  ngOnInit() {
    this.showList();
  }

  StgList:Stagiare[]=[];
constructor(private stgService:ServiceStgService,private router:Router) {
}
showList(){
  this.stgService.getAllStg().subscribe((data)=>{
      console.log('Donnes recuperees:',data);
      this.StgList=data;
  }, (error)=>{
      console.log("Erreur lors de la requete:",error);
  });
}

  modifierStg(id: number) {
  this.router.navigate(['update',id]);


  }

  supprimerStg(id: number) {
    this.stgService.deleteStg(id).subscribe(
        (data)=>{
          console.log('Donnes recuperees:',data);
          this.showList();
        },
        (error)=>{
          console.log("Erreur lors de la requete:",error);
        }
    );
  }

  deleteAll() {
   this.StgList=[];
  }



}
