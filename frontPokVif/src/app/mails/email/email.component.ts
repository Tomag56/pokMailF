import {Component, OnInit} from '@angular/core';
import {MailModel} from "../models/Mail.model";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit{

  email!:MailModel;

  ngOnInit() {

  }

}
