import React from 'react';
import { MovieItem } from './movieItem';

export class Movies extends React.Component{

    // will display map out a group of movie items showing info of the movies
    render(){
        return this.props.movies.map( (movie)=>{
            return <MovieItem>movie={movie} ReloadData={this.props.ReloadData}</MovieItem>//movie item represents a movie
        }
        )
    }
}