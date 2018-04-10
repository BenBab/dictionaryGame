import { SET_SELECTION } from '../actions/selectionsActions';

const initialState = {
    dictionary : ["hit", "dot", "dog", "cog", "hot", "log"],
    wordOne : "hit",
    wordTwo : 'hit',

};


export default function (state = initialState, action){
    const { type, wordNum, selection } = action;
    debugger;
    switch(type) {
        case SET_SELECTION:
            if (wordNum === "wordOne"){
                return {
                ...state, 
                wordOne : selection,
                }
            }else{
                 return {
                ...state, 
                wordTwo : selection
            }
            }
        default: // need this for default case
      return state 
    }
}