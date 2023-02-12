import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      {/* Switchの中にどのパスの場合どのコンポーネントを表示するかを書く */}
      {/* exactをつけると完全一致した時のみ実行、つけないと指定したPathを含むと全てひっかかる */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/page1">
          <Page1 />
        </Route> */}
        <Route
          path="/page1"
          render={() => (
            <Switch>
              <Route exact path="/page1">
                <Page1 />
              </Route>
              <Route exact path="/page1/detailA">
                <Page1DetailA />
              </Route>
              <Route exact path="/page1/detailB">
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
