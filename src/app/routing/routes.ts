import { Routes } from "@angular/router";
import { TrackerComponent } from "../pages/tracker/tracker.component";
import { teamResolver } from "./resolvers/team.resolver";

export const routes: Routes = [ {path: '', pathMatch: 'full', component: TrackerComponent, resolve: {teams: teamResolver}}];