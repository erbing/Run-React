const changeTitle = title => {
  return (dispath, getState) => {
    dispath({
      type: "CHANGE_TITLE",
      data: {
        title
      }
    });
  };
};

let actions = {
  changeTitle
};

export default actions;
