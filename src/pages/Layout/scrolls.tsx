import React, { createContext, useContext, useEffect, useReducer } from "react";
import style from "./style/index.module.scss";

import { reduceConfig } from "./LayoutStatus/ScrollsStatus";
import AvatarEl from "./Scrolls/Avatar";
import Cookies from "js-cookie";

// 导航栏全局状态
export const ScrollsState: React.Context<any> = createContext(null);

const Scrolls = () => {
  // const [state,dispatch]=useContext()

  const [state, dispatch] = useReducer(reduceConfig, {
    user: { messageCont: 1 },
  });

  return (
    <ScrollsState.Provider value={{ state, dispatch }}>
      <div className={style["Scrolls"]}>
        <div className={style["ScrollsMain"]}>
          <AvatarEl />
        </div>
      </div>
    </ScrollsState.Provider>
  );
};

export default Scrolls;
