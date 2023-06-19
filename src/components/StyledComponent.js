import Styled from 'styled-components'

export const BoldButton = Styled.button`
background-color: transparent;
border: none;
color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
padding: 0;
outline: none;
`
export const ItalicButton = Styled.button`
background-color: transparent;
border: none;
color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
padding: 0;
outline: none;
`
export const UnderlineButton = Styled.button`
background-color: transparent;
border: none;
color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9')};
padding: 0;
outline: none;
`
export const TextArea = Styled.textarea`
background-color: #25262c;
border: 1px solid #cbd5e1;
outline: none;
width: 100%;
padding: 10px 20px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
color: #ffffff;
font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
