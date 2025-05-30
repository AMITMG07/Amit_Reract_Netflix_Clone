import movies from '../movies';
import MovieCard from "../components/MovieCard";
import { Link } from 'react-router-dom';

function Hollywood() {

 let suggestions = movies.filter((data) => {
    return data.type === "Hollywood";
});


  return (
    <>
        <div className="flex justify-end mt-5 mr-7">
            <Link to="/" className='px-4 py-2 text-white top-5 right-10 border border-neutral-200 rounded-md '>Home</Link>
        </div>
    
        
    
                   
    
      <div className="mt-24 w-[90vw] mx-auto">
            
            <div className="flex gap-4 mt-10 justify-center">
            {
                suggestions.map(movie=><MovieCard img={movie.img} slug={movie.slug} />)
            }
            </div>
        </div>
        
    </>
  );
}

export default Hollywood;
