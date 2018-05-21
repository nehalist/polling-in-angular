import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import {Status} from "./models/status.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses: Status[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.apiService.getTweets())
      )
      .subscribe(res => {
        console.log('Tweets updated');
        this.statuses = res.statuses;
      })
    ;
  }
}
