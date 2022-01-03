import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from '../_services/jQuery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) public $: any) {
    this.el = ref.nativeElement;
  }
  ngOnInit(): void {
    this.el.addEventListener('click', (e) => {
      this.$('#simple-modal').modal({});
    });
  }
}
