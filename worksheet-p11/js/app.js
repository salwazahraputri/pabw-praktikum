import { mulaiBerita } from "./api.js";
import { render } from "./dom.js";
import { state } from "./state.js";
import { pasangPendengar } from "./events.js";

render(state);
pasangPendengar();
mulaiBerita();

console.log(state);