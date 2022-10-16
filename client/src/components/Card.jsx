import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  max-width: 350px;
  width: 270px;
  cursor: pointer;
  margin-bottom: 45px;
  padding-right: 20px;
`;
const Image = styled.img`
  width: 100%;
  max-width: 270px;
  height: 170px;
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const Card = () => {
  return (
    <Link to="video/testid">
      <Container>
        <Image src="data:image/png;base64,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" />
        <Details>
          <ChannelImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjB8EhUizZ_xiovY98D9Hwr_FLL-836V5wQ&usqp=CAU" />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Hamid Hamidbayli</ChannelName>
            <Info>726,908 views • 2 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
