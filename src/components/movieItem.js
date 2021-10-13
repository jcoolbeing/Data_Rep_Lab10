import React from 'react';
import { Card } from 'react-bootstrap';

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
            </Card>
        </div>
        );
    }

}