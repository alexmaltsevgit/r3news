import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../types/AppState";
import { LoaderWrapper } from "./Loadable.style";
import { ClipLoader } from "react-spinners";

type LoadableProps = {
  render: JSX.Element | Array<JSX.Element> | undefined;
  isLoading: boolean;
};

const Loadable = ({ render, isLoading }: LoadableProps) => {
  const theme = useSelector((state: AppState) => state.theme);
  return (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <ClipLoader
            color={theme.colors.secondary}
            size={50}
            speedMultiplier={0.8}
          />
        </LoaderWrapper>
      ) : (
        render
      )}
    </>
  );
};

export default Loadable;
