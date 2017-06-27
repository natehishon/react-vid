import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar column is-half is-offset-one-quarter">
                <input
                value={this.state.term}
                 onChange={event => this.setState({ term: event.target.value})} />
                Value of the input: {this.state.term}
            </div>
        );
    }

}

export default SearchBar;  