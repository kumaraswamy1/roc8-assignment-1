import { useEffect, useRef } from "react";
import { generateCaptcha } from "../constants/generatecaptcha";

export const Captcha = ({ captcha, setCaptcha }) => {
	const canvasRef = useRef(null);
	const refresh = () => {
		let ctx = canvasRef.current.getContext("2d");
		ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		setCaptcha(generateCaptcha());
	};
	useEffect(() => {
		const ctx = canvasRef.current.getContext("2d");
		ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		ctx.font = "3rem serif";
		ctx.textAlign = "center";
		ctx.fillText(captcha, 150, 75);
	}, [captcha]);

	return (
		<div className="captcha-field">
			<canvas
				ref={canvasRef}
				aria-label="Captcha"
				role="img"
				className="captcha-canvas"
			/>
			<button type="button" className="refresh-captcha" onClick={refresh}>
				🔃
			</button>
		</div>
	);
};
