import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  save(key: string, data) {
    localStorage.setItem(key, this.getSettable(this.getGettable(data)));
  }

  read(key: string) {
    return this.getGettable(localStorage.getItem(key));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  private getSettable(value: any):string {
    return typeof value === 'string' ? value : JSON.stringify(value);
  }

  private getGettable(value: string):string {
    try {
      return JSON.parse(value);
    } catch(e) {
      return value;
    }
  }

}
