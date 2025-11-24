// import axios from "axios";
// import { useReducer } from "react";

// const options = {
//   method: "GET",
//   url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
//   params: { id: "8138" },
//   headers: {
//     "X-RapidAPI-Key": "30b594a022mshc657030b09147dcp153ad1jsn8b9a863a5527",
//     "X-RapidAPI-Host": "tasty.p.rapidapi.com",
//   },
// };

// const initialState = {
//   data: null,
//   loading: false,
//   error: null,
// };

// const Action = {
//   FETCHING_DATA: "FETCHING_DATA",
//   FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
//   FETCH_ERROR: "FETCH_ERROR",
// };

// const reducer = (_, action) => {
//   switch (action.type) {
//     case Action.FETCHING_DATA:
//       return {
//         data: null,
//         error: null,
//         loading: true,
//       };
//     case Action.FETCH_SUCCESSFUL:
//       return {
//         error: null,
//         loading: false,
//         data: action.payload,
//       };
//     case Action.FETCH_ERROR:
//       return {
//         error: action.payload,
//         data: null,
//         loading: false,
//       };
//     default:
//       return initialState;
//   }
// };

// const useFetchRecipe = () => {
//   const [{ data, loading, error }, dispatch] = useReducer(
//     reducer,
//     initialState
//   );

//   const fetchRecipe = async (id) => {
//     dispatch({ type: Action.FETCHING_DATA });

//     try {
//       const reqOptions = { ...options };
//       reqOptions.params.id = id;
//       const response = await axios.request(reqOptions);

//       dispatch({ type: Action.FETCH_SUCCESSFUL, payload: response.data });
//     } catch (err) {
//       dispatch({ type: Action.FETCH_ERROR, payload: err.message });
//     }
//   };

//   return [fetchRecipe, { data, loading, error }];
// };

// export default useFetchRecipe;

import axios from 'axios'
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


const useFetchRecipe = () => {
  const [recipe, setRecipe] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null)

	// useEffect(() => {
  //   fetchRecipes();
  // }, []);

	const fetchRecipe = async (id) => {
		setLoading(true);
		setRecipe(null);
		setError(null);
		try {
			const reqOptions = { ...options }
			
			reqOptions.params.q =  id
			
			const response = await axios.get("https://tasty.p.rapidapi.com/recipes/get-more-info?id=8138",reqOptions);
			setRecipe(response.data);
			setLoading(false);
		} catch (error) {
			console.error("Errore chiamata API:", error);
			setError(error.message);
			setLoading(false);
		}
	};

	return [fetchRecipe, {data: recipe, loading, error}];
}

export default useFetchRecipe;