import React from 'react';
import ModalLaunch from './Modal';
import Movie from './Movie';
import Search from './Search';
import {Loading} from './Loading';

function Home(props) {
    return (
        <div>
            <Search
                currentSearch={props.currentSearch}
                handleSearch={props.handleSearch} />
            { 
            props.isLoading ? 
            <Loading /> :
            <Movie
                movies={props.movies}
                handleSort={props.handleSort}
                handleFilter={props.handleFilter}
                handleDisplay={props.handleDisplay}
                refresh={props.refresh}
                toggle={props.toggle} />
            }
            <ModalLaunch
                isOpen={props.isOpen}
                movie={props.movie}
                toggle={props.toggle}/>
        </div>
    );
}

export default Home; 