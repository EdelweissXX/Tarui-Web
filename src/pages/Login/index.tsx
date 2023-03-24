import {
  Button,
  Checkbox,
  Col,
  Form,
  FormInstance,
  Input,
  QRCode,
  Row,
} from "antd";
import React from "react";
import style from "./style/style.module.scss";
import BackImage from "../../assets/img.png";
import school from "../../assets/school.png";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const formRef = React.useRef<FormInstance>(null);
  const router = useRouter();
  return (
    <div
      className={style.Login}
      style={{ backgroundImage: `url('${BackImage.src}')` }}
    >
      <div className={style.loginCard}>
        <Row gutter={24} className={style.cardRow}>
          <Col span={11} className={style.left}>
            <h1>二维码登录</h1>
            <QRCode
              errorLevel="H"
              value="https://www.baidu.com"
              icon={school.src}
              className={style.QR}
            />
          </Col>
          <Col span={13} className={style.right}>
            <Form name="basic" ref={formRef} autoComplete="off" size="large">
              <Form.Item
                label="账号"
                name="userName"
                rules={[{ required: true, message: "账号不能为空" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: "密码不能为空" }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  onClick={async () => {
                    try {
                      const data = await formRef.current.validateFields();
                      Cookies.set(
                        "use_token",
                        "XXKCO11111-V5870-AX%%%#!1111-01"
                      );
                      console.log("123213");
                      router.push("/");
                    } catch (e) {
                      return null;
                    }
                  }}
                >
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
