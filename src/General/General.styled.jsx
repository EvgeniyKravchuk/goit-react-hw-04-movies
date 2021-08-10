import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1440px;
  min-height: 100vh;

  text-align: center;

  margin-left: auto;
  margin-right: auto;

  border: 5px solid #8c8cfa;

  background-color: gray;
  box-shadow: 1px 0px 27px 35px rgba(0, 23, 191, 0.4);
`;

export const HeaderStyled = styled.header`
  background-color: #8c8cfa;
  height: 70px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationItem = styled.li`
  width: 200px;

  font-size: 30px;
  font-weight: 600;

  text-align: center;

  border: 1px solid black;
  border-radius: 5px;

  color: black;

  cursor: pointer;

  &:first-of-type {
    margin-right: 20px;
  }
`;
