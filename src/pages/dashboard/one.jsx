import { CONFIG } from 'src/global-config';

import One from 'src/sections/one';

// ----------------------------------------------------------------------

const metadata = { title: `Page one | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <One />
    </>
  );
}
