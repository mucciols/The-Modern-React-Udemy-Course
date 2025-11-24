 import { useEffect } from "react";

// import RecipeHeader from "../components/RecipeHeader";

import useFetchRecipe from "../hooks/useFetchRecipe";
import { useParams } from "react-router-dom";
import RecipeHeader from "../components/RecipeHeader";
import Loading from "../components/Loading";
// import Loading from "../components/Loading";
// import RecipeInfo from "../components/RecipeInfo";
// import Error from "../components/Error";



// eslint-disable-next-line react/prop-types
export default function RecipePage() {
  const { id } = useParams();
  const [fetchRecipe, { data , loading, error }] = useFetchRecipe()

  useEffect(()=>{
    fetchRecipe(id)
  },[])

  console.log({ data ,loading, error });

  // const recipe = recipes.find((recipe) => recipe.id === Number(id));
  // console.log(id, 2);
  // const { id } = useParams();
  // const [fetchRecipe, { data, loading, error }] = useFetchRecipe();
  // useEffect(() => {
  //   fetchRecipe(id);
  // }, []);
  // if (loading) return <Loading />;
  // if (error) return <h1>{error}</h1>;
  // if (data?.errors) return <Error explanation="Recipe not found" />;
  //console.log(data);

  
  if(loading)
    return <Loading />
  if(error)
    return <h1>{error}</h1>
  return (
    // <div>
    //   {data && (
    //     <>
    //       <RecipeHeader nutritionalFacts={data.nutrition} name={data.name} />
    //       <RecipeInfo
    //         instructions={data.instructions}
    //         image={data.thumbnail_url}
    //         ingredients={data.sections[0].components}
    //       />
    //     </>
    //   )}
    // </div>
    <div>
      { data && 
        <>
          <RecipeHeader nutritionalFacts={data.nutrition} /> 
        </>
      }
      

      
    </div>
  );
}
