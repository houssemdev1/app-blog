import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  articles$:[];
  recentarticles$:[]
  users$:[]
  constructor(private data:DataService) { }

  ngOnInit() {
  
    this.getrecentArticle();
    this.getArticle();
   
  }

  getArticle() {
    return this.data.articleData().subscribe((datas:any) =>{
      console.log(datas)
      this.articles$ = datas.articles;
    });
  }



  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('iduser');
    localStorage.removeItem('tok');
}


getrecentArticle()
{
  
  return this.data.getnewAarticles().subscribe((recentdatas:any)=>{
    console.log(recentdatas);
   
    this.recentarticles$ = recentdatas.recentarticles;
  });
  }

  //location
  location(id) {                                   
    sessionStorage.setItem('idart', id);
  }   
  save_id_art(iditem)      {
    sessionStorage.setItem('idenable', iditem);
  }        
}




