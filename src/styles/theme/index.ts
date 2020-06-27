export const colors = {
  discord: '#7289DA',

  primary: '#36393f',
  secondary: '#2f3136',
  tertiary: '#202225',
  quaternary: '#292b2f',
  quinary: '#393d42',
  senary: '#828386',

  white: '#FFFFFF',
  gray: '#8a8c90',

  chatinput: '#40444B',
  symbol: '#74777a',

  hover: '#43B581',
  notification: '#f84a4b',
  mentiondetail: '#f9a839',
  mentionmessage: '#413f3f',
  link: '#5d80d6',
};

export const fontStyles = {
  title: {
    fontSize: 24,
  },
};

export const grid = {
  breakpoints: {
    sm: 736,
  },
};

export const mediaQueries = {
  sm: `(max-width: ${grid.breakpoints.sm}px)`,
};

export default { colors, fontStyles, grid, mediaQueries };
