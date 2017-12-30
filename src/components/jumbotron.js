import React from "react";
import { connect } from "react-redux";
import setTerm from "../actions";
import {
  Button,
  ButtonGroup,
  SettingToggle,
  TextStyle,
  Layout,
  Card,
  TextField,
  DescriptionList
} from "@shopify/polaris";

let Jumbotron = props => (
  <div className="Jumbotron">
    <h2>{props.term}</h2>
    <TextField
      label="Account email"
      type="email"
      helpText="We’ll use this address if we need to contact you about your account."
      value={props.term}
      onChange={props.handleChange}
      autoComplete={true}
    />
    <DescriptionList
      items={[
        {
          term: "Logistics",
          description:
            "The management of products or other resources as they travel between a point of origin and a destination."
        },
        {
          term: "Sole proprietorship",
          description:
            "A business structure where a single individual both owns and runs the company."
        },
        {
          term: "Discount code",
          description:
            "A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer."
        }
      ]}
    />
  </div>
);

function mapStateToProps(state) {
  return { term: state.term };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange(newValue, id) {
      dispatch(setTerm(newValue));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Jumbotron);
