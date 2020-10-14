import React, {useState} from 'react';

export default function BtnMenu({ name }) {
	const [theme, setTheme] = useState(true);
	const className = theme ? "modo-day" : "modo-dark";

		const onClick = (e) => {
      console.log("click	", e);
      e.preventDefault();
      setTheme(!theme);
    };
	return <button className={className} onClick={onClick}>{name}</button>
}