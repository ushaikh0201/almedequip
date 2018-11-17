import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

declare var jQuery: any;
declare var $: any;

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  getCurrencyList(){
    return this.http.get('/common/currency-code').map((response: Response) => response.json());
  }
  
  getAllCountry() {
    return this.http.get('/common/countries').map((response: Response) => response.json());
  }
  getAllInvestmentSettings() {
    return this.http.get('/common/investment_settings').map((response: Response) => response.json());
  }
  getYears() {
    var min = new Date().getFullYear() - 100;
    var max = min + 100;
    var years = [];

    for (var i = min; i <= max; i++) {
      years.push({
        name: i,
        value: i
      });
    }
    return years;
  }
  getDays(month, year) {
    var days = [];
    var current_year = new Date().getUTCFullYear();
    var current_month = new Date().getUTCMonth()+1;
    var today = new Date().getUTCDate();
    
    if (month && year) {
      var totalDays = new Date(year, month, 0).getDate();
      for (var i = 1; i <= totalDays; i++) {
        days.push({
          'value':i,
          'name':i
        }); 
        if(year == current_year && month == current_month && i == today){
          break;
        }
      }
    }
    
    return days;
  }
  getMonths(selected_year) {
    var tempMonths = [
      {
        value: '01',
        name: 'January'
      },
      {
        value: '02',
        name: 'February'
      },
      {
        value: '03',
        name: 'March'
      },
      {
        value: '04',
        name: 'April'
      },
      {
        value: '05',
        name: 'May'
      },
      {
        value: '06',
        name: 'June'
      },
      {
        value: '07',
        name: 'July'
      },{
        value: '08',
        name: 'August'
      },{
        value: '09',
        name: 'September'
      },
      {
        value: '10',
        name: 'October'
      },
      {
        value: '11',
        name: 'November'
      },
      {
        value: '12',
        name: 'December '
      }
    ];

    var months = [];
    var current_year = new Date().getUTCFullYear();
    var current_month = new Date().getUTCMonth()+1;
    $.each(tempMonths, function(i, month){
      var cutOffMonth = parseInt(month.value);  
      months.push({
        'value':month.value,
        'name':month.name
      }); 
      if(selected_year == current_year && cutOffMonth == current_month){
        return false;
      }
    });
    
    return months;
  }

  getUserProfileById(_id) {
    return this.http.get('/common/user-profile/'+_id).map((response: Response) => response.json());
  }

  setNotificationData(notificationDetails){
    return this.http.post('/common/set-notification', notificationDetails).map((response: Response) => response.json());        
  }

  getAllAdmin() {
    return this.http.get('/common/get-admin').map((response: Response) => response.json());
  }

  sendMail(templateData) {
    return this.http.post('/common/send-mail', templateData).map((response: Response) => response.json());
  }

  getBusinessNotificationByReceiverId(_id) {
    return this.http.get('/common/investor-notification/'+_id).map((response: Response) => response.json());
  }
  
  addCP(reqData){
    return this.http.post('/common/add-cp', reqData).map((response: Response) => response.json());
  }

  deductCP(reqData){
    return this.http.post('/common/deduct-cp', reqData).map((response: Response) => response.json());
  }

  checkCreditBalance(_id, totalPayableCP){
    return this.http.get('/common/check-wallet-balance/'+_id+'/'+totalPayableCP).map((response: Response) => response.json());
  }

  startWalletTransactionProcess(walletDetails){
    console.log("walletDetails", walletDetails);
    return this.http.post('/common/user-wallet-transaction-process/', walletDetails).map((response: Response) => response.json());
  }

  getSuperAdminDetails(){
    return this.http.get('/common/super-admin-by-role').map((response: Response) => response.json());
  }

  getCanceledBusiInvestmentData(_id){
    return this.http.get('/common/canceled-business-investment/'+_id).map((response: Response) => response.json());
  }

  sendRoiPaybackInvoice(mailData){
    return this.http.post('/roi-payback-invoice/', mailData).map((response: Response) => response.json());
  }

  buyCreditPoint(payment){
    return this.http.post('/paypal-checkout/add-credit', payment).map((response: Response) => response.url);
  }
  
  getPaymentResponse(){
    return this.http.get('/paypal-checkout/get-payment-response').map((response: Response) => response.json());
  }
  
}

