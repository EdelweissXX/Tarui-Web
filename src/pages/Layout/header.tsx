import React, { useEffect } from "react";
import style from "./style/index.module.scss";
import { Col, Row, Image } from "antd";
import school from "../../assets/school.png";
import Time from "../../compoents/Header/time";
import Cookies from "js-cookie";

const Header = () => {
  useEffect(() => {}, []);
  return (
    <div className={style.Header}>
      <Row className={style["Header-Row"]}>
        <Col span={8} className={style["Header-Col"]}>
          <img src={school.src} className={style.School} />
          <span className={style["headerTitle"]}>福州大学阳光学院考试系统</span>
        </Col>
        <Col span={16}>
          <Col span={6} className={style["Header-Col"]}>
            <Time />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
