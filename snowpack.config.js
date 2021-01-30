module.exports = {
  mount: {
    "src/_site": { url: "/", static: true },
    "src/assets/css": { url: "/styles" },
    "src/assets/js": { url: "/scripts" },
  },
  plugins: [
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "ELEVENTY_PRODUCTION=true eleventy",
        watch: "$1 --watch",
      },
    ],
    "@snowpack/plugin-postcss",
  ],
  packageOptions: {
    NODE_ENV: true
  },
  buildOptions: {
    clean: true,
    out: "dist",
  },
  devOptions: {
    open: "none",
    hmrDelay: 300,
    bundle: false,
    hmr: true,
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2020",
  },

};
