import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DataServices } from '../services/data-services';

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
      this.categoryQuery        = params['category'];
      this.portfolio            = this.dataServices.portfolio;
      this.portfolioCategories  = this.dataServices.portfolioByCategories;
    });
  }

  ngOnInit() {
  }

}
