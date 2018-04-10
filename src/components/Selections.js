import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { dictionaryGame } from '../functions/dictionaryFunc';
import { setSelection } from '../actions/selectionsActions';

class Selections extends Component {
    constructor(props){
        super(props);

        this.handleSelection = this.handleSelection.bind(this)
    }
 
  handleSelection(event) {
    const value = event.target.value;
    const wordNum = event.target.id
    // console.log(value)
    // console.log(wordNum)
    setSelection(wordNum, value)
  };

  dictionaryList() {
    return this.props.dictionary.map((word, i) => {
      return (
        <option className="dropdown-content" key={i} value={word}>
          {word}
        </option>
      );
    });
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <form>
          <select
            className="dropdown"
            id="wordOne"
            value={this.props.wordTwo}
            //onChange={event => this.setState({ start: event.target.value })}
            onChange={this.handleSelection}
          >
            {this.dictionaryList()}
          </select>
          <select
            className="dropdown"
            id="wordTwo"
            value={this.props.wordTwo}
            //onChange={event => this.setState({ end: event.target.value })}
            onChange={this.handleSelection}
          >
            {this.dictionaryList()}
          </select>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dictionary: state.gameReducer.dictionary,
  wordOne: state.gameReducer.wordOne,
  wordTwo: state.gameReducer.wordTwo
});

const mapDispatchToProps = dispatch => (bindActionCreators({
  setSelection,
}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Selections);
