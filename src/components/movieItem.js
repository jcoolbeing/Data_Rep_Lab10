import React from 'react';
import  Card from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class MovieItem extends Read.Component{

    render(){
        return(
            <div>
                // displays movie info (year, title, and image of cover)
                // imported card from bootstrap 
            <Card>
                <Card.Header>{this.props.movie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={this.props.movie.Poster} width="200" height="200"></img>
                        <footer className="blockquote-footer">
                            {this.props,movie.Year}
                        </footer>
                    </blockquote>
                </Card.Body>
                 //creates a edit button
                <Link to={"/edit/"+this.props.movie._id} className="btn btn-primary">Edit</Link>
            </Card>
        </div>
        );
    }

}