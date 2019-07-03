import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './pages/inicio/inicio.component';
import {LoginComponent} from './pages/login/login.component';
import {PostjobComponent} from './pages/postjob/postjob.component';
import {VertodoComponent} from './pages/vertodo/vertodo.component';
import {DetailjobComponent} from './pages/detailjob/detailjob.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'postjob', component: PostjobComponent},
  {path: 'vertodo/:id', component: VertodoComponent},
  {path: 'detailjob/:id', component: DetailjobComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
