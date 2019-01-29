import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formlogin: FormGroup;
  user$: [];
  admin$: [];
  resToken:any;
  constructor(private fb: FormBuilder, private router: Router, private data: DataService) {
    this.formlogin = this.fb.group({
      userEmail: ['', [Validators.required, Validators.minLength(4)]],
      userPassword: ['', [Validators.required, Validators.minLength(4)]],

    });
  }


  ngOnInit() {
  }
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
  //fonction de verification mot de passe
  verif() {
    localStorage.setItem("iduser", this.formlogin.value.userEmail);
    return this.data.verifLogin(this.formlogin.value).subscribe((res: any) => {
      console.log("login", res);
      if ((res.messg)==='exist')
      {
        localStorage.setItem('tok',res.Token);
        this.resToken=this.getDecodedAccessToken(res.Token)
        console.log(this.resToken)
        if(this.resToken.data.role=="admin")
 
         this.router.navigate(['dashboard'])
       else if (this.resToken.data.role=="user")
         this.router.navigate(['listearticle'])
      }

    else  if (res.messg === "not exist")
        alert("verifier votre email ou votre mot de passe")
    else
    {
   alert("verifier votre mot de passe")
      }
      }
    )
  }
}