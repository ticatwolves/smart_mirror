import React from 'react';

class News extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          articles: []
       }
    }
 
    componentDidMount() {
       var date = new Date();
       var da = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
       // 'https://newsapi.org/v2/everything?q=bitcoin&pageSize=10&country=india&from='+da+'&sortBy=publishedAt&apiKey=d5e11090c0c542019f98fdad95435c87'
       fetch('https://newsapi.org/v2/top-headlines?country=in&pageSize=10&from='+da+'&apiKey=d5e11090c0c542019f98fdad95435c87').then(results => {
          return results.json()
       }).then(data => {
          let news = data.articles.map((ne) => {
             return (
                <div>
                   <b>Title : </b> {ne.title}<br />
                   {/* <b>Author : </b>{ne.author}<br /> */}
                   {/* <b>Description : </b>{ne.description}<br /> */}
                   {/* <b>PublishedAt : </b>{ne.publishedAt}<br /> */}
                   {/* <b>Content : </b>{ne.content}<br /> */}
                   {/* {ne.url}<br/>
                   {ne.urlToImage} */}
                </div>
             )
          })
          // console.log(data)
          this.setState({ articles: news });
       })
    }
 
    render() {
       return (
          <div>
             {this.state.articles}
          </div>
       );
    }
 }

 export default News;