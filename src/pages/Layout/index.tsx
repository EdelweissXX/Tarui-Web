import { NextComponentType, NextPageContext } from "next";
import { useRouter } from "next/router";

import React, { ReactElement, useEffect, useState } from "react";
import Header from "./header";
import Scrolls from "./scrolls";
import Style from "./style/index.module.scss";
import Cookies from "js-cookie";

function Layout(page: any) {
  const [useInfo, setUseInfo] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (!Cookies.get("use_token")) {
      router.push("/Login");
    }
  }, []);

  return (
    <div className={Style["Layout-Box"]}>
      <div className={Style["Main-Box"]}>{page}</div>
    </div>
  );
}

export default Layout;
