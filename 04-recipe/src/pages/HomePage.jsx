import CardList from "../components/CardList";
import Header from "../components/Header";
import useFetchRecipes from "../hooks/useFetchRecipes";

export default function HomePage() {

	const [recipes] = useFetchRecipes()

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
