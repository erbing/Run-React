const changeTitle = title => {
  console.log(111111);
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
