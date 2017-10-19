import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'ap-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  private feeds: any;

    constructor(private http: HttpClient) { }
    ngOnInit() {
      this.http.get('http://localhost:8888/api/feed')
      .map(data => data)
      .subscribe(feeds => this.feeds = feeds);
      }

}
