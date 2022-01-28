export const test: number = 1;

declare global {
  /**
   *
   * Entity
   *
   */

  /**
   * The database entity ID
   */
  export type RoamEntityId = number;

  /**
   * See https://docs.datomic.com/cloud/schema/schema-reference.html
   */
  export type EntityAttrs = { source: string[]; value: string }[][];

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

  /**
   *
   * User
   *
   */

  export type RoamUserUid = string;

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

  export type RoamWindowAction = (action: {
    window: RoamWindowInput;
  }) => boolean;

  export type RoamWindowInput = {
    'block-uid': string;
    type: RoamWindowType['type'];
    order?: number;
  };

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

  export type RoamPull = (
    selector: string,
    id: number | string
  ) => Promise<PullBlock>;

  type RoamAlphaAPI = {
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
      ) => Promise<boolean>;
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
        callback: (before: PullBlock, after: PullBlock) => Promise<void>
      ) => boolean;
      redo: () => Promise<void>;
      undo: () => Promise<void>;
      user: {
        upsert: () => Promise<void>;
      };
    };
    ui: {
      mainWindow: {
        openBlock: (action: { block: { uid: string } }) => Promise<void>;
        getOpenPageOrBlockUid: () => Promise<string>;
      };
      rightSidebar: {
        open: () => Promise<void>;
        close: () => Promise<void>;
        getWindows: () => RoamWindow[];
        addWindow: RoamWindowAction;
        setWindowOrder: (action: {
          window: RoamWindowInput;
        }) => Promise<boolean>;
        collapseWindow: RoamWindowAction;
        pinWindow: RoamWindowAction;
        expandWindow: RoamWindowAction;
        removeWindow: RoamWindowAction;
        unpinWindow: RoamWindowAction;
      };
      commandPalette: {
        addCommand: (action: {
          label: string;
          callback: () => void;
        }) => Promise<void>;
        removeCommand: (action: { label: string }) => Promise<void>;
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
        }) => Promise<void>;
        removeCommand: (action: { label: string }) => Promise<void>;
      };
      getFocusedBlock: () => null | {
        'window-id': string;
        'block-uid': string;
      };
      setBlockFocusAndSelection: (action: {
        location: { 'block-uid': string; 'window-id': string };
        selection?: { start: number; end: number };
      }) => Promise<void>;
      components: {
        renderBlock: (args: { uid: string; el: HTMLElement }) => Promise<null>;
        unmountNode: (el: Element) => Promise<void>;
      };
    };
  };
  interface Window {
    roamAlphaAPI: RoamAlphaAPI;
  }
}
