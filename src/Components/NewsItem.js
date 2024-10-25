import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imageURL, newsURL} = this.props;
        return (
        <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
                <img src={!imageURL?"https://dims.apnews.com/dims4/default/6f1483c/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2Fc3%2F91dd04274238ddefcfbead6b2a91%2Fa62c579034fb429fba04d1c7d888df28":imageURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsURL} className="btn btn-sm btn-primary">Read More</a>
                    </div>
            </div>
        </div>
        )
    }
}

export default NewsItem