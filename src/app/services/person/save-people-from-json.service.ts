import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SavePeopleFromJSONService {

  constructor(private http: HttpClient) {
  }

  private baseURL: string = environment.apiURL;

  public handle(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/person/save/`, data);
  }
}
