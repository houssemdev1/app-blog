import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.css']
})
export class ListarticleComponent implements OnInit {
  articles$:[];
  messages$: [];
  currentmessages$:[]

    
  
  
 

  constructor(private data: DataService, private dataarticle: ArticleServiceService, private router: Router) { }
 
  ngOnInit() {

    this.getArticle();
    this.getmessages()
    
  }
  getmessages(){
   
    var email=localStorage.getItem('iduser')
    return this.dataarticle.returnmessages(email).subscribe((datas:any) =>{
      this.currentmessages$=datas.messages

console.log( this.currentmessages$)
});
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('iduser');
    localStorage.removeItem('tok');
  }
  
  getArticle() {
    return this.data.articleData().subscribe((datas:any) =>{

      console.log(datas)
      this.articles$ = datas.articles;
    });
  }


  
  location(id) {
    localStorage.setItem('id', id);
  }
}
