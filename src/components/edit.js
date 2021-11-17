import React from 'react';
import axios from axios;

export class Edit extends React.Component{


    constructor(){
        this.super();
        //binding section
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onchangePoster = this.onchangePoster.bind(this);

        this.state = {
            Title:'',
            Year:'',
            Poster:''
        }
    }
    //sends ID to console and updates the state of the doc.
    componentDidMount(){
        console.log(this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster
            })
        })
        .catch((error)=>{
            console.log(error);
        });

        axos.get('http://localhost:4000/api/movies/'+this.props.atch.params.id)
    }
    onChangeTitle(e){
        this.setState({
            Title: e.target.value
        })
    }

    onChangeTitle(e){
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }

    onchangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);
    
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id:this.state._id // update id 
        }

        axios.put('http://localhost:4000/api/movies'+this.state._id,
            newMovie)
            .then(res =>{
                console.log(res.data)
            })
            .catch();

        // will return movie and catch a error
       /* axios.post('http://localhost:4000/api/movies', newMovie)
        .then((res)=>{
            console.log(res);
        })
        .catch((err=>{
            console.log(err);
        }));
    }*/

    render(){
        return(
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type='text' 
                    className='form-control'
                    value={this.state.Title} 
                    onChange={this.onChangeTitle}></input>
                </div>
                
                <div className='form-group'>
                    <label>Add Movie Year: </label>
                    <input type='text' className='form-control'
                    value={this.state.Year}
                    onChange={this.onChangeYear}></input>
                    </div>
                
                <div className='form-group'>
                    <label>Movie Poster: </label>
                    <textarea type='text' className='form-control' 
                    value={this.state.Poster} onChange={this.onchangePoster}>

                    </textarea>
                </div>

                 <div clasName="form-group">
                    <input type='submit'
                        value='Add Movie'
                        className='btn btn-primary'></input>
                </div>
                </form>
            </div>
        );
    }
}