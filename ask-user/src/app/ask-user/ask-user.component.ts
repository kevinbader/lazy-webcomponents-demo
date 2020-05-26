import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ask-user',
  templateUrl: './ask-user.component.html',
  styleUrls: ['./ask-user.component.css']
})
export class AskUserComponent implements OnInit {
  showDialog = false;
  @Input() question;
  @Output() answer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDialog() {
    this.showDialog = !this.showDialog;
  }

  onSubmit(answer: string) {
    this.showDialog = false;
    this.answer.emit({ answer });
  }
}
