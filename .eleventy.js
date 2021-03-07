module.exports = function(eleventyConfig) {
  if (process.argv.includes("--serve")) {
    eleventyConfig.addWatchTarget("src/**/*")
  }

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/public": "public"})

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "includes",
      data: "_data",
      output: "dist"
    }
  }
}
