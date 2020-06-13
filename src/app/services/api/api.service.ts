import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,

  ) { }


   //GET

   public get(url,params) {

    console.log(url,params)

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    console.log(url);
    return this.http.get(url,params);
  }


  
//POST
public post(url,data) {

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization':'Token' + " " +auth_token
    })
  }
  console.log(url);
  
  return this.http.post(url,data,httpOptions);
}


//PUT

public put(url,data) {

  console.log(url);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization':'Token' + " " +auth_token
    })
  }
  return this.http.put(url,data,httpOptions);
}



public delete(url,data) {

  console.log(url);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization':'Token' + " " +auth_token
    })
  }
  
  return this.http.delete(url,data);
}


public deleteRecord(url) {

  console.log(url);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization':'Token' + " " +auth_token
    })
  }
  
  return this.http.delete(url);
}

}
