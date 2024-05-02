import { v4 as uuidv4 } from "uuid";

let users = [
  {
    id: uuidv4(),
    firstName: "John",
    lastName: "Doe",
    age: 34,
    password: "1234",
  },
  {
    id: uuidv4(),
    firstName: "Atiqur",
    lastName: "Rahman",
    age: 21,
    password: "4321",
  },
];

export default users;
