module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  return {
    passthroughFileCopy: true,
    dir: {
      includes: "includes",
      input: "src",
      data: "data",
      output: "dist"
    }
  }
}
