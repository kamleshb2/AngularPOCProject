import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl: string = 'https://cors-anywhere.herokuapp.com/http://13.233.101.232:8080/SpringRest2/customers';

  constructor(private http: HttpClient) { }

  search(queryString: string) {
    let _URL = this.baseUrl;
   // this.http.get(_URL).subscribe(data => console.log(data));
    return this.http.get(_URL);
}

}
