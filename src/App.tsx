import React from "react";
import { Helmet } from "react-helmet";

import Tones from "./components/Tones";

const App = () => {
  return (
    <>
      <Helmet>
        <title>TonesJS Playground</title>
      </Helmet>
      <Tones />
    </>
  );
};
export default App;
