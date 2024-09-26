module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
	theme: {
		fontSize: {
			xs: [
				'12px',
				{
					lineHeight: '22px',
					fontWeight: '500',
				},
			],
			sm: [
				'14px',
				{
					lineHeight: '22px',
					fontWeight: '500',
				},
			],
			base: [
				'16px',
				{
					lineHeight: '24px',
					fontWeight: '500px',
				},
			],
			lg: [
				'22px',
				{
					lineHeight: '34px',
					fontWeight: '500',
				},
			],
		},
		extend: {
			fontFamily: {
				sans: ['Pretendard', 'sans-serif'],
			},

			fontSize: {
				xsB: [
					'12px',
					{
						lineHeight: '22px',
						fontWeight: '700',
					},
				],
				smB: [
					'14px',
					{
						lineHeight: '22px',
						fontWeight: '700',
					},
				],
				baseB: [
					'16px',
					{
						lineHeight: '24px',
						fontWeight: '700',
					},
				],
				lgB: [
					'22px',
					{
						lineHeight: '34px',
						fontWeight: '700',
					},
				],
			},
			colors: {
				primary: '#031F34',
				pointGreen: '#158469',
				pressGreen: '#0E5846',
				disabledGray: '#E4E4E4',
				moonYellow: '#FFFDC3',
				hoverWhite: '#F2F2F2',
				pressWhite: '#E6E6E6',
				black: '#1D1D1D',
				bodyBlack: '#555555',
				disabledTextGray: '#BEBEBE',
				borderGray: '#C6C6C6',
			},
		},
	},
	plugins: [],
};
