import React, { Component } from 'react';
import './App.css';
import quotes from './QuoteDB';
import QuoteAndAuthor from './components/QuoteAndAuthor';

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
    return arr.sort(function () { return 1 - .5 });
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
