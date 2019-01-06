import React, { Component } from 'react';
import Movie from './Movie';
import MovieDetail from './MovieDetail';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nowPlayingMovies: [],
            topRatedMovies: [],
            displayingMovies: [],
            isLoading: true,
            currentSearch: '',
            modal: false,
            isOpen: false,
            selectedMovieData: {},
        };

        this.toggle = this.toggle.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    toggle(movieData) {
        this.setState({
            modal: !this.state.modal,
            selectedMovieData: movieData
        });
    }

    sleep = (milisecond) => new Promise(resolve => setTimeout(resolve, milisecond));
    
    handleDisplay = (e) => {
        console.log('Button Click');
        console.log(e.target.value);
        this.setState({
            displayingMovies: this.state.topRatedMovies
        });
    }


    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
            .then(this.sleep(3000))
            .then(response => {
                if (response.ok) { 
                    return response;
                }
                else { 
                    var error = new Error(`Error ${response.status} is ${response.statusTesxt}`);
                    error.response = response;
                    throw error;
                }
            })
            .then(response => response.json())
            .then(data => this.setState({
                nowPlayingMovies: data.results,
                displayingMovies: data.results,
                isLoading: false
            }))
            .catch(error => {
                console.log(`Load data got Error ${error.message}`);
                alert(`Data cannnot load, please try again. The error is ${error.message}`);
            });
            
        // fetch Top Rated Movie
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
            .then(this.sleep(3000))
            .then(response => {
                if (response.ok) { 
                    return response;
                }
                else { 
                    var error = new Error(`Error ${response.status} is ${response.statusTesxt}`);
                    error.response = response;
                    throw error;
                }
            })
            .then(response => response.json())
            .then(data => this.setState({
                topRatedMovies: data.results,
                isLoading: false
            }))
            .catch(error => {
                console.log(`Load data got Error ${error.message}`);
                alert(`Data cannnot load, please try again. The error is ${error.message}`);
            });
    }

    handleSearch = (event) => {
        this.setState({
            currentSearch: event.target.value,
            displayingMovies: this.state.nowPlayingMovies.filter(movie => movie.title.toLowerCase().includes(this.state.currentSearch.toLowerCase()))
        }, () => { 
            console.log(this.state.currentSearch);
            console.log(this.state.displayingMovies);
        })
    }

    handleSort = (param) => {
        const sortedMovie = this.state.displayingMovies.sort((a, b) => {
            return a.param - b.param;
        })
        console.log(sortedMovie)
        this.setState({
            displayingMovies: sortedMovie
        })
    }

    handleFilter = () => {
        const filterMovie = this.state.movies.filter(movie => movie.vote_count > 300);
        console.log('Filter is click');
        this.setState({
            displayingMovies: filterMovie
        }, () => {
            console.log(this.state.displayingMovies) //Why it is not rendering out?
        })
    }

    refresh = () => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
            .then(response => response.json())
            .then(this.sleep(3000))
            .then(data => this.setState({
                movies: data.results,
                displayingMovies: data.results
            }))
    }

    handleLayout = (layout) => {
        console.log('Change Layout Clicked');
    }

    render() {
        
        const MovieWithId = ({match}) => { 
            return(
                <MovieDetail movie = {this.state.displayingMovies.filter((filterMovie) => filterMovie.id === parseInt(match.params.id))} />     
            );
        }

        return (
            <div>
                <Switch>
                    <Route exact path="/movie" component={() => <Movie movies={this.state.displayingMovies}
                                                            handleSort={this.handleSort}
                                                            handleFilter={this.handleFilter}
                                                            refresh={this.refresh}
                                                            toggle={this.toggle}
                                                            handleDisplay={this.handleDisplay} />} />
                    
                    <Route exact path='/' component= {() => <Home currentSearch={this.state.currentSearch}
                                                                    handleSearch={this.handleSearch}
                                                                    movies={this.state.displayingMovies}
                                                                    handleSort={this.handleSort}
                                                                    handleFilter={this.handleFilter}
                                                                    refresh={this.refresh}
                                                                    toggle={this.toggle}
                                                                    isOpen={this.state.modal}
                                                                    movie={this.state.selectedMovieData}
                                                                    isLoading = {this.state.isLoading} />} />
                    <Route exact path='/movie/:id' component = {MovieWithId} />
                </Switch>
            </div>
        );
    }
}

export default Main;
