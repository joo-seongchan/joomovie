import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const Section = styled.div`
  padding: ${mainStyle.padding};
  @media screen and (width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;

export const Container = ({ children }) => {
  return <Section>{children}</Section>;
};
