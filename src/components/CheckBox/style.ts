'use client'
import styled from "styled-components"




export const CheckboxWrapper = styled.div`

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        margin-top: 8px;

        .check{
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 4px;
            margin-right: 0.5em;
            border: 1px solid #292d32;
            outline: none;
            cursor: pointer;
        }
        .check:checked {
            background-color: #33cccc;
            position: relative;
            border: 1px solid #33cccc !important;
                     }
`
