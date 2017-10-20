import {
  Routes,
  RouterModule
} from '@angular/router';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedDetailComponent } from './feed-detail/feed-detail.component';

const routes: Routes = [

  {
    path: '',
    component: FeedsComponent
  },
  {
    path: 'story/:shortUrl',
    component: FeedDetailComponent
  }
];

export const routing = RouterModule.forRoot(routes);
