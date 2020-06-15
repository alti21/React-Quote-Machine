import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import quotes from './QuoteDB';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    }
    this.generateQuote = this.generateQuote.bind(this);
    this.sortQuotes = this.sortQuotes.bind(this);
  }

  generateQuote(arr) {
    let num = Math.floor(Math.random() * quotes.length);

    let newQuote = quotes[num];

    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    })

    this.sortQuotes(quotes);
  }

  sortQuotes(arr) {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Quote of the Moment</h1>
        <QuoteAndAuthor
          generateQuote={this.generateQuote}
          quote={this.state}
        />
      </div>
    );
  }
}

export default App;
