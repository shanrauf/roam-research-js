import { RoamAlphaAPI } from './roam-alpha-api/index';

export const test: number = 1;

declare global {
  interface Window {
    roamAlphaAPI: RoamAlphaAPI;
  }
}
