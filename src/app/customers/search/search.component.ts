import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SearchService} from './search.service'
import {HttpClient} from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { debounceTime, tap, switchMap, finalize, filter } from 'rxjs/operators';
import { customer } from '../Model/model.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchMoviesCtrl = new FormControl();
  filteredMovies: any;
  isLoading = false;
  errorMsg: string;
  customerData: any[];
  Movies: any;

 @Output()
 filteredCustomer = new EventEmitter<customer>();


 // tslint:disable-next-line: variable-name
 constructor(private _searchService: SearchService, private http: HttpClient) { }

 ngOnInit() {
  this.searchMoviesCtrl.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {
        this.errorMsg = '';
        this.filteredMovies = [];
        this.isLoading = true;
      }),
      switchMap(value => this._searchService.search('https://cors-anywhere.herokuapp.com/http://13.233.101.232:8080/SpringRest2/customers')
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
      )
    )
    .subscribe(data => {

        this.errorMsg = '';
        this.Movies = data;
        this.filteredMovies = this.Movies.filter(movie => movie.firstName.toString().toLowerCase().includes(this.searchMoviesCtrl.value) ||
        movie.lastName.toString().toLowerCase().includes(this.searchMoviesCtrl.value) ||
        (movie.firstName.toString().toLowerCase() + ' ' +
        // tslint:disable-next-line: triple-equals
        movie.lastName.toString().toLowerCase()) == this.searchMoviesCtrl.value.toLowerCase() );
        console.log(this.Movies[0].firstName.toLowerCase() + ' ' + this.Movies[0].lastName.toLowerCase());
        console.log(this.filteredMovies);

        this.filteredCustomer.emit(this.filteredMovies);
        console.log(this.searchMoviesCtrl.value.toLowerCase());
    });
}
}




