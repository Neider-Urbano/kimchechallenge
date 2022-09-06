import styled from "styled-components";

export const DivSearch = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

export const InputSearch= styled.input`
	font-size: 1em;
	font-weight: bold;
	outline: none;
	border: none;
	border-bottom-left-radius: 5px;
	border-top-left-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
    padding: 7px 15px;
`
 export const SearchButton= styled.button`
	color: #fff;
	background: #573b8a;
	font-size: 1em;
	font-weight: bold;
	outline: none;
	border: none;
	border-bottom-right-radius: 5px;
	border-top-right-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
    padding: 7.5px 15px;
`