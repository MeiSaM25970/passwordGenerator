import { IPasswordFields } from "../models";



const lowercaseString:string='abcdefghijklmnopqrstuvwxyz';
const uppercaseString:string ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersString:string='0123456789';
const specialsString:string ='!@#$%^&*()';



export const createPassword = (data:IPasswordFields , passwordLength:number):string => {
        let finalStr = '';
        //destructure:
        const {lower, upper ,number , special}= data;


        if(lower) finalStr = `${finalStr}${lowercaseString}`
        if(upper) finalStr = `${finalStr}${uppercaseString}`
        if(number) finalStr = `${finalStr}${numbersString}`
        if(special) finalStr =`${finalStr}${specialsString}`

        let pass = '';
        for (let i = 1; i <= passwordLength; i++) {
            let char = Math.floor(Math.random() * finalStr.length + 1);
            pass += finalStr.charAt(char)
        }


   
 
    return pass;

}

