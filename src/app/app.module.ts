import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MatSidenavModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FeedsComponent } from './feeds/feeds.component';
import { LoaderComponent } from './loader/loader.component';
import { FeedDetailComponent } from './feed-detail/feed-detail.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeedsComponent,
    LoaderComponent,
    FeedDetailComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
