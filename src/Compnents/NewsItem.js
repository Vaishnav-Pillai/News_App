import React from 'react'

const NewsItem =(props)=>{

  let {title,description,imgUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right:'0'}}>
          <span className="badge rounded-pill bg-danger">
            {source.name}
          </span>
          </div>
          <img src={imgUrl?imgUrl:"https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}{title.length>44?"...":""}</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
