import Realm from "realm";

// Reopen without schema for subsequent use
//After you create a realm on a device, you can omit the schema when you access the same realm by calling new Realm(). 
//The SDK derives the realm's schema from the existing realm file at Realm.defaultPath.
//Accessing a realm without providing a schema only works for local realms. 
//You must always pass a schema when using a Synced realm.
const reopenedRealm = new Realm();

export default reopenedRealm;
