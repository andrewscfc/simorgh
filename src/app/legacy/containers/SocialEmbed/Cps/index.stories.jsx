import React from 'react';

import AmpDecorator from '../../../../../../.storybook/helpers/ampDecorator';
import { cpsTwitterBlock, cpsTwitterBlockNoEmbed } from '../common/fixtures';
import CpsSocialEmbedContainer from '.';
import withContexts from '../common/testHelper';

const Component = props =>
  withContexts(CpsSocialEmbedContainer, {
    isEnabled: true,
    isAmp: props.isAmp,
    service: props.service,
  })(props);

export default {
  title: 'Containers/Social Embed/CPS',
  Component,
  parameters: { chromatic: { disable: true } },
};

export const CanonicalExample = (_, globalArgs) => (
  <Component
    blocks={[cpsTwitterBlock]}
    source="https://twitter.com/MileyCyrus/status/1237210910835392512"
    {...globalArgs}
  />
);

export const AmpExample = (_, globalArgs) => (
  <Component
    isAmp
    blocks={[cpsTwitterBlock]}
    source="https://twitter.com/MileyCyrus/status/1237210910835392512"
    {...globalArgs}
  />
);
AmpExample.decorators = [AmpDecorator];

export const NoEmbed = (_, globalArgs) => (
  <Component
    blocks={[cpsTwitterBlockNoEmbed]}
    source="https://twitter.com/MileyCyrus/status/1237210910835392512"
    {...globalArgs}
  />
);
