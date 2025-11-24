import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchRecipes from "../hooks/useFetchRecipes";

export default function HomePage() {

	const [data, loading] = useFetchRecipes()

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
			{loading && <Loading />}
			{data && < CardList recipes={data}/>}
      
    </>
  );
}
