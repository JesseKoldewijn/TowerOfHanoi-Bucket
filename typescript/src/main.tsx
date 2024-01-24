import { render } from "preact";
import "./styles/tailwind.css";

import App from "./views/index";

render(<App />, document.getElementById("app")!);
