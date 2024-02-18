import { motion } from "framer-motion";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { styled } from "../../styled-system/jsx";

const RadioGroupItem = styled(RadioGroup.Item);
const RadioGroupRoot = styled(RadioGroup.Root);

const ContentExample = styled("div", {
  base: {
    fontFamily: "Inter, sans-serif",
    minHeight: 160,
  },
  variants: {
    fontFamily: {
      Novela: {
        fontFamily: "Novela, serif",
      },
      Inter: {
        fontFamily: "Inter, sans-serif",
      },
    },
  },
});

const Divider = styled("div", {
  base: {
    display: { base: "none", bp1: "block" },
    height: "35px",
    width: "1px",
    opacity: "0.1",
    margin: "0 4px",
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
  base: {
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
  base: {
    width: "auto",
    borderRadius: "24px",
    backgroundColor: "#dfdfdf",
    textAlign: { base: "left", bp1: "center" },
    padding: { base: "16px 24px 24px", bp1: "102px 24px 144px" },
    minHeight: 248,
    margin: { base: "12px", bp1: "32px" },
    "& h1": {
      fontWeight: "700",
    },
  },

  variants: {
    fontFamily: {
      novela: {
        fontFamily: "Novela, serif",
      },
      Inter: {
        fontFamily: "inter, sans-serif",
      },
    },
    size: {
      small: {
        "& h1": {
          fontSize: "32px",
        },
        wordSpacing: "1px",
        fontSize: "16px",
      },
      medium: {
        "& h1": {
          fontSize: "36px",
        },
        wordSpacing: "1px",
        fontSize: "20px",
      },
      large: {
        "& h1": {
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
        "& span": {
          color: "#3A3A3A",
        },
      },
      beige: {
        color: "#3C3429",
        "& span": {
          color: "#3C3429",
        },
      },
      green: {
        color: "#E0EBD2",
        "& span": {
          color: "#E0EBD2",
        },
      },
      black: {
        color: "#E3E3E3",
        "& span": {
          color: "#E3E3E3",
        },
      },
    },
  },
});

const Circle = styled(motion.div, {
  base: {
    border: "1px solid #fff",
    position: "absolute",
    top: "-8px",
    bottom: "-8px",
    right: "-8px",
    left: "-8px",
    textAlign: "center",
    borderRadius: "50%",
  },
  variants: {
    border: {
      white: {
        border: "1px solid #fff",
      },
      dark: {
        border: "1px solid #000",
      },
    },
    radius: {
      small: {
        borderRadius: "24px",
        left: "0px",
        right: "0px",
      },
    },
  },
});

const Parameters = styled("div", {
  base: {
    display: "flex",
    flexDirection: { base: "column", bp1: "row" },
    margin: { base: "0", bp1: "0px auto 24px auto" },
    alignItems: { base: "flex-start", bp1: "center" },
    width: { base: "100%", bp1: "fit-content" },
    borderRadius: { base: "16px", bp1: "100px" },
    padding: { base: "16px 0 8px", bp1: "4px 6px" },
    justifyContent: "center",
    fontSize: "12px",
    marginTop: "32px",
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

const Letter = styled("span", {
  base: {
    fontSize: 20,
  },
  variants: {
    size: {
      small: {
        fontSize: 16,
      },
      medium: {
        fontSize: 20,
      },
      large: {
        fontSize: 24,
      },
    },
  },
});

export {
  BoxOption,
  Shape,
  Circle,
  Divider,
  Parameters,
  ContentExample,
  Letter,
  RadioGroupItem,
  RadioGroupRoot,
};
