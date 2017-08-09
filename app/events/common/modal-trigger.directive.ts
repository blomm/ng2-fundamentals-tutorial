import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import {JQUERY_TOKEN} from './barrel'

@Directive({
    selector:'[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    
    @Input('modal-trigger') modalId : string
    el: HTMLElement

    constructor(@Inject(JQUERY_TOKEN) private $:any, ref:ElementRef){
        this.el=ref.nativeElement
    }

    
    ngOnInit(): void {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({})
        })       
    }

}