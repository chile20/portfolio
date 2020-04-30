import React from "react";

import Typewriter from "typewriter-effect";
import Resume from "../../assets/chile-resume.pdf";
import { ArrowRight } from "react-feather";

const Section = (props) => <div {...props} className="max-w-4xl p-4 mx-auto" />;

const Container = (props) => (
  <div {...props} className="w-full h-screen py-16 md:py-40 font-bold " />
);

const Heading = (props) => (
  <h1 {...props} className="text-left title-font sm:text-4xl text-2xl py-2" />
);

const Wrapper = (props) => (
  <div {...props} className="title-font py-2 sm:text-4xl text-2xl flex" />
);

const Intro = (props) => (
  <h1 {...props} className="pr-2 sm:pr-3 content-center " />
);

const Span = (props) => <div {...props} className="text-orange-400" />;

const Button = (props) => (
  <button
    {...props}
    className="flex focus:outline-none md:hover:text-orange-400 my-4 py-2"
  />
);

const Link = (props) => (
  <a
    {...props}
    className="focus:outline-none font-semibold pr-2 font-bold"
  />
);

function Hero() {
  return (
    <Section>
      <Container>
        <Heading>Hi, I am Chi</Heading>
        <Wrapper>
          <Intro>I am a</Intro>
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
