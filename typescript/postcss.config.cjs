const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
  },
};

module.exports = config;
