

// import styled, { DefaultTheme } from 'styled-components/native';

// const sizeVariant = {
//   small: 1,
//   medium: 2,
//   large: 3,
// };

// const positionVariant = {
//   top: 'marginTop',
//   left: 'marginLeft',
//   right: 'marginRight',
//   bottom: 'marginBottom',
// };

// // Funktion för att dynamiskt generera CSS
// const getVariant = (
//   position: keyof typeof positionVariant,
//   size: keyof typeof sizeVariant,
//   theme: DefaultTheme
// ): string => {
//   const sizeIndex = sizeVariant[size];
//   const property = positionVariant[position];
//   const value = theme.space[sizeIndex];
//   return `${property}: ${value};`;
// };

// // Styled Component med typade props
// export const Spacer = styled.View<{
//   position?: keyof typeof positionVariant;
//   size?: keyof typeof sizeVariant;
// }>`
//   ${({ position = 'top', size = 'small', theme }) =>
//     getVariant(position, size, theme)}
// `;

// // Standardvärden för props
// Spacer.defaultProps = {
//   position: 'top',
//   size: 'small',
// };





// import React from "react";
// import styled, { useTheme, DefaultTheme } from "styled-components/native";

// // Definiera storlek och position
// const sizeVariant = {
//   small: 1,
//   medium: 2,
//   large: 3,
// };

// const positionVariant = {
//   top: "marginTop",
//   left: "marginLeft",
//   right: "marginRight",
//   bottom: "marginBottom",
// };

// // Funktion för att generera CSS-variant
// const getVariant = (
//   position: keyof typeof positionVariant,
//   size: keyof typeof sizeVariant,
//   theme: DefaultTheme
// ): string => {
//   const sizeIndex = sizeVariant[size];
//   const property = positionVariant[position];
//   const value = theme.space[sizeIndex];
//   return `${property}: ${value};`;
// };

// const SpacerView = styled.View<{ variant: string }>`
//   ${({ variant }) => variant};
// `;

// // Typa props för Spacer-komponenten
// interface SpacerProps {
//   position?: keyof typeof positionVariant;
//   size?: keyof typeof sizeVariant;
//   children?: React.ReactNode;
// }

// // Spacer-komponenten
// export const Spacer: React.FC<SpacerProps> = ({
//   position = "top",
//   size = "small",
//   children,
// }) => {
//   const theme = useTheme(); // Hämta temat från ThemeProvider
//   const variant = getVariant(position, size, theme); // Generera CSS-variant

//   console.log("Generated Variant:", variant); // För felsökning

//   return <SpacerView>{children}</SpacerView>;

// };

// export default Spacer;


import React from "react";
import { View } from "react-native";

interface SpacerProps {
  margin?: number;
  children?: React.ReactNode;
}

export const Spacer: React.FC<SpacerProps> = ({ margin = 10, children }) => {
  return <View style={{ margin }}>{children}</View>;
};

export default Spacer;

