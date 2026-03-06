import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PackageItem } from '../models/package.model';

@Injectable({
  providedIn: 'root'
})
export class FirestorePackageService {

  constructor(private firestore: Firestore) {}

  getPackages(): Observable<PackageItem[]> {

    const packagesRef = collection(this.firestore, 'packages');

    return collectionData(packagesRef, { idField: 'id' }) as Observable<PackageItem[]>;
  }

  addPackage(pkg: PackageItem) {

    const packagesRef = collection(this.firestore, 'packages');

    return addDoc(packagesRef, pkg);
  }

}
