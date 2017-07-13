import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {EventsAppComponent} from './events-app.component'
import {EventsListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/event-thumbnail.component'
import {NavBarComponent} from './nav/nav.component'
import { EventService } from "./events/shared/event.service";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [EventsAppComponent,EventsListComponent, EventThumbnailComponent, NavBarComponent],
    bootstrap: [EventsAppComponent],
    providers:[EventService]
})

export class AppModule {}