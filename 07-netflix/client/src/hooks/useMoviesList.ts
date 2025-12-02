import { useEffect, useReducer, useState } from "react"
import axios from "axios";
import type { Movie } from "../Types";

interface State {
  data: Movie[] | null;
  error: string |null;
  loading: boolean
}

enum ActionType {
  LOADING,
  SUCCESS,
  FAILED
}

type Action = { type: ActionType.LOADING } | 
              { type: ActionType.SUCCESS; payload : Movie[]} |
              { type: ActionType.FAILED; payload: string }

const initialState: State = {
  data: null,
  error: null,
  loading: false
}

const reducer = (state: State, action: Action) : State  => {

  switch(action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ActionType.FAILED:
      return {
        loading: false,
        error: action.payload,
        data: null
      }
    case ActionType.SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload
      }
    default:
      return initialState;
  }

}

const useMoviesList = (offset:number) => {
  const [{data, loading, error}, dispatch] = useReducer(
    reducer, 
    initialState
  );
  const [count, setCount] = useState<number|null>(null);

  const fetchMoviesList = async () =>  {
    if(data && count && data.length >= count) 
      return;

    dispatch({ type: ActionType.LOADING })
    try {
      const response = await axios.get(`http://localhost:8080/movies/list?offset=${offset}`)
      const movieData = data ? [...data, ...response.data.movies] : response.data.movies;
      setCount(response.data.count);
      dispatch({ type: ActionType.SUCCESS, payload: movieData })
    } catch(error) {
      console.log(error);
      dispatch({ type: ActionType.FAILED, payload: "Something went wrong" })
    }
  }

  useEffect( () => {
    fetchMoviesList();
  } , [offset] )

  return { data, loading, error }
}

export default useMoviesList

// LOADING
// { type: LOADING }
// ERROR
// { type: LOADING }
// SUCCESS