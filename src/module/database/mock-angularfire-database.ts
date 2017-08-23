import { FirebaseApp } from 'angularfire2/app';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { FirebaseListObservable } from 'angularfire2/database';

export class MockAngularFireDatabase {

  mockListResults: BehaviorSubject<any[]>;
  mockObjectResult: BehaviorSubject<any>;

  app: FirebaseApp;
  database: firebase.database.Database;

  constructor() {
      this.resetMocks();
  }

  list(pathOrRef: string, opts?: Object): Observable<any[]> {
      return this.mockListResults.asObservable();
  }

  object(pathOrRef: string, opts?: Object): Observable<any[]> {
      return this.mockObjectResult.asObservable();
  }

  resetMocks() {
      this.mockListResults = new BehaviorSubject(null);
      this.mockObjectResult = new BehaviorSubject(null);
  }
}

