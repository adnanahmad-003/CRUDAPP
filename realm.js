// realm.js
import Realm from "realm";
import uuid from "uuid-random"; 

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

export const createUser = (name, age, email, address) => {
  const newUserId = uuid(); 
  realm.write(() => {
    realm.create("User", {
      id: newUserId,
      name: name,
      age: parseInt(age),
      email: email,
      address: address
    });
  });
};

export const getAllUsers = () => {
  return realm.objects("User").sorted("name");
};

export const updateUser = (userId, updates) => {
  const user = realm.objectForPrimaryKey("User", userId);
  if (user) {
    realm.write(() => {
      Object.keys(updates).forEach(key => {
        user[key] = updates[key];
      });
    });
  }
};

export const getUserById = (userId) => {
  return realm.objectForPrimaryKey('User', userId);
};

export const deleteUser = userId => {
  const user = realm.objectForPrimaryKey("User", userId);
  if (user) {
    realm.write(() => {
      realm.delete(user);
    });
  }
};

export default realm;
