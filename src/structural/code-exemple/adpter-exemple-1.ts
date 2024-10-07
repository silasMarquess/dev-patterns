const validator = require('validator');

interface EmailValidatorRequire{
    isEmail(email: string):boolean;
}

export class emailValidatorAdpter implements EmailValidatorRequire{
    isEmail(email: string): boolean {
        return validator.isEmail(email);
    }
}

export class ValidationClass{
 private title='Class de validacao'

  static emailValidateService : EmailValidatorRequire = new emailValidatorAdpter;

   static ValidateEmail(email: string): void {
    const valid = ValidationClass.emailValidateService.isEmail(email);
    if(valid){
        console.log(`email: ${email} é válido`);
    }else{
        console.log(`email: ${email} não é valido`);
    }
   }
}

ValidationClass.ValidateEmail('silasmaques@outlook.com');