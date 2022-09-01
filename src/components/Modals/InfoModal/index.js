import { Modal as AntModal } from "antd";
import { useStateValue } from "../../../context/ContactsProvider";
import classes from "./info-modal.module.scss";

const InfoModal = ({ modalOpen, modalClose }) => {
  const [{ selected }] = useStateValue();
  const hideModal = () => {
    modalClose(false);
  };

  return (
    <AntModal
      title="Get more information"
      visible={modalOpen}
      onOk={hideModal}
      onCancel={hideModal}
      okText="Submit"
      cancelText="Cancel"
      footer={null}
      width={800}
    >
      <div className={classes.container}>
        <div className={classes.container__image}>
          <img src={selected.image ? selected.image : "./user.png"} alt="user"/>
        </div>
        <div className={classes.container__content}>
          <div><span>Id:</span>{selected.id}</div>
          <div><span>Name:</span>{selected.name}</div>
          <div><span>Surname:</span>{selected.surname}</div>
          <div><span>Father Name:</span>{selected.fatherName}</div>
          <div><span>Faculty:</span>{selected.faculty}</div>
          <div><span>Email:</span>{selected.email}</div>
          <div><span>Position:</span>{selected.position}</div>
          <div><span>Gender:</span>{selected.gender}</div>
          <div><span>Get News:</span>{selected.getNews ? "Avaible"  : "Disabled"}</div>
          <div><span>Additional Info:</span>{selected.additionalInfo}</div>
        </div>
      </div>
    </AntModal>
  );
};

export default InfoModal;
