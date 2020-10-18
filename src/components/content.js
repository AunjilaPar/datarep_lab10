//import React
import React from 'react';

//start of class for header component 
export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }//end of render

}//end of class 