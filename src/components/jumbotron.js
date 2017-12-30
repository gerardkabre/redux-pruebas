import React from "react";
import { connect } from "react-redux";
import setTerm from "../actions";

let Jumbotron = props => (
  <div
    className="Jumbotron"
    style={{ backgroundColor: "grey", color: "black" }}
  >
    <h1>
      Write on that input and you are goning to modify the redux state directly.
    </h1>
    <h2>
      At the same time the redux store value is going to be rendered under the
      input.
    </h2>
    <input onChange={props.eventHandler} value={props.term} />

    <h2>{props.term}</h2>
  </div>
);

function mapStateToProps(state) {
  return { term: state.term };
}

function mapDispatchToProps(dispatch) {
  return {
    eventHandler(event) {
      dispatch(setTerm(event.target.value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Jumbotron);
