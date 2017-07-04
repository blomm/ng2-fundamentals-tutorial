import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    templateUrl:'app/events/event-thumbnail.html',
    styles:[`
    .thumbnail {min-height: 210px}
        .pad-left {margin-left: 20px;}
        .well div {color: #bbb;}
    `]
})

export class EventThumbnailComponent{
    @Input() event:any
    
}