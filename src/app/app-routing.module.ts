import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EventsComponent} from "./events/events.component";
import {DatailComponent} from "./events/datail/datail.component";

const routes: Routes = [
  {path: "", redirectTo: '/dashboard', pathMatch: "full"},
  {
    path: "dashboard", component: DashboardComponent, children: [
      {path: "", component: EventsComponent},
      {path: ":id", component: DatailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
