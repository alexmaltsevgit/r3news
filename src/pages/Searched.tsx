import React from "react";
import { useParams } from "react-router";

type RouteParams = {
  query: string;
};

const Searched = () => {
  const { query } = useParams<RouteParams>();

  return <div>{query}</div>;
};

export default Searched;
