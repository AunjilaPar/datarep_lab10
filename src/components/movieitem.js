//import React
import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
//start of class for MovieItem component 
export class MovieItem extends React.Component {

    //Constructor
    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    //Delete Movie 
    DeleteMovie(e) {
        e.preventDefault();
        console.log("Delete Clicked");

        axios.delete('http://localhost:4000/api/movies/' + this.props.movie._id)
            .then(() => {
                this.props.ReloadDataMethod();
            })
            .catch();
    }

    render() {
        return (//Display posters in section
            <div>
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                    
                </Card>


            </div>
        );
    }//end of render

}//end of class 
