module.exports = function(eleventyConfig) {
    // ✅ Copy images from content to the output folder (_site)
    eleventyConfig.addPassthroughCopy({ "content/*.png": "images" });
    eleventyConfig.addPassthroughCopy({ "content/*.jpg": "images" });
    eleventyConfig.addPassthroughCopy({ "content/*.webp": "images" });

    return {
        dir: {
            input: "content",    // ✅ Keep Markdown files in content/
            output: "_site",     // ✅ Generated static site
            includes: "_includes", // ✅ Corrected includes directory
            layouts: "_includes"  // ✅ Corrected layouts directory
        }
    };
};
