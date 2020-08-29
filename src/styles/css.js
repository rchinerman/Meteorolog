import { css } from "styled-components";

export const Flex = css`
  display: flex;
`;

export const FlexColumn = css`
  ${Flex}
  flex-direction: column;
`;

export const FlexRow = css`
  ${Flex}
  flex-direction: row;
`;

export const FlexGrow = css`
  flex: 1;
`;
