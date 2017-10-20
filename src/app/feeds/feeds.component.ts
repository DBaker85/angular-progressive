import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

export interface ShortArticle {
  title: string;
  shortUrl: string;
  image: string;
}

@Component({
  selector: 'ap-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  public feeds: Array<ShortArticle>;

    constructor(
      private http: HttpClient,
      private router: Router
    ) { }

    ngOnInit() {
      this.http.get<Array<ShortArticle>>('http://localhost:8888/api/feed')
      .map(data => data)
      .subscribe(feeds => this.feeds = feeds);
    }

  goToDetailPage(shortUrl) {
    this.router.navigate([`./story/${shortUrl}`]);
  }

}
