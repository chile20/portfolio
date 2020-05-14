import React from "react";

const StyledCard = (props) => <a {...props} className="w-full sm:w-1/2 h-full p-4" />;

const Image = (props) => <div {...props} className="block inset-0 w-full h-full bg-no-repeat bg-center bg-cover object-cover" />;

const Wrapper = (props) => <div {...props} className="px-8 py-20 relative z-10 w-full h-full p-6 bg-black opacity-0 sm:hover:opacity-75" />;

const Title = (props) => <div {...props} className="tracking-widest px-8 text-4xl font-bold text-white text-center" />;

// const Tag = (props) => <span {...props} className="w-full sm:w-1/2 h-full p-1" />;

// const TagList = (props) => <div {...props} className="font-semibold text-base text-gray-500 px-8 content-center" />;

const Card = (props) => {
  return (
    <StyledCard
    href={props.cardLink}
    target="_blank"
    >
      <Image
        class="card-link card-image"
        style={{ backgroundImage: `url(${props.cardImage})` }}>
        <Wrapper>
          <Title
            class="card-title"
          >
            {props.cardTitle}
          </Title>
        </Wrapper>
      </Image>
    </StyledCard>
  );
};

export default Card;
