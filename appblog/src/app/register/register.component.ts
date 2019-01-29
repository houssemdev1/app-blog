import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profil = 'Administrateur'
  formregister: FormGroup;
  user$: [];
  admin$: [];


  constructor(private data: DataService, private router: Router, private fb: FormBuilder) {
    this.formregister = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      userLastname: ['', [Validators.required, Validators.minLength(4)]],
      userEmail: ['', [Validators.required, Validators.minLength(8)]],
      userPassword: ['', [Validators.required, Validators.email, Validators.minLength(8)]],
      role: ''
    });




  }



  ngOnInit() {

  }

  register() {
    if (this.profil == "Administrateur") {
      this.formregister.value.role = "admin";
    }
    else {
      this.formregister.value.role = "user";
    }
    this.data.userRegister(this.formregister.value).subscribe(res => {
      console.log('register respone ==>', res);
      this.router.navigate(['login']);
    })
  }


}






