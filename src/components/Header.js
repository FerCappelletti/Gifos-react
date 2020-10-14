import Logo from '../imagenes/gifOF_logo.png'
import React, { useState } from 'react'
import BtnMenu from './BtnMenu';
export default function Header() {
	const [theme, setTheme] = useState(true);
	const className = theme ? "modo-day" : "modo-dark";

	const onClick = (e) => {
		console.log('click	', e)
      e.preventDefault();
      setTheme(!theme);
    };
	return (
		<section className={className}>
			<img src={Logo} alt='LogoGifos' />
			<div >
				<BtnMenu name ={ theme ? "Modo día" : "Modo dark"} onClick={onClick}></BtnMenu>
			</div>
		</section>
	)
}