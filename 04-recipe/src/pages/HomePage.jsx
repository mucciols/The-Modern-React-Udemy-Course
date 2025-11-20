// import { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import CardList from "../components/CardList";
import Header from "../components/Header";
// import Loading from "../components/Loading";
// import useFetchRecipes from "../hooks/useFetchRecipes";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {

	const [recipes, setRecepies] = useState([]);

	const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://tasty.p.rapidapi.com/recipes/list",
          {
            params: {
              from: "0",
              size: "20",
              tags: "under_30_minutes",
            },
            headers: {
              "x-rapidapi-key": "f6fa45d237msh97850375b9c7cf6p1dddcfjsnf5cdbb7f0f73",
              "x-rapidapi-host": "tasty.p.rapidapi.com",
            },
          }
        );
				setRecepies(response.data.results);
				console.log(recipes)
      } catch (error) {
        console.error("Errore chiamata API:", error);
      }
    };

	useEffect(() => {
    fetchRecipes();
  }, []);
	


  //const [fetchRecipes, { data, loading, error }] = useFetchRecipes();
  // const [searchParams] = useSearchParams();
  // useEffect(() => {
  //   fetchRecipes(searchParams.get("search"));
  // }, []);

  // const handleSearch = (searchTerm) => {
  //   if (searchTerm) {
  //     fetchRecipes(searchTerm);
  //   }
  // };

  return (
    // <>
    //   <Header handleSearch={handleSearch} />
    //   {loading && <Loading />}
    //   {data && <CardList recipes={data} />}
    //   {error && <p>{error}</p>}
    // </>
    <>
		
      <Header />
      <CardList recipes={recipes}/>
    </>
  );
}
