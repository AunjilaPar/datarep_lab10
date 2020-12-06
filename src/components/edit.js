//import React
import React from 'react';
import axios from 'axios';

//start of class for Create component 
export class Edit extends React.Component {
    //Forms
    constructor() {
        //to use the forms
        super();

        //bind onChange and submit 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }//end of state
    }//end of constructor

    //life cycle hook
    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.is)
        .then(response=>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    //Used when valour of input change method
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value //pull value back from changeTitle
        });
    }//end of changeTitle

    //onChange Year Method
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        })
    }
    //onChange Poster Method
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }

    //onSubmit method
    onSubmit(e) {
        e.preventDefault();// to prevent it from calling multiple times 
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);

        //Object of three values 
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id:this.state._id
        }
        //axios takes url and passes data
        axios.put('http://localhost:4000/api/movies/'+this.state._id,newMovie)
        .then((res) => {
            console.log(res.data)
        })//end of then

       .catch((err) => {
            console.log(err);
       });//End of error

       // axios.post('http://localhost:4000/api/movies', newMovie)

            //error catching 
            //.then((res) => {
                //console.log(res);
           // })//end of then

           // .catch((err) => {
               // console.log(err);
           // });//End of error

    }//end of onSubmit

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Movie Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Edit Movie'
                            className='btn btn-primary'>
                        </input>
                    </div>
                </form>
            </div>
        );
    }//end of render

}//end of class 
