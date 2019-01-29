import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AjoutarticleComponent } from './ajoutarticle/ajoutarticle.component';
import { ListarticleComponent } from './listarticle/listarticle.component';
import { InfoarticleComponent } from './infoarticle/infoarticle.component';
import { AdminComponent } from './admin/admin.component';
import { RecentarticleComponent } from './recentarticle/recentarticle.component';
import { EnablearticleComponent } from './enablearticle/enablearticle.component';

import { ListeusersComponent } from './listeusers/listeusers.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfilRoleGuard } from './profil-role.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path : 'login', component: LoginComponent },
  {path : 'register', component: RegisterComponent },
  {path : 'ajoutarticle', component:AjoutarticleComponent,  canActivate: [AuthGuard] },
  {path : 'listearticle', component:ListarticleComponent,  canActivate: [AuthGuard] },
  {path : 'infosarticle/:id', component:InfoarticleComponent,  canActivate: [AuthGuard] },
  {path : 'dashboard', component:AdminComponent,  canActivate: [AuthGuard,ProfilRoleGuard] },
  {path : 'articleadmin/:id',component: RecentarticleComponent,  canActivate: [AuthGuard,ProfilRoleGuard]  },
  {path : 'desablearticles/:id',component:EnablearticleComponent,  canActivate: [AuthGuard,ProfilRoleGuard]  },
  {path : 'users',component:ListeusersComponent,  canActivate: [AuthGuard,ProfilRoleGuard] },
  {path : 'myblogs',component:MyblogsComponent,  canActivate: [AuthGuard] },
  {path : 'notFound',component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
