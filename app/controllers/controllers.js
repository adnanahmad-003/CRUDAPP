import reopenedRealm from "../models/models";
import uuid from "uuid-random";

export const createUser = (name, age, email, address) => {
  const newUserId = uuid();
  reopenedRealm.write(() => {
    reopenedRealm.create("User", {
      id: newUserId,
      name: name,
      age: parseInt(age),
      email: email,
      address: address
    });
  });
};

export const getAllUsers = () => {
  return reopenedRealm.objects("User").sorted("name");
};

export const updateUser = (userId, updates) => {
  const user = reopenedRealm.objectForPrimaryKey("User", userId);
  if (user) {
    reopenedRealm.write(() => {
      Object.keys(updates).forEach(key => {
        user[key] = updates[key];
      });
    });
  }
};

export const getUserById = (userId) => {
  return reopenedRealm.objectForPrimaryKey('User', userId);
};

export const deleteUser = userId => {
  const user = reopenedRealm.objectForPrimaryKey("User", userId);
  if (user) {
    reopenedRealm.write(() => {
      reopenedRealm.delete(user);
    });
  }
};
