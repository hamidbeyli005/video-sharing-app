import React from "react";
import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  width: 44%;
  position: absolute;
  left: -70px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 2px;
  height: 70%;
`;
const SearchIcon = styled.div`
  background: blue;
  cursor: pointer;
  height: 100%;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 2px 2px 0;
  background-color: ${({ theme }) => theme.soft};

  > svg {
    width: 26px;
    height: auto;
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Input = styled.input`
  padding: 8px 6px;

  width: 100%;
  font-size: 16px;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 1px solid #1991fa;
  color: #1991fa;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 3px;
  gap: 8px;
  width: 140px;
  > svg {
    font-size: 19px;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type="text" placeholder="Search" />
          <SearchIcon>
            <AiOutlineSearch />
          </SearchIcon>
        </Search>

        <Button>
          <BiUserCircle />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
