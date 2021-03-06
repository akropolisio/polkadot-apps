/* eslint-disable header/header */
import uiSettings from '@polkadot/ui-settings';
import { availableEndpoints } from '@polkadot/apps-config/settings';
import { AKRO_NODES } from '@polkadot/apps-config/settings/endpoints';

export function overrideDefaultSettings (): void {
  const settings = uiSettings.get();

  const isDefaultNode = !availableEndpoints.find(({ value }): boolean => {
    return value === settings.apiUrl;
  });

  isDefaultNode && uiSettings.set({ ...settings, apiUrl: AKRO_NODES[0].value.toString() });
}
