import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-termos',
  templateUrl: './termos.component.html',
  styleUrls: ['./termos.component.scss']
})
export class TermosComponent implements OnInit, OnDestroy {

  @Input() id: number;
  @Output() idChange = new EventEmitter();
  @Input() titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.idChange.complete();
  }

  clickVoltar(): void {
    this.id = 0;
    this.idChange.emit(this.id);
  }

  clickIniciar(): void {

  }

}
