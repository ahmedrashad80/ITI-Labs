export default {
  spec_dir: "spec",
  spec_files: ["**/*[sS]pec.?(m)js"],
  helpers: ["helpers/**/*.?(m)js"],
  env: {
    stopSpecOnExpectationFailure: false,
    // default is true but set it to false (to prevent run tests random )
    random: false,
    forbidDuplicateNames: true,
  },
};
