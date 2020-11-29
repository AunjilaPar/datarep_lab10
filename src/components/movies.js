//import React
import React from 'react';
import { MovieItem } from './movieitem';

//start of class for Movies component 
export class Movies extends React.Component {
    render() {
        //Movie item for each section
        return this.props.movies.map((movie) => {
            //console.log({movie});
            return <MovieItem key={movie._id} movie={movie}
                ReloadDataMethod={this.props.ReloadDataMethod}></MovieItem>
        });


    }//end of render

}//end of class 