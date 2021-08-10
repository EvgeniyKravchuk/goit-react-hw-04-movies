import styled from "@emotion/styled";

export const Button = styled.button`
  width: 200px;
  height: 40px;

  background-color: #8c8cfa;

  margin-top: 10px;
  margin-bottom: 10px;

  cursor: pointer;

  &:first-of-type {
    margin-right: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

export const Image = styled.img`
  width: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  width: 1300px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-left: auto;
  margin-right: auto;

  margin-bottom: 10px;
`;

export const Item = styled.li`
  width: 400px;
  height: 30px;

  text-align: center;

  border: 2px solid #8c8cfa;

  padding-right: 5px;
  padding-left: 5px;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;
