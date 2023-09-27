import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.background}
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  .title {
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};

    &-xl {
      font-size: 48px;
      font-weight: 800;
    }

    &-l {
      font-size: 32px;
      font-weight: 800;
    }

    &-m {
      font-size: 24px;
      font-weight: 800;
    }

    &-s {
      font-size: 20px;
      font-weight: 700;
    }

    &-xs {
      font-size: 18px;
      font-weight: 700;
    }
  }

  .text {
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};

    &-l {
      font-size: 20px;
    }

    &-m {
      font-size: 16px;
    }

    &-s {
      font-size: 14px;
    }

    &-xs {
      font-size: 12px;
      font-weight: 700;
    }
  }
`;
