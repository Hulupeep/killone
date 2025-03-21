module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("content/*.png");
  return {
    dir: {
      input: "content",       // Markdown files directory
      output: "_site",        // Output built files here
      includes: "../_includes", // Layout and partial includes directory
      layouts: "../_includes" // Layout files
    }
  };
};
