import { RoamWindow, RoamWindowAction, RoamWindowInput } from './window';
import {
  CreateBlockAction,
  UpdateBlockAction,
  CreatePageAction,
  MoveBlockAction,
  DeleteBlockAction,
  UpdatePageAction,
  DeletePageAction,
} from './writes';
import { PullBlock, RoamPull } from './pull';
export type RoamAlphaAPI = {
  q: (query: string, ...params: any[]) => any[][];
  pull: RoamPull;
  createBlock: CreateBlockAction;
  updateBlock: UpdateBlockAction;
  moveBlock: MoveBlockAction;
  deleteBlock: DeleteBlockAction;
  createPage: CreatePageAction;
  updatePage: UpdatePageAction;
  deletePage: DeletePageAction;
  util: {
    generateUID: () => string;
  };
  data: {
    addPullWatch: (
      pullPattern: string,
      entityId: string,
      callback: (before: PullBlock, after: PullBlock) => void
    ) => boolean;
    block: {
      create: CreateBlockAction;
      update: UpdateBlockAction;
      move: MoveBlockAction;
      delete: DeleteBlockAction;
    };
    page: {
      create: CreatePageAction;
      update: UpdatePageAction;
      delete: DeletePageAction;
    };
    pull: RoamPull;
    q: (query: string, ...params: any[]) => any[][];
    removePullWatch: (
      pullPattern: string,
      entityId: string,
      callback: (before: PullBlock, after: PullBlock) => void
    ) => boolean;
    redo: () => void;
    undo: () => void;
    user: {
      upsert: () => void;
    };
  };
  ui: {
    rightSidebar: {
      open: () => void;
      close: () => void;
      getWindows: () => RoamWindow[];
      addWindow: RoamWindowAction;
      setWindowOrder: (action: {
        window: RoamWindowInput & { order: number };
      }) => boolean;
      collapseWindow: RoamWindowAction;
      pinWindow: RoamWindowAction;
      expandWindow: RoamWindowAction;
      removeWindow: RoamWindowAction;
      unpinWindow: RoamWindowAction;
    };
    commandPalette: {
      addCommand: (action: { label: string; callback: () => void }) => void;
      removeCommand: (action: { label: string }) => void;
    };
    blockContextMenu: {
      addCommand: (action: {
        label: string;
        callback: (props: {
          'block-string': string;
          'block-uid': string;
          heading: 0 | 1 | 2 | 3 | null;
          'page-uid': string;
          'read-only?': boolean;
          'window-id': string;
        }) => void;
      }) => void;
      removeCommand: (action: { label: string }) => void;
    };
    getFocusedBlock: () => null | {
      'window-id': string;
      'block-uid': string;
    };
    components: {
      renderBlock: (args: { uid: string; el: HTMLElement }) => null;
      unmountNode: (el: Element) => void;
    };
  };
};
