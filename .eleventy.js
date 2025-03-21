module.exports = function(eleventyConfig) {
  // Ensure images are copied correctly
  eleventyConfig.addPassthroughCopy("content/*.png"); 
  eleventyConfig.addPassthroughCopy("content/*.jpg"); 
  eleventyConfig.addPassthroughCopy("content/*.webp");

  return {
    dir: {
      input: "content",        // ✅ Keep markdown files here
      output: "_site",         // ✅ Output files go here
      includes: "_includes",   // ✅ Eleventy looks here for layouts/partials
      layouts: "_includes"     // ✅ Layouts should also be in `_includes`
    }
  };
};
