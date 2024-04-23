import { IPasswordFields } from "../models";

const lowercaseString: string = "abcdefghijklmnopqrstuvwxyz";
const uppercaseString: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersString: string = "0123456789";
const specialsString: string = "!@#$%^&*()";

export const createPassword = (
  data: IPasswordFields,
  passwordLength: number
): string => {
  let finalStr = "";
  //destructure:
  const { lower, upper, number, special } = data;

  if (lower) finalStr += lowercaseString;
  if (upper) finalStr += uppercaseString;
  if (number) finalStr += numbersString;
  if (special) finalStr += specialsString;

  let pass = "";
  for (let i = 1; i <= passwordLength; i++) {
    const randomNumber = Math.random();
    let index = Math.floor(randomNumber * finalStr.length);
    pass += finalStr.charAt(index);
  }

  return pass;
};
