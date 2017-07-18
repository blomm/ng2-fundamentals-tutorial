import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router';

import {EventsAppComponent} from './events-app.component'
import {EventsListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavBarComponent} from './nav/nav.component'
import { EventService } from "./events/shared/event.service";
import { HttpModule } from "@angular/http";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/create-event.component";
import { RouteGuardService } from "./events/route-guard.service";
import { Error404Component } from "./events/event-details/404";
import { EventsListResolverService } from "./events/events-list-resolver.service";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    bootstrap: [EventsAppComponent],
    providers:[
        EventService, 
        EventsListResolverService,
        RouteGuardService,
        {
            provide:'hasUserSavedEverything', useValue:checkDirtyState
        }
    ]
})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent){
    if (component.isDirty){
        return window.confirm('Youve not saved your changes yet, navigate away?');
    }
    return true;
}