import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {

  isCorrect = false ;

  onSubmitContact($event, email, comment)
  {
    $event.preventDefault();
    if(email.value =! "" && comment.value != "")
    {
      this.isCorrect = true;
      email.value = "";
      comment.value = "";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
