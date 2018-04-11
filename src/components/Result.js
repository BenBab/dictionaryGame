import React, { Component } from 'react';
import { connect } from 'react-redux';

import { dictionaryGame } from '../functions/dictionaryFunc';

class Result extends Component {
  render() {
    let dictWords = this.props.dictionary.slice(0);
    let dictgame = dictionaryGame(
      this.props.wordOne,
      this.props.wordTwo,
      dictWords
    );

    return (
      <div>
        <label>
          The word {this.props.wordOne} takes {dictgame} {' '}
          {dictgame === 1 ? 'step' : 'steps'} to reach the word {this.props.wordTwo}
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dictionary: state.gameReducer.dictionary,
  wordOne: state.gameReducer.wordOne,
  wordTwo: state.gameReducer.wordTwo
});

export default connect(mapStateToProps)(Result);
