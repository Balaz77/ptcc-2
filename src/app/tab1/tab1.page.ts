import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  segment="chats";
  open_new_chat= false;

  constructor() {}

  onSegmentChange(event: any){
    console.log(event);
  }

  NewChat(){
    this.open_new_chat=true;
  }

  onWillDismiss(event: any){

  }

  cancel(){

  }

}
