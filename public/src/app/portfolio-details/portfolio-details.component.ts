import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { DataServices } from '../services/data-services';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  code:any;
  pid:any;
  portfolios: any;
  portfolio: any;
  project: any;

  // ngx-select-dropdown Custom Dropdown component for Angular 4+ with multiple and single selection options
  // Ref: https://www.npmjs.com/package/ngx-select-dropdown
  portfolioNameArray: any;
  singleSelect: any=[];
  config = {
    displayKey:"name", //if objects array passed which key to be displayed defaults to description
    search:true,
  };

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private dataServices:DataServices) { 
    this.activatedRoute.queryParams.subscribe((params: Params)=>{
      this.code               = params['code'] ? params['code'] : '';
      this.portfolios         = this.dataServices.portfolio;
      this.portfolio          = this.portfolios.find(item => item.code == this.code);
      this.portfolioNameArray = this.portfolios.map(function(item) { return { 'id':item.id, 'name':item.name, 'code':item.code, 'cat_id':item.cat_id}  });
      
      this.singleSelect = [this.portfolio.name];
    });
  }

  ngOnInit() {
    // console.log("portfolioNameArray", this.portfolioNameArray);
    $(document).ready(function() {
        var $btnSets = $('#responsive'),
        $btnLinks = $btnSets.find('a');
    
        $btnLinks.click(function(e) {
            e.preventDefault();
            $(this).siblings('a.active').removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $("div.user-menu>div.user-menu-content").removeClass("active");
            $("div.user-menu>div.user-menu-content").eq(index).addClass("active");
        });
        $(".ngx-dorpdown-container .ngx-dropdown-button").css({"min-height": "38px", "margin-top":"5px"})
    });
    
    $( document ).ready(function() {
        // $("[rel='tooltip']").tooltip();    
    
        $('.view').hover(
            function(){
                $(this).find('.caption').slideDown(250); //.fadeIn(250)
            },
            function(){
                $(this).find('.caption').slideUp(250); //.fadeOut(205)
            }
        ); 

        var width = $(window).width();
        var $btnSets = $('#responsive');
        if(width<767){
          $btnSets.removeClass('btn-group-vertical');
          $btnSets.addClass('btn-group-horizontal');
        }else{
          $btnSets.removeClass('btn-group-horizontal');
          $btnSets.addClass('btn-group-vertical');
        }
    });
  }

  changeValue($event: any){
    console.log($event.value);
    var changedPortfolio = $event.value[0];
    this.router.navigate(['/portfolio-details'], {queryParams:{ code:changedPortfolio.code }}).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }

  getPageData($event){
    console.log($event.data[0]);
    this.project = $event.data[0];
  }
}
