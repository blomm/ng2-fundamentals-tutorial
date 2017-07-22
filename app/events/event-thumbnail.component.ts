import {Component, Input, Output, EventEmitter} from '@angular/core'
import { IEvent } from "./shared/barrel";

@Component({
    selector:'event-thumbnail',
    templateUrl:'app/events/event-thumbnail.html',
    styles:[`
        .thumbnail {min-height: 210px}
        .green {color: #003300 !important}
        .bold {font-weight: bold}
        .pad-left {margin-left: 20px;}
        .well div {color: #bbb;}
    `]
})

export class EventThumbnailComponent{
    @Input() event:IEvent
    
    getStartTimeClass(){
        const isEarly = this.event && this.event.time == '8:00 am';
        return  {green: isEarly, bold: isEarly}
    }
}