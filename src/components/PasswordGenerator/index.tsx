'use client'


import { FC, useEffect, useState } from "react";
import { PasswordWrapper } from "./style";
import Image from "next/image";
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import Checkbox from "../CheckBox";
import { IPasswordFields } from "./models";
import { createPassword } from "./utils/createPassword";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { validationPassword } from "./utils/validationPassword";




const PasswordGenerator:FC=()=>{

    const[passwordLength,setPasswordLength] = useState<number>(10);
    const [password, setPassword] = useState<string>('');
    const[checkboxesValues ,setCheckboxesValues ] = useState<IPasswordFields>({lower:false,upper:true,number:true,special:false})     
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [paswordStatusText,setPasswordStatusText]=useState<string>('');
    let cssClassName='';

    
    //destructure:
    const {lower, upper ,number , special}= checkboxesValues;

    //Functions:
    const toggleCheckboxStatus=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, checked } = e.target;
        setCheckboxesValues((prev)=> ({ ...prev, [name]: checked }))  ;
        console.log(checkboxesValues);
    }
     const onChangePasswordLength = (value: any) => {
        setPasswordLength(value)
      }
    const refreshClicked =()=>{
        setPassword(createPassword(checkboxesValues,passwordLength));
        let result = validationPassword(password);
        setPasswordStatusText(result);
    }
    const copyPassword = ()=>{
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }

     //Hooks:
    useEffect(()=>{
        setPassword(createPassword(checkboxesValues,8));
        let result = validationPassword(password);
        setPasswordStatusText(result);
    },[]);
     
    useEffect(()=>{
       if(upper == false && lower==false && number==false && special==false)
         setCheckboxesValues({  lower: true , upper: false, number: false, special: false });

    },[checkboxesValues]);



 


    return(

        <PasswordWrapper>

            <div className="gif">
                <Image src="/assets/gif/password.gif" height={134} width={134} alt="Password Gif"/>
            </div>
            <div className="description">
                <h2 className="title">PASSWORD GENERATOR</h2>
                <p className="subtitle">
                    Ensure online account safety by creating strong and secure passwords
                </p>
            </div>
            <div className="password-input-wrapper">

                <div className="password-field">
                     <input type="text" placeholder="" className="" value={password}/>
                      <Image src="/assets/icons/refresh.svg" height={24} width={20} alt="refresh the password" onClick={refreshClicked} />
                </div>
                <CopyToClipboard text={password} onCopy={copyPassword}>
                    <button className="copy-btn">
                    <Image src="/assets/icons/copy.svg" height={24} width={20} alt="copy password" />
                              {isCopied ? 'Copied' : 'Copy'}
                    </button>
              </CopyToClipboard>

                
            </div>

            {(() => {
                if (paswordStatusText == 'Too Short') {
                    cssClassName='danger';
                } else if (paswordStatusText == 'Weak') {
                    cssClassName='danger';
                } else if (paswordStatusText == 'Medium') {
                    cssClassName='warning';
                }else{
                    //paswordStatusText == 'Strong'
                    cssClassName='success';
                }

                return null;
            })()}
            
            <span className={`status ${cssClassName}`}>{paswordStatusText}</span>
            <div className="slider">
                <div>
                    <label id="slider-label">Password Length: </label>
                    <span>{passwordLength}</span>
                </div>
                <Slider
                    max={30}
                    min={5}
                    value={passwordLength}
                    //   onChange={()=>{setPasswordLength(passwordLength)}}
                    onChange={onChangePasswordLength}
                    className="slider-style"
                />
          </div>

            <div className="elements">
                 <Checkbox id="uppercase" label="Uppercase" checked={upper} name="upper" onChange={toggleCheckboxStatus} />
                 <Checkbox id="lowercase" label="Lowercase" checked={lower} name="lower" onChange={toggleCheckboxStatus} />
                 <Checkbox id="numbers" label="Numbers" checked={number} name="number" onChange={toggleCheckboxStatus} />
                 <Checkbox id="specials" label="specials" checked={special} name="special" onChange={toggleCheckboxStatus} />
            </div>

        </PasswordWrapper>
       

          
     
    )
}
export default PasswordGenerator;