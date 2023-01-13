import { css, Theme } from '@emotion/react';

const styles = {
  container: ({ palette }: Theme) =>
    css({
      paddingTop: '2rem',
      paddingBottom: '2rem',
    }),
  card: ({ palette }: Theme) =>
    css({
      height: 'auto',
      background:
        'linear-gradient(33deg, rgba(121,9,22,1) 0%, rgba(2,0,36,1) 54%, rgba(121,9,22,1) 90%)',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }),
  textWrap: ({ palette, mq }: Theme) =>
    css({
      [mq.GROUP_3_ONLY]: {
        width: '66%',
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        width: '75%',
      },
    }),
  heading: ({ palette }: Theme) =>
    css({
      paddingTop: '1.5rem',
      paddingBottom: '0.5rem',
      color: palette.WHITE,
    }),
  paragraph: ({ palette }: Theme) =>
    css({
      paddingBottom: '1rem',
      color: palette.WHITE,
    }),
  image: ({ mq }: Theme) =>
    css({
      maxWidth: '184px',
      [mq.GROUP_3_ONLY]: {
        maxWidth: '224px',
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        maxWidth: '224px',
      },
      img: { objectPosition: 'top' },
    }),
  linkbackground: ({ mq, palette }: Theme) =>
    css({
      padding: '1rem',
      backgroundColor: palette.WHITE,
      margin: '0 1rem 1rem 1rem',
      width: '100%',
      [mq.GROUP_3_ONLY]: {
        width: 'auto',
        margin: '0 0 1.5rem 0',
        paddingBottom: '1rem',
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        width: 'auto',
        margin: '0 0 1.5rem 0',
        paddingBottom: '1rem',
      },
    }),
  link: ({ palette, mq }: Theme) =>
    css({
      color: palette.BLACK,
      textDecoration: 'none',
      '&:hover, &:focus': {
        textDecoration: 'underline',
      },
      paddingRight: '0.5rem',
      verticalAlign: 'middle',
    }),
  chevron: ({ palette }: Theme) =>
    css({
      width: '1rem',
      height: '1rem',
      verticalAlign: 'middle',
    }),
  linkAndChevron: ({ palette }: Theme) =>
    css({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }),

  flex: ({ mq, palette }: Theme) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [mq.GROUP_3_ONLY]: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      },
      [mq.GROUP_4_MIN_WIDTH]: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      },
    }),
};
export default styles;
