'use client'

import styled from "styled-components";



export const PasswordWrapper = styled.div`
      
    background-color: white;
    width: 450px;
    border-radius: 20px;
    margin: 0 auto;
    padding:25px 80px 40px;
    border: 1px solid #588b54;


    .gif{
        text-align: center;
        margin-bottom: 10px;
    }
    .description{
        text-align: center;
    }
    .description > .title{
        font-size: 26px;
        font-weight: 600; 
    }

    .description > .subtitle{
         font-size: 16px;
         margin-top: 5px;
    }



    /* ****************************************************** */
    .password-input-wrapper{
         display: flex;
         align-items: center;
         margin-top: 24px;
         /* justify-content: space-between; */
         gap:15px;
    }

   .password-field{
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap:10px;
        border-radius: 14px;
        outline: 1px solid #3f563d;
        padding:0 10px;
        
       
    }
        .password-field > input{

            width: 100%;
            padding: 11px 12px;
            border: 3 px solid blue;
            border: none;
            outline: none;
            }
        .password-field > img {
            cursor: pointer;
            }


     .copy-btn{
        background-color: #33cccc;
        border-radius: 14px;
        font-size: 14px;
        font-weight: bold;
        padding: 8px 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:7px;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .status{
     font-weight: 500;
    }


    .slider {
        margin-top: 30px;
        }

        .slider-style {
        margin-top: 22px;
        margin-bottom: 30px;
        }

        .slider-style .rc-slider-rail {
        height: 8px;
        background-color: transparent;
        border: 1px solid #000000;
        border-radius: 4px;
        }

        .slider-style .rc-slider-track {
        background-color: #33cccc;
        height: 8px;
        }

        .slider-style .rc-slider-handle {
        width: 23px;
        height: 23px;
        border: 1px solid #000000;
        background-color: #33cccc;
        top: 2px;
        z-index: 1;
        opacity: 1;
        }

/********************************** */
        .success {
        color: #198754;
        }
        .warning {
        color: #ffc107;
        }
        .danger {
        color: #dc3545;
        }




`