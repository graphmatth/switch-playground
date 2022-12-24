import React, { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import {
  Shape,
  Parameters,
  BoxOption,
  Circle,
  Text,
  BoxTextOption,
  ContentExemple,
  Divider,
} from "./styles";

const backgrounds = ["grey", "beige", "green", "black"];
const fonts = ["Inter", "Novela"];
const fontSizes = ["small", "medium", "large"];

const SwitchPlayground = () => {
  const [size, setSize] = useState("medium");
  const [background, setBackground] = useState("black");
  const [fontFamily, setFontFamily] = useState("Inter");

  const isDark = background === "black" || background === "green";
  return (
    <Shape size={size} background={background} textColor={background}>
      <ContentExemple fontFamily={fontFamily}>
        <h1>Customization</h1>
        <p>Create a look and feel that suits your personal preferences.</p>
      </ContentExemple>

      <Parameters background={background}>
        <div>
          <RadioGroup.Root
            defaultValue="size"
            aria-label="Font size selector"
            style={{ display: "flex", gap: "1.3rem", padding: "1rem" }}
          >
            {fontSizes.map((fontSize, idx) => {
              return (
                <Option
                  key={idx}
                  id="color"
                  size={fontSize}
                  isDark={isDark}
                  letter="A"
                  isSelected={fontSize == size}
                  onClick={() => setSize(fontSize)}
                />
              );
            })}
          </RadioGroup.Root>
        </div>
        <Divider theme={isDark ? "white" : "black"} />
        <div>
          <RadioGroup.Root
            defaultValue="color"
            aria-label="Color selector"
            style={{ display: "flex", gap: "1.3rem", padding: "1rem" }}
          >
            {backgrounds.map((light, idx) => {
              return (
                <Option
                  key={idx}
                  id="background"
                  background={light}
                  isDark={isDark}
                  isSelected={background == light}
                  onClick={() => setBackground(light)}
                />
              );
            })}
          </RadioGroup.Root>
        </div>
        <Divider theme={isDark ? "white" : "black"} />
        <div style={{ display: "flex", padding: "0.5rem" }}>
          <RadioGroup.Root
            defaultValue="text"
            aria-label="Text selector"
            style={{ display: "flex", gap: "0.7rem", padding: "1rem 0" }}
          >
            {fonts.map((font, idx) => {
              return (
                <TextOption
                  key={idx}
                  id="fonts"
                  isDark={isDark}
                  isSelected={fontFamily == font}
                  value={font}
                  background={background}
                  onClick={() => setFontFamily(font)}
                />
              );
            })}
          </RadioGroup.Root>
        </div>
      </Parameters>
    </Shape>
  );
};

const Option = ({
  isSelected,
  id,
  onClick,
  isDark,
  size,
  background,
  letter,
}) => {
  return (
    <BoxOption
      background={background}
      css={{
        "& span": {
          opacity: isSelected ? 1 : 0.3,
        },
        "&:hover span": {
          opacity: 1,
        },
      }}
      onClick={onClick}
    >
      <span className={`font-${size}`}>{letter}</span>
      {isSelected && (
        <Circle
          layoutId={id}
          border={isDark ? "white" : "dark"}
          style={{
            textAlign: "center",
            borderRadius: "50%",
            left: -8,
            right: -8,
          }}
          initial={false}
          transition={{
            duration: 0.6,
            type: "spring",
          }}
        />
      )}
    </BoxOption>
  );
};

const TextOption = ({ isSelected, id, background, onClick, isDark, value }) => {
  return (
    <BoxTextOption
      style={{
        margin: 0,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        padding: "4px 16px",
        borderRadius: 24,
      }}
      css={{
        "& span": {
          opacity: isSelected ? 1 : 0.3,
          fontFamily: `${value}, sans-serif`,
        },
        "&:hover span": {
          opacity: 1,
        },
      }}
      onClick={onClick}
    >
      <Text>{value}</Text>
      {isSelected && (
        <Circle
          layoutId={id}
          style={{
            borderRadius: 24,
            left: -0,
            right: -0,
          }}
          background={background}
          border={isDark ? "white" : "dark"}
          initial={false}
          transition={{
            duration: 0.6,
            type: "spring",
          }}
        />
      )}
    </BoxTextOption>
  );
};

export default SwitchPlayground;
