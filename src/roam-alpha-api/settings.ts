import { RoamWindow, RoamWindowId } from './window';
import { RoamBlockFilters } from './block';
/**
 *
 * Settings
 *
 */

/**
 * A user's Roam settings
 */
export type RoamSettings = {
  /**
   * An object containing filters that apply to a user's whole graph
   */
  'global-filters': RoamBlockFilters;

  /**
   * Hides code blocks from Roam {{query}}
   */
  'hide-code-blocks?': boolean;

  /**
   * Controls whether to display double brackets on page references
   */
  'link-brackets?': boolean;

  'namespace-options': ['none', 'partial', 'full'];

  /**
   * An object containing every window pinned to the sidebar
   */
  'right-sidebar-pinned': {
    [key: RoamWindowId]: RoamWindow;
  };

  /**
   * Controls whether a superscript number displaying ref count appears on block references
   */
  'showing-inline-ref-counters?': boolean;

  /**
   * Controls whether a block's references display by default
   */
  'showing-inline-references?': boolean;

  'showing-own-icons': boolean;
};
