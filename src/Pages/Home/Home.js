import React, { Component } from "react";
import {
  Section,
  Subscribe,
  Footer,
  Location,
  Inquire,
  Menu,
  AboutUs,
  Navigation,
  Event,
  PageLayout,
  Hero
} from "../../Components/Index";

class Home extends Component {
  render() {
    return (
      <div>
        <PageLayout>

          <Hero />

          <Navigation />

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
            <Menu
              img="http://res.cloudinary.com/hubbard-inn/image/upload/c_fill,f_auto,g_center,h_217,w_288/v1483049414/joy/menu-photos/food.jpg"
              name="Food"
              link=""
            />
            <Menu
              img="http://res.cloudinary.com/hubbard-inn/image/upload/c_fill,f_auto,g_center,h_217,w_288/v1483049353/joy/menu-photos/drinks.jpg"
              name="Drinks"
              link=""
            />
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
            <Location
              logo="http://res.cloudinary.com/hubbard-inn/image/upload/f_auto,e_colorize:100,co_white,w_140,h_140/logos/barn-and-company.png"
              link=""
            />
            <Location
              logo="http://res.cloudinary.com/hubbard-inn/image/upload/f_auto,e_colorize:100,co_white,w_140,h_140/logos/hubbard-inn.png"
              link=""
            />
            <Location
              logo="http://res.cloudinary.com/hubbard-inn/image/upload/f_auto,e_colorize:100,co_white,w_140,h_140/logos/hvac-pub.png"
              link=""
            />
            <Location
              logo="http://res.cloudinary.com/hubbard-inn/image/upload/f_auto,e_colorize:100,co_white,w_140,h_140/logos/juliets.png"
              link=""
            />
            <Location
              logo="http://res.cloudinary.com/hubbard-inn/image/upload/f_auto,e_colorize:100,co_white,w_140,h_140/logos/key-club.png"
              link=""
            />
            <Location
              logo="http://res.cloudinary.com/hubbard-inn/image/upload/f_auto,e_colorize:100,co_white,w_140,h_140/logos/la-social.png"
              link=""
            />
            <Location
              logo="http://res.cloudinary.com/hubbard-inn/image/upload/f_auto,e_colorize:100,co_white,w_140,h_140/logos/stanleys-kitchen-and-tap.png"
              link=""
            />
            <Location
              logo="http://res.cloudinary.com/hubbard-inn/image/upload/f_auto,w_140,h_140/logos/pearl-tavern-white.png"
              link=""
            />
          </Section>

          <Footer />

        </PageLayout>
      </div>
    );
  }
}

export default Home;
