import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  backColor:string = "red";
  allowButtonEnable: boolean = false;
  serverName:string = ' ';
  serverStatus: boolean = false;
  timeInOut = "Button is Offline"

  constructor() {
    setTimeout(()=>this.allowButtonEnable=true,3000);
   }

   createServerStatus(){ 
    this.serverStatus = true;
    this.serverName =this.serverName;}
  ngOnInit(): void {
  }

}
