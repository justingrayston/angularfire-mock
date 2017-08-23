import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2/app';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

export class MockFirebaseUser implements firebase.User {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  providerId: string ;
  uid: string ;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: (firebase.UserInfo)[];
  refreshToken: string;

  delete(): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  getIdToken(forceRefresh?: boolean): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  getToken(forceRefresh?: boolean): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  linkAndRetrieveDataWithCredential(credential: firebase.auth.AuthCredential): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  linkWithCredential(credential: firebase.auth.AuthCredential): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  linkWithPhoneNumber(phoneNumber: string , applicationVerifier: firebase.auth.ApplicationVerifier): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  linkWithPopup(provider: firebase.auth.AuthProvider): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  linkWithRedirect(provider: firebase.auth.AuthProvider): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  reauthenticateAndRetrieveDataWithCredential(credential: firebase.auth.AuthCredential): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  reauthenticateWithCredential(credential: firebase.auth.AuthCredential): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  reauthenticateWithPhoneNumber(phoneNumber: string , applicationVerifier: firebase.auth.ApplicationVerifier): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  reauthenticateWithPopup(provider: firebase.auth.AuthProvider): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  reauthenticateWithRedirect(provider: firebase.auth.AuthProvider): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  reload(): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  sendEmailVerification(): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  toJSON(): Object {
    return null;
  };

  unlink(providerId: string): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  updateEmail(newEmail: string): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  updatePassword(newPassword: string): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  updatePhoneNumber(phoneCredential: firebase.auth.AuthCredential): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  updateProfile(profile: { displayName: string, photoURL: string}): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
}

export class MockFireabseAuth implements firebase.auth.Auth {
  app: firebase.app.App;
  currentUser: firebase.User;

  constructor() {

  }

  applyActionCode(code: string): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  checkActionCode(code: string): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  confirmPasswordReset(code: string, newPassword: string): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  createUserWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

  fetchProvidersForEmail(email: string): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  getRedirectResult(): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  onAuthStateChanged (nextOrObserver: firebase.Observer<any, any> | ((a: firebase.User) => any),
                      error?: (a: firebase.auth.Error) => any , completed?: firebase.Unsubscribe): firebase.Unsubscribe {
    return null;
  };
  onIdTokenChanged (nextOrObserver: firebase.Observer<any, any > |( (a: firebase.User) => any),
                    error?: (a: firebase.auth.Error ) => any , completed?: firebase.Unsubscribe ): firebase.Unsubscribe {
    return null;
  };
  sendPasswordResetEmail(email: string): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  setPersistence (persistence: firebase.auth.Auth.Persistence): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  signInAndRetrieveDataWithCredential(credential: firebase.auth.AuthCredential): firebase.Promise <any> {
    return firebase.Promise.resolve();
  };
  signInAnonymously(): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  signInWithCredential(credential: firebase.auth.AuthCredential ): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  signInWithCustomToken(token: string ): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  signInWithEmailAndPassword(email: string , password: string ): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  signInWithPhoneNumber(phoneNumber: string , applicationVerifier: firebase.auth.ApplicationVerifier ): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  signInWithPopup(provider: firebase.auth.AuthProvider ): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  signInWithRedirect(provider: firebase.auth.AuthProvider ): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  signOut(): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };
  verifyPasswordResetCode(code: string ): firebase.Promise<any> {
    return firebase.Promise.resolve();
  };

}

export class MockAngularFireAuth {

  mockUser: BehaviorSubject<any>;

  app: FirebaseApp;
  auth: firebase.auth.Auth;
  authState: Observable<firebase.User>;
  idToken: Observable<firebase.User>;

  constructor() {

    this.resetMock();
    this.auth = new MockFireabseAuth();
  }

  resetMock() {
    this.mockUser = new BehaviorSubject(null);
    this.authState = this.mockUser.asObservable();
    this.idToken = this.mockUser.asObservable();
  }
}
