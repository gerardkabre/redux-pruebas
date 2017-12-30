import React, { Component } from "react";
import logo from "./logo.svg";
import Jumbotron from "./components/jumbotron";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import {
  Button,
  ButtonGroup,
  SettingToggle,
  TextStyle,
  Layout,
  Card,
  Page,
  Tabs
} from "@shopify/polaris";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Page title="General">
            <Tabs
              selected={0}
              tabs={[
                {
                  id: "all-customers",
                  title: "All",
                  accessibilityLabel: "All customers",
                  panelID: "all-customers-content"
                },
                {
                  id: "accepts-marketing",
                  title: "Accepts marketing",
                  panelID: "accepts-marketing-content"
                },
                {
                  id: "repeat-customers",
                  title: "Repeat customers",
                  panelID: "repeat-customers-content"
                },
                {
                  id: "prospects",
                  title: "Prospects",
                  panelID: "prospects-content"
                }
              ]}
              fitted
            />
            
            <Layout>
              <Layout.Section secondary>
                <Card title="Order details" sectioned>
                  <p>View a summary of your order.</p>
                  You're state is currently{" "}
                  <TextStyle variation="strong">disabled</TextStyle>.
                </Card>
              </Layout.Section>
              <Layout.Section>
                <Card title="Tags" sectioned>
                  <p>Add tags to your order.</p>
                  <Jumbotron />
                </Card>
              </Layout.Section>
            </Layout>
          </Page>
        </div>
      </Provider>
    );
  }
}

export default App;
