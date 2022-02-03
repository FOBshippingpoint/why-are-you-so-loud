import ghpages from "gh-pages";

console.log("Start publishing...");
ghpages.publish("dist", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Deployed!");
});
