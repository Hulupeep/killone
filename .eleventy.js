module.exports = function(eleventyConfig) {
    // ✅ Copy images from content to _site/images/ so they work in Markdown & Website
    eleventyConfig.addPassthroughCopy({ "content/*.png": "images" });
    eleventyConfig.addPassthroughCopy({ "content/*.jpg": "images" });
    eleventyConfig.addPassthroughCopy({ "content/*.webp": "images" });

    // ✅ Ensure _includes is available in deployment (fixes missing layouts)
    eleventyConfig.addPassthroughCopy("_includes");

    return {
        dir: {
            input: "content",    // ✅ Markdown files live here
            output: "_site",     // ✅ Output goes here
            includes: "_includes", // ✅ Ensure layouts & includes are in project root
            layouts: "_includes"  // ✅ Layouts should be found here
        }
    };
};
