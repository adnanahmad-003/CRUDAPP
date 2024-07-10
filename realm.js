// realm.js
import Realm from "realm";

const UserSchema = {
  name: "User",
  properties: {
    id: "int",
    name: "string",
    age: "int",
    email: "string",
    address: "string"
  },
  primaryKey: "id"
};

const realm = new Realm({ schema: [UserSchema] });

export default realm;
