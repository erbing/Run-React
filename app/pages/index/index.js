import React from "react";
import { connect } from "react-redux";

// import Test1 from '../../components/test1'
// import Test2 from '../../components/test2'

// class Index extends React.Component {
//     constructor(props) {
//         super(props)
//         // console.log(1234)
//     }

//     render() {
//         return (
//             <div className="router">
//                 this is index and my pages && test

//                 <Test1 />
//                 <Test2 />
//             </div>
//         )
//     }
// }

const Index = props => {
  // console.log('index---props', props.state)
  let card = props.state.card;
  let dialog = props.state.dialog;
  // console.log('dialog--states', dialog.status)
  return (
    <div>
      <h2 className="propClass">
        hello. name = {card.name} + ages = {card.avator} + dialog ={" "}
        {dialog.status ? "111" : "000"}
      </h2>
      <button onClick={props.changeName}>change name</button>
      <p />
      <button onClick={props.showDialog}>show dialog</button>
    </div>
  );
};

const mapStateToProps = state => {
  //   console.log(state, "mapStateToProps");
  // const {card, dialog} = state
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName() {
      dispatch({
        type: "CHANGE_NAME",
        card: {
          name: "xxx---changing",
          avator: "b.jpg---changing"
        },
        dialog: {
          status: true
        }
      });
    },
    showDialog() {
      dispatch({
        type: "SHOW_DIALOG",
        dialog: {
          status: true
        }
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
