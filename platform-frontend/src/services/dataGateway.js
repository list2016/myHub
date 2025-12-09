import { dataSources, integrationModules, analyticsSnapshots } from '@/data/dataSources';
import { architectureLayers } from '@/data/architectureLayers';
import { resourceCatalog } from '@/data/resourceCatalog';
import { roleApps } from '@/data/roleApps';
import { deploymentProfiles } from '@/data/deploymentProfiles';
import { platformMetrics } from '@/data/metrics';

const deepCopy = (payload) => JSON.parse(JSON.stringify(payload));

const withLatency = (payload, latency = 240) =>
  new Promise((resolve) => setTimeout(() => resolve(deepCopy(payload)), latency));

export const fetchIntegrationModules = () =>
  withLatency({ integrationModules, dataSources, analyticsSnapshots }, 260);

export const fetchResourceCatalog = () => withLatency(resourceCatalog, 180);

export const fetchArchitectureLayers = () => withLatency(architectureLayers, 180);

export const fetchRoleApps = () => withLatency(roleApps, 220);

export const fetchDeploymentProfiles = () => withLatency(deploymentProfiles, 200);

export const fetchMetrics = () => withLatency(platformMetrics, 150);

export default {
  fetchIntegrationModules,
  fetchResourceCatalog,
  fetchArchitectureLayers,
  fetchRoleApps,
  fetchDeploymentProfiles,
  fetchMetrics
};
