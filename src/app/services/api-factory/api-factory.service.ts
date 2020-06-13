import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFactoryService {

  constructor(private httpService: ApiService) { }

  getList(url, page: any, size: any, search: any, filter): Observable<any> {
    let params = new HttpParams().set('page', page).set('size', size).set('filters', JSON.stringify(filter))

    if (search) {
      params = params.set('search', search)
    }

    return this.httpService.get(url, {
      params: params
    });
  }

  getSingle(url): Observable<any> {

    return this.httpService.get(url, {});
  }


  postData(url, data): Observable<any> {

    return this.httpService.post(url, data);
  }

  putData(url, data): Observable<any> {

    return this.httpService.put(url, data);
  }
}
