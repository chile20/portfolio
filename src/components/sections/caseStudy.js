import React, { Component } from "react";
// Import Components
// Import Photos
import coverSB from "../../assets/images/starbucks-2x.png";
import coverKos from "../../assets/images/kos-2x.gif"

const Section = (props) => <div {...props} className="max-w-4xl p-4 mx-auto font-body" />;

const Category = (props) => (
  <div {...props} className="absolute float-left -mx-32" />
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

const WrapperLeft = (props) => (
  <div {...props} className="sm:w-1/2 pt-4 sm:pt-0 sm:mt-0 sm:pr-10" />
);

const WrapperRight = (props) => (
  <div {...props} className="sm:w-1/2 pt-10 sm:pl-10 sm:pt-20" />
);

const Title = (props) => (
  <div {...props} className="font-light text-center pt-10" />
);

const Subtitle = (props) => (
  <div {...props} className="font-light text-center text-gray-500 pt-1" />
);

const Project = [
  {
    title: "Starbucks Redesign",
    subtitle: "Interaction design",
    url: "https://coursework.vschool.io/mapping-components-in-react/",
    img: coverSB,
    type: "left"
  },
  {
    title: "Starbucks Redesign",
    subtitle: "Interaction design",
    url: "https://coursework.vschool.io/mapping-components-in-react/",
    img: coverKos,
    type: "right"
  },
]

class CaseStudy extends Component {
  render() {
    return (
      <Section>
        <Category>
          <TextSide>Case Study</TextSide>
          <Border />
        </Category>
        <TextMiddle>
          Case Study
          </TextMiddle>
        <Container>
          {Project.map(project =>
            project.type === "left" ? (
              <WrapperLeft
              href={project.url}>
              <img src={project.img} />
              <Title>{project.title}</Title>
              <Subtitle>{project.subtitle}</Subtitle>
            </WrapperLeft>
            ) : (
              <WrapperRight
              href={project.url}>
              <img src={project.img} />
              <Title>{project.title}</Title>
              <Subtitle>{project.subtitle}</Subtitle>
            </WrapperRight>
              )
          )}
        </Container>
      </Section>

    );
  }
}

export default CaseStudy;
