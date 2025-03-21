module.exports = function(eleventyConfig) {
  // Ensure all images are copied to `_site/`
  eleventyConfig.addPassthroughCopy("content/*.png"); 
  eleventyConfig.addPassthroughCopy("content/*.jpg"); 
  eleventyConfig.addPassthroughCopy("content/*.webp");

  return {
    dir: {
      input: "content",       // Markdown files directory
      output: "_site",        // Output built files here
      includes: "_includes",  // Layout and partial includes directory
      layouts: "_includes"    // Layout files
    }
  };
};
