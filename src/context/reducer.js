import levi from "../assets/images/levi.jpg";
import erwin from "../assets/images/erwin-smith.jpg";
import rengoku from "../assets/images/rengoku.jpg";
import customer1 from "../assets/images/customer1.png";
import { writeStorage } from "@rehooks/local-storage";

export const initialState = {
  contacts: [
    {
      id: "001",
      image: `${customer1}`,
      name: "John",
      surname: "Smith",
      fatherName: "Mike",
      faculty: "Computer Science ",
      email: "john.smith@gmail.com",
      additionalInfo:
        "I like coding and expanding my technical skills day by day. I have huge interest for learning new frameworks and languages.",
      position: "Front-End developer",
      gender: "male",
      getNews: true,
    },
    {
      id: "002",
      image: `${levi}`,
      name: "Levi",
      surname: "Ackerman",
      fatherName: "Kuchel (mother)",
      faculty: "Scouting Legion",
      email: "levi.ackerman@gmail.com",
      additionalInfo:
        "I want to put an end to that recurring nightmare, right now. There are those who would get in my way. But I'm fine playing the role of the lunatic who kills people like that. I have to be ready to rearrange some faces. Because I choose the hell of humans killing each other over the hell of being eaten",
      position: "Squad Captain",
      gender: "male",
      getNews: true,
    },
    {
      id: "003",
      image: `${erwin}`,
      name: "Erwin",
      surname: "Smith",
      fatherName: "Eruvin no chichi",
      faculty: "Scouting Legion",
      email: "levi.ackerman@gmail.com",
      additionalInfo:
        "I want to put an end to that recurring nightmare, right now. There are those who would get in my way. But I'm fine playing the role of the lunatic who kills people like that. I have to be ready to rearrange some faces. Because I choose the hell of humans killing each other over the hell of being eaten",
      position: "Commander",
      gender: "male",
      getNews: false,
    },
    {
      id: "004",
      image: `${rengoku}`,
      name: "Rengoku",
      surname: "Kyōjurō",
      fatherName: "Shinjuro",
      faculty: "Training Corps",
      email: "rengoku.kyojuro@gmail.com",
      additionalInfo:
        "I want to put an end to that recurring nightmare, right now. There are those who would get in my way. But I'm fine playing the role of the lunatic who kills people like that. I have to be ready to rearrange some faces. Because I choose the hell of humans killing each other over the hell of being eaten",
      position: "Flame Hashira",
      gender: "male",
      getNews: true,
    },
  ],
  selected: {},
  isLoading: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "REPLACE_CONTACTS_STATE":
      return { ...state, contacts: action.payload };
    case "DELETE_ALL_CONTACTS":
      return { ...state, contacts: [] };
    case "ADD_CONTACTS":
      writeStorage("contacts", [action.payload, ...state.contacts]);
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case "DELETE_CONTACT":
      writeStorage(
        "contacts",
        state.contacts.filter((item) => item.id !== action.payload)
      );
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== action.payload),
      };
    case "SELECTED_CONTACT":
      return {
        ...state,
        selected: state.contacts.find(
          (contact) => contact.id === action.payload
        ),
      };
    case "EDIT_CONTACTS":
      const findIndex = state.contacts.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedItems = [...state.contacts];
      const updatedItem = action.payload;
      updatedItems[findIndex] = updatedItem;
      writeStorage("contacts", updatedItems);
      return {
        ...state,
        contacts: updatedItems,
      };
    default:
      return state;
  }
};
