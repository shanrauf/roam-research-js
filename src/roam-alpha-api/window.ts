import { RoamBlockUid } from './block';
/**
 *
 * Window
 *
 */

/**
 * Potential formats:
 * - "uuid368a7ec9-895e-4bab-aff4-daee3e6a52b0" for a block in the sidebar
 * - "FCtT0Pln1IPQwShwIyILPG0743H2-body-outline-pfVkAJkY2" for a block in the main view (I think...)
 * - "s.rauf124@gmail.com-mentions-page-pfVkAJkY2" for linked references of a block or `{{[[mentions]]}}` block
 */
export type RoamWindowId = string;

export type RoamBlockWindow = {
  type: 'block';
  'block-uid': string;
};

export type RoamOutlineWindow = {
  type: 'outline';
  'page-uid': string;
};

export type RoamMentionsWindow = {
  type: 'mentions';
  'mentions-uid': string;
};

export type RoamGraphWindow = {
  type: 'graph';
  'page-uid': string;
};

export type RoamWindowType =
  | RoamBlockWindow
  | RoamMentionsWindow
  | RoamGraphWindow
  | RoamOutlineWindow;

export type RoamWindow = {
  'collapsed?': boolean;
  'content-id': RoamBlockUid;
  order: number;
  'page-uid': RoamBlockUid;
  'pinned?': boolean;
  type: RoamWindowType['type'];
  'window-id': RoamWindowId;
};

export type RoamWindowAction = (action: { window: RoamWindowInput }) => boolean;

export type RoamWindowInput = {
  'block-uid': string;
  type: RoamWindowType['type'];
};
