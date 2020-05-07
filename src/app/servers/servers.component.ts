import { Component, OnInit } from '@angular/core';

import { ServerService } from './servers.service'
import { Server } from './server.model'
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServerService]
})
export class ServersComponent implements OnInit {
  servers: Server[]
  constructor(private serverService: ServerService,) { }

  ngOnInit() {
    this.servers = this.serverService.getServers()
  }

}