import React,{useState} from 'react'
import "../../style-components/Login/style.css"
import { FormInformation, InformatioLogin, InputLogin, Main, Page_Login, Signup,LoginDiv, Error, ButtonLogin } from "../../style-components/Login/Login"
import {validateLogin} from "../../utils/Validats"
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [dataUser,setDataUser]=useState("");
	const [error,setError] = useState("");
	let navigate = useNavigate();

	const onChangeData=(e)=>{
		const {value}=e.target;
		setDataUser(value)
		setError(validateLogin(value))
	}

	const onSubmitLogin=(e)=>{
		e.preventDefault();
		const errorValidate=validateLogin(dataUser);
		setError(errorValidate)
		if(errorValidate.length===0){
			window.localStorage.setItem("dataUser",dataUser)
			navigate("/home", { replace: true });
		}
	}

  	return (
    	<Page_Login>
		<Main>  	
			<InputLogin type="checkbox" id="chk" aria-hidden="true"/>
			<Signup >
				<FormInformation>
					<label htmlFor="chk" aria-hidden="true">Welcome</label>
					<InformatioLogin>Login with a username</InformatioLogin>
				</FormInformation>
			</Signup >

			<LoginDiv className="login">
				<form onSubmit={(e)=>{onSubmitLogin(e)}}>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<InputLogin type="text" name="username" placeholder="username" 
						onChange={(e)=>{
							onChangeData(e)
						}}
					/>
					{error && <Error>{error}</Error>}
					
					<ButtonLogin type="submit" className="buttonLogin">Login</ButtonLogin>
				</form>
			</LoginDiv>
		</Main>
    </Page_Login>
  )
}

export default Login