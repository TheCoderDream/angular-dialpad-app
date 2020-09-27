import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contacts.model';

@Pipe({
  name: 'filterContactsByPhone'
})
export class ContactFilterByPhone implements PipeTransform {

  transform(contacts: Contact[], dialvalue: string ): Contact[] {
    console.log(contacts, dialvalue);
    if(!dialvalue) {
      return contacts;
    }

    return contacts.filter(contact => {
      return (contact.phone + '').includes(dialvalue);
    });

  }

}