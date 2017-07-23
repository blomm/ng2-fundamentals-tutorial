import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { ISession } from "../shared/barrel";

@Component({
    selector:'create-session',
    templateUrl:'app/events/event-details/create-session.component.html',
    styles:[`
        em {float:right;color:#E05C65;padding-left:10px}
        .error input,.error select,.error textarea {background-color:#E3C3C5;}
        .error ::-webkit-input-placeholder {color:#999;}
        .error ::-moz-placeholder {color:#999;}
        .error :-moz-placeholder {color:#999;}
        .error :ms-input-placeholder {color:#999;}
  `]
})

export class CreateSessionComponent implements OnInit{
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelNewSession = new EventEmitter();

    newSessionForm: FormGroup;
    duration: FormControl;
    abstract: FormControl;
    level: FormControl;
    presenter: FormControl;
    name: FormControl;

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);
        this.duration = new FormControl('', Validators.required);

        this.newSessionForm = new FormGroup({
            name:this.name, 
            presenter:this.presenter,
            level:this.level,
            abstract:this.abstract,
            duration:this.duration
        })
    }

    createSession(formValues){
        let session:ISession={
            abstract:formValues.abstract,
            duration:+formValues.duration,
            level: formValues.level,
            name:formValues.name,
            presenter:formValues.presenter,
            voters:[],
            id:undefined

        }
        this.saveNewSession.emit(session)
    }

    cancel(){
        this.cancelNewSession.emit(false);
    }

}