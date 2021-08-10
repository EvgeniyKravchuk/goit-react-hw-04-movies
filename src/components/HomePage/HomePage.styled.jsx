import styled from "@emotion/styled";

export const List = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  padding: 10px;
`;

export const Item = styled.li`
  width: 300px;
  height: 280px;

  border: 2px solid #8c8cfa;

  margin-bottom: 10px;

  cursor: pointer;

  & img {
    max-height: 170px;
    width: 300px;
  }
`;
