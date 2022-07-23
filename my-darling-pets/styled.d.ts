import 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      purple: string;
      pink: string;
      blue: string;
      yellow: string;
      red: string;
      green: string;
      darkGreen: string;
      gray: string;
      background: string;
    }
  }
}