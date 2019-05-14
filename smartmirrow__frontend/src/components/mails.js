import React from 'react';

class Mails extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          data: [],
          mails: [],
          token: "ya29.GlvMBjWJ-KhFeycocZc28K8AzI6MBRwC7TvlqRXsSB8XpcGTgEYsXnm32YhO2Re0Tb_kgpJSX2U2JCFKQT0WoMK_e7uvxGu90MbuurmzN1qVSeWlRGBywN5duvYe"
       }
       this.getmails = this.getmails.bind(this);
       this.getMessages = this.getMessages.bind(this)
    }
 
    getMessages(id) {
       // const { data } = this.state;
       fetch('https://www.googleapis.com/gmail/v1/users/srashi791@gmail.com/messages/' + id + '/?access_token='+this.state.token).then(res => {
                return res.json()
             }).then(da => {
                // console.log(da)
                var messa = undefined
                var subject = undefined
                // console.log(da.snippet)
                // if ('snippet' in da) {
                subject = da.snippet
                // }
                // else {
                //    subject = ''
                // }
                if (da.payload && 'parts' in da.payload) {
                   messa = da.payload.parts[0].body.data
                } else {
                   messa = da.payload && da.payload.body.data
                }
                // if (!da.labelIds.indexOf('CHAT') > -1) {
                   let d = this.state.data
                   this.setState({data: [...d, { body: messa, subject: subject }]});
                   return { body: messa, subject: subject };
                // }
                // if (da.labelIds)
                // return {};
             })
             return {};
    }
 
    async getmails(params) {
     try{
       fetch('https://www.googleapis.com/gmail/v1/users/srashi791@gmail.com/messages/?maxResults=5&access_token=' + this.state.token)
          .then(res => {
             return res.json();
          }).then(da => {
             da.messages.forEach((item) => {
                this.getMessages(item.id);
             })
          })
 }catch(e){}
          return
    }
 
    componentWillMount() {
       this.getmails();
    };
 
    render() {
       return (
          <div>
             {this.state.data.map((ne) => {
                return(<div>
                   {/* <b>Body : </b>{ne.body} <br /> */}
                   <b>Subject : </b>{ne.subject} 
                </div>);
             })}
          </div>
       );
    }
 }


 export default Mails;