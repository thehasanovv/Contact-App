import classes from "./card-dropdown.module.scss";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../context/ContactsProvider";
import { showDeleteConfirm } from "../../Modals/DeleteModal";
import { useModalSetting } from "../../../hooks/useModalSetting";
import {
  EditOutlined,
  EllipsisOutlined,
  InfoCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const CardDropdown = ({ id }) => {
  const [, dispatch] = useStateValue();
  const { setOpenContactModal } = useModalSetting();

  const handleInfoClick = () => {
    dispatch({ type: "SELECTED_CONTACT", payload: id });
    setOpenContactModal(true);
  };

  const handleEditClick = () => {
    dispatch({ type: "SELECTED_CONTACT", payload: id });
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <div
              onClick={handleInfoClick}
              className={`${classes.option} ${classes.info}`}
            >
              <InfoCircleOutlined />
            </div>
          ),
          key: "1",
        },
        {
          label: (
            <div
              onClick={() => showDeleteConfirm({ id, dispatch })}
              type="dashed"
              className={`${classes.option} ${classes.delete}`}
            >
              <DeleteOutlined />
            </div>
          ),
          key: "2",
        },
        {
          label: (
            <div className={`${classes.option} ${classes.edit}`}>
              <Link to={`/contacts/edit/${id}`} onClick={handleEditClick}>
                <EditOutlined />
              </Link>
            </div>
          ),
          key: "3",
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger="click">
      <EllipsisOutlined style={{ cursor: "pointer" }} />
    </Dropdown>
  );
};

export default CardDropdown;
