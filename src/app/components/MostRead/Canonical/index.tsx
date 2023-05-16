import React, { useContext } from 'react';
import { shouldRenderLastUpdated } from '#lib/utilities/filterPopularStaleData/isDataStale';
import useViewTracker from '#hooks/useViewTracker';
import { ServiceContext } from '#app/contexts/ServiceContext';
import { MostReadLink, MostReadItemWrapper } from './Item';
import MostReadList from './List';
import MostReadRank from './Rank';
import LastUpdated from './LastUpdated';
import { ColumnLayout, Direction, MostReadData, Size } from '../types';
import { TypographyScript } from '../../../models/types/theming';
import getMostReadItems from '../utilities/getMostReadItems';

interface MostReadProps {
  columnLayout?: ColumnLayout;
  size: Size;
  data: MostReadData;
  wrapper?: React.ElementType;
  eventTrackingData?: {
    componentName: string;
  };
}

const MostRead = ({
  columnLayout = 'multiColumn',
  size,
  data,
  wrapper: Wrapper = React.Fragment,
  eventTrackingData,
}: MostReadProps) => {
  const {
    service,
    script,
    dir,
    datetimeLocale,
    serviceDatetimeLocale,
    timezone,
    mostRead: { lastUpdated, numberOfItems = 5 },
  } = useContext(ServiceContext);
  const viewRef = useViewTracker(eventTrackingData);

  const locale = serviceDatetimeLocale || datetimeLocale;

  const items = getMostReadItems({ data, numberOfItems, service }) || [];

  const direction = dir as Direction;
  const fontScript = script as TypographyScript;

  return (
    <Wrapper>
      <MostReadList
        numberOfItems={items.length}
        dir={direction}
        columnLayout={columnLayout}
      >
        {items.map(
          ({ id, timestamp, title, href }, i) =>
            title &&
            href && (
              <MostReadItemWrapper
                dir={direction}
                key={id}
                columnLayout={columnLayout}
                ref={viewRef}
              >
                <MostReadRank
                  service={service}
                  listIndex={i + 1}
                  numberOfItems={items.length}
                  dir={direction}
                  columnLayout={columnLayout}
                  size={size}
                />
                <MostReadLink
                  dir={direction}
                  service={service}
                  title={title}
                  href={href}
                  size={size}
                  eventTrackingData={eventTrackingData}
                >
                  {shouldRenderLastUpdated(timestamp) && timestamp && (
                    <LastUpdated
                      prefix={lastUpdated}
                      script={fontScript}
                      service={service}
                      timestamp={timestamp}
                      locale={locale}
                      timezone={timezone}
                    />
                  )}
                </MostReadLink>
              </MostReadItemWrapper>
            ),
        )}
      </MostReadList>
    </Wrapper>
  );
};

export default MostRead;
