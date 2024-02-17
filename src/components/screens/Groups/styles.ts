import styled, { DefaultTheme } from 'styled-components/native';

interface ContainerProps {
    theme: DefaultTheme;
  }

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;

`;

