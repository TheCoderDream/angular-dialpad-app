import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DialpadService } from '../../services/dialpad.service';
import { Contact } from '../../models/contacts.model';

@Component({
  selector: 'app-dialpad',
  templateUrl: './dialpad.component.html',
  styleUrls: ['./dialpad.component.css']
})
export class DialpadComponent implements OnInit {

  dialConfig: any[];

  dialValue$: Observable<string>;

  contactList$: Observable<Contact[]>;

  constructor(private dialpadService: DialpadService) {
    this.dialConfig = this.dialpadService.getDialConfig();
    this.dialValue$ = this.dialpadService.getDialValue();
    this.contactList$ = this.dialpadService.getContactList();
  }

  ngOnInit() {
  }

  onDial(value) {
    this.dialpadService.appendDialValue(value);
  }

  onBackspace(dialogValue: string): void {
    this.dialpadService.removeLastCharDialValue(dialogValue);
    
  }

}
