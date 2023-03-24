import React, { useContext, useEffect, useState } from "react";
import style from "../style/index.module.scss";
import { Avatar, Badge } from "antd";
import { ScrollsState } from "../scrolls";
import { reduceState, reduceType } from "../LayoutStatus/ScrollsStatus";
import UserViewModal from "../../../compoents/Scrolls/Avatar/UserViewModal";

function AvatarEl() {
  const context: { state: reduceState; dispatch: reduceType } =
    useContext(ScrollsState);

  const [viewOpen, setViewOpen] = useState<boolean>(false);
  useEffect(() => {});
  return (
    <div className={style["ScrollsChildren"]} key="Avatar">
      <Avatar.Group maxCount={context.state.user.messageCont}>
        <Badge count={1}>
          <Avatar
            className={style["Avatar"]}
            onClick={() => {
              setViewOpen(true);
            }}
          >
            李侵龙
          </Avatar>
        </Badge>
      </Avatar.Group>
      {viewOpen ? (
        <UserViewModal open={viewOpen} setOpen={setViewOpen} />
      ) : null}
    </div>
  );
}

export default AvatarEl;
