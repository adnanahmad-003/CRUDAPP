import Realm from "realm";

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

// Initial opening with schema
const realm = new Realm({ schema: [UserSchema] });
realm.close();

export default realm;
