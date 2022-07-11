import * as React from "react";
import * as ReactDOM from "react-dom/client";

import NumberBaseball from "./NumberBaseball";

const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode!).render(<NumberBaseball />);
