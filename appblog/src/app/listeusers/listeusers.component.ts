import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listeusers',
  templateUrl: './listeusers.component.html',
  styleUrls: ['./listeusers.component.css']
})
export class ListeusersComponent implements OnInit {
  users$:[];
  constructor(private data:DataService) { }

  ngOnInit() {
    this.getUsers()
  }
  getUsers(){
    return this.data.getAllusers().subscribe((res:any)=>{
  this.users$=res.users
  
    })
}
logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('iduser');
  localStorage.removeItem('tok');
}
deleteUsers(id){
  console.log("supprime user")
  return this.data.deleteuser(id).subscribe((res:any)=>{
    this.users$=res.users
    this.ngOnInit()
      })
}

}