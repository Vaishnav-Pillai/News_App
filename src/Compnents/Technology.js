import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class Technology extends Component {

    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        this.props.setProgress(10);
        let url="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c83f6c6fa7ee43eeab6af9de6e16c2b4&page=1&pagesize=8";
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json()
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
        this.props.setProgress(100);
    }
    
    handlePrevClick = async ()=>{
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c83f6c6fa7ee43eeab6af9de6e16c2b4&page=${this.state.page - 1}&pagesize=8`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json()
    
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
        this.props.setProgress(100);
    }

    handleNextClick = async ()=>{
        this.props.setProgress(10);
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            let url=`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c83f6c6fa7ee43eeab6af9de6e16c2b4&page=${this.state.page + 1}&pagesize=8`;
            this.setState({loading: true});
            let data=await fetch(url);
            let parsedData=await data.json()
            
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
        this.props.setProgress(100);
    }

  render() {
    return (

      <div id= "busy" className="container my-3">
        <h2 className="text-center" style={{margin: '20px 0px', marginTop: '75px'}}>Top Headlines...</h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
            {!this.state.loading && this.state.articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source} newsUrl={element.url}/>
                        </div>
            })}
        </div>
        <div className="container d-flex justify-content-around">
            <button disabled={this.state.page<=1} type="button" className="btn btn-outline-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-outline-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default Technology