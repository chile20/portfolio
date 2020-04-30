import React from "react";

const StyledCard = (props) => <a {...props} className="w-full sm:w-1/2 h-full p-4 font-body" />;

const Image = (props) => <div {...props} className="block inset-0 w-full h-full rounded-lg bg-no-repeat bg-center bg-cover" />;

const Wrapper = (props) => <div {...props} className="px-8 py-20 relative z-10 w-full h-full rounded-lg p-6 bg-black opacity-0 sm:hover:opacity-75" />;

const Title = (props) => <div {...props} className="tracking-widest px-8 text-4xl font-bold text-white" />;

const Tag = (props) => <span {...props} className="w-full sm:w-1/2 h-full p-1" />;

const TagList = (props) => <div {...props} className="font-semibold text-gray-500 px-8" />;

const Card = (props) => {
  return (
    <StyledCard>
      <Image
        class="card-link card-image"
        href={props.cardLink}
        style={{ backgroundImage: `url(${props.cardImage})` }}>
<Wrapper>
          <Title
            class="card-title"
            className=""
          >
            {props.cardTitle}
          </Title>
          <TagList>
            <Tag
              class="tag-first"
            >
              {props.tagFirst}
            </Tag>
            <Tag>|</Tag>
            <Tag class="tag-second">
              {props.tagSecond}
            </Tag>
            <Tag>|</Tag>
            <Tag class="tag-third">
              {props.tagThird}
            </Tag>
            </TagList>
        </Wrapper>
        </Image>
      </StyledCard>
  );
};

export default Card;
