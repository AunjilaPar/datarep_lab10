//import React
import React from 'react';
import { MovieItem } from './movieitem';

//start of class for Movies component 
export class Movies extends React.Component{
    render(){
        //Movie item for each section
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie={movie}></MovieItem>
        })
        
    }//end of render

}//end of class 