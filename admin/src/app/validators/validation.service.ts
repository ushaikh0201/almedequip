import { AbstractControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': `This field is required!`,
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Please enter valid email address.',
            'invalidPassword': 'Password must be between 6 and 20 characters!',
            'minlength': `You need to enter at least ${validatorValue.requiredLength} characters.`,
            'notMatchPassword': 'Password confirmation does not match password!',
            'mustChecked': 'This must be checked',
            'notValidBondValue': 'Number of bond must be less than or equal to available bond!',
            'maxLength': `You can only enter ${validatorValue.requiredLength} characters.`,
            'dateInvalid': 'Invalid date!',
            'endDateLessThanStartDate': 'End Date should be greater than start date!',
            'notLessThanOrEqualtoZeroValue': 'This field should not be less than or equal to zero',
            'notAvailableToSold': 'Not available to sold',
            'amountLessThanRequiredAmount': 'Amount must be less than required amount',
            'invalidMobileNumber': 'Invalid mobile number!',
        };

        return config[validatorName];
    }

    static requiredValidator(control) {
        if (control.value == null || control.value == '' || control.value == 0) {
            return { 'required': true };
        } else {
            return null;
        }
    }

    /* static requiredIfValidator(control: AbstractControl){
        const formGroup = control.parent;
        if(formGroup){
            const prevControl = formGroup.get('')   
        }
    } */

    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value == null || control.value == '') {
            return null;
        }
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (!control.value) {
            return null;
        }
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,20}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    static confirmPasswordValidator(AC: AbstractControl) {
        const formGroup = AC.parent;
        if (formGroup) {
            const passwordControl = formGroup.get('password'); // to get value in input tag
            const confirmPasswordControl = formGroup.get('confirmPassword'); // to get value in input tag

            if (passwordControl && confirmPasswordControl) {
                const password = passwordControl.value;
                const confirmPassword = confirmPasswordControl.value;
                if (password !== confirmPassword) {
                    return { notMatchPassword: true };
                } else {
                    return null;
                }
            }
        }

        return null;
    }

    static isChecked(control) {
        if (!control.value) {
            return { mustChecked: true };
        } else {
            return null;
        }
    }

    static numberOfBondValidator(AC: AbstractControl) {
        const formGroup = AC.parent;
        //if (formGroup) {
        const numberOfBondControl = formGroup.get('number_of_bond');
        const totalAvailableBond = formGroup.get('total_available_bond');
        if (totalAvailableBond.value == 0) {
            return Observable
                .of(numberOfBondControl.value == '' || numberOfBondControl.value == 0 || numberOfBondControl.value < 0)
                .map(result => !!result ? { 'notAvailableToSold': true } : null);
        }

        if (numberOfBondControl.value == '' || numberOfBondControl.value == 0 || numberOfBondControl.value < 0) {
            return Observable
                .of(numberOfBondControl.value == '' || numberOfBondControl.value == 0 || numberOfBondControl.value < 0)
                .map(result => !!result ? { 'notLessThanOrEqualtoZeroValue': true } : null);
        }

        return Observable
            .of(totalAvailableBond.value >= numberOfBondControl.value)
            .map(result => !!result ? null : { 'notValidBondValue': true });
        //}

        //return null;
    }

    static pledgeAmountValidator(AC: AbstractControl) {
        const formGroup = AC.parent;
        const amountControl = formGroup.get('amount');
        const requiredAmountControl = formGroup.get('required_amount');
        if (requiredAmountControl.value == 0) {
            return Observable
                .of(requiredAmountControl.value == '' || requiredAmountControl.value == 0 || requiredAmountControl.value < 0)
                .map(result => !!result ? { 'notAvailableToSold': true } : null);
        }

        if (amountControl.value == '' || amountControl.value == 0 || amountControl.value < 0) {
            return Observable
                .of(amountControl.value == '' || amountControl.value == 0 || amountControl.value < 0)
                .map(result => !!result ? { 'notLessThanOrEqualtoZeroValue': true } : null);
        }

        return Observable
            .of(requiredAmountControl.value >= amountControl.value)
            .map(result => !!result ? null : { 'amountLessThanRequiredAmount': true });
    }

    static dateValidator(control) {
        if (control.pristine) {
            return null;
        }

        if ((control.value !== undefined && control.value !== '' && control.value != null)) {

            var month = null;
            var day = null;
            var year = null;
            var currentTaxYear = Number(new Date().getFullYear() - 1);
            if (control.value.indexOf('/') > -1) {
                var res = control.value.split("/");
                if (res.length > 1) {
                    month = res[0];
                    day = res[1]
                    year = res[2];
                }
            }
            else {
                if (control.value.length == 8) {
                    month = control.value.substring(0, 2);
                    day = control.value.substring(2, 4);
                    year = control.value.substring(4, 8);
                }
            }
            if (isNaN(month) || isNaN(day) || isNaN(year)) {
                return { 'dateInvalid': true };
            }
            month = Number(month);
            day = Number(day);
            year = Number(year);
            if (month < 1 || month > 12) { // check month range
                return { 'dateInvalid': true };
            }
            if (day < 1 || day > 31) {
                return { 'dateInvalid': true };
            }
            if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
                return { 'dateInvalid': true };
            }
            if (month == 2) { // check for february 29th
                var isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
                if (day > 29 || (day === 29 && !isleap)) {
                    return { 'dateInvalid': true };
                }
            }
            if (year !== currentTaxYear) {
                return { 'dateInvalid': true };
            }
        }
        return null;
    }

    static isRequiredIfChecked(AC: AbstractControl) {
        const formGroup = AC.parent;
        if (formGroup) {
            const is_open_end = formGroup.get('is_open_end');
            const expire_by_month = formGroup.get('expire_by_month');

            if (is_open_end.value === true) {
                console.log("insode if block");
                return null;
            } else {
                console.log("insode else block");
                if (expire_by_month.value == 0 || expire_by_month.value == '')
                    return { required: true };
                else
                    return null;
            }
        }
    }

    static endDateAfterOrEqualValidator(AC: AbstractControl) {
        const formGroup = AC.parent;
        if (formGroup) {

            let start_date = new Date(formGroup.get('start_date').value);
            let end_date = new Date(formGroup.get('end_date').value);

            if (end_date.getTime() < start_date.getTime()) {
                return { 'endDateLessThanStartDate': true };
            } else {
                return null;
            }
        }
    }

    static mobileNumberValidator(control){
        return Observable
            .of(control.value.match('^[0-9]*$'))
            .map(result => !!result ? null : { 'invalidMobileNumber': true });
    }
}
