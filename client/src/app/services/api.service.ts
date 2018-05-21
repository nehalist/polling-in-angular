import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TwitterResponse} from "../models/twitter-response.model";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getTweets(): Observable<TwitterResponse> {
    return this.http.get<TwitterResponse>('http://localhost:8000')
      .pipe(
        map(res => new TwitterResponse().deserialize(res))
      );
  }
}
