import React from "react";
import styled from "styled-components";
import { BsYoutube } from "react-icons/bs";
import { VscHistory } from "react-icons/vsc";
import { AiOutlineLike } from "react-icons/ai";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineOndemandVideo,
  MdOutlineWatchLater,
} from "react-icons/md";

const Container = styled.div`
  flex: 1;
  height: 100vh;
  background: #f9f9f9;
  overflow-y: auto;
`;
const Wrapper = styled.div``;
const Logo = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 900;
  gap: 6px;
  padding: 16px 26px;
  background: #fff;

  cursor: pointer;
  > svg {
    color: red;
    font-size: 30px;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 26px;
  gap: 28px;
  font-size: 14px;
  &.active {
    background: #e5e5e5 !important;
    font-weight: 500;
  }
  &:hover {
    background: #f2f2f2;
  }
  > svg {
    font-size: 23px;
    height: 26px;
  }
`;
const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid #e5e5e5;
`;
const Title = styled.h4`
  font-size: 14px;
  font-weight: 600;
  padding: 0 26px 7px 26px;

  color: #555555;
`;
const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <BsYoutube />
          HamidTube
        </Logo>
        <Item className="active">
          <MdHomeFilled />
          Home
        </Item>
        <Item>
          <MdOutlineExplore />
          Explore
        </Item>
        <Item>
          <MdOutlineSubscriptions />
          Subscriptions
        </Item>
        <Hr />
        LŞogın yerı
        <Hr />
        <Item>
          <MdOutlineVideoLibrary />
          Library
        </Item>
        <Item>
          <VscHistory />
          History
        </Item>
        <Item>
          <MdOutlineOndemandVideo />
          Your videos
        </Item>
        <Item>
          <MdOutlineWatchLater />
          Watch later
        </Item>
        <Item>
          <AiOutlineLike />
          Liked videos
        </Item>
        <Item>
          <MdOutlineWatchLater />
          Watch later
        </Item>
        <Hr />
        <Title>MORE FROM YOUTUBE</Title>
        <Item>
          <svg
            style={{
              "pointer-events": "none",
              display: "block",
              height: "26px",
            }}
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
          >
            <g class="style-scope yt-icon">
              <path
                fill="red"
                d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"
                class="style-scope yt-icon"
              ></path>
              <path
                fill="#fff"
                d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"
                class="style-scope yt-icon"
              ></path>
              <path
                fill="red"
                d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"
                class="style-scope yt-icon"
              ></path>
              <path
                fill="#fff"
                d="M9.88 15.25 15.5 12 9.88 8.75z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          Creator Studio
        </Item>
        <Item>
          <svg
            style={{
              "pointer-events": "none",
              display: "block",
              height: "26px",
            }}
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
          >
            <g class="style-scope yt-icon">
              <circle
                fill="#FF0000"
                cx="12"
                cy="12"
                r="10"
                class="style-scope yt-icon"
              ></circle>
              <polygon
                fill="#FFFFFF"
                points="10,14.65 10,9.35 15,12 "
                class="style-scope yt-icon"
              ></polygon>
              <path
                fill="#FFFFFF"
                d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          Youtube Music
        </Item>
        <Item>
          <svg
            style={{
              "pointer-events": "none",
              display: "block",
              height: "26px",
            }}
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
          >
            <g class="style-scope yt-icon">
              <path
                fill="#FF0000"
                d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
                class="style-scope yt-icon"
              ></path>
              <path
                fill="#000"
                d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
                class="style-scope yt-icon"
              ></path>
              <path
                fill="#000"
                d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
                class="style-scope yt-icon"
              ></path>
              <path
                fill="#FFF"
                d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          Youtube Kids
        </Item>
        <Item>
          <svg
            style={{
              "pointer-events": "none",
              display: "block",
              height: "26px",
            }}
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
          >
            <g class="style-scope yt-icon">
              <path
                fill="#FF0000"
                d="M6,18h12v1H6V18z M22,6.2v9.6c0,0.66-0.54,1.2-1.2,1.2H3.2C2.54,17,2,16.46,2,15.8V6.2C2,5.54,2.54,5,3.2,5 h17.6C21.46,5,22,5.54,22,6.2z"
                class="style-scope yt-icon"
              ></path>
              <polygon
                fill="#FFFFFF"
                points="15,11 10,8.35 10,13.65 "
                class="style-scope yt-icon"
              ></polygon>
            </g>
          </svg>
          Youtube TV
        </Item>
        <Hr />
        <Item>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
          >
            <g class="style-scope yt-icon">
              <path
                d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          Settings
        </Item>
        <Item>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
          >
            <g class="style-scope yt-icon">
              <path
                d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          Report History
        </Item>
        <Item>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
          >
            <g class="style-scope yt-icon">
              <path
                d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          Help
        </Item>
        <Item>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
          >
            <g class="style-scope yt-icon">
              <path
                d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
          Send Feedback
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
