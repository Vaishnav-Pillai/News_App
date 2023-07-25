import React, { useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News =(props)=>{

    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(false)
    const [page,setPage]=useState(1)


    
    const componentDidMount = async()=>{
        props.setProgress(100);
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c83f6c6fa7ee43eeab6af9de6e16c2b4&page=1&pagesize=${props.pageSize}`;
        setLoading(true);
        let data=await fetch(url);
        let parsedData=await data.json()
        setArticles(parsedData.articles), 
        setTotalResults(parsedData.totalResults), 
        setLoading(false)
        props.setProgress(100);
    }

    const handlePrevClick = async ()=>{
        props.setProgress(100);
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c83f6c6fa7ee43eeab6af9de6e16c2b4&page=${page - 1}&pagesize=${props.pageSize}`;
        setLoading(true)
        let data=await fetch(url);
        let parsedData=await data.json()
        setPage(page - 1),
        setArticles(parsedData.articles),
        setLoading(false)
        props.setProgress(100);
    }

    const handleNextClick = async ()=>{
        props.setProgress(100);
        if(page + 1 > Math.ceil(totalResults/props.pageSize)){

        }
        else{
            let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c83f6c6fa7ee43eeab6af9de6e16c2b4&page=${page + 1}&pagesize=${props.pageSize}`;
            setLoading(true);
            let data=await fetch(url);
            let parsedData=await data.json()
            setPage(page + 1),
            setArticles(parsedData.articles),
            setLoading(false)
        }
        props.setProgress(100);
    }

    return (

      <div className="container my-3">
        <h2 className="text-center" style={{margin: '20px 0px', marginTop: '75px'}}>Top Headlines...</h2>
        {loading && <Spinner/>}
        <div className="row my-3">
            {!loading && articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} author={element.author} date={element.publishedAt} newsUrl={element.url}/>
                        </div>
            })}
        </div>
        <div className="container d-flex justify-content-around">
            <button disabled={page<=1} type="button" className="btn btn-outline-dark" onClick={handlePrevClick}>&larr; Previous</button>
            <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-outline-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
}

News.defaultProps = {
    pageSize: 8,
    category: 'general'
}
News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
