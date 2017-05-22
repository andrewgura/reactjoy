import React, { Component } from "react";
import "./App.css";
import {
  Section,
  Subscribe,
  Footer,
  Location,
  Inquire,
  Menu,
  AboutUs,
  NavLink,
  Navigation,
  Event,
  PageLayout
} from "./Components/Index";

class App extends Component {
  render() {
    return (
      <div>
        <PageLayout>
          <Navigation>
            <NavLink title="hey" />
          </Navigation>
          <Section>
            <Event />
          </Section>
          <Section>
            <AboutUs />
          </Section>
          <Section>
            <Menu />
          </Section>
          <Section>
            <Inquire />
          </Section>
          <Section>
            <Subscribe />
          </Section>
          <Section>
            <Location />
          </Section>
          <Footer />
        </PageLayout>
      </div>
    );
  }
}

export default App;
