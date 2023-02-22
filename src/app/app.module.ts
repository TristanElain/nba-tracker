import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TeamListItemComponent } from './components/team-list-item/team-list-item.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamSelectorComponent } from './components/team-selector/team-selector.component';
import { NbaHeadersInterceptor } from './interceptors';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { PipesModule } from './pipes';
import { AppRoutingModule } from './routing';
import { ResultsComponent } from './pages/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamSelectorComponent,
    TrackerComponent,
    TeamListComponent,
    TeamListItemComponent,
    ResultsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NbaHeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
