import React, {useState, useEffect} from 'react'
import Gif from './Gif.js'
import GifsTendencias from './GifsTendencias'


export default function ListOfGifs({ keyword }) {
	const [gifs, setGifs] = useState([]);

    // useEffect(function () {
    //   GifsTendencias({ key: gifs.id }).then((gifs) => setGifs(gifs));
	// }, []);
	
	return gifs.map(({ id, title, url }) =>
		<Gif
			key={id}
			id={id}
			title={title}
			url={url}
		/>
	)
}