module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("content", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./content/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "."
    },
    templateFormats: ["md", "html"] // Add "html" here
  };
};
