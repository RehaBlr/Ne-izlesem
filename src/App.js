import { Route, Switch, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Link to="/">Anasayfa</Link>
      <Link to="/dizi-detay"> Dizi Detay </Link>
      {/* <Link to="/dizi-detay/5"> 5.dizi detayına git </Link> */}

      <Switch>
        <Route path="/dizi-detay" component={Detail} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
