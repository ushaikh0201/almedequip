import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DataServices } from '../services/data-services';
import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  categoryQuery: any;
  portfolio: any;
  portfolioCategories: any;
  constructor(private dataServices:DataServices, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe((params: Params)=>{
      this.categoryQuery        = params['category']=="" ? params['category'] : 'moi';
      this.portfolio            = this.dataServices.portfolio;
      this.portfolioCategories  = this.dataServices.getPortfolioByCategory();
    });
  }

  ngOnInit() {
    $(document).ready(function() {
      $(".btn-pref .btn").click(function () {
          $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
          // $(".tab").addClass("active"); // instead of this do the below 
          $(this).removeClass("btn-default").addClass("btn-primary");   
      });
    });
  }

}
