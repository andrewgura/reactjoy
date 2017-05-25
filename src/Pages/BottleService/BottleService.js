import React, { Component } from "react";
import {
  PageLayout,
  Footer,
  BSContainer,
  Navigation,
  Section,
  Reservation
} from "../../Components/Index";

class KeyClub extends Component {
  render() {
    return (
      <div>
        <PageLayout>
          <Navigation />

          <BSContainer title="Bottle Service">

            <Section title="Bottle Service Reservation">
              <Reservation />
            </Section>

          </BSContainer>
          <Footer />
        </PageLayout>
      </div>
    );
  }
}

export default KeyClub;
