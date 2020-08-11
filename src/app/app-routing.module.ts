import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { SelecaoComponent } from './selecao/selecao.component';

const routes: Routes = [
  { path: 'painel', component: PainelComponent },
  { path: 'novo', component: SelecaoComponent },
  { path: '**', redirectTo: 'painel' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
