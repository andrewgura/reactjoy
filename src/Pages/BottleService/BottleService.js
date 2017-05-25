import React, { Component } from "react";
import {
  PageLayout,
  Footer,
  BSContainer,
  Navigation,
  Section,
  Reservation,
  Video
} from "../../Components/Index";

class KeyClub extends Component {
  render() {
    return (
      <div>
        <PageLayout>
          <Navigation />

          <BSContainer title="Bottle Service">
            <Video src="http://res.cloudinary.com/hubbard-inn/video/upload/vc_h264/v1481093520/joy-promo-video.mp4" />

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
