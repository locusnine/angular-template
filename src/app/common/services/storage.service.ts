import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  set(key: string, value: string) {
    sessionStorage.setItem(key, value)
  }

  get(key: string): string | null {
    return sessionStorage.getItem(key)
  }

}