import {Routes} from '@angular/router'
import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./events/event-details/404";
import { RouteGuardService } from "./events/route-guard.service";

export const appRoutes:Routes =[
    {path:'events', component:EventsListComponent},
    {path:'events/new', component: CreateEventComponent, canDeactivate:['hasUserSavedEverything']}, 
    {path:'events/:id', component: EventDetailsComponent, canActivate: [RouteGuardService]},
    {path:'events/new', component: CreateEventComponent},
    {path:'404', component: Error404Component},
    {path:'', redirectTo:'/events', pathMatch: 'full'}
]