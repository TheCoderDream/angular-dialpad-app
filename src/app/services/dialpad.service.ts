import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Contact } from '../models/contacts.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DialpadService {

  private _allContacts$: Observable<Contact[]>;

  private _dialValue$ = new BehaviorSubject<string>('');

  private _contactList$: Observable<Contact[]>;

  readonly dialConfig = [
    ['1', ''],
    ['2', 'ABC'],
    ['3', 'DEF'],
    ['4', 'GHI'],
    ['5', 'JKL'],
    ['6', 'MNO'],
    ['7', 'PQRS'],
    ['8', 'TUV'],
    ['9', 'WXYZ'],
    ['*', ''],
    ['0', '+'],
    ['#', '']
  ];

  constructor(
    private http: HttpClient
  ) {
    this._allContacts$ = this.http.get('/assets/contacts.json') as Observable<Contact[]>;
  }

  getDialConfig() {
    return this.dialConfig;
  }

  getDialValue(): Observable<string> {
    return this._dialValue$.asObservable();
  }

  getContactList() {
    return this._allContacts$;
  }

  appendDialValue(val) {
    const currentVal = this._dialValue$.getValue();
    this._dialValue$.next(currentVal +  val);
  }

  removeLastCharDialValue(value: string): void {
    const currentVal = this._dialValue$.getValue();
    const newDialogValue: string = currentVal.slice(0, currentVal.length -1);
    this._dialValue$.next(newDialogValue);
  }

}
