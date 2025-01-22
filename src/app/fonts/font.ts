import localFont from "next/font/local";

// Gafien Fonts
export const gafien = localFont({
  src: [
    { path: "../fonts/gafien/gafien-e4y59.otf", weight: "400" },
    { path: "../fonts/gafien/gafienitalic-zpg5z.otf", weight: "400", style: "italic" }
  ],
  variable: "--font-gafien",
});

// Switzer Fonts
export const switzer = localFont({
  src: [
    { path: "../fonts/switzer/Switzer-Thin.otf", weight: "100" },
    { path: "../fonts/switzer/Switzer-ThinItalic.otf", weight: "100", style: "italic" },
    { path: "../fonts/switzer/Switzer-Extralight.otf", weight: "200" },
    { path: "../fonts/switzer/Switzer-ExtralightItalic.otf", weight: "200", style: "italic" },
    { path: "../fonts/switzer/Switzer-Light.otf", weight: "300" },
    { path: "../fonts/switzer/Switzer-LightItalic.otf", weight: "300", style: "italic" },
    { path: "../fonts/switzer/Switzer-Regular.otf", weight: "400" },
    { path: "../fonts/switzer/Switzer-Italic.otf", weight: "400", style: "italic" },
    { path: "../fonts/switzer/Switzer-Medium.otf", weight: "500" },
    { path: "../fonts/switzer/Switzer-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "../fonts/switzer/Switzer-Semibold.otf", weight: "600" },
    { path: "../fonts/switzer/Switzer-SemiboldItalic.otf", weight: "600", style: "italic" },
    { path: "../fonts/switzer/Switzer-Bold.otf", weight: "700" },
    { path: "../fonts/switzer/Switzer-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../fonts/switzer/Switzer-Extrabold.otf", weight: "800" },
    { path: "../fonts/switzer/Switzer-ExtraboldItalic.otf", weight: "800", style: "italic" },
    { path: "../fonts/switzer/Switzer-Black.otf", weight: "900" },
    { path: "../fonts/switzer/Switzer-BlackItalic.otf", weight: "900", style: "italic" }
  ],
  variable: "--font-switzer",
});
