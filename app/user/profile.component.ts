import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import {TOASTR_TOKEN, IToastr} from '../events/common/toastr.service'
//import {ToasterModule, ToasterService} from 'angular2-toaster';


@Component({
  templateUrl: 'app/user/profile.component.html',
  styles:[`
    em {float:right;color:#E05C65;padding-left:10px}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error :ms-input-placeholder {color:#999;}
  `]
})
export class ProfileComponent implements OnInit{

  constructor(private authService: AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr: IToastr){}

  profileForm: FormGroup;
  firstName:FormControl;
  lastName:FormControl;

  ngOnInit(): void {
    
    if(!this.authService.currentUser){
      this.lastName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.firstName = new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z].*')]);
      this.profileForm = new FormGroup({
        lastName:this.lastName,
        firstName:this.firstName
      })
      this.router.navigate(['user/login']);
    }else{
      this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required,Validators.pattern('[a-zA-Z].*')]);
      this.profileForm = new FormGroup({
        lastName:this.lastName,
        firstName:this.firstName
      })
    }

  }

  validateLastName(){
    return this.lastName.valid 
  }

  validateFirstName(){
    return this.firstName.valid 
  }

  cancel(){
    this.router.navigate(['events']);
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      //this.router.navigate(['events']);
      this.toastr.success('profile saved','the title')
    }
    
  }

}