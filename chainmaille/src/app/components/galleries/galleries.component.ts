import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToMiscGallery() {
    this.router.navigateByUrl("/misc-galleries")
  }

  goToJewelryGallery() {
    this.router.navigateByUrl("/jewelry-galleries")
  }

  goToArmourGallery() {
    this.router.navigateByUrl("/armor-galleries")
  }

}
