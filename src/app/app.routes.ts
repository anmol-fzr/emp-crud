import { Routes } from '@angular/router';
import { EmpListPage, EmpNewPage } from "./pages"

export const routes: Routes = [
  { path: '', component: EmpListPage },
  { path: 'new', component: EmpNewPage },
  { path: 'stats', component: EmpListPage },
];
