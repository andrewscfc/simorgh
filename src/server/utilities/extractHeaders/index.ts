import { IncomingHttpHeaders } from 'http';
import { COUNTRIES_WITH_COOKIE_BANNER } from '#app/lib/utilities/cookieCountries';

const extractHeaders = (headers: IncomingHttpHeaders) => {
  let isUK = null;
  let showCookieBannerBasedOnCountry = true;
  if (headers['x-bbc-edge-isuk']) {
    isUK = headers['x-bbc-edge-isuk'] === 'yes';
  } else if (headers['x-country']) {
    isUK = headers['x-country'] === 'gb';
    showCookieBannerBasedOnCountry = COUNTRIES_WITH_COOKIE_BANNER.includes(
      headers['x-country'].toString().toLowerCase(),
    );
  }

  return {
    isUK,
    showCookieBannerBasedOnCountry,
  };
};

export default extractHeaders;
