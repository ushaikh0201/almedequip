import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DataServices } from '../services/data-services';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  code: any;
  services: any;
  service: any;
  relevantService: any;
  constructor(private dataServices:DataServices, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe((params: Params)=>{
      this.code   = params['code'];
      var data = this.dataServices.getJSONData();
      this.services = data.services;
      this.service = this.services.find(item => item.code == this.code);
      this.relevantService = this.services.filter(item => item.cat_id == this.service.cat_id);
      console.log(this.relevantService);
    });
  }

  ngOnInit() {
  }
}
