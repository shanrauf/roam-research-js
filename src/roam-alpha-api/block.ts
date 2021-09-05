import { RoamUser } from './user';
import { EntityAttrs, RoamEntityId } from './entity';
/**
 *
 * Block
 *
 */

/**
 * Defines the order of a child block among other children blocks.
 * Set order = -1 to position a block as the last child
 */
export type RoamBlockOrder = number;

export type RoamBlockUid = string;
/**
 * Filters to include/exclude blocks
 */
export type RoamBlockFilters = {
  includes: RoamBlockUid[];
  removes: RoamBlockUid[];
};

export type ViewType = 'document' | 'bullet' | 'numbered';

export type TextAlignment = 'left' | 'center' | 'right';

export type RoamBlock = {
  /**
   * :entity/attrs
   */
  attrs?: EntityAttrs;

  /**
   * :block/children
   */
  children?: RoamBlock[];

  /**
   * :block/open
   *
   * Controls whether block is expanded/collapsed
   */
  open?: boolean;

  page?: RoamBlock;

  parents?: RoamBlock[];

  refs?: RoamBlock[];

  /**
   * :db/id
   */
  id?: RoamEntityId;

  lookup?: RoamBlock[];

  /**
   * :block/string
   */
  string?: string;

  /**
   * :node/title
   */
  title?: string;

  /**
   * Either :create/time or :edit/time depending on your pull pattern; pull [*] will return :edit/time
   */
  time?: number;

  /**
   * :block/uid
   */
  uid?: RoamBlockUid;

  /**
   * :edit/user
   */
  user?: RoamUser;

  order?: RoamBlockOrder;
  'view-type'?: ViewType;
};
