import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router';

import {EventsAppComponent} from './events-app.component'
import {EventsListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavBarComponent} from './nav/nav.component'


import { HttpModule } from "@angular/http";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/create-event.component";
import { RouteGuardService } from "./events/route-guard.service";
import { Error404Component } from "./events/event-details/404";
import { EventsListResolverService } from "./events/events-list-resolver.service";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateSessionComponent } from "./events/event-details/create-session.component";
import { SessionListComponent } from "./events/event-details/session-list.component";
import { DurationPipe, EventService, CollapsibleWellComponent } from "./events/shared/barrel";
import { 
    JQUERY_TOKEN,
    TOASTR_TOKEN, IToastr, 
    SimpleModalComponent, 
    ModalTriggerDirective
} from  "./events/common/barrel";

declare let jQuery:Object;
declare let toastr:IToastr

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule, 
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes,{ enableTracing: true })
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective,
        DurationPipe,
        Error404Component
    ],
    bootstrap: [EventsAppComponent],
    providers:[
        EventService, 
        AuthService,
        EventsListResolverService,
        {
            provide:JQUERY_TOKEN,
            useValue: jQuery
        },
        {
            provide:TOASTR_TOKEN, 
            useValue: toastr
        },
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