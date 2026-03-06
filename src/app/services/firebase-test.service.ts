import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseTestService {

  constructor(private firestore: Firestore) {}

  async testWrite() {

    const ref = collection(this.firestore, 'testCollection');

    await addDoc(ref, {
      name: "Test User",
      time: new Date()
    });

    console.log("Data added successfully");

  }

}
