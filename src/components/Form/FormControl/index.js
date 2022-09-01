import Input from "../Inputs/Input";
import Textarea from "../Inputs/Textarea";
import Select from "../Inputs/Select";
import RadioButtons from "../Inputs/Radio";
import CheckboxGroup from "../Inputs/Checkbox";

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    default:
      return null;
  }
};

export default FormControl;
