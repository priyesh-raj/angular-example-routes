import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ServerService } from '../servers.service'

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']

})

export class ServerEditComponent implements OnInit{
  allowEdit: boolean = false
  
  constructor(private route: ActivatedRoute,private serverService: ServerService) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      params => {this.allowEdit = params.get('allowEdit')=== "1" ? true : false
      console.log(params)}
    )  //*queryParamMap to return a paramMap of routers' query params
  }

}