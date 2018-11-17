import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //@ViewChild('owlElement') owlElement: OwlCarousel
  oneAtATime: boolean = true;
  customClass: string = 'customClass';
  constructor() { }

  ngOnInit() {
    // this.images = [
    //   {img:'assets/img/testimonials/ushaikh1.jpg'},
    //   {img:'assets/img/testimonials/ushaikh1.jpg'}
    // ];
  }

  ngAfterViewInit() {
    //$("#exampleModalCenter").modal("show");
    $(document).ready(function(){
      //$('.owl-carousel').owlCarousel();
      // (<any>$('.owl-carousel')).owlCarousel();
    })
    //   navigation: true, // Show next and prev buttons
    //   slideSpeed: 300,
    //   paginationSpeed: 400,
    //   singleItem: true,
    //   transitionStyle: "fadeUp",
    //   autoPlay: true,
    //   navigationText: [
    //     "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"
    //   ]
    // });
  }
}
