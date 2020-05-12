import { Injectable } from '@angular/core'

import { Server } from "./server.model";
// import { Subscription } from 'rxjs';
@Injectable()
export class ServerService {
  server: Server[] = [new Server(1,'Test Server 1','Test Server 1 desc'),new Server(2,'Test Server 2','Test Server 2 desc'),
    new Server(3,'Test Server 3','Test Server 3 desc'),]

  constructor() {}

  getServers() {
    return this.server.slice()
  }

  getServer(id: number) {
    console.log('Current id is ' +id)
    return this.server[--id]
  }
} 