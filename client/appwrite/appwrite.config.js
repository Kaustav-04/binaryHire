import { Client, Account, Storage } from "appwrite";

const client = new Client();
client.setEndpoint("http://localhost:100/v1").setProject("63dec88524243c51c857");

// const storage = new Storage(client);

// const promise = storage.createFile(
//     '63ded021032c4a7bbc11',
//     ID.unique(),
//     document.getElementById('uploader').files[0]
// );

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

export const storage = new Storage(client);
