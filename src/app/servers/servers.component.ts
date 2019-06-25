import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', // selecting element by tag
  //selector: '.app-servers', // selecting element by class; selecting by Id not working!
  selector: 'app-servers', //selecting element by elements name Recomended!
  /*template: `
  <app-server></app-server>
  <app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }
  
  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server `+ this.serverName + ` was created! `;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    
  }

}

