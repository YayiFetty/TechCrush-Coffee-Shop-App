export const fonts = {
  regular: "soraRegular",
  medium: "soraMedium",
  semiBold: "soraSemiBold",
};

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 42,
};
export const radius = {
  r1: 12,
  r2: 16,
  r3: 20,
  r4: 24,
};
export const spacing = {
  xxs: 12,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  xxl: 52,
};
export const lineHeight = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  xxl: 52,
};

// Preset combos — use these in screens instead of stitching
// fontFamily + fontSize + lineHeight by hand every time.
export const textStyles = {
  xx1: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.xxl,
    lineHeight: lineHeight.xxl,
  },
  l2: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.lg,
    lineHeight: lineHeight.lg,
  },
  m3: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.md,
    lineHeight: lineHeight.md,
  },
  body: {
    fontFamily: fonts.regular,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
  },
  bodyMedium: {
    fontFamily: fonts.medium,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
  },
  caption: {
    fontFamily: fonts.regular,
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
  },
  captionMedium: {
    fontFamily: fonts.medium,
    fontSize: fontSize.xs,
    lineHeight: lineHeight.xs,
  },
  price: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.md,
    lineHeight: lineHeight.md,
  },
};

export const typography = {
  fonts,
  fontSize,
  lineHeight,
  textStyles,
};
