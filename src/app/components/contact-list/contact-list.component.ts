import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contacts.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Observable<Contact[]>;

  constructor() {

  }

  ngOnInit() {
  }

}
