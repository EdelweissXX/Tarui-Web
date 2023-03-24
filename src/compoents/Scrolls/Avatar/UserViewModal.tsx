import { Avatar, Button, Card, Col, message, Modal, Row, Tabs } from "antd";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import style from "./index.module.scss";
import user1 from "../../../assets/user1.png";
import user2 from "../../../assets/user2.png";
import { FileDoneOutlined, LikeOutlined } from "@ant-design/icons";
import { student } from "./type";
// import { setTimeout } from "timers/promises";

const UserViewModal: React.FC<{ open: boolean; setOpen: Function }> = (
  props
) => {
  const [cardLoading, setCardLoading] = useState<boolean>(true);
  useEffect(() => {
    message.success("成绩信息有更新请查看");
    setTimeout(() => {
      setCardLoading(false);
    }, 4000);
  }, []);

  const tabsChildren = (id: string) => {
    return (
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={`2022-${id}学年`}
        loading={cardLoading}
      >
        {new Array(4).fill(null).map((_, i) => (
          <div className={style.scoreChildren}>
            <Row gutter={24} className={style.view}>
              <Col span={5}>
                <span>
                  <b>课程</b>
                </span>
              </Col>
              <Col span={19}>
                <span>《心理学》</span>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={5}>
                <span>
                  <b>学分</b>
                </span>
              </Col>
              <Col span={7} className={style.font}>
                10
              </Col>
              <Col span={5}>
                <span>
                  <b>成绩</b>
                </span>
              </Col>
              <Col span={7} className={style.font}>
                60
              </Col>
            </Row>
          </div>
        ))}
      </Card>
    );
  };

  const tabsChildren2 = (id: string) => {
    return (
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={`2022-${id}学年`}
        loading={cardLoading}
      >
        {new Array(4).fill(null).map((_, i) => (
          <div className={style.scoreChildren}>
            <Row gutter={24} className={style.view}>
              <Col span={5}>
                <span>
                  <b>课程</b>
                </span>
              </Col>
              <Col span={8}>
                <span>《心理学》</span>
              </Col>
              <Col span={5}>
                <span>
                  <b>教师</b>
                </span>
              </Col>
              <Col span={5}>
                <span>
                  <b>王xx</b>
                </span>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={5}>
                <span>
                  <b>评语</b>
                </span>
              </Col>
              <Col span={19} className={style.font}>
                <b>xxxxxxxxxxxxxxxxxxxx</b>
              </Col>
            </Row>
          </div>
        ))}
      </Card>
    );
  };

  return (
    <div>
      <Modal
        open={props.open}
        centered
        destroyOnClose
        closable={false}
        width="36%"
        footer={[
          <Button
            onClick={() => {
              props.setOpen(false);
            }}
          >
            返回
          </Button>,
        ]}
        // okText="关闭"
        bodyStyle={{ height: "calc(100vh - 20vw)", overflow: "auto" }}
        onCancel={() => {
          props.setOpen(false);
        }}
      >
        <div className={style.mainBox}>
          <div className={style.titleBox}>
            <Card
              className={style.card}
              loading={cardLoading}
              cover={
                <img alt="example" src={user1.src} className={style.cardAvg} />
              }
            >
              <Card.Meta
                title="李侵龙"
                description="计算机学院 软件工程一班"
                className={style.cardFont}
              />
            </Card>
            <Card
              className={style.card}
              loading={cardLoading}
              cover={
                <img alt="example" src={user2.src} className={style.cardAvg} />
              }
            >
              <Card.Meta
                title="辅导员"
                description="电话:185xxxxxxxxxxx"
                className={style.cardFont}
              />
            </Card>
          </div>
          <div className={style.score}>
            <Tabs
              defaultActiveKey="1"
              items={[FileDoneOutlined, LikeOutlined].map((Icon, i) => {
                const id = String(i + 1);
                return {
                  label: (
                    <span>
                      <Icon />
                      {student[id]}
                    </span>
                  ),
                  key: id,
                  children: (
                    <Tabs
                      defaultActiveKey="1"
                      tabPosition="left"
                      style={{ height: 300 }}
                      items={new Array(8).fill(null).map((_, index) => {
                        const indexs = String(index + 1);
                        return {
                          label: `2022-${indexs}`,
                          key: indexs,
                          children:
                            i === 0
                              ? tabsChildren(indexs)
                              : tabsChildren2(indexs),
                        };
                      })}
                    />
                  ),
                };
              })}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserViewModal;
