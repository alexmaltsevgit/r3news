export namespace Environment {
  export const getNewsAPIKey = (): string =>
    process.env.REACT_APP_NEWs_API_KEY as string;

  export const isDebug = (): boolean =>
    (process.env.REACT_APP_DEBUG as string) === "TRUE";
}
