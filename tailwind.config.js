module.exports = {
  purge: ["./components/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: { max: "800px" },
        // => @media (max-width: 800px) { ... }

        smallTablet: { max: "600px" },
        // => @media (max-width: 600px) { ... }

        phone: { max: "450px" },
        // => @media (max-width: 350px) { ... }
      },
    },
    boxShadow: {
      md: '0 4px 6px -1px rgba(255,255,255, 0.1), 0 2px 4px -1px rgba(255,255,255, 0.6)',
      lg: '0 10px 15px -3px rgba(255,255,255, 0.1), 0 4px 6px -2px rgba(255,255,255, 0.5)',
      xl: '0 20px 25px -5px rgba(255,255,255, 0.1), 0 10px 10px -5px rgba(255,255,255, 0.04)',
      '2xl': '0 25px 50px -12px rgba(255,255,255, 0.25)',
      '3xl': '0 35px 60px -15px rgba(255,255,255, 0.3)',
    }
  },
  variants: {
    // ...
    borderWidth: ["responsive"],
    borderWidth: ["responsive", "hover", "focus"],
    margin: ["responsive", "hover", "focus"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"]
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  }
};
