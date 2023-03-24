import { useEffect, useState } from "react";
// import school from import Header from "./header";
import Scrolls from "./Layout/scrolls";
import Header from "./Layout/header";
import Cookies from "js-cookie";

function App() {
  const [o, setO] = useState<boolean>(true);

  useEffect(() => {
    if (!Cookies.get("use_token")) {
      setO(false);
    }
  });
  return (
    o && (
      <div>
        <Header />

        <Scrolls />
      </div>
    )
  );
}

export default App;
