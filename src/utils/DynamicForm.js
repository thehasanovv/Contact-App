import Swal from "sweetalert2";
import { Toast } from "./toast";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context/ContactsProvider";

const useValue = (path) => {
  const [{ selected }, dispatch] = useStateValue();
  let navigate = useNavigate();

  const dispatchNano = (values) => {
    if (path === "new") {
      dispatch({
        type: "ADD_CONTACTS",
        payload: {
          id: nanoid(),
          ...values,
        },
      });
    }

    if (path === "edit") {
      if (JSON.stringify(selected) === JSON.stringify(values)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You did not change any fields!",
        });
        return;
      }
      dispatch({
        type: "EDIT_CONTACTS",
        payload: values,
      });
    }

    Toast.fire({
      icon: "success",
      title: `Contact ${path === "edit" ? "edited" : "added"} successfully`,
    });
    navigate("/contacts", { replace: true });
  };

  const initialValues = {
    image: "",
    name: "",
    surname: "",
    fatherName: "",
    email: "",
    additionalInfo: "",
    faculty: "",
    position: "Commander",
    gender: "male",
    getNews: false,
  };

  if (path === "new") {
    return { value: initialValues, dispatchNano };
  }
  if (path === "edit") {
    return { value: selected, dispatchNano };
  }
};

export default useValue;
