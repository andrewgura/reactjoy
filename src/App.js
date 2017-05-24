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
  PageLayout,
  Hero
} from "./Components/Index";

class App extends Component {
  render() {
    return (
      <div>
        <PageLayout>

          <Hero />

          <Navigation>
            <NavLink
              name="Find a table"
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

          <Section
            title="Upcoming Events"
            background="http://res.cloudinary.com/hubbard-inn/image/upload/c_fill,f_auto,g_center,q_70,w_auto/v1462327216/joy/backgrounds/si4pxytkjqubpzgpw3rx.jpg"
          >
            <Event
              name="Summer Events"
              src="http://res.cloudinary.com/hubbard-inn/image/upload/f_auto,q_80,w_400/v1488410203/joy/events/summer-events.jpg"
            />
            <Event
              name="Summer Events"
              src="http://res.cloudinary.com/hubbard-inn/image/upload/f_auto,q_80,w_400/v1488410203/joy/events/summer-events.jpg"
            />

          </Section>

          <Section
            title="About Us"
            background="http://res.cloudinary.com/hubbard-inn/image/upload/c_fill,f_auto,g_auto,q_70,w_auto/v1462327912/joy/backgrounds/zhhu5w9tdxxetz80hi9d.jpg"
          >
            <AboutUs />
          </Section>

          <Section
            title="Menu"
            background="http://res.cloudinary.com/hubbard-inn/image/upload/c_fill,f_auto,g_center,q_70,w_auto/v1462327912/joy/backgrounds/nynvtfh2m0s3dwq7zbb1.jpg"
          >
            <Menu />
          </Section>

          <Section
            title="Inquire"
            background="http://res.cloudinary.com/hubbard-inn/image/upload/c_fill,f_auto,g_auto,q_70,w_auto/v1466009843/joy/backgrounds/zlwz8sy8i59fzav4qucm.jpg"
          >
            <Inquire />
          </Section>

          <Section title="Stay in Touch with Joy District">
            <Subscribe />
          </Section>

          <Section title="Visit our other locations">
            <Location />
          </Section>

          <Footer />

        </PageLayout>
      </div>
    );
  }
}

export default App;
