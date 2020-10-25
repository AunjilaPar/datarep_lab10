//import React
import React from 'react';
import Card from 'react-bootstrap/Card'

//start of class for MovieItem component 
export class MovieItem extends React.Component {
    render() {
        return (//Display posters in section
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>


            </div>
        );
    }//end of render

}//end of class 
