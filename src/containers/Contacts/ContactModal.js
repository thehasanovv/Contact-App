import InfoModal from "../../components/Modals/InfoModal";
import { useModalSetting } from "../../hooks/useModalSetting";

const ContactModal = () => {
  const { openContactModal, setOpenContactModal } = useModalSetting();
  return (
    <InfoModal modalOpen={openContactModal} modalClose={setOpenContactModal} />
  );
};

export default ContactModal;
