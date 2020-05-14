import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ServerService } from '../servers.service'
import { Server } from '../server.model'
import { canDeactiavateComponent } from '../can-deactivate.service'

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']

})

export class ServerEditComponent implements OnInit,canDeactiavateComponent{
  allowEdit: boolean = false
  editEle: Server
  changesSaved: boolean = false
  
  constructor(private route: ActivatedRoute,private serverService: ServerService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {this.editEle = this.serverService.getServer(
        +params.get('id')
      )}
    )
    this.route.queryParamMap.subscribe(
      params => {this.allowEdit = params.get('allowEdit')=== "1" ? true : false
      console.log(params)}
    )  //*queryParamMap to return a paramMap of routers' query params
  }

  onUpdateServer() {
    this.changesSaved = true
  }

  canDeactivate() {
    if(this.changesSaved){
      return true
    }else{
      console.log("Chnages saved: " +this.changesSaved)
      confirm('Ignore Changes')
    }
  }

}