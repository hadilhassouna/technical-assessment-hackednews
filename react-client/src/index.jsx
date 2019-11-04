import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
// import $ from 'jquery';
import "./seed";

const App = (props) => <TopTen />;


ReactDOM.render(<App />, document.getElementById('app'));


// class TopTen extends Component {
//     constructor(props) {
//       super(props);
  
//       this.TopTen = this.onchangeTopTen.bind(this);
  
//       this.state = {
//         topten_title: '',
//         topten_author: '',
//         topten_score: ''
//       }
//     };
  
//     onChangeTopTen(e) {
//       this.setState({
//         topten_title: e.target.value,
//         topten_author: e.target.value,
//         topten_score: e.target.value
//       })
//     };
    
    
//     this.setStat({
//       topten_title: '',
//       topten_author: '',
//       topten_score: ''
//     })
  
    
  
//     render() {
//       return(
//         <div>{this.props.item.title}</div>
//         <div>{this.props.item.author}</div>
//         <div>{this.props.item.score}</div>
