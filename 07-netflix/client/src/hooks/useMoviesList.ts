import { error } from "console";
import { act, useReducer } from "react"

interface State {
  data: Movie[] | null;
  error: string |null;
  loading: boolean
}

interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  genre: string;
  duration: string;
}

enum ActionType  {
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

const reducer = (_: State, action: Action) : State  => {

  switch(action.type) {
    case ActionType.LOADING:
      return {
        loading: true,
        error: null,
        data: null
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

const useMoviesList = () => {
  const [] = useReducer(reducer, initialState)
}

export default useMoviesList

// LOADING
// { type: LOADING }
// ERROR
// { type: LOADING }
// SUCCESS