import { css, Theme } from '@emotion/react';
import pixelsToRem from '../../utilities/pixelsToRem';

export default {
  container: ({ spacings }: Theme) =>
    css({
      paddingTop: `${spacings.QUADRUPLE}rem`,
      paddingBottom: `${spacings.QUADRUPLE}rem`,
    }),
  link: ({ palette }: Theme) =>
    css({
      textDecoration: 'none',
      color: palette.WHITE,
      cursor: 'pointer',
      '&:hover, &:focus': {
        textDecoration: 'underline',
      },
      '::before': {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        content: '""',
      },
    }),
  headerContainer: ({ mq }: Theme) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      [mq.HIGH_CONTRAST]: {
        borderBottom: `solid ${pixelsToRem(1)}rem transparent`,
      },
    }),
  backgroundContainer: ({ palette }: Theme) =>
    css({
      zIndex: -1,
      position: 'absolute',
      top: '0',
      backgroundColor: palette.GREY_10,
      bottom: '0',
      width: '100%',
      overflow: 'hidden',
    }),
  contentContainer: ({ mq, gridWidths, spacings }: Theme) =>
    css({
      paddingBottom: `${spacings.QUADRUPLE}`,
      [mq.GROUP_4_MIN_WIDTH]: {
        maxWidth: `${pixelsToRem(gridWidths[1280])}rem`,
        margin: '0 auto',
        position: 'relative',
        width: '100%',
      },
    }),
  heading: ({ mq, palette, spacings }: Theme) =>
    css({
      paddingBottom: `${spacings.FULL}rem`,
      color: palette.WHITE,
      textDecoration: 'none',
      [mq.GROUP_1_MIN_WIDTH]: {
        paddingBottom: `${spacings.DOUBLE}rem`,
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        paddingBottom: `${spacings.FULL}rem`,
      },
    }),
  liveLabelPulse: ({ mq, palette, spacings }: Theme) =>
    css({
      width: `${spacings.HALF + spacings.DOUBLE}rem`,
      height: `${spacings.HALF + spacings.DOUBLE}rem`,
      color: palette.LIVE_LIGHT,
      [mq.GROUP_1_MIN_WIDTH]: {
        width: `${spacings.TRIPLE}rem`,
        height: `${spacings.TRIPLE}rem`,
      },
      [mq.GROUP_3_MIN_WIDTH]: {
        width: `${spacings.TRIPLE + spacings.HALF}rem`,
        height: `${spacings.TRIPLE + spacings.HALF}rem`,
      },
      [mq.HIGH_CONTRAST]: {
        color: 'canvasText',
      },
    }),
  liveLabelText: ({ mq, palette, spacings }: Theme) =>
    css({
      'span:first-of-type': {
        color: palette.LIVE_LIGHT,
        paddingBottom: `${spacings.FULL}rem`,
        [mq.GROUP_1_MIN_WIDTH]: {
          paddingBottom: `${spacings.DOUBLE}rem`,
        },
        [mq.GROUP_4_MIN_WIDTH]: {
          paddingBottom: `${spacings.FULL}rem`,
        },
      },
    }),
  textContainer: ({ mq, spacings }: Theme) =>
    css({
      zIndex: 1,
      padding: `${spacings.FULL}rem ${spacings.FULL}rem ${spacings.DOUBLE}rem`,
      [mq.GROUP_2_MIN_WIDTH]: {
        padding: `${spacings.FULL}rem ${spacings.DOUBLE}rem ${spacings.DOUBLE}rem`,
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        padding: `${spacings.DOUBLE}rem`,
        minHeight: `${pixelsToRem(440)}rem`, // calculation includes padding
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '50%', // determines width of text overlay.
      },
    }),
  description: ({ palette }: Theme) =>
    css({
      color: palette.GREY_2,
      margin: 0,
    }),
};
