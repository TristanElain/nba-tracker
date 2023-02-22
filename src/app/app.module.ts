import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing';
import { AppComponent } from './app.component';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { TeamSelectorComponent } from './components/team-selector/team-selector.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NbaHeadersInterceptor } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    TeamSelectorComponent,
    TrackerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: NbaHeadersInterceptor, multi: true,}],
  bootstrap: [AppComponent]
})
export class AppModule { }
