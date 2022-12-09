const reducer = (state, action) => {
  switch (action.type) {
    case 'fontSizeInc':
      return {
        ...state,
        fontSize: state.fontSize + 2,
      };
    case 'fontSizeDec':
      return {
        ...state,
        fontSize: state.fontSize - 2,
      };
    case 'bold':
      return {
        ...state,
        bold: !state.bold,
      };
    default:
      return { ...state };
  }
};
export default reducer;
