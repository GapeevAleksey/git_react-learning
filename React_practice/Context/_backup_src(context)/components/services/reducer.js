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
        fontSize: state.fontSize > 10 ? state.fontSize - 2 : state.fontSize,
      };
    case 'bold':
      return {
        ...state,
        bold: !state.bold,
      };
    case 'reset':
      return {
        fontSize: 14,
        bold: false,
      };
    default:
      return { ...state };
  }
};
export default reducer;
