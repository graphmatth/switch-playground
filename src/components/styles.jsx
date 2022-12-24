import { styled } from "../../stitches.config";
import { motion } from "framer-motion";
import * as RadioGroup from "@radix-ui/react-radio-group";

const ContentExemple = styled("div", {
  fontFamily: "inter, sans-serif",
  minHeight: 160,
  variants: {
    fontFamily: {
      Novela: {
        fontFamily: "novela, serif",
      },
      Inter: {
        fontFamily: "inter, sans-serif",
      },
    },
  },
});

const Divider = styled("div", {
  display: "none",
  height: 35,
  width: 1,
  opacity: 0.1,
  margin: "0 4px",
  "@bp1": {
    display: "block",
  },
  variants: {
    theme: {
      white: {
        backgroundColor: "white",
      },
      black: {
        backgroundColor: "black",
      },
    },
  },
});

const BoxOption = styled(RadioGroup.Item, {
  backgroundColor: "inherit",
  margin: 0,
  height: 30,
  width: 30,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "50%",
  textAlign: "center",

  defaultVariants: {
    backgroud: "black",
  },
  variants: {
    background: {
      grey: {
        backgroundColor: "#dfdfdf",
      },
      beige: {
        backgroundColor: "#e7e2d8",
      },
      green: {
        backgroundColor: "#2F3731",
      },
      black: {
        backgroundColor: "#252525",
      },
    },
  },
});

const Shape = styled(motion.div, {
  width: "auto",
  borderRadius: "24px",
  backgroundColor: "#dfdfdf",
  textAlign: "left",
  padding: "16px 24px 24px",
  minHeight: 248,
  margin: 12,

  ".font-small": {
    fontSize: "16px",
  },
  ".font-medium": {
    fontSize: "20px",
  },
  ".font-large": {
    fontSize: "24px",
  },
  h1: {
    fontWeight: "700",
  },

  "@bp1": {
    padding: "102px 24px 144px",
    textAlign: "center",
    margin: 32,
  },

  variants: {
    size: {
      small: {
        h1: {
          fontSize: "32px",
        },
        wordSpacing: "1px",
        fontSize: "16px",
      },
      medium: {
        h1: {
          fontSize: "36px",
        },
        wordSpacing: "1px",
        fontSize: "20px",
      },
      large: {
        h1: {
          fontSize: "42px",
        },
        wordSpacing: "2px",
        fontSize: "24px",
      },
    },
    background: {
      grey: {
        backgroundColor: "#dfdfdf",
      },
      beige: {
        backgroundColor: "#e7e2d8",
      },
      green: {
        backgroundColor: "#2F3731",
      },
      black: {
        backgroundColor: "#252525",
      },
    },
    textColor: {
      grey: {
        color: "#3A3A3A",
        span: {
          color: "#3A3A3A",
        },
      },
      beige: {
        color: "#3C3429",
        span: {
          color: "#3C3429",
        },
      },
      green: {
        color: "#E0EBD2",
        span: {
          color: "#E0EBD2",
        },
      },
      black: {
        color: "#E3E3E3",
        span: {
          color: "#E3E3E3",
        },
      },
    },
  },
  defaultVariants: {
    backgroud: "black",
    size: "medium",
    textColor: "white",
  },
});

const Circle = styled(motion.div, {
  border: "1px solid #fff",
  position: "absolute",
  top: -8,
  bottom: -8,
  variants: {
    border: {
      white: {
        border: "1px solid #fff",
      },
      dark: {
        border: "1px solid #000",
      },
    },
  },
});

const Text = styled("span", {});

const BoxTextOption = styled(RadioGroup.Item, {});

const Parameters = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "0",
  alignItems: "flex-start",
  width: "100%",
  justifyContent: "center",
  borderRadius: "16px",
  padding: "16px 0 8px",
  fontSize: 12,
  marginTop: 32,

  "@bp1": {
    flexDirection: "row",
    alignItems: "flex-start",
    margin: "0px auto 24px",
    padding: "4px 6px",
    width: "fit-content",
    borderRadius: "100px",
    alignItems: "center",
  },

  variants: {
    background: {
      black: {
        backgroundColor: "#3a3a3a",
      },
      green: {
        backgroundColor: "#39453D",
      },
      grey: {
        backgroundColor: "#fff",
        color: "#000",
      },
      beige: {
        backgroundColor: "#f7f5f0",
      },
    },
  },
});

export {
  BoxOption,
  Shape,
  Circle,
  Text,
  BoxTextOption,
  Divider,
  Parameters,
  ContentExemple,
};
