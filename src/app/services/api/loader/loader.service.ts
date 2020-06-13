import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loadingStatus = new Subject<boolean>();
  loaderTop = new Subject<boolean>();
  blockingLoader = new Subject<boolean>();
  blockingLoaderAuth = new Subject<boolean>();
  bgGrey = new Subject<boolean>();

  blockingLoaderFlag = false;
  loaderTopFlag = false;


  showBlockingLoader(){
    console.log("load");
    this.blockingLoader.next(true);
    this.blockingLoaderFlag = true;
  }

  hideBlockingLoader(){
    this.blockingLoader.next(false);
    this.blockingLoaderFlag = false;
  }

  showBlockingLoaderAuth(){
    this.blockingLoaderAuth.next(true);
  }

  hideBlockingLoaderAuth(){
    this.blockingLoaderAuth.next(false);
  }


  constructor() { }
}
