import React from 'react';
import { Movies } from './movies';
import axios from 'axios'; // imported axios *NO BRACKETS*

export class Read extends React.Component{

    // state contains JSON file with movie info
    // title, year, ID, type, and a image titled poster
    // deleted the hard coded json data that was in the movies array
    state = {
        movies: []
    };

    // uses axios
    componentDidMount(){
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
            .then((response) => { //response is the data being called
                this.setState({ movies: response.data.Search })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render(){
        return(
            <div>
                <h1>This is the read component.</h1>
                // java code that takes the movie state from the movie file
                <Movies movies={this.state.movies}></Movies> 
            </div>
        );
    }
}