import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";
const { confirm } = Modal;

export const showDeleteConfirm = ({ id, dispatch }) => {
  confirm({
    title: "Are you sure delete this contact?",
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",

    onOk() {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    },

    // onCancel() {},
  });
};

// const DeleteModal = () => <Space wrap>
// </Space>;

// export default DeleteModal;
