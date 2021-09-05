import { RoamSettings } from './settings';
import { RoamEntityId } from './entity';
import { RoamBlock } from './block';
/**
 *
 * User
 *
 */

export type RoamUserUid = string;

export type RoamUser = {
  /**
   * RGB string e.g. "rgb(40,191,213)"
   */
  color?: string;

  /**
   * The user's display name e.g. "Shan Rauf"
   */
  'display-name'?: string;

  /**
   * The entity representing the Roam page for this user
   */
  'display-page'?: RoamBlock; // TOOD, shoudln this be a ROamPasge

  /**
   * The user's email
   */
  email?: string; // email

  id?: RoamEntityId;

  /**
   * URL to user's photo
   */
  'photo-url'?: string;

  settings?: RoamSettings;

  uid?: RoamUserUid;
};
