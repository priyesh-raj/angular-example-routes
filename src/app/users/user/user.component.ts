import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit{
   
  @Input() user: {id: number, name: string}
  constructor(private route: ActivatedRoute,) {}

  ngOnInit() {
    
  }
}