import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  ref = firebase.firestore().collection('users');
  constructor(public db: AngularFireDatabase,public _http:HttpClient) { 
 
  }

  getUsers(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let User = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          User.push({
            key: doc.id,
            fullname: data.fullname,
            age: data.age,
            mobile: data.mobile
          });
        });
        observer.next(User);
      });
    });
  }

  getUser(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        let data = doc.data();
        observer.next({
          key: doc.id,
          title: data.title,
          description: data.description,
          author: data.author
        });
      });
    });
  }

  postUser(user): Observable<any> {
    return new Observable((observer) => {
      
      this.ref.add(user).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }

  updateUser(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }

  deleteUser(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }

getDataOnApi(){
  return this._http.get('https://aloostad.com/api/General/Getprovince')
  .pipe(
      map((res: Response) => {
return res;

      })
  );
}
}
