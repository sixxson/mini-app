const plugin = require("tailwindcss/plugin");
function setClamp(min, max = min) {
  const minPx = parseFloat(min);
  const maxPx = parseFloat(max);
  const maxValue = (maxPx / 1920) * 100 + "rem";
  return `clamp(${minPx}px, ${maxValue}, ${maxValue})`;
}
function r(value) {
  return (value / 1920) * 100 + "rem";
}

module.exports = {
  darkMode: ["selector", '[zaui-theme="dark"]'],
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "1024px",
      // => @media (min-width: 1440px) { ... }

      xl: "1200px",
      // => @media (min-width: 1440px) { ... }
      "-xs": {
        max: "409.98px",
      },
      "-sm": {
        max: "575.98px",
      },
      "-md": {
        max: "767.98px",
      },
      "-lg": {
        max: "1023.98px",
      },
      "-xl": {
        max: "1199.98px",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "calc(2/16*1rem)",
      3: "calc(3/16*1rem)",
      4: "calc(4/16*1rem)",
      8: "calc(8/16*1rem)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        md: "30px",
        xl: "calc(20/16*1rem)",
      },
      screens: {
        xs: "100vw",
        sm: "100vw",
        md: "100vw",
        lg: "1024px",
        xl: "calc(1440/16*1rem)",
      },
    },
    fontFamily: {
      primary: ["Google Sans Flex"],
      heading: ["Markazi Text"],
      body: ["Google Sans Flex", "sans-serif"],
      awesome: ['"Font Awesome 6 Pro"'],
      awesomeSharp: ['"Font Awesome 6 Sharp"'],
    },
    fontSize: {
      0: ["0", { lineHeight: "0" }],
      xs: [
        "clamp(10px,calc(12/16*1rem),calc(12/16*1rem))",
        ,
        { lineHeight: "1.2" },
      ],
      sm: [
        "clamp(14px,calc(14/16*1rem),calc(14/16*1rem))",
        ,
        { lineHeight: "1.2" },
      ],
      base: [
        "clamp(14px,calc(16/16*1rem),calc(16/16*1rem))",
        ,
        { lineHeight: "1.2" },
      ],
      "15px": [
        "clamp(15px,calc(15/16*1rem),calc(15/16*1rem))",
        ,
        { lineHeight: "1.2" },
      ],
      lg: ["calc(18/16*1rem)", , { lineHeight: "1.2" }],
      xl: ["calc(20/16*1rem)", , { lineHeight: "1.2" }],
      "2xl": ["clamp(18px,calc(24/16*1rem),calc(24/16*1rem))"],
      "3xl": ["calc(30/16*1rem)"],
      "4xl": ["calc(36/16*1rem)"],
      "5xl": ["calc(40/16*1rem)"],
      "6xl": ["calc(48/16*1rem)"],
      "7xl": ["calc(72/16*1rem)", { lineHeight: "1" }],
      "8xl": ["calc(84/16*1rem)", { lineHeight: "1" }],
      "9xl": ["calc(96/16*1rem)", { lineHeight: "1" }],
      28: ["calc(28/16*1rem)", { lineHeight: 1.5 }],
      30: ["calc(30/16*1rem)", { lineHeight: "calc(38/16*1rem)" }],
      38: ["calc(38/16*1rem)", { lineHeight: "calc(46/16*1rem)" }],
      32: ["calc(32/16*1rem)"],
      40: ["calc(40/16*1rem)"],
      42: ["calc(42/16*1rem)"],
      64: ["calc(64/16*1rem)"],
    },
    spacing: {
      0: "0px",
      0.25: "calc(1/16*1rem) /* 1px */",
      0.5: "calc(2/16*1rem) /* 2px */",
      0.75: "calc(3/16*1rem) /* 3px */",
      1: "calc(4/16*1rem) /* 4px */",
      1.25: "calc(5/16*1rem) /* 5px */",
      1.5: "calc(6/16*1rem) /* 6px */",
      1.75: "calc(7/16*1rem) /* 7px */",
      2: "calc(8/16*1rem) /* 8px */",
      2.25: "calc(9/16*1rem) /* 9px */",
      2.5: "calc(10/16*1rem) /* 10px */",
      2.75: "calc(11/16*1rem) /* 11px */",
      3: "calc(12/16*1rem) /* 12px */",
      3.25: "calc(13/16*1rem) /* 13px */",
      3.5: "calc(14/16*1rem) /* 14px */",
      3.75: "calc(15/16*1rem) /* 15px */",
      4: "calc(16/16*1rem) /* 16px */",
      4.25: "calc(17/16*1rem) /* 17px */",
      4.5: "calc(18/16*1rem) /* 18px */",
      4.75: "calc(19/16*1rem) /* 19px */",
      5: "calc(20/16*1rem) /* 20px */",
      5.5: "calc(22/16*1rem) /* 22px */",
      6: "calc(24/16*1rem) /* 24px */",
      6.5: "calc(26/16*1rem) /* 26px */",
      7: "calc(28/16*1rem) /* 28px */",
      7.5: "calc(30/16*1rem) /* 30px */",
      8: "calc(32/16*1rem) /* 32px */",
      8.5: "calc(34/16*1rem) /* 34px */",
      8.75: "calc(35/16*1rem) /* 35px */",
      9: "calc(36/16*1rem) /* 36px */",
      9.5: "calc(38/16*1rem) /* 38px */",
      10: "calc(40/16*1rem) /* 40px */",
      11: "calc(44/16*1rem) /* 44px */",
      12: "calc(48/16*1rem) /* 48px */",
      12.5: "calc(50/16*1rem) /* 50px */",
      13: "calc(52/16*1rem) /* 52px */",
      14: "calc(56/16*1rem) /* 56px */",
      15: "calc(60/16*1rem) /* 60px */",
      16: "calc(64/16*1rem) /* 64px */",
      17: "calc(68/16*1rem) /* 68px */",
      17.5: "calc(70/16*1rem) /* 70px */",
      18: "calc(72/16*1rem) /* 72px */",
      19: "calc(76/16*1rem) /* 76px */",
      20: "calc(80/16*1rem) /* 80px */",
      22.5: "calc(90/16*1rem) /* 90px */",
      23: "calc(94/16*1rem) /* 94px */",
      24: "calc(96/16*1rem) /* 96px */",
      25: "calc(100/16*1rem) /* 100px */",
      27.5: "calc(110/16*1rem) /* 110px */",
      28: "calc(112/16*1rem) /* 112px */",
      30: "calc(120/16*1rem) /* 120px */",
      32: "calc(128/16*1rem) /* 128px */",
      36: "calc(144/16*1rem) /* 144px */",
      40: "calc(160/16*1rem) /* 160px */",
      42: "calc(160/16*1rem) /* 168px */",
      44: "calc(176/16*1rem) /* 176px */",
      48: "calc(192/16*1rem) /* 192px */",
      48: "calc(192/16*1rem) /* 192px */",
      50: "calc(200/16*1rem) /* 200px */",
      56: "calc(224/16*1rem) /* 224px */",
      60: "calc(240/16*1rem) /* 240px */",
      full: "100%",
      screen: "100vw",
      "2full": "200%",

      //   custom spacing
      mobile: "15px",
      md: "calc(28/16*1rem)",
      lg: "calc(40/16*1rem)",
      "md-24": "calc(24/16*1rem)",
    },
    scale: {
      0: "0",
      50: ".5",
      70: ".70",
      75: ".75",
      80: ".8",
      85: ".85",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      115: "1.15",
      120: "1.2",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    opacity: {
      0: "0",
      10: "0.1",
      15: "0.15",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      35: "0.35",
      40: "0.4",
      45: "0.45",
      50: "0.5",
      55: "0.55",
      60: "0.6",
      65: "0.65",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      85: "0.85",
      90: "0.9",
      95: "0.95",
      100: "1",
    },
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "calc(2/16*1rem)",
      3: "calc(3/16*1rem)",
      4: "calc(4/16*1rem)",
      5: "calc(5/16*1rem)",
      8: "calc(8/16*1rem)",
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          1: "#8d3132",
          2: "#5f6062",
          3: "#bbbdc0",
          4: "#e6e7e8",
          5: "#d9c6a5",
        },
        secondary: {
          1: "#cdaa6b",
          2: "#102450",
        },
        utility: {
          white: "#ffffff",
          "gray-50": "#f1f3f4",
          "gray-100": "#efefef",
          "gray-200-line": "#dcdcdc",
          "gray-300": "#bdbdbd",
          "gray-400": "#989898",
          "gray-500": "#818181",
          "gray-600-secondarytext": "#666666",
          "gray-700": "#525252",
          "gray-800": "#464646",
          "gray-900": "#3d3d3d",
          "gray-950-maintext": "#151515",
          black: "#000000",
          "error-1": "#e30e00",
          "error-2": "#e30e00",
          "error-3": "#e30e00",
          "correct-1": "#0079d5",
          "correct-2": "#0079d5",
          "correct-3": "#0079d5",
        },
      },
      animation: {
        "spin-circle": "rotateCircle 20s linear infinite",
        "fade-in": "fadeIn 2s linear infinite",
        spin: "spin 2s linear infinite",
      },
      backgroundImage: ({ theme }) => ({
        "linear-1": `linear-gradient(90deg, #181830 -0.01%, #1D1D38 19.26%, #141228 40.12%, #2C223A 75.47%, #231B33 99.98%)`,
        linear: `linear-gradient(180deg, #E9E9E9 0%, #A5A5A5 100%)`,
      }),
      backgroundPosition: {
        "pos-100-0": "100% 0%",
      },
      backgroundSize: {
        "0-100": "0 100%",
        "100-100": "100% 100%",
        "200-100": "200% 100%",
      },
      blur: {
        DEFAULT: "12.5px",
      },
      borderRadius: {
        1: "calc(4/16*1rem) /* 4px */",
        2: "calc(8/16*1rem) /* 8px */",
        3: "calc(12/16*1rem) /* 12px */",
        4: "calc(16/16*1rem) /* 16px */",
        5: "calc(20/16*1rem) /* 20px */",
        6: "calc(24/16*1rem) /* 24px */",
        7: "calc(28/16*1rem) /* 28px */",
        8: "calc(32/16*1rem) /* 32px */",
        9: "calc(36/16*1rem) /* 36px */",
        10: "calc(40/16*1rem) /* 40px */",
        11: "calc(44/16*1rem) /* 44px */",
        12: "calc(48/16*1rem) /* 48px */",
        13: "calc(52/16*1rem) /* 52px */",
        14: "calc(56/16*1rem) /* 56px */",
        15: "calc(60/16*1rem) /* 60px */",
        16: "calc(64/16*1rem) /* 64px */",
        17: "calc(68/16*1rem) /* 68px */",
        18: "calc(72/16*1rem) /* 72px */",
        19: "calc(76/16*1rem) /* 76px */",
        20: "calc(80/16*1rem) /* 80px */",
      },
      typography: {
        DEFAULT: {
          css: {
            /* IMG & MEDIA */
            "img, picture, figure": {
              maxWidth: "100%",
            },
            img: {
              display: "block", // tránh inline gap
              height: "auto",
            },
            picture: {
              margin: `${r(15)} 0`,
            },
            figure: {
              margin: `${r(15)} 0`,
            },
            figcaption: {
              margin: `${r(8)} 0`,
              fontSize: "0.875rem",
              opacity: 0.8,
            },
            // "--tw-prose-headings": 'theme("colors.primary.2")',
            "--tw-prose-body": "inherit",
            "h1,h2,h3,h4,h5,h6": {
              fontSize: setClamp(18, 20),
              fontWeight: "700",
              lineHeight: 1.3,
              color: "theme('colors.primary.1')",
              // "@media (min-width: theme('screens.xl'))": {
              //   fontSize: r(20),
              // },
            },
            strong: {
              color: "inherit",
              fontWeight: "700",
            },
            blockquote: {
              color: "#white",
            },
            figcaption: {
              fontSize: r(15),
            },
            fontSize: "inherit",
            lineHeight: "inherit",
            "*": { margin: `${r(15)} 0` },
            "> *:first-child": { marginTop: 0 },
            "> *:last-child": { marginBottom: 0 },
            div: { margin: `${r(15)} 0` },
            margin: 0,
            maxWidth: "unset",
            blockquote: {
              borderInlineStartColor: "theme('colors.primary.1')",
              backgroundColor: "theme('colors.secondary.1')",
              paddingTop: r(12, 16),
              paddingBottom: r(12, 16),
              fontStyle: "normal",
            },
            a: {
              color: "theme('colors.primary.2')",
              textDecoration: "underline",
              "&:hover": {
                color: "#EE0000",
              },
              "&:visited": {
                color: "#551A8B",
              },
            },
            ul: {
              "padding-left": "calc(24/16*1rem)",
              li: {
                paddingLeft: 0,
                margin: "0 0",
                "&::marker": {
                  color: "theme('colors.neutral.950')",
                },
              },
            },
            table: {
              td: {
                border: "thin solid #e8e8e8",
                padding: "0.5rem",
              },
            },
          },
        },
        "white-marker": {
          css: {
            ul: {
              li: {
                "&::marker": {
                  color: "#fff",
                },
              },
            },
          },
        },
        "no-space": {
          css: {
            "*": { margin: `0 0` },
            div: { margin: `0 0` },
          },
        },
        "space-y-3": {
          css: {
            "*": { margin: `${r(12)} 0` },
            div: { margin: `${r(12)} 0` },
            "> *:first-child": { marginTop: 0 },
            "> *:last-child": { marginBottom: 0 },
          },
        },
        "space-y-6": {
          css: {
            "*": { margin: `${r(24)} 0` },
            div: { margin: `${r(24)} 0` },
            "> *:first-child": { marginTop: 0 },
            "> *:last-child": { marginBottom: 0 },
          },
        },
      },
      boxShadow: {
        "shadow 1": "0px 4px 4px 0px rgba(31,34,39,0.08)",
        "shadow 2": "0px 4px 8px 0px rgba(31,34,39,0.08)",
        "shadow 3": "0px 8px 16px 0px rgba(31,34,39,0.08)",
        "shadow 4": "0px 8px 32px 0px rgba(0,0,0,0.04)",
      },
      lineClamp: {
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      lineHeight: {
        1.125: "1.125",
        1.2: "1.2",
        1.25: "1.25",
        1.3: "1.3",
        1.33: "1.33",
        1.35: "1.35",
        1.4: "1.4",
        1.44: "1.44",
      },
      keyframes: {
        bgGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        rotateCircle: {
          "0%": { transform: "translate(-50%, -50%) rotate(0)" },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg)",
          },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        11: "11",
        12: "12",
        100: "100",
        999: "999",
        1000: "1000",
      },
    },
  },
  corePlugins: {
    aspectRatio: true,
  },
  variants: {
    aspectRatio: ["responsive", "hover"],
    lineClamp: ["responsive", "hover"],
  },
  plugins: [
    plugin(function ({
      addBase,
      addComponents,
      addVariant,
      matchUtilities,
      addUtilities,
      theme,
    }) {
      addBase({});
      addComponents({
        //heading
        ".heading-banner": {
          fontSize: "52px",
          [`@media (min-width: ${theme("screens.lg")})`]: {
            fontSize: "calc(60/16*1rem)",
          },
          lineHeight: "1.2",
          fontWeight: "700",
          fontFamily: theme("fontFamily.heading"),
        },
        ".heading-1": {
          fontSize: "32px",
          [`@media (min-width: ${theme("screens.lg")})`]: {
            fontSize: "calc(48/16*1rem)",
          },
          lineHeight: "1.25",
          fontWeight: "700",
          fontFamily: theme("fontFamily.heading"),
        },
        ".heading-1-mb": {
          fontSize: "calc(36/16*1rem)",
          lineHeight: "1.25",
          fontWeight: "700",
        },
        ".heading-2": {
          fontSize: "calc(36/16*1rem)",
          lineHeight: "1",
          fontWeight: "600",
          fontFamily: theme("fontFamily.heading"),
        },
        ".heading-3": {
          fontSize: "calc(24/16*1rem)",
          lineHeight: "1.35",
          fontWeight: "700",
          fontFamily: theme("fontFamily.heading"),
        },
        ".heading-4": {
          fontSize: "calc(20/16*1rem)",
          lineHeight: "1.4",
          fontWeight: "600",
          fontFamily: theme("fontFamily.heading"),
        },
        ".heading-5": {
          fontSize: "calc(18/16*1rem)",
          lineHeight: "1.4",
          fontWeight: "600",
          fontFamily: theme("fontFamily.heading"),
        },
        ".heading-6": {
          fontSize: "calc(16/16*1rem)",
          lineHeight: "1.4",
          fontWeight: "600",
          fontFamily: theme("fontFamily.heading"),
        },
        ".heading-7": {
          fontSize: "calc(14/16*1rem)",
          lineHeight: "1.4",
          fontWeight: "600",
          fontFamily: theme("fontFamily.heading"),
        },
        ".heading-8": {
          fontSize: "calc(18/16*1rem)",
          lineHeight: "1.4",
          fontWeight: "600",
        },

        // text-body
        ".body-1": {
          fontSize: "calc(18/16*1rem)",
          lineHeight: "1.4",
          fontFamily: theme("fontFamily.body"),
        },
        ".body-2": {
          fontSize: "calc(20/16*1rem)",
          lineHeight: "1.4",
          fontFamily: theme("fontFamily.body"),
        },
        ".body-3": {
          fontSize: "clamp(14px,calc(16/16*1rem),calc(16/16*1rem))",
          lineHeight: "1.4",
          fontFamily: theme("fontFamily.body"),
        },
        ".body-4": {
          fontSize: "clamp(12px,calc(14/16*1rem),calc(14/16*1rem))",
          lineHeight: "1.4",
          fontFamily: theme("fontFamily.body"),
        },
        ".body-5": {
          fontSize: "calc(12/16*1rem)",
          lineHeight: "1.4",
          fontFamily: theme("fontFamily.body"),
        },

        // title
        ".title-64": {
          fontWeight: "700",
          fontSize: "calc(36/16*1rem)", // 4xl
          [`@media (min-width: ${theme("screens.md")})`]: {
            fontSize: "calc(40/16*1rem)", // 5xl
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            fontSize: "calc(48/16*1rem)", // 6xl
          },
          [`@media (min-width: ${theme("screens.xl")})`]: {
            fontSize: "calc(64/16*1rem)", // 64
          },
        },
        ".title-48": {
          fontWeight: "600",
          lineHeight: "1.18",
          fontSize: "calc(36/16*1rem)", // 4xl
          [`@media (min-width: ${theme("screens.md")})`]: {
            fontSize: "calc(36/16*1rem)", // still 4xl
          },
          [`@media (min-width: ${theme("screens.xl")})`]: {
            fontSize: "calc(48/16*1rem)", // 6xl
          },
        },
        ".title-40": {
          fontWeight: "700",
          fontSize: "calc(36/16*1rem)", // 4xl
          [`@media (min-width: ${theme("screens.lg")})`]: {
            fontSize: "calc(40/16*1rem)", // 5xl
          },
        },
        ".title-32": {
          fontSize: "22px",
          lineHeight: "1.1",
        },
        ".title-28": {
          fontSize: "20px",
          [`@media (min-width: ${theme("screens.lg")})`]: {
            fontSize: `${28 / 19.2}rem`, // rem:text-[28px]
          },
        },
        ".title-24": {
          fontSize: "18px",
          [`@media (min-width: ${theme("screens.lg")})`]: {
            fontSize: "clamp(18px,calc(24/16*1rem),calc(24/16*1rem))", // 2xl
          },
        },
        ".title-20": {
          fontSize: "16px",
          [`@media (min-width: ${theme("screens.lg")})`]: {
            fontSize: "calc(20/16*1rem)", // xl
          },
        },
        ".body-14": {
          "font-size": "calc(14/16*1rem)",
        },
        ".body-16": {
          "font-size": "calc(16/16*1rem)",
        },
        ".body-18": {
          "font-size": "calc(18/16*1rem)",
        },
        ".absolute-y-center": {
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        },
        ".absolute-x-center": {
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        },
        ".absolute-center": {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
        // gap base
        ".gap-base": {
          gap: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            gap: "theme('spacing.md')",
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            gap: "theme('spacing.lg')",
          },
        },

        ".gap-x-base": {
          columnGap: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            columnGap: "theme('spacing.md')",
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            columnGap: "theme('spacing.lg')",
          },
        },

        ".gap-y-base": {
          rowGap: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            rowGap: "theme('spacing.md')",
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            rowGap: "theme('spacing.lg')",
          },
        },

        // gap base 24
        ".gap-base-24": {
          gap: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            gap: "theme('spacing.md-24')",
          },
        },

        // padding base
        ".pr-base": {
          paddingRight: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            paddingRight: "theme('spacing.md')",
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            paddingRight: "theme('spacing.lg')",
          },
        },
        ".pl-base": {
          paddingLeft: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            paddingLeft: "theme('spacing.md')",
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            paddingLeft: "theme('spacing.lg')",
          },
        },
        ".pt-base": {
          paddingTop: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            paddingTop: "theme('spacing.md')",
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            paddingTop: "theme('spacing.lg')",
          },
        },
        ".px-base": {
          paddingLeft: "theme('spacing.mobile')",
          paddingRight: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            paddingLeft: "theme('spacing.md')",
            paddingRight: "theme('spacing.md')",
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            paddingLeft: "theme('spacing.lg')",
            paddingRight: "theme('spacing.lg')",
          },
        },
        ".py-base": {
          paddingTop: "theme('spacing.mobile')",
          paddingBottom: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            paddingTop: "theme('spacing.md')",
            paddingBottom: "theme('spacing.md')",
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            paddingTop: "theme('spacing.lg')",
            paddingBottom: "theme('spacing.lg')",
          },
        },
        ".px-container": {
          padding: "0 15px",
          [`@media (min-width: ${theme("screens.md")})`]: {
            padding: "0 30px",
          },
          [`@media (min-width: ${theme("screens.xl")})`]: {
            padding: "0 calc(20/16*1rem)",
          },
        },
        ".mx-container": {
          margin: "0 15px",
          [`@media (min-width: ${theme("screens.md")})`]: {
            margin: "0 30px",
          },
          [`@media (min-width: ${theme("screens.xl")})`]: {
            margin: "0 calc(20/16*1rem)",
          },
        },
        ".pb-base": {
          paddingBottom: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            paddingBottom: "theme('spacing.md-24')",
          },
        },
        // padding base 24
        ".pr-base-24": {
          paddingRight: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            paddingRight: "theme('spacing.md-24')",
          },
        },
        ".pl-base-24": {
          paddingLeft: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            paddingLeft: "theme('spacing.md-24')",
          },
        },

        // margin base
        ".mb-base": {
          marginBottom: "theme('spacing.md')",
          [`@media (min-width: ${theme("screens.lg")})`]: {
            marginBottom: "theme('spacing.lg')",
          },
        },
        ".mt-base": {
          marginTop: "theme('spacing.md')",
          [`@media (min-width: ${theme("screens.lg")})`]: {
            marginTop: "theme('spacing.lg')",
          },
        },
        ".mt-base-24": {
          marginTop: "theme('spacing.mobile')",
          [`@media (min-width: ${theme("screens.md")})`]: {
            marginTop: "theme('spacing.md-24')",
          },
        },
        ".section-py": {
          paddingTop: "calc(40/16*1rem)",
          paddingBottom: "calc(40/16*1rem)",
          [`@media (min-width: ${theme("screens.lg")})`]: {
            paddingTop: "calc(60/16*1rem)",
            paddingBottom: "calc(60/16*1rem)",
          },
          [`@media (min-width: ${theme("screens.xl")})`]: {
            paddingTop: "calc(80/16*1rem)",
            paddingBottom: "calc(80/16*1rem)",
          },
        },
        ".container": {
          [`@media (min-width: ${theme("screens.xl")})`]: {
            maxWidth: "calc(1340/16*1rem)",
          },
        },
        ".transition-all": {
          transition: "all 200ms ease",
        },
        ".transition-all-linear-300": {
          transition: "all .3s linear",
        },
        ".transition-all-linear-500": {
          transition: "all .5s linear",
        },
        ".transition-300": {
          transition: "all .3s ease",
        },
        ".transition-500": {
          transition: "all .5s ease",
        },
        ".transition-ease-in-quad": {
          transition: "all 200ms cubic-bezier(.55, .085, .68, .53)",
        },
        ".transition-ease-in-cubic": {
          transition: "all 200ms cubic-bezier(.550, .055, .675, .19)",
        },
        ".transition-ease-in-quart": {
          transition: "all 200ms cubic-bezier(.895, .03, .685, .22)",
        },
        ".transition-ease-in-quint": {
          transition: "all 200ms cubic-bezier(.755, .05, .855, .06)",
        },
        ".transition-ease-in-expo": {
          transition: "all 200ms cubic-bezier(.95, .05, .795, .035)",
        },
        ".transition-ease-in-circ": {
          transition: "all 200ms cubic-bezier(.6, .04, .98, .335)",
        },
        ".transition-ease-out-quad": {
          transition: "all 200ms cubic-bezier(.25, .46, .45, .94)",
        },
        ".transition-ease-out-cubic": {
          transition: "all 200ms cubic-bezier(.215, .61, .355, 1)",
        },
        ".transition-ease-out-quart": {
          transition: "all 200ms cubic-bezier(.165, .84, .44, 1)",
        },
        ".transition-ease-out-quint": {
          transition: "all 200ms cubic-bezier(.23, 1, .32, 1)",
        },
        ".transition-ease-out-expo": {
          transition: "all 200ms cubic-bezier(.19, 1, .22, 1)",
        },
        ".transition-ease-out-circ": {
          transition: "all 200ms cubic-bezier(.075, .82, .165, 1)",
        },
        ".transition-ease-in-out-quad": {
          transition: "all 200ms cubic-bezier(.455, .03, .515, .955)",
        },
        ".transition-ease-in-out-cubic": {
          transition: "all 200ms cubic-bezier(.645, .045, .355, 1)",
        },
        ".transition-ease-in-out-quart": {
          transition: "all 200ms cubic-bezier(.77, 0, .175, 1)",
        },
        ".transition-ease-in-out-quint": {
          transition: "all 200ms cubic-bezier(.86, 0, .07, 1)",
        },
        ".transition-ease-in-out-expo": {
          transition: "all 200ms cubic-bezier(1, 0, 0, 1)",
        },
        ".transition-ease-in-out-circ": {
          transition: "all 200ms cubic-bezier(.785, .135, .15, .86)",
        },
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-x-center": {
          display: "flex",
          justifyContent: "center",
        },
        ".flex-y-center": {
          display: "flex",
          alignItems: "center",
        },
        ".flex-between": {
          display: "flex",
          justifyContent: "space-between",
        },
        ".flex-between-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".overflow-overlay": {
          overflowY: "overlay",
        },
        ".absolute-full": {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        },
        ".filter-white": {
          filter: "brightness(0) invert(1)",
          transition: "all .3s ease",
        },
      });
      matchUtilities(
        {
          sq: (value) => ({
            height: value,
            width: value,
          }),
        },
        { values: theme("spacing") },
      );
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      };
      addUtilities(newUtilities);
      addVariant("optional", "&:optional");
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("supports-grid", "@supports (display: grid)");
    }),
    plugin(({ addVariant, e }) => {
      addVariant("rem", ({ container, separator }) => {
        const rootFontSize = 19.2; // This is your HTML root font-size
        container.walkRules((rule) => {
          rule.selector = `.${e(`rem${separator}`)}${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            if (decl.value.includes("px")) {
              // Convert the pixel number to rem
              const value = decl.value.replace(
                /(\d+)px/g,
                (match, p1) => `${p1 / rootFontSize}rem`,
              );
              decl.value = value;
            }
          });
        });
      });
    }),
    plugin(({ addVariant, e }) => {
      addVariant("clampRem", ({ container, separator }) => {
        const rootFontSize = 19.2; // This is your HTML root font-size
        container.walkRules((rule) => {
          rule.selector = `.${e(`clampRem${separator}`)}${rule.selector.slice(
            1,
          )}`;
          rule.walkDecls((decl) => {
            const ratioValues = decl.value.split(" ");
            if (ratioValues.length === 2) {
              const num1 = parseInt(ratioValues[0]);
              const num2 = parseInt(ratioValues[1]);
              if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
                const valRem = num2 / rootFontSize;
                const maxRem = valRem;
                const value = `clamp(${num1}px, ${valRem}rem, ${maxRem}rem)`;
                decl.value = value;
              }
            } else {
              const valRem = 40 / rootFontSize;
              const maxRem = valRem;
              const num1 = parseInt(ratioValues[0]);
              const value = `clamp(${num1}px, ${valRem}rem, ${maxRem}rem)`;
              decl.value = value;
            }
          });
        });
      });
    }),
    plugin(({ addVariant, e }) => {
      addVariant("ratio", ({ container, separator }) => {
        container.walkRules((rule) => {
          rule.selector = `.${e(`ratio${separator}`)}${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            const ratioValues = decl.value.split(" ");
            if (ratioValues.length === 2) {
              const num1 = parseInt(ratioValues[0]);
              const num2 = parseInt(ratioValues[1]);
              if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
                const percentage = `${(num1 / num2) * 100}%`;
                decl.value = `${percentage}`;
              }
            }
          });
        });
      });
    }),
    plugin(function ({ addUtilities, theme }) {
      const breakpoints = ["sm", "md", "lg", "xl"];
      const columns = 12;

      // Generate column utilities for autocomplete
      const columnUtilities = {};

      // Base columns (col-1 through col-12)
      for (let i = 1; i <= columns; i++) {
        columnUtilities[`.col-${i}`] = {};
      }

      // Responsive columns
      breakpoints.forEach((bp) => {
        for (let i = 1; i <= columns; i++) {
          columnUtilities[`.col-${bp}-${i}`] = {};
        }
        columnUtilities[`.col-${bp}-auto`] = {};
      });

      // Add row and helper classes
      columnUtilities[".row"] = {};
      columnUtilities[".col-auto"] = {};

      addUtilities(columnUtilities);
    }),
    require("@tailwindcss/typography"),
  ],
};
