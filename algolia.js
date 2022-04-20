const algoliasearch = require("algoliasearch");

const client = algoliasearch("I0PX4WIMQC", "af933b712260b02bc760b7ba8af7434b");
const index = client.initIndex("new-index-1650449183");

// const objects = [
//   {
//     objectID: 1,
//     name: "Foo",
//   },
// ];

// index
//   .saveObjects(objects)
//   .then(({ objectIDs }) => {
//     console.log(objectIDs);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

index
  .search("Tyler")
  .then(({ hits }) => {
    console.log(hits);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("jeetanshu");
