import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { ISession, EventService } from "../events/shared/barrel";

@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/nav.html',
    styles:[`
        .nav.navbar-nav {font-size:15px;}
        #searchForm {margin-right: 100px}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active {color: #F97924}
    `]
})

export class NavBarComponent{

    searchTerm:string="";
    foundSessions:ISession[]

    constructor(private authService:AuthService, private eventService:EventService){}
    
    searchForSession(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(sessions=>{
            this.foundSessions=sessions
            //console.log(this.foundSessions)
        });
        
    }

}