import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'ap-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.scss']
})
export class FeedDetailComponent implements OnInit {

  public feed;
  public modelLoaded = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8888/api/story/ether_shortage')
    .map(data => data)
    // .subscribe(feeds => this.feeds = feeds);
    .subscribe((feed) => { this.feed = feed; this.modelLoaded = true; });
  }

}


