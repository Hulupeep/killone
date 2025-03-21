module.exports = function(eleventyConfig) {
    // ✅ Ensure all images are copied properly
    eleventyConfig.addPassthroughCopy({ "content/*.png": "/" }); // Copies images to _site root
    eleventyConfig.addPassthroughCopy("content/*.jpg");
    eleventyConfig.addPassthroughCopy("content/*.webp");

    return {
        dir: {
            input: "content",   // ✅ Keep Markdown files in content/
            output: "_site",    // ✅ Generated static site
            includes: "_includes", // ✅ Use correct relative path
            layouts: "_includes"   // ✅ Use correct relative path
        }
    };
};
