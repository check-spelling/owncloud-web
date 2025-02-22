export default {
  currentFolder: null,
  files: [],
  filesSearched: null,
  selectedIds: [],
  inProgress: [],
  dropzone: false,
  shareOpen: null,
  versions: [],

  /**
   * Outgoing shares and links from currently highlighted element
   */
  currentFileOutgoingShares: [],
  currentFileOutgoingSharesError: null,
  currentFileOutgoingSharesLoading: false,

  /**
   * Incoming shares from currently highlighted element
   */
  incomingShares: [],
  incomingSharesError: null,
  incomingSharesLoading: false,

  /**
   * Shares from parent folders
   **/
  sharesTree: {},
  sharesTreeError: null,
  sharesTreeLoading: false,

  loadingFolder: false,
  publicLinkPassword: null,
  uploaded: [],
  actionsInProgress: [],

  /**
   * Right sidebar
   */
  appSidebarActivePanel: null,

  /**
   * Public links
   */
  publicLinkInEdit: {
    id: null,
    name: '',
    permissions: 1,
    hasPassword: false,
    expireDate: null
  },

  /**
   * View settings
   */
  areHiddenFilesShown: true
}
