import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.


class TopTen extends Component {
  constructor(props) {
    super(props);

    this.TopTen = this.onchangeTopTen.bind(this);

    this.state = {
      topten_title: '',
      topten_author: '',
      topten_score: ''
    }
  };
  tabRow(){
    return this.state.topTen.map(function(object, i) {
      return <TableRow obj={object} key={i}></TableRow>;
    });
  }

  onChangeTopTen(e) {
    this.setState({
      topten_title: e.target.value,
      topten_author: e.target.value,
      topten_score: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      author: this.state.author,
      score: this.state.author
    };
    axios.post('http://localhost:8000/topTen/add', obj)
        .then(res => console.log(res.data));
  
  
  this.setStat({
    topten_title: '',
    topten_author: '',
    topten_score: ''
  })

  

  render() {
    return(
      <div>{this.props.item.title}</div>
      <div>{this.props.item.author}</div>
      <div>{this.props.item.score}</div>


<div>
  <h1> Top Ten Stories </h1>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Switch – New Video Game System [video]</td>
        <td>ocdtrekkie</td>
        <td>536</td>
      </tr>
      <tr>
        <td>Video Games Are Changing the Way Soccer Is Played</td>
        <td>mhb</td>
        <td>100</td>
      </tr>
    </tbody>
  </table>
</div>
    )
  }
}

export default TopTen;