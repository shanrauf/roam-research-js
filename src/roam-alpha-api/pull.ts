import { RoamUser } from './user';
import { RoamBlockUid, RoamBlockOrder, ViewType } from './block';
import { EntityAttrs, RoamEntityId } from './entity';

/**
 * A pull block is identical to a RoamBlock except properties are prepended with their namespace.
 * */
export type PullBlock = {
  /**
   * :entity/attrs
   */
  ':entity/attrs'?: EntityAttrs;

  /**
   * :block/children
   */
  ':block/children'?: PullBlock[];

  /**
   * :block/open
   *
   * Controls whether block is expanded/collapsed
   */
  ':block/open'?: boolean;

  ':block/page'?: PullBlock;

  ':block/parents'?: PullBlock[];

  ':block/refs'?: PullBlock[];

  /**
   * :db/id
   */
  ':db/id'?: RoamEntityId;

  ':attrs/lookup'?: PullBlock[];

  /**
   * :block/string
   */
  ':block/string'?: string;

  /**
   * :node/title
   */
  ':node/title'?: string;

  /**
   * :edit/time
   */
  ':edit/time'?: number;

  /**
   * :create/time
   */
  ':create/time'?: number;

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

export type RoamPull = (selector: string, id: number | string) => PullBlock;
