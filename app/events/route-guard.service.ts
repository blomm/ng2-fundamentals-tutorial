import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { EventService } from "./shared/event.service";

@Injectable()
export class RouteGuardService implements CanActivate{
    

    constructor(private eventService: EventService, private router:Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const event = !!this.eventService.getEvent(+route.params['id']);
        if(!event)
            this.router.navigate(['/404']); 
        return event;
    } 
    
}