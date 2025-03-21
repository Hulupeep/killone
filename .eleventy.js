module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "content",       // Markdown files directory
      output: "_site",        // Output built files here
      includes: "../_includes", // Layout and partial includes directory
      layouts: "../_includes" // Layout files
    }
  };
};
