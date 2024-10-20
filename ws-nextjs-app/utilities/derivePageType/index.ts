import { PageTypes } from '#app/models/types/global';
import { LIVE_PAGE, UGC_PAGE } from '#app/routes/utils/pageTypes';

export default function derivePageType(
  pathname: string,
): PageTypes | 'Unknown' {
  const sanitisedPathname = new URL(pathname, 'http://bbc.com').pathname;

  if (sanitisedPathname.includes('live')) return LIVE_PAGE;
  if (sanitisedPathname.includes('send')) return UGC_PAGE;

  return 'Unknown';
}
