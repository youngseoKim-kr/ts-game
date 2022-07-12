import * as React from "react";
import * as ReactDOM from "react-dom/client";

import ResponseCheck from "./ResponseCheck";

const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode!).render(<ResponseCheck />);
