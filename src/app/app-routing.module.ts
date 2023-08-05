import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PersonneCreateComponent } from './personne-create/personne-create.component';
import { PersonneEditComponent } from './personne-edit/personne-edit.component';
import { PersonneListComponent } from './personne-list/personne-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-personne' },
  { path: 'create-personne', component: PersonneCreateComponent },
  { path: 'personnes-list', component: PersonneListComponent },
  { path: 'personne-edit/:id', component: PersonneEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
