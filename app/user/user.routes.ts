import {Component} from '@angular/core';
import { ProfileComponent } from "./profile.component";
import { Routes } from "@angular/router";

export const userRoutes:Routes =[
    {path:'profile', component:ProfileComponent}  
]