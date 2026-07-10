import defaultData from './asset.js';
import aeOverrides from './asset.ae.js';

type InfoObject = typeof defaultData.info[0];

/**
 * Returns the correct `info` object for the visitor's country.
 *
 * Country files (e.g. asset.ae.js) only need to define fields that
 * DIFFER from the default — everything else is inherited automatically
 * from asset.js via object spread.
 *
 * Country codes follow ISO 3166-1 alpha-2 ("AE" = UAE, "IN" = India).
 *
 * Adding a new country:
 *   1. Create src/data/asset.XX.js with only the changed fields
 *   2. Add a case block below: case 'XX': return merge(xxOverrides);
 */
export function getInfoByCountry(country: string): InfoObject {
  const base = defaultData.info[0];

  // Helper: merges base with a partial override object
  const merge = (overrides: Partial<InfoObject>): InfoObject => ({
    ...base,
    ...overrides,
  });

  switch (country.toUpperCase()) {
    case 'AE':
      return merge(aeOverrides as Partial<InfoObject>);
    default:
      return base;
  }
}
