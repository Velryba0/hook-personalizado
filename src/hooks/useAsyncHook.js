import { useState, useEffect } from 'react'
import { keyApiNews } from '../config/config';

const useAsyncHook = (searchNews) => {
    const [result, setResult] = useState([]);
	const [loading, setLoading] = useState('false');

	useEffect(() => {
        //Se envuelve el fetch dentro de una función, para que se ejecute dentro del ciclo de vida
		const fetchNewList = async () => {
			try {
				setLoading('true');
				const response = await fetch(
					`https://newsapi.org/v2/top-headlines?country=${searchNews.country}&category=${searchNews.category}&apiKey=${keyApiNews.key}`
				);

				const json = await response.json();
				console.log(json)

				setResult(
					json.articles.map(article => {
						return article
					})
				);
			} catch (error) {
				setLoading('null');
			}
        }
        
        //Se ejecuta función

		if(searchNews !== '') {
			fetchNewList();
        }
        //Cada vez que cambie el valor de serachNews, se va a renderizar el componente
	}, [searchNews]);
    //Se retornan los estados que hayas definido, con la información que requieras usar en cualquier otro componente. 
    //Puedes usar destructuring array, para obtener los valores, ejemplo: const [result, loading] = useAsyncHook(object)
    //En este ejemplo nuestro hook personaliado recibe un objeto, pero puede recibir lo que tú necesites.
	return [result, loading];
}   

export default useAsyncHook;