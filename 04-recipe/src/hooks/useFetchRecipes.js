import axios from "axios";
import { useState } from "react";

const options = {
            params: {
              from: "0",
              size: "20",
              //tags: "under_30_minutes"
            },
            headers: {
              "x-rapidapi-key": "f6fa45d237msh97850375b9c7cf6p1dddcfjsnf5cdbb7f0f73",
              "x-rapidapi-host": "tasty.p.rapidapi.com",
            },
}

const useFetchRecipes = () => {
	const [recipes, setRecepies] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null)

	// useEffect(() => {
  //   fetchRecipes();
  // }, []);

	const fetchRecipes = async (searchTerm) => {
		setLoading(true);
		setRecepies(null);
		setError(null);
		try {
			const reqOptions = { ...options }
			if (searchTerm) {
				reqOptions.params.q =  searchTerm
			}
			const response = await axios.get("https://tasty.p.rapidapi.com/recipes/list",reqOptions);
			setRecepies(response.data.results);
			setLoading(false);
		} catch (error) {
			console.error("Errore chiamata API:", error);
			setError(error.message);
			setLoading(false);
		}
	};

	return [fetchRecipes, {data: recipes, loading, error}];
}




// const useFetchRecipes = () => {
//   const [recipes, setRecipes] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchRecipes = async (searchTerm) => {
//     setLoading(true);
//     setRecipes(null);
//     setError(null);
//     try {
//       const reqOptions = { ...options };
//       if (searchTerm) {
//         reqOptions.params.q = searchTerm;
//       }
//       const response = await axios.request(reqOptions);
//       setRecipes(response.data.results);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   return [fetchRecipes, { data: recipes, loading, error }];
// };

export default useFetchRecipes;
