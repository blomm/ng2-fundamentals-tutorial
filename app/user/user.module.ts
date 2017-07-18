
import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { userRoutes } from "./user.routes";
import { ProfileComponent } from "./profile.component";

@NgModule({
    providers:[],
    declarations:[ ProfileComponent],
    imports:[
        CommonModule, 
        RouterModule.forChild(userRoutes)
    ]
})

export class UserModule{}