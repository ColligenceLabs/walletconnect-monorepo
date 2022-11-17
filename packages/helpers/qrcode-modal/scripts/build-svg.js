const svgUrlLoader = require("svg-url-loader");

const buildAsset = require("./build-asset");

buildAsset({
  assetFile: "logo.svg",
  targetFile: "logo.ts",
  targetVar: "WALLETCONNECT_LOGO_SVG_URL",
  loader: input =>
    svgUrlLoader(input)
      .replace(`module.exports = "`, "")
      .replace(`"`, ""),
});


buildAsset({
  assetFile: "caret.svg",
  targetFile: "caret.ts",
  targetVar: "CARET_SVG_URL",
  loader: input =>
    svgUrlLoader(input)
      .replace(`module.exports = "`, "")
      .replace(`"`, ""),
});

buildAsset({
  assetFile: "TALK_symbol.svg",
  targetFile: "TALK_symbol.ts",
  targetVar: "WALLETCONNECT_LOGO_SVG_URL",
  loader: input =>
      svgUrlLoader(input)
          .replace(`module.exports = "`, "")
          .replace(`"`, ""),
});

buildAsset({
  assetFile: "appstore.svg",
  targetFile: "appstore.ts",
  targetVar: "APPSTORE_LOGO_SVG_URL",
  loader: input =>
      svgUrlLoader(input)
          .replace(`module.exports = "`, "")
          .replace(`"`, ""),
});

buildAsset({
  assetFile: "googleplay.svg",
  targetFile: "googleplay.ts",
  targetVar: "GOOLEPLAY_LOGO_SVG_URL",
  loader: input =>
      svgUrlLoader(input)
          .replace(`module.exports = "`, "")
          .replace(`"`, ""),
});