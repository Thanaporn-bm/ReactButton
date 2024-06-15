import { style } from "@vanilla-extract/css";
import { recipe,RecipeVariants } from "@vanilla-extract/recipes";

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
});

export const button = recipe({
  base: {
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  margin: '5px'
  },
  variants: {
    variant:{
      primary: {
        background: "#5F2EEA",
        color: "white",
        borderRadius: "10px",
        ":hover": { backgroundColor: "#1D0071" },
        ":focus": { 
          backgroundColor: "#5F2EEA",
          outline: "8px solid #E4DAFF" },
        ":active": {
          backgroundColor: "#5F2EEA",
          outline: "none",
        },
        ":disabled": {
          backgroundColor: "#AA99DA",
          cursor: "not-allowed",
        },
      },
      secondary: {
        background: "white",
        color: "black",
        border: "1px solid #222F3E",
        borderRadius: "10px",
        ":hover": { border: "1px solid #14142B" },
        ":focus": { outline:"8px solid #F4F5FC" },
        ":active": { 
          border: "1px solid #222F3E", 
          outline: "none" },
        ":disabled": {
          backgroundColor: "white",
          color: "#E0E0E0",
          border: "1px solid #C3CED9",
          cursor: "not-allowed",
        },
      },
      tertiary: {
        background: "#FAFCFC00",
        color: "#5F2EEA",
        borderRadius: "10px",
        ":hover": { color: "#1D0071" },
        ":focus": { backgroundColor: "#F4F5FC" },
        ":active": { backgroundColor: "white", color: "black" },
        ":disabled": {
          color: "#F4F5FC",
          cursor: "not-allowed",
        },
      },
    }
  },
});
export type ButtonVariants = RecipeVariants<typeof button>;


