import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  title = 'AuthguardDemo';

  formData:any;
  result:any;

  constructor(private auth:AuthService, private router:Router)
  {

  }

  ngOnInit(): void {
    this.formData = new FormGroup(
      {
        email : new FormControl(),
        password : new FormControl()
      }
    )
  }

  btnLogin(data:any)
  {
    console.log(data);

    this.result = this.auth.login(data);
    console.log(this.result);
    
    if(this.result.status == "success")
    {
        localStorage.setItem("name", this.result.data.name);
        localStorage.setItem("usertype", this.result.data.usertype);
        this.router.navigate(['/admin']);
    }
    else
    {
      alert("Invalid Credentials");
    }
    
  }
}
