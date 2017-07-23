import { Component, OnInit } from '@angular/core'
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from '@angular/router'
import { IEvent, ISession } from "../shared/barrel";

@Component({
    templateUrl:'app/events/event-details/event-details.component.html',
    selector:'event-details',
    styles:[`
        .container {padding-left:20px; padding-right:20px}
        .event-image {height: 100px}
        .a {pointer:cursor}
    `]
})

export class EventDetailsComponent implements OnInit {
    addMode:boolean
    event: IEvent;

    constructor(private eventService:EventService, private route:ActivatedRoute){}

    ngOnInit(): void {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession(){
        this.addMode = true;
    }

    cancelNewSessionCreation(addMode:boolean){
        this.addMode=addMode;
    }

    saveSessionToEvent(session:ISession){
        const nextId= Math.max.apply(null, this.event.sessions.map(s=>s.id));
        session.id=nextId;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode=false;
    }

}