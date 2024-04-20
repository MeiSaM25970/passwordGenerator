
import { FC } from "react";
import { CheckboxWrapper } from "./style";



interface IProps{
    id:string,
    label:string,
    checked:boolean,
    name:string,
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void,
}


const Checkbox:FC<IProps>=({ id, label, checked, name , onChange})=>{
    return(
        <CheckboxWrapper>
            <input className="check" type="checkbox" id={id}  checked={checked} name={name}  onChange={(e)=>onChange(e)} />
            <label htmlFor={id}>{label}</label>
        </CheckboxWrapper>

    )
}
export default Checkbox;