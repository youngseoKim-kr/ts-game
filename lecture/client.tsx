import * as React from "react";
import * as ReactDOM from "react-dom/client";

import TicTacToe from "./TicTacToe";

const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode!).render(<TicTacToe />);
