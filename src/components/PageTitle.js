import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Joo Movie | {title} </title>
    </Helmet>
  );
};
