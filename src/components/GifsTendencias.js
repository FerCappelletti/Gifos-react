
const urlTendencias =
  "https://api.giphy.com/v1/gifs/trending?api_key=dkVRyCXXNDv7wwCKsRBvO6XVQ5xtqNNi&limit=12&rating=G";

export default function gifsTendencias({ keyword }) {
	return fetch(urlTendencias)
		.then(res => res.json())
		
		.then(response => {
			//console.log(response);
			const { data } = response;
			const gifs = data.map(image => {
				const { images, title, id } = image
				const {url} = images.downsized_medium
			return { images, title, url }
		})
	return gifs
		})

}