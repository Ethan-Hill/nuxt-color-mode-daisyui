import { defineNuxtConfig } from "nuxt";
import presetIcons from "@unocss/preset-icons";
import presetWind from "@unocss/preset-wind";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@unocss/nuxt",
  ],
  colorMode: {
    preference: "light", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
  },
  css: ["~/assets/css/main.css"],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    presets: [
      presetWind(),
      presetIcons({
        customizations: {
          customize(props) {
            props.width = "2em";
            props.height = "2em";
            return props;
          },

          iconCustomizer(collection, icon, props) {
            // customize all icons in this collection
            if (collection === "menu") {
              props.width = "4em";
              props.height = "4em";
            }
          },
        },
      }),
      // ...other presets
    ],
    // core options
    shortcuts: [],
    rules: [],
  },
});
