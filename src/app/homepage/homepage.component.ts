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

    this.articles = service.getAll();
   }

  ngOnInit() {
  }

}
