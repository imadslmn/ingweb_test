import { Routes } from '@angular/router';
import {ListStgComponent} from "./components/list-stg/list-stg.component";
import {NewStgComponent} from "./components/new-stg/new-stg.component";
import {DetailsStgComponent} from "./components/details-stg/details-stg.component";

export const routes: Routes = [
  {path : 'list',component : ListStgComponent},
  {path:'add',component:NewStgComponent},
  {path:'update/:id',component:DetailsStgComponent},
  {path:'',redirectTo:'list',pathMatch:'full'}

];
