import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', // selecting element by tag
  //selector: '.app-servers', // selecting element by class; selecting by Id not working!
  selector: 'app-servers', //selecting element by elements name Recomended!
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

