import React, { Component } from "react";
import {
  PageLayout,
  Navigation,
  GalleryBox,
  GalleryItem,
  Footer
} from "../../Components/Index";

class Gallery extends Component {
  render() {
    return (
      <div>
        <PageLayout>

          <Navigation />

          <GalleryBox title="Gallery">
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478809285/joy/photo-galleries/xj9kpkk70ftfsjyttvrr.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478809285/joy/photo-galleries/w4d1umgld5ahurcsnzvh.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478809420/joy/photo-galleries/l9zwknvnbwwvzqcgycmg.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478809754/joy/photo-galleries/fd7tvl48fo1de1ifowxc.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478809421/joy/photo-galleries/msdjexmlqomm0cheu5fg.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478809754/joy/photo-galleries/uh6kotoacdmph2t0g5mq.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478810002/joy/photo-galleries/ajb4kzuuziv4diybd8aw.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478810003/joy/photo-galleries/ijf6gnwbmsteh0sh7wyy.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478810168/joy/photo-galleries/lmitww1gwlvz1sdlusy4.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478810168/joy/photo-galleries/fdrzjeqvb8vkzuryhtls.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478810855/joy/photo-galleries/adnqfnf9gql4yj8wcsxx.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478810856/joy/photo-galleries/nlpp7mpcuuxjyduwmzsi.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478811125/joy/photo-galleries/qlkwndsnszxwlcwsgwbr.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1478811125/joy/photo-galleries/yjwxbldq9chtdlbk8i3y.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1483049487/joy/photo-galleries/gb143s9dpn0xddanpbwx.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1483049566/joy/photo-galleries/gse6igar4nb3uhqryjuu.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1483049622/joy/photo-galleries/b3vig92m1u5g16nxi3n0.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1483049648/joy/photo-galleries/yp0pfmtadvkhu3vg3sgv.jpg" />
            <GalleryItem img="http://res.cloudinary.com/hubbard-inn/image/upload/q_80,w_350/v1483049805/joy/photo-galleries/qohbduuulchhw4gd9sar.jpg" />
          </GalleryBox>

          <Footer />

        </PageLayout>
      </div>
    );
  }
}

export default Gallery;
