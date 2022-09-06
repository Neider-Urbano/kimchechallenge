import styled from "styled-components";

export const Page_Login= styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	font-family: 'Jost', sans-serif;
	background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
`
export const Main= styled.div`{
	width: 350px;
	height: 500px;
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #000;
}`


export const Signup= styled.div`{
	position: relative;
	width:100%;
	height: 100%;
    }`

export const FormInformation= styled.form`{
	display: flex;
	flex-direction: column;
	align-items: center;
}`

export const InputLogin= styled.input`{ 
	width: 60%;
	height: 40px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
	font-size: 12pt;
}`

export const InformatioLogin= styled.p`{ 
	color: #eee;
	font-size: 15pt;
	width: 130px;
	text-align: center;
}`

export const ButtonLogin= styled.button`{ 
	width: 60%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: #fff;
	background: #573b8a;
	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}`

export const LoginDiv= styled.div`{ 
	height: 460px;
	background: #eee;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
	transition: .8s ease-in-out;
}`
export const Error= styled.p`{
	color: red;
	text-align: center;
}`