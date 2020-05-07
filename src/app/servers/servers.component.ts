import { Component, OnInit } from '@angular/core';

import { ServerService } from './servers.service'
import { Server } from './server.model'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServerService]
})

export class ServersComponent implements OnInit {
  servers: Server[]
  constructor(private serverService: ServerService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serverService.getServers()
  }

  onReload() {
    //this.router.navigate(['./servers'], {relativeTo: this.route}) // will break the app
  }

}