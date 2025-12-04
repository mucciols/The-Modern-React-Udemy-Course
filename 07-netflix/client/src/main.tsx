import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./app/store"
import './index.css';
import App from './App.tsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from  'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import PlansPage from './pages/PlantsPage.tsx';
import BrowsePage from './pages/BrowsePage.tsx';
import WatchPage from './pages/WatchPage.tsx';
// import MovieWithPrisma from './pages/MovieWithPrisma.tsx';
import PrivateRoutes from './utils/PrivateRoutes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route path='/' element= { <HomePage /> } />
      <Route path='/login' element= { <LoginPage />}/>
      <Route path='/plans' element= {<PlansPage />}/>
      <Route path='/browse' element= {<BrowsePage />}/>

      <Route path="/browse" element={ <PrivateRoutes /> }>
        <Route path='/browse/watch/:id' element= {<WatchPage />}/>
        {/* <Route path='/moviewithprisma' element= {<MovieWithPrisma />}/> */}
      </Route>
      
    </Route>
  )
) 

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
)
