
export const validationPassword=(password:string):string=>{

   let  count:number = 0;
   let passwordStatus='';

   if(password.length < 8) {
    passwordStatus='Too Short' ;
    return passwordStatus;
   }
    
   
   // at least one uppercase:
   if(/(?=.*?[A-Z])/.test(password)) count++;

   //at least one lowercase
   if(/(?=.*?[a-z])/.test(password)) count++;

   //at least one digit
    if(/(?=.*?[0-9])/.test(password)) count++;

   //at least one special character
    if(/(?=.*?[!@#$%^&*()])/.test(password)) count++;

    if(count >= 4) passwordStatus='Strong';
    if(count ==3) passwordStatus='Medium';
    if(count <=2) passwordStatus='Weak'

    return passwordStatus;

}