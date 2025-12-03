import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import useMovie from "../hooks/usemovie";
import { useNavigate, useParams } from "react-router-dom";

export default function WatchPage() {
  const params = useParams() as { id:string }
  const {data, loading, error} = useMovie(params.id)
  const navigate = useNavigate();

  if(loading)
    return <h1>Loading...</h1>
  
  if(error || !data)
    return <h1>{error}</h1>
  
  const {title, videoUrl} = data;

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full è-4 z-10 flex items-center gap-8 bg-black bg-opacity-80 ">
        <ArrowLeftIcon className="w-10 text-white cursor-pointer hover:opacity-80 transition" onClick={() => navigate("/browse") } />
        <p className="text-white text-3xl font-bold">
          <span className="font-light">Watching:</span> {title}
        </p>
      </nav>
      <iframe 
        className="h-full w-full"
        src={videoUrl} 
        frameborder="0"
        allowFullScreen
        
        ></iframe>
    </div>
  )
}