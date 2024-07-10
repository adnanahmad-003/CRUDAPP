
import Realm from "realm";
//import uuid from "uuid-random"; 

const UserSchema = {
  name: "User",
  properties: {
    id: "string",
    name: "string",
    age: { type: "int", optional: true },
    email: "string",
    address: "string"
  },
  primaryKey: "id"
};

const realm = new Realm({ schema: [UserSchema] });
export default realm;