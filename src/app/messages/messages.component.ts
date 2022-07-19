import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {

  // must be public because we're going to bind to it in the template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
