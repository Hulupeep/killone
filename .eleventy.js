module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/*.png"); // Ensure PNG images are copied
  eleventyConfig.addPassthroughCopy("content/*.jpg"); // In case you switch formats
  eleventyConfig.addPassthroughCopy("content/*.webp"); // Supports WebP for optimization

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../_includes",
      layouts: "../_includes"
    }
  };
};

  return {
    dir: {
      input: "content",       // Markdown files directory
      output: "_site",        // Output built files here
      includes: "../_includes", // Layout and partial includes directory
      layouts: "../_includes" // Layout files
    }
  };
};
