import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';


export interface FullArticle {
  title: string;
  shortUrl: string;
  image: string;
  body: Array<string>;
}

@Component({
  selector: 'ap-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.scss']
})
export class FeedDetailComponent implements OnInit {

  public feed: FullArticle;
  public modelLoaded = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const shortUrl = this.route.snapshot.params.shortUrl;
    this.http.get<FullArticle>(`http://localhost:8888/api/story/${shortUrl}`)
    .map(data => data)
    .subscribe((feed) => { this.feed = feed; this.modelLoaded = true; });
  }

  goHome() {
    this.router.navigate([``]);
  }

}


