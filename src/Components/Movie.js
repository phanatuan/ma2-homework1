import React from 'react';
import { Card, CardImg, CardText, CardBody, 
	CardTitle, CardSubtitle, CardFooter, Button} from 'reactstrap';
import { Link } from 'react-router-dom';


function Movie(props) { 

		function RenderMovie({movies, toggle})  {
			let baseURL = "https://image.tmdb.org/t/p/w370_and_h556_bestv2/"
			const list = movies.map((movie) => {
				return(
					<div className ='col-lg-4 col-md-6 col-ms-12 mx-auto my-3' key={movie.id}>
						<Card> 
							<CardImg width="30%" 
									 	height='50%'
									 	src={baseURL + movie.poster_path} 
									 	alt={movie.title} 
									 	onClick= {() => toggle(movie)} />
							<CardBody>	
								<CardTitle><h2>{movie.title}</h2></CardTitle>
								<CardSubtitle>Release Date: {movie.release_date}</CardSubtitle>
								<br/>
								<CardText>{movie.overview}</CardText>								
							</CardBody>
							<CardFooter>
								<CardText>Vote Counts: {movie.vote_count}</CardText>
								<CardText><Link to={`/movie/${movie.id}`}>More Detail</Link></CardText>	
							</CardFooter>
						</Card>
					</div>	
				);
			});
			return list;
		};

		return ( 
			<div className = 'container'>
				<div className = 'container'>
					<div className = 'row'>
						<div className = 'col-5'>
							<h3>Now Playing Movies</h3>
						</div>
						<div className = 'col-7'>
							<div className = 'float-right py-2'>
								<Button color="primary"
										onClick= {props.refresh}>Refresh</Button>{' '}
								<Button color="primary"
										value="Top Rated"
										onClick= {props.handleDisplay}>Top Rated</Button>{' '}
								<Button color="primary"
										value='Now Playing'
										onClick= {props.handleDisplay}>Now Playing</Button>{' '}
								
								{/* <select	defaultValue='view1'>										   >
									<option value="view1">View 1</option>
									<option value="view2">View 2</option>
								</select>

								<select	defaultValue='vote_average'
										   onChange = {e => props.handleSort(e.target.value)}>
									<option value="vote_average">Vote Average</option>
									<option value="popularity">Popularity</option>
									<option value="release_date">Release Date</option>
								</select> */}
							</div>
						
					</div>	
					</div>
				</div>
            
				<div className ='row'>
					<RenderMovie 
						movies = {props.movies}
					    toggle = {props.toggle}
					 />					
				</div>
			</div>			
		);
	}

export default Movie;
