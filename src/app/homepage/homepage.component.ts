import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../articles.service"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articles ;

  constructor( service : ArticlesService) {
    console.log(service.getAll());

    this.articles = service.getAll();
   }

  ngOnInit() {
  }

}
