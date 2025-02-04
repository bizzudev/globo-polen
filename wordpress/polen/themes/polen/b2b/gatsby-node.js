const path = require("path");
const fs = require("fs");

const FOLDER = "empresas";

exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    fs.rmdirSync(path.join(__dirname, FOLDER), { recursive: true });
    fs.renameSync(
      path.join(__dirname, "public"),
      path.join(__dirname, "public_dev")
    );
  }
};

exports.onPostBuild = () => {
  fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, FOLDER));
  fs.renameSync(
    path.join(__dirname, "public_dev"),
    path.join(__dirname, "public")
  );
};
