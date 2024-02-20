import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
	${({ theme }) => css`
		flex: 1;
		min-height: 56px;
		max-height: 56px;
		border-radius: 6px;
		padding: 16px;
        background-color: ${theme.COLORS.GRAY_700};
		color: ${theme.COLORS.WHITE};
		font-family: ${theme.FONTS.REGULAR};
		font-family: ${theme.FONTS_FAMILY_REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
	`}
`;
