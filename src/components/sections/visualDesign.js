import React, { Component } from "react";
// Import Components
import Card from "../templates/card";
// Import Photos
import coverDoyou from "../../assets/images/img-cover-doyou.png";
import coverDoyou2 from "../../assets/images/img-cover-doyou2.png";
import coverLeap from "../../assets/images/img-cover-leap.png";
import coverRedDispatch from "../../assets/images/img-cover-reddispatch.png"
import coverRedAirport from "../../assets/images/img-cover-redairport.png"
import coverLeapWeb from "../../assets/images/img-cover-leapweb.png"

const Section = (props) => <div {...props} className="max-w-4xl mx-auto sm:pt-16 font-body" />;

const Category = (props) => (
  <div {...props} className="absolute float-left -mx-32 pt-4" />
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

class VisualDesign extends Component {
  render() {
    return (
      <Section>
        <Category>
          <TextSide>UI Design</TextSide>
          <Border />
        </Category>
        <TextMiddle>
        UI Design
          </TextMiddle>
        <Container>

          <Card
            cardLink={
              "https://www.behance.net/gallery/89141261/DoYou-User-Interface-Breakdown"
            }
            cardImage={coverDoyou2}
            cardTitle={"DOYOUYOGA UI System"}
          />

          <Card
            cardLink={
              "https://www.behance.net/gallery/92249859/AirAsia-Red-Dispatch"
            }
            cardImage={coverRedDispatch}
            cardTitle={"Red Dispatch"}
          />

          <Card
            cardLink={
              "https://www.behance.net/gallery/85092711/LeapXpert-Web-Chat"
            }
            cardImage={coverLeapWeb}
            cardTitle={"LeapXpert Web"}
          />

          <Card
            cardLink={
              "https://www.behance.net/gallery/85092555/DoYouYoga-Add-to-Favorites"
            }
            cardImage={coverDoyou}
            cardTitle={"DOYOUYOGA UI Shot"}
          />

          <Card
            cardLink={
              "https://www.behance.net/gallery/85092555/DoYouYoga-Add-to-Favorites"
            }
            cardImage={coverRedAirport}
            cardTitle={"Red Airport"}
          />

          <Card
            cardLink={
              "https://www.behance.net/gallery/89141269/LeapXpert-Integrated-Chats"
            }
            cardImage={coverLeap}
            cardTitle={"LeapXpert Mobile"}
          />
        </Container>
      </Section>
    );
  }
}

export default VisualDesign;
