export const FORM = {
  CONTACTS: {
    title: "add contact",
    initialValues: {
      name: "",
      surname: "",
      fatherName: "",
      email: "",
      additionalInfo: "",
      faculty: "",
      position: "",
      gender: "",
    },
    inputs: [
      {
        id: "001",
        label: "name",
        name: "name",
        type: "text",
        control: "input",
      },
      {
        id: "002",
        label: "surname",
        name: "surname",
        type: "text",
        control: "input",
      },
      {
        id: "003",
        label: "Father Name",
        name: "fatherName",
        type: "text",
        control: "input",
      },
      {
        id: "004",
        label: "email",
        name: "email",
        type: "email",
        control: "input",
      },
      {
        id: "005",
        label: "additional info",
        name: "additionalInfo",
        type: "textarea",
        control: "textarea",
      },
      {
        id: "006",
        label: "faculty",
        name: "faculty",
        type: "text",
        control: "input",
      },
      {
        id: "007",
        label: "position",
        name: "position",
        type: "select",
        control: "select",
      },
      {
        id: "008",
        label: "gender",
        name: "gender",
        type: "radio",
        control: "radio",
      },
    ],
  },
};