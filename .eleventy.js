module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: ".", // Tell Eleventy where to look for files.
      output: "_site", // Keep this for consistency.
      includes: "_includes", // Eleventy will look for includes here
      layouts: "."   // Tell Eleventy to look for layouts in the root directory
    }
  };
};
