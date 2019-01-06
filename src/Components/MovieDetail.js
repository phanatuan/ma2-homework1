import React from 'react'; 
import {Link} from 'react-router-dom';

function MovieDetail(props) {
    console.log(props);
    console.log(props.movie.title);
    return (
        <div>
            <Link to='/'>Back to Homepage</Link>
            This is the movie {props.movie.title}
            Why I cannot render the movie title here? 
        </div>        
    );
};

export default MovieDetail;