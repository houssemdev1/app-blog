import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AjoutarticleComponent } from './ajoutarticle/ajoutarticle.component';
import { ListarticleComponent } from './listarticle/listarticle.component';
import { InfoarticleComponent } from './infoarticle/infoarticle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AdminComponent } from './admin/admin.component';
import { RecentarticleComponent } from './recentarticle/recentarticle.component';
import { EnablearticleComponent } from './enablearticle/enablearticle.component';
import { ListeusersComponent } from './listeusers/listeusers.component';
import { ArticlesattentsComponent } from './articlesattents/articlesattents.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DatafilterPipe } from './datafilter.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { SearchpipePipe } from './searchpipe.pipe';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AjoutarticleComponent,
    ListarticleComponent,
    InfoarticleComponent,
    AdminComponent,
    RecentarticleComponent,
    EnablearticleComponent,
    ListeusersComponent,
    ArticlesattentsComponent,
    NavbarComponent,
    MyblogsComponent,
    UserdashboardComponent,


    DatafilterPipe,

  
    SearchpipePipe,

  
    NotfoundComponent,
  ],
  imports: [
    AlifeFileToBase64Module,
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    Ng2SearchPipeModule,
    EditorModule,
    BrowserModule, FormsModule, AngularEditorModule,
    FilterPipeModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
