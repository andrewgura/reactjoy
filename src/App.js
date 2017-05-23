import React, { Component } from "react";
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
            <NavLink
              name="Find table"
              color="#fff"
              href="https://www.opentable.com/r/joy-district-reservations-chicago?restref=261853"
            />
            <NavLink name="Menu" color="#fff" href="#menu" />
            <NavLink
              name="Private Events"
              color="#fff"
              href="#private-events"
            />
            <NavLink name="Gallery" color="#fff" href="gallery" />
            <NavLink name="Bottle Service" color="red" href="rooftop" />
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
