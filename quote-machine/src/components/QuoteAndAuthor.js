import React from 'react'
import quotes from '../QuoteDB'

function QuoteAndAuthor(props) {
    const { quote, generateQuote } = props;
    return (
        <div className="card">

            <div className="card-body">
                <p className="card-text">{quote.quote}</p>
                <h5 className="card-title">- {quote.author}</h5>
                <button
                    onClick={()=> {generateQuote(quotes)}}
                    type="submit"
                >
                    <i class="fas fa-mouse"></i>
                    Generate Quote
                </button>
                <button
                    className="m1-3"
                    onClick={() => {
                        generateQuote(quote);
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
                        }
                    }
                    type="submit"
                >
                    <i class="fab fa-twitter"></i>
                    Share Quote
                </button>
            </div>
        </div>
    )
}

export default QuoteAndAuthor;