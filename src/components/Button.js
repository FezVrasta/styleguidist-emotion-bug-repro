// @flow
import React from 'react';
import styled from '@emotion/styled';

type Props = {
	color: string,
};

const Button = styled(({ color, ...props }: Props) => (
	<button {...props} />
))`
	color: ${props => props.color};
`;

Button.defaultProps = {
	color: 'red',
};

// @component
export default Button;
