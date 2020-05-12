import { Component, Input, OnInit } from '@angular/core'

import { Server } from '../server.model'
import { ActivatedRoute, Router } from '@angular/router'
import { ServerService } from '../servers.service'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  providers: [ServerService,]
})
export class ServerComponent implements OnInit {
  server : Server
  selectedId: number    
  constructor(private route: ActivatedRoute,
    private serverService: ServerService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.server = this.serverService.getServer (
    //   this.route.paramMap
    //   .subscribe(params => 
    //   {return +params.get('id')}))

    this.route.paramMap
      .subscribe(params => {
        this.selectedId = +params.get('id')
        this.server = this.serverService.getServer(this.selectedId)
      }
    )
    // this.server = this.serverService.getServer(this.selectedId)

  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route,queryParamsHandling:'preserve'})
  }
}