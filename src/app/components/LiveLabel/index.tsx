/** @jsx jsx */
/** @jsxRuntime classic */
import { PropsWithChildren, useContext } from 'react';
import { jsx } from '@emotion/react';
import VisuallyHiddenText from '../VisuallyHiddenText';
import { ServiceContext } from '../../contexts/ServiceContext';
import styles from './index.styles';
import Text from '../Text';

interface LiveLabelProps {
  ariaHidden?: boolean;
  liveText?: string;
  offScreenText?: string;
  lang?: string;
  id?: string;
}

const LiveLabel = ({
  // ariaHidden = false,
  liveText,
  // offScreenText = '',
  lang = 'en-GB',
  id = '',
  children,
}: PropsWithChildren<LiveLabelProps>) => {
  const { dir, translations } = useContext(ServiceContext);

  const { liveLabel } = translations.media;

  // As screenreaders mispronounce the word 'LIVE', we use visually hidden
  // text to read 'Live' instead, which screenreaders pronounce correctly.

  const liveLabelIsEnglish = liveLabel === 'LIVE';

  let screenReaderText = null;
  let ariaHidden = false;

  if (liveLabelIsEnglish) {
    screenReaderText = 'Live';
    ariaHidden = true;
  }
  return (
    // lines 27, 56,66, 31 concerning with id are a temporary fix for the a11y nested span's bug experienced in TalkBack, refer to the following issue: https://github.com/bbc/simorgh/issues/9652
    // eslint-disable-next-line jsx-a11y/aria-role
    <Text as="span" id={id} fontVariant="sansBold">
      <span
        css={styles.liveLabel}
        dir={dir}
        {...(ariaHidden && { 'aria-hidden': 'true' })}
      >
        {`${liveText || liveLabel} `}
      </span>

      {screenReaderText && (
        <VisuallyHiddenText lang={lang}>
          {`${screenReaderText}, `}
        </VisuallyHiddenText>
      )}
      {children}
    </Text>
  );
};

export default LiveLabel;
