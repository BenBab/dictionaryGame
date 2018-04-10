// export const GET_SELECTION = 'GET_SELECTION'
export const SET_SELECTION = 'SET_SELECTION'

export function setSelection( wordNum, selection ){
    debugger;
    return ({
    type: 'SET_SELECTION',
    wordNum : wordNum,
    selection: selection
  });
}