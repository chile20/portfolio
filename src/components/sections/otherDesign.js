import React, { Component } from "react";
// Import Components
import Card from "../templates/card";
// Import Photos
import coverXlady from "../../assets/images/img-cover-xlady.jpg";
import coverEnvelope from "../../assets/images/img-cover-redenvelope.png";
import coverFire from "../../assets/images/img-cover-firetshirt.png";
import coverCosmadetic from "../../assets/images/img-cover-cosmadetic.jpg";

const Section = (props) => <div {...props} className="max-w-4xl mx-auto sm:pt-16 font-body" />;

const Category = (props) => (
  <div {...props} className="absolute float-left -mx-32 pt-4  " />
);

const TextSide = (props) => (
  <h1 {...props} className="font-semibold text-gray-400 tracking-widest text-2xl vertical-rl hidden sm:block pl-10" />
);

const Border = (props) => (
  <div {...props} className="h-24 w-1 border-l-2 border-gray-400 m-4 hidden sm:block" />
);

const TextMiddle = (props) => (
  <h1 {...props} className="font-semibold tracking-widest text-2xl text-center py-10 md:hidden" />
);

const Container = (props) => (
  <div {...props} className="flex flex-row flex-wrap" />
);

class Others extends Component {
  render() {
    return (
      <Section>
        <Category>
          <TextSide>Others</TextSide>
          <Border />
        </Category>
        <TextMiddle>
        Others
          </TextMiddle>
        <Container>

        <Card
            cardLink={
              "https://www.behance.net/gallery/89465023/Envelopes-In-Red-%282018-2019%29"
            }
            cardImage={coverEnvelope}
            cardTitle={"Red Envelope"}
          />

          <Card
            cardLink={
              "https://www.behance.net/gallery/89465423/On-Rainy-Days-Bathing-Oil-%282017%29"
            }
            cardImage={coverCosmadetic}
            cardTitle={"Body Oil Packaging"}
          />

          <Card
            cardLink={
              "https://www.behance.net/gallery/89466239/FIRE-II-T-shirt-%282017%29"
            }
            cardImage={coverFire}
            cardTitle={"T-shirt Design"}
          />

          <Card
            cardLink={
              "https://www.behance.net/gallery/89464461/X-LADY-%282017%29"
            }
            cardImage={coverXlady}
            cardTitle={"Logo Design"}
          />
        </Container>
      </Section>
    );
  }
}

export default Others;
