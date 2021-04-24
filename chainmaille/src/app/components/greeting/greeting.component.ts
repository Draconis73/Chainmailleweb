import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLinks() {
    this.router.navigateByUrl("/links")
  }

}
