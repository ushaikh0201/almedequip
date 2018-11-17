import { Component, Renderer,ViewChild, ElementRef, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

import { LocalDataSource } from 'ng2-smart-table';
import { ViewCell } from 'ng2-smart-table';

import { ValidationService } from '../../../validators/validation.service';
import { ContentMngService } from "../../../../../common/services/content-mng.service";
import { SmartTableService } from '../../../@core/data/smart-table.service';
import * as $ from 'jquery';
declare global {
	interface Window { functions: any }
}
@Component({
  selector: 'ngx-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html',
})
export class ProductComponent {

  @ViewChild('editCellRef') editCellRef: ElementRef;

  productForm: FormGroup;
  submitted = false;
  products: any;
  slectedProducts: any;

  source: LocalDataSource = new LocalDataSource();
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
      // custom: [{ name: 'ourCustomAction', title: '<div><i class="nb-compose"></i></div>' }],
      // position: 'right'
    },
    columns: {
      action: {
        title: 'Action',
        type:'html',
        valuePrepareFunction:(cell,row)=>{
          return '<div><a class="edit-product-action"><i class="nb-compose"></i></a></div>';
        },
        filter:false
      },
      code: {
        title: 'Code',
        type: 'string',
      },
      name: {
        title: 'Product Name',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      category: {
        title: 'Category',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction: this.getSelectedProductData.bind(this)
      }
    },
  };
  constructor(
    private formBuilder: FormBuilder, 
    private _renderer: Renderer, 
    private contentMngService: ContentMngService,
    private service: SmartTableService,
    private router: Router
  ) { 
    const data = this.service.getData();
    // this.source.load(data);
  }

  ngOnInit() {
    this.getAllProducts();

    window.functions = window.functions || {};
    window.functions.onEdit = this.addNewProduct.bind(this);
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      $('.edit-product-action').attr('style', 'cursor:pointer');
      $('.product-form').attr('style', 'display:none');
    })
    $(document).on('click','.edit-product-action, .add-product-action', function(){
      // this.router.navigate(['']);
      // alert('Test');
      $('.smart-table').hide(500);
      $('.product-form').show(500);
    });

    $(document).on('click','.back-smart-table', function(){
      $('.smart-table').show(500);
      $('.product-form').hide(500);
    });

    setTimeout(()=>{
      $('.nb-compose').attr('style', 'font-size:25px;color:#f99d00;');
    }, 2000);
  }

  initTechSpec() {
    var techSpec = null;
    /* if(this.slectedProducts){
      techSpec = this.slectedProducts.tech_spec.length > 0 ? this.slectedProducts.tech_spec : null;
    }
    if(techSpec){
      var returnedFormCtrl = techSpec.forEach(element => {
        // console.log('element =>', element.specification);
        this.formBuilder.group({
          specification: new FormControl(element.specification)
        });
      }); 
      return returnedFormCtrl;
    } */
    return this.formBuilder.group({
        specification: new FormControl(techSpec)
    });
  }
  
  initUsage() {
    return this.formBuilder.group({
        usagelist: new FormControl(null)
    });
  }

  addSpecField() {
    const control = <FormArray>this.productForm.controls['tech_spec'];
    control.push(this.initTechSpec());
  }

  addUsageField() {
    const control = <FormArray>this.productForm.controls['usage'];
    control.push(this.initUsage());
  }

  removeSpecField(i: number) {
      const control = <FormArray>this.productForm.controls['tech_spec'];
      control.removeAt(i);
  }

  removeUsageField(i: number) {
      const control = <FormArray>this.productForm.controls['usage'];
      control.removeAt(i);
  }

  validateOnBlur(field: string | Array<string>, ev:Event){
    if(this.productForm.get(field).invalid && (this.productForm.get(field).dirty || this.productForm.get(field).touched)){
      this._renderer.setElementClass(ev.target, "form-control-danger", true);
    }else{
      this._renderer.setElementClass(ev.target, "form-control-danger", false);
      this._renderer.setElementClass(ev.target, "form-control-success", true);
    }
  }

  formProductSubmit(){
    if(this.productForm.valid){
      console.log('this.productForm.controls._id', this.productForm.controls._id.value);
      if(this.productForm.controls._id.value){
        this.contentMngService.updateProductContent(this.productForm.value).subscribe(res=>{
          console.log(res);
        });  
      }else{
        this.contentMngService.insertProductContent(this.productForm.value).subscribe(res=>{
          console.log(res);
        });
      }
    }else{
      this.validateAllFields(this.productForm);
    }
  }

  validateAllFields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach(field => {
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this.validateAllFields(control);
			}
		});
  }
  
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  prepareProductForm(option=null){
    if(option == 'edt'){
      console.log('this.slectedProducts', this.slectedProducts);
      this.productForm = this.formBuilder.group({
        "_id": new FormControl(this.slectedProducts._id, [ValidationService.requiredValidator]),
        "name": new FormControl(this.slectedProducts.name, [ValidationService.requiredValidator]),
        "code": new FormControl(this.slectedProducts.code, [ValidationService.requiredValidator]),
        "price": new FormControl(this.slectedProducts.price, [ValidationService.requiredValidator]),
        "status": new FormControl(this.slectedProducts.status, [ValidationService.requiredValidator]),
        "category": new FormControl(this.slectedProducts.category, [ValidationService.requiredValidator]),
        "main_content": new FormControl(this.slectedProducts.main_content, [ValidationService.requiredValidator]),
        "description": new FormControl(this.slectedProducts.description, [ValidationService.requiredValidator]),
        "tech_spec": this.formBuilder.array([
          this.initTechSpec()
        ]),
        "usage": this.formBuilder.array([
          this.initUsage()
        ])
      });

      this.setFormArrayValue('tech_spec');
      this.setFormArrayValue('usage');
    }else{
      this.productForm = this.formBuilder.group({
        "name": new FormControl(null, [ValidationService.requiredValidator]),
        "code": new FormControl(null, [ValidationService.requiredValidator]),
        "price": new FormControl(null, [ValidationService.requiredValidator]),
        "status": new FormControl(1, [ValidationService.requiredValidator]),
        "category": new FormControl(1, [ValidationService.requiredValidator]),
        "main_content": new FormControl(null, [ValidationService.requiredValidator]),
        "description": new FormControl(null, [ValidationService.requiredValidator]),
        "tech_spec": this.formBuilder.array([
          this.initTechSpec()
        ]),
        "usage": this.formBuilder.array([
          this.initUsage()
        ])
      });
    }
    
    // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
    // this.router.navigate(['pages/ourPage']);
  }

  public setFormArrayValue(field) {
    const controlArray =  <FormArray>this.productForm.controls[field];
    var fieldVal;
    
    if(this.slectedProducts){
      fieldVal = this.slectedProducts[field].length > 0 ? this.slectedProducts[field] : null;
    }
    if(fieldVal){
      fieldVal.forEach((element, index) => {
        // console.log(index);
        var keys = Object.keys(element);
        if(element[keys[0]]){
          var frmCtrlArray :any = {};
          frmCtrlArray[keys[0]] = new FormControl(null);
          // console.log(frmCtrlArray);
          controlArray.push(
            this.formBuilder.group(frmCtrlArray)
          );
          controlArray.controls[index].get(keys[0]).setValue(element[keys[0]]);
        }
      }); 
    }
  }

  getAllProducts(){
    this.contentMngService.getAllProduct().subscribe(res=>{
      // console.log(res);
      this.products = res;
      /* let indexList = this.products.map((el, key)=>{
        var obj = Object.assign({}, el);
        var list = {
          'id':obj._id,
          'code':obj.code,
          'name':obj.name,
          'price':obj.price,
          'category':obj.category,
          'status':obj.status,
          'tech_spec': obj.tech_spec,
          'usage': obj.usage,

        };
        return list;
      }) */
      this.source.load(this.products);
    });
  }

  getSelectedProductData(instance:any) {
    instance.save.subscribe(row => {
      // alert(`${row} saved!`);
      // onEdit(row);
      this.slectedProducts = row;
      console.log('row ', this.slectedProducts);
      this.prepareProductForm('edt');
    });
  }

  addNewProduct(){
    this.prepareProductForm();
  }
}


@Component({
  selector: 'button-view',
  template: `<a class="edit-product-action" (click)="onClick()"><i class="nb-compose"></i></a>`,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }
  
  onClick() {
    // console.log('this.renderValue',this.rowData);
    this.save.emit(this.rowData);
  }
}