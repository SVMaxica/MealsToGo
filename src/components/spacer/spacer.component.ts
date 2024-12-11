// import React from 'react';
// import styled from 'styled-components/native';

// const TopSmall = styled.View`
//   margin-top: ${(props) => props.theme.space[1]};
// `;

// const TopMedium = styled.View`
//   margin-top: ${(props) => props.theme.space[2]};
// `;

// const TopLarge = styled.View`
//   margin-top: ${(props) => props.theme.space[3]};
// `;

// const LeftSmall = styled.View`
//   margin-left: ${(props) => props.theme.space[1]};
// `;

// const LeftMedium = styled.View`
//   margin-left: ${(props) => props.theme.space[2]};
// `;

// const LeftLarge = styled.View`
//   margin-left: ${(props) => props.theme.space[3]};
// `;

// type ComponentType =
//   | typeof TopSmall
//   | typeof TopMedium
//   | typeof TopLarge
//   | typeof LeftSmall
//   | typeof LeftMedium
//   | typeof LeftLarge;

// function renderComponent(Component: ComponentType) {
//   // Använd React.createElement för att undvika JSX syntax problem
//   return React.createElement(Component, null);
// }

// interface SpacerProps {
//   variant:
//     | 'top.small'
//     | 'top.medium'
//     | 'top.large'
//     | 'left.small'
//     | 'left.medium'
//     | 'left.large';
// }

// const Spacer: React.FC<SpacerProps> = ({ variant }) => {
//   switch (variant) {
//     case 'top.small':
//       return renderComponent(TopSmall);
//     case 'top.medium':
//       return renderComponent(TopMedium);
//     case 'top.large':
//       return renderComponent(TopLarge);
//     case 'left.small':
//       return renderComponent(LeftSmall);
//     case 'left.medium':
//       return renderComponent(LeftMedium);
//     case 'left.large':
//       return renderComponent(LeftLarge);
//     default:
//       return null;
//   }
// };

// export default Spacer;

// import styled from 'styled-components/native';

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

// const getVariant = (
//   position: keyof typeof positionVariant,
//   size: keyof typeof sizeVariant,
//   theme: { space: string[] }
// ): string => {
//   const sizeIndex = sizeVariant[size];
//   const property = positionVariant[position];
//   const value = theme.space[sizeIndex];
//   return `${property}: ${value};`;
// };

// export const Spacer = styled.View<{
//   position?: keyof typeof positionVariant;
//   size?: keyof typeof sizeVariant;
// }>`
//   ${({ position = 'top', size = 'small', theme }) =>
//     getVariant(position, size, theme)}
// `;

// Spacer.defaultProps = {
//   position: 'top',
//   size: 'small',
// };

import styled, { DefaultTheme } from 'styled-components/native';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

// Funktion för att dynamiskt generera CSS
const getVariant = (
  position: keyof typeof positionVariant,
  size: keyof typeof sizeVariant,
  theme: DefaultTheme
): string => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}: ${value};`;
};

// Styled Component med typade props
export const Spacer = styled.View<{
  position?: keyof typeof positionVariant;
  size?: keyof typeof sizeVariant;
}>`
  ${({ position = 'top', size = 'small', theme }) =>
    getVariant(position, size, theme)}
`;

// Standardvärden för props
Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};

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

// // SpacerView definierad korrekt för användning som komponent
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

//   return (
//     <SpacerView>
//       {children}
//     </SpacerView>
//   );
// };

// export default Spacer;

// import React from "react";
// import { View } from "react-native";

// // Props-typ för Spacer
// interface SpacerProps {
//   children?: React.ReactNode;
// }

// // Extremt förenklad Spacer
// export const Spacer: React.FC<SpacerProps> = ({ children }) => {
//   // Returnera bara barn-komponenter utan någon logik
//   return <View>{children}</View>;
// };
