import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=8f7c3a11ba561d3f55e86&page=1pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalarticles:parsedData.totalResults});
    }
    handlePrevClick = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8f7c3fa11ba561d3f55e86&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles})
    }
    handleNextClick =async () =>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResults / 20)){
        }else{
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8f73a11ba561d3f55e86&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page +1,
                articles: parsedData.articles})
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>Feature News Top HeadLines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return  <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title?element.title:""} description = {element.description?element.description:""} 
                            imageURL={element.urlToImage}
                            newsURL={element.url}/>
                            </div>
                })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}

export default News;
