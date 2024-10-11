import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(data:any)
  {
    if(data.email == "admin@gmail.com" && data.password == "1234")
    {
      this.setToken("haskjhdaskhdwqqejhasgdjgasgdjgasdasd");
      return {status:"success",data:{name:"iGAP Admin",usertype:"admin"}};
    }
    else
    {
      return {status:"failed"};
    }
  }

  setToken(key:any)
  {
    localStorage.setItem('token', key);
  }

  isLoggedin()
  {
    if(localStorage.getItem('token') != null)
    {
      return true;
    }
      else{
        return false;
      }
    
  }
}
