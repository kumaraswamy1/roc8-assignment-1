import { useState } from "react";
import "./App.css";
import { Captcha } from "./components/Captcha";
import { generateCaptcha } from "./constants/generatecaptcha";

function App() {
	const intialData={name: "", password: "", captchaValue: ""}
	const [user, setUserData] = useState(intialData);
const [captcha, setCaptcha] = useState(generateCaptcha());
	const [status, setStautus] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (captcha === user.captchaValue) {
			setStautus("Captcha verified ✅ ")
			setUserData(intialData);
			setCaptcha(generateCaptcha())
		} else {
			setStautus("Captcha doesnt match. please try again")
			setUserData({ ...user, captchaValue: "" });
			
		}
	};
	const userInputHandler = ( name,value) => {
		let data = { [name]: value };
		setUserData({ ...user, ...data });
	};

	return (
		<div >
			<form onSubmit={handleSubmit}>
			<h1 className="form-h1">Welcome! Sign up here</h1>
				
						<input
					value={user.name}
					name="name"
					type="text"
					className="form-input "
					placeholder="Username"
					required
					onChange={(e) => userInputHandler( e.target.name,e.target.value)}
				/>
			
				
			<input
					value={user.password}
					name="password"
					type="password"
					className="form-input "
					placeholder="Password"
					required
						onChange={(e) => userInputHandler( e.target.name,e.target.value)}
				/>
			
				<Captcha captcha={captcha} setCaptcha={setCaptcha} />
				
				<input
					value={user.captchaValue}
					name="captchaValue"
					type="text"
				    className="form-input "
					placeholder="Enter the captcha"
					required
						onChange={(e) => userInputHandler( e.target.name,e.target.value)}
				/>
				<p className="status-text">{status && status }</p>
				<button type="submit" className="submit-button" >Submit</button>
			</form>
			{console.log({user})}

		</div>
	);
}

export default App;
