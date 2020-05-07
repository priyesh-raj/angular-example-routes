import { Injectable } from '@angular/core'

import { Server } from "./server.model";
@Injectable()
export class ServerService {
  server: Server[] = [new Server('Test Server 1','Test Server 1 desc'),new Server('Test Server 2','Test Server 2 desc'),
    new Server('Test Server 3','Test Server 3 desc'),]

  constructor() {}

  getServers() {
    return this.server.slice()
  }
}