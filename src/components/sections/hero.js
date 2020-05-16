import React from "react";

import Typewriter from "typewriter-effect";
import Resume from "../../assets/chile-resume.pdf";
import { ArrowRight } from "react-feather";

const Section = (props) => <div {...props} className="max-w-4xl p-4 mx-auto font-body" />;

const Container = (props) => (
  <div {...props} className="w-full py-16 md:py-24 font-light" />
);

const Wrapper = (props) => (
  <div {...props} className="title-font py-2 sm:text-4xl text-2xl md:flex flex-row text-center md:text-left" />
);

const Intro = (props) => (
  <h1 {...props} className="pr-2 sm:pr-3 content-center " />
);

const Span = (props) => <div {...props} className="" />;

const Button = (props) => (
  <div
    {...props}
    className="flex focus:outline-none text-orange-400 my-4 py-2 justify-center md:justify-start"
  /> 
);
const Link = (props) => (
  <a
    {...props}
    className="focus:outline-none pr-2 font-light"
  />
);

function Hero() {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Intro>Chi Le is an aspiring</Intro>
          <Span>
            <Typewriter
              options={{
                strings: [
                  "Product Designer",
                  "UI - UX Designer",
                  "Front-end Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Span>
        </Wrapper>
        <Button>
          <Link href={Resume} download>
            DOWNLOAD CV
          </Link>
          <ArrowRight />
        </Button>
      </Container>
    </Section>
  );
}

export default Hero;
