import { TextAlignment, ViewType } from './block';
/**
 *
 * Writes
 *
 */

export type ActionParams = {
  location?: {
    'parent-uid': string;
    order: number;
  };
  block?: {
    string?: string;
    uid?: string;
    open?: boolean;
    heading?: number;
    'text-align'?: TextAlignment;
    'children-view-type'?: ViewType;
  };
  page?: {
    title?: string;
    uid?: string;
  };
};

export type CreateBlockActionParams = {
  location: {
    'parent-uid': string;
    order: number;
  };
  block: {
    string: string;
    uid?: string;
    open?: boolean;
    heading?: number;
    'text-align'?: TextAlignment;
    'children-view-type'?: ViewType;
  };
};

export type CreateBlockAction = (
  a: CreateBlockActionParams
) => boolean | null | undefined;

export type MoveBlockActionParams = {
  location: {
    'parent-uid': string;
    order: number;
  };
  block: {
    uid: string;
  };
};

export type MoveBlockAction = (
  a: MoveBlockActionParams
) => boolean | null | undefined;

export type UpdateBlockActionParams = {
  block: {
    uid: string;
    string?: string;
    open?: boolean;
    heading?: number;
    'text-align'?: TextAlignment;
    'children-view-type'?: ViewType;
  };
};

export type UpdateBlockAction = (
  a: UpdateBlockActionParams
) => boolean | null | undefined;

export type DeleteBlockActionParams = {
  block: {
    uid: string;
  };
};

export type DeleteBlockAction = (
  a: DeleteBlockActionParams
) => boolean | null | undefined;

export type ReorderBlocksActionParams = {
  location: {
    'parent-uid': string;
  };
  /**
   * Array including all children uids of parent-uid, and no other blocks, with no duplicates, listed in order
   */
  blocks: string[];
};

export type ReorderBlocksAction = (
  a: ReorderBlocksActionParams
) => boolean | null | undefined;

export type CreatePageActionParams = {
  page: {
    title: string;
    uid?: string;
  };
};

export type CreatePageAction = (
  a: CreatePageActionParams
) => boolean | null | undefined;

export type UpdatePageActionParams = {
  page: {
    title: string;
    uid: string;
  };
};

export type UpdatePageAction = (
  a: UpdatePageActionParams
) => boolean | null | undefined;

export type DeletePageActionParams = {
  page: {
    uid: string;
  };
};

export type DeletePageAction = (
  a: DeletePageActionParams
) => boolean | null | undefined;
