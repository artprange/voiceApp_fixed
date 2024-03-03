import styled, { DefaultTheme } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
    theme: DefaultTheme;
  }

export const Container = styled(SafeAreaView)<ContainerProps>`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;

`;

