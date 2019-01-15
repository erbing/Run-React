export default (state, action) => {
  let { data } = action;
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        card: action.card,
        dialog: action.dialog
      };
      break;
    case "SHOW_DIALOG":
      return {
        card: state.card,
        dialog: {
          status: true
        }
      };
      break;
    case "CHANGE_TITLE":
      let newObj = Object.assign({}, state, {
        title: data.title
      });
      return newObj;
      break;
    default:
      return state;
  }
};
