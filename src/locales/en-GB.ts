export default {
  COMMON: {
    BALANCE: "Balance",
    BLOCK: "Block",
    BLOCKS: "Blocks",
    CONFIRMATIONS: "Confirmations",
    DELEGATE: "Validator",
    DELEGATES: "Validators",
    EXPIRATION: "Expiration",
    FEE: "Fee",
    HEIGHT: "Height",
    ID: "ID",
    NO_RESULTS: "No results",
    NOT_APPLICABLE: "Not applicable",
    RANK: "Rank",
    RELOAD: "Reload this page",
    SEE_ALL: "See all",
    SUPPLY: "Supply",
    SUPPLY_PERCENTAGE: "Percentage of the total supply",
    TIMESTAMP: "Timestamp",
    TRANSACTION: "Transaction",
    TRANSACTIONS: "Transactions",
    TYPE: "Type",
    WALLET: "Wallet",
    ACCEPT: "Accept",
    CANCEL: "Cancel",
    SAVE: "Save",
    UNFILTERED: "Unfiltered",
    FILTERED: "Filtered",
    HIDDEN: "Hidden",
    I_AGREE: "I Agree",
  },

  DISCLAIMER: {
    TITLE: "Disclaimer",
    TEXT1:
      "The following page is a directory for informational purposes only. {website} is in no way affiliated with the listed individuals and/or business and bridgechain entities listed herein. All links provided herein are third party websites that have not been verified and are owned by independent parties over which {website} has no control. {website} does not endorse or approve and makes no warranties, representations or undertakings relating to the content of third party websites.",
    TEXT2: "By clicking “Accept” you will be confirming that you have read and are in agreement with all terms herein.",
    TEXT3:
      "I agree by choosing to display the vendorfield, you accept that text from third parties outside of {website}'s control may post text that cannot be censored, removed, or manipulated. {website} assumes no responsibility for the content and/or nature of the text displayed and the harm and/or liability that may arise over accessing such text.",
  },

  MARKET_CHART: {
    ERROR: "The chart data could not be loaded",
    RELOAD: "Reload chart",
    PRICE: "Price",
    VOLUME: "Volume",
    DAY: "Day",
    WEEK: "Week",
    MONTH: "Month",
    QUARTER: "Quarter",
    YEAR: "Year",
    ALL_TIME: "All time",
  },

  BLOCK: {
    ID: "Block ID",
    PAGINATION: {
      NEXT: "Next block",
      PREVIOUS: "Previous block",
    },
    FEES: "Fees",
    GENERATED_BY: "Generated by",
    REWARD: "Reward",
    PROCESSED_AMOUNT: "Processed amount",
    TOTAL_FORGED: "Total forged",
  },

  TRANSACTION: {
    AMOUNT: "Amount",
    AMOUNT_TO_SELF: "Excluding {amount} sent to itself",
    BLOCK_ID: "Block ID",
    ID: "Transaction ID",
    IPFS: "IPFS Hash",
    FEE: "Fee",
    MULTI_SIGNATURE: {
      ADDRESS: "Generated address",
      MIN: "Minimum participants",
      LIFETIME: "Lifetime",
      PARTICIPANTS: "Participants",
      LEGACY_NOTICE: "This transaction is a legacy Multisignature Registration",
    },
    NONCE: "Nonce",
    TIMELOCK: {
      BLOCKHEIGHT: "Expiration blockheight",
      CLAIMED: "Claimed transaction",
      EXPIRATION: "Expiration",
      EXPIRED: "Expired lock",
      OPEN: "Open lock",
      REFUNDED: "Refunded transaction",
      SECRET_HASH: "Secret Hash",
      STATUS: "Timelock status",
      UNKNOWN: "Unknown",
      UNLOCK_SECRET_HEX: "Unlock Secret (hex)",
    },
    TYPE: "Transaction type",
    TYPES: {
      ALL: "All",
      TRANSFER: "Transfer",
      SECOND_SIGNATURE: "2nd Signature Registration",
      DELEGATE_REGISTRATION: "Delegate Registration",
      VOTE: "Vote",
      UNVOTE: "Unvote",
      MULTI_SIGNATURE: "Multisignature Registration",
      IPFS: "IPFS",
      LOCKS: "Locks",
      TIMELOCK: "Timelock",
      TIMELOCK_CLAIM: "Timelock Claim",
      TIMELOCK_REFUND: "Timelock Refund",
      MULTI_PAYMENT: "Multipayment",
      DELEGATE_RESIGNATION: "Delegate Resignation",
      // Magistrate 2.0
      BUSINESS_ENTITY_REGISTRATION: "Business Registration",
      BUSINESS_ENTITY_RESIGNATION: "Business Resignation",
      BUSINESS_ENTITY_UPDATE: "Business Update",
      PRODUCT_ENTITY_REGISTRATION: "Product Registration",
      PRODUCT_ENTITY_RESIGNATION: "Product Resignation",
      PRODUCT_ENTITY_UPDATE: "Product Update",
      PLUGIN_ENTITY_REGISTRATION: "Plugin Registration",
      PLUGIN_ENTITY_RESIGNATION: "Plugin Resignation",
      PLUGIN_ENTITY_UPDATE: "Plugin Update",
      MODULE_ENTITY_REGISTRATION: "Module Registration",
      MODULE_ENTITY_RESIGNATION: "Module Resignation",
      MODULE_ENTITY_UPDATE: "Module Update",
      DELEGATE_ENTITY_REGISTRATION: "Delegate Registration (AIP36)",
      DELEGATE_ENTITY_RESIGNATION: "Delegate Resignation (AIP36)",
      DELEGATE_ENTITY_UPDATE: "Delegate Update",
      // Magistrate 1.0
      LEGACY_BUSINESS_REGISTRATION: "Business Registration (Legacy)",
      LEGACY_BUSINESS_RESIGNATION: "Business Resignation (Legacy)",
      LEGACY_BUSINESS_UPDATE: "Business Update (Legacy)",
      LEGACY_BRIDGECHAIN_REGISTRATION: "Bridgechain Registration (Legacy)",
      LEGACY_BRIDGECHAIN_RESIGNATION: "Bridgechain Resignation (Legacy)",
      LEGACY_BRIDGECHAIN_UPDATE: "Bridgechain Update (Legacy)",
      // Unknown type
      UNDEFINED_REGISTRATION: "Undefined Registration",
      UNDEFINED_RESIGNATION: "Undefined Resignation",
      UNDEFINED_UPDATE: "Undefined Update",
      UNDEFINED: "Undefined",
      SENT: "Sent",
      RECEIVED: "Received",
      // NFT Base types
      NFT_REGISTER_COLLECTION: "NFT Register Collection",
      NFT_CREATE: "NFT Create Asset",
      NFT_TRANSFER: "NFT Transfer",
      NFT_BURN: "NFT Burn",
      // NFT Exchange types
      NFT_AUCTION: "NFT Auction",
      NFT_AUCTION_CANCEL: "NFT Auction Cancel",
      NFT_BID: "NFT Bid",
      NFT_BID_CANCEL: "NFT Bid Cancel",
      NFT_ACCEPT_TRADE: "NFT Accept Trade",
      // Guardian types
      GUARDIAN_SET_USER_PERMISSIONS: "User Permissions",
      GUARDIAN_SET_GROUP_PERMISSIONS: "Group Permissions",
      // EBSI types
      NOTARIZATION: "Notarization",
    },
    NOTARIZATION: {
      HASH: "Notarization hash",
    },
    NFT_REGISTER_COLLECTION: {
      COLLECTION: "Collection",
      NAME: "Name",
      DESCRIPTION: "Description",
      MAXIMUM_SUPPLY: "Maximum Supply",
      JSON_SCHEMA: "Json Schema",
      ALLOWED_ISSUERS: "Allowed Issuers",
    },
    NFT_CREATE: {
      TOKEN: "Token",
      COLLECTION_ID: "Collection ID",
      TOKEN_ATTRIBUTES: "Token Attributes",
      SPECIFIC_COLLECTION: {
        NASCAR_TEAM: {
          COLLECTION_NAME: "Nascar team asset",
          TEAM_NAME: "Team Name",
          TEAM_LOGO: "Team Logo",
          DESCRIPTION: "Description",
          CAR_TYPE: "Car Type",
          DRIVERS: "Drivers",
          TEAM_OWNER: "Team Owner",
          HEADQUARTERS: "Headquarters",
          WEBSITE: "Website",
        },
        NASCAR_HERO_CARD: {
          COLLECTION_NAME: "Nascar Hero Card asset",
          LOCATION: "Location",
          HERO_CARD_FRONT: "Hero card front",
          HERO_CARD_BACK: "Hero card back",
          DATE: "Date",
          IS_SIGNED: "Is card signed",
        },
      },
    },
    NFT_TRANSFER: {
      TRANSFER: "Transfer",
      RECIPIENT_ID: "Recipient",
      NFT_IDS: "Tokens",
    },
    NFT_BURN: {
      BURN: "Burn",
      NFT_ID: "Token",
    },
    NFT_AUCTION: {
      AUCTION: "Auction",
      NFT_IDS: "Tokens",
      START_AMOUNT: "Start Amount",
      EXPIRATION: "Block Time Expiration",
    },
    NFT_AUCTION_CANCEL: {
      AUCTION_CANCEL: "Canceled Auction",
      AUCTION_ID: "Auction",
    },
    NFT_BID: {
      BID: "Bid",
      AUCTION_ID: "Auction",
      AMOUNT: "Bid Amount",
    },
    NFT_BID_CANCEL: {
      BID_CANCEL: "Canceled Bid",
      BID_ID: "Bid",
    },
    NFT_ACCEPT_TRADE: {
      ACCEPT_TRADE: "Trade",
      AUCTION_ID: "Auction",
      BID_ID: "Bid",
    },
    GUARDIAN_PERMISSION_KIND: {
      ALLOW: "Allow",
      DENY: "Deny",
    },
    GUARDIAN_SET_GROUP_PERMISSIONS: {
      GROUP_PERMISSIONS: "Group permissions",
      NAME: "Name",
      ACTIVE: "Is group active",
      DEFAULT: "Is group set to default",
      PRIORITY: "Group priority",
      ALLOWED_TRANSACTIONS: "Allowed transactions",
      DENIED_TRANSACTIONS: "Denied transactions",
    },
    GUARDIAN_SET_USER_PERMISSIONS: {
      USER_PERMISSIONS: "User permissions",
      WALLET: "Wallet",
      GROUPS: "Group names",
      ALLOWED_TRANSACTIONS: "Allowed transactions",
      DENIED_TRANSACTIONS: "Denied transactions",
    },
    ASSET: {
      BRIDGECHAINASSETREPOSITORY: "Bridgechain Asset Repository",
      BRIDGECHAINID: "Bridgechain ID",
      BRIDGECHAINREPOSITORY: "Bridgechain repository",
      GENESISHASH: "Genesis hash",
      NAME: "Name",
      PORTS: "Ports",
      REPOSITORY: "Repository",
      SEEDNODES: "Seed nodes",
      VAT: "VAT",
      WEBSITE: "Website",
      TYPE: "Type",
      SUBTYPE: "Sub-Type",
      ACTION: "Action",
      DATA: "Data",
      REGISTRATIONID: "Registration ID",
    },
    SENDER: "Sender",
    RECIPIENT: "Recipient",
    RECIPIENTS: "Recipients",
    SMARTBRIDGE: "Smartbridge",
    WELL_CONFIRMED: "Well confirmed",
  },

  WALLET: {
    ADDRESS: "Address",
    PUBLIC_KEY: "Public key",
    VERIFIED: "This is a verified address",
    VOTING_FOR: "Voting for",
    BALANCE: "Balance ({token})",
    LOCKED_BALANCE: "Locked Balance",
    SECOND_PASSPHRASE_ENABLED: "Second signature enabled",
    MULTI_SIGNATURE_WALLET: "Multisignature wallet",
    SUMMARY: "Wallet summary",
    QR_CODE: "QR Code",
    SCAN_FOR_ADDRESS: "Scan for address",
    SCAN_FOR_URI: "Scan for URI",
    ADVANCED_QR: {
      EXPAND: "Show options",
      COLLAPSE: "Hide options",
    },
    DELEGATE: {
      FORGED_BLOCKS: "Forged blocks",
      TOTAL_FORGED: "Total forged",
      RANK: "Rank",
      RANK_NOT_AVAILABLE: "Not yet available",
      RANK_NOT_APPLICABLE: "Not applicable",
      STATUS: {
        TITLE: "Status",
        ACTIVE: "Active",
        STANDBY: "Standby",
        RESIGNED: "Resigned",
      },
      USERNAME: "Username",
      VOTES: "Votes",
      VOTERS: "Voters",
      VOTER_THRESHOLD: "Only voters with more than 0.1 {token}",
    },
    TIMELOCK_TRANSACTION: "Timelock transaction",
  },

  SEARCH: {
    PLACEHOLDER: {
      SHORT: "Search",
      LONG: "Find a block, transaction, address or delegate",
    },
    NO_RESULTS: "Nothing matched your search",
  },

  BUTTON_CLIPBOARD: {
    SUCCESS: "Copied!",
    ERROR: "Error!",
    COPY_TO_CLIPBOARD: "Copy to clipboard",
  },

  PAGES: {
    HOME: {
      TITLE: "Home",
      HEADER: "Latest transactions and blocks",
      LATEST_TRANSACTIONS: "Latest transactions",
      LATEST_BLOCKS: "Latest blocks",
    },
    DELEGATES: {
      TITLE: "Delegates",
    },
    DELEGATE_MONITOR: {
      TITLE: "Validator Monitor",
      HEADER: {
        LAST_BLOCK: "Last block",
        FORGED: "Forged",
        TOTAL_FORGED: "Total forged ({token})",
        TX_COUNT: "from 0 transactions | from 1 transaction | from {count} transactions",
      },
      ACTIVE: "Active",
      STANDBY: "Standby",
      RESIGNED: "Resigned",
      NEVER: "Never",
      FORGED_BLOCKS: "Forged blocks",
      LAST_FORGED: "Last forged",
      STATS: {
        FORGED: "Forged block recently",
        IN_QUEUE: "In queue for forging",
        MISSED: "Missed round",
        NOT_FORGING: "Not forging",
      },
      STATUS: {
        TITLE: "Status",
        FORGING: "Forging",
        MISSING: "Missing",
        NOT_FORGING: "Not forging",
        NEVER_FORGED: "Never forged",
        BECAME_ACTIVE: "Became active",
      },
      VOTES: "Votes",
      TOOLTIP: "Last block @ {height} on",
    },
    TOP_WALLETS: {
      TITLE: "Top Wallets",
    },
    ADVANCED_SEARCH: {
      TITLE: "Advanced Search",
      ADDITIONAL_PARAMETERS: "Additional Parameters",
      RESULTS: "Results",
      SEARCH_TYPE: "Search Type",
      GENERIC: {
        DATE_FROM: "Date from",
        DATE_TO: "Date to",
      },
      BLOCK: {
        TOTAL_AMOUNT_FROM: "Total amount from",
        TOTAL_AMOUNT_TO: "Total amount to",
        TOTAL_FEE_FROM: "Total fee from",
        TOTAL_FEE_TO: "Total fee to",
        REWARD_FROM: "Reward from",
        REWARD_TO: "Reward to",
      },
      TRANSACTION: {
        AMOUNT_FROM: "Amount from",
        AMOUNT_TO: "Amount to",
        FEE_FROM: "Fee from",
        FEE_TO: "Fee to",
      },
      WALLET: {
        BALANCE_FROM: "Balance from",
        BALANCE_TO: "Balance to",
      },
    },
    NOT_FOUND: {
      TITLE: "Ooops!",
      PAGE: "Sorry, page not found",
      DATA: "Sorry, {dataType} {dataId} could not be found on the blockchain",
    },
  },

  PAGINATION: {
    ALL: "All",
    NEXT: "Next",
    OF: "of",
    PAGE: "Page",
    PREVIOUS: "Previous",
    ROWS_PER_PAGE: "Rows per page",
    SHOW_MORE: "Show more",
    PLACEHOLDER: {
      SHORT: "Page #",
      LONG: "Enter a page number",
    },
    NO_RESULTS: "Invalid page number",
  },

  HEADER: {
    MENU: "Menu",
    NETWORK: "Network",
    MAIN: "Main",
    DEVELOPMENT: "Development",
    SUPPLY: "Supply",
    MARKET_CAP: "Market Cap",
    TESTNET_LOCAL: "Testnet Local",
  },

  MODAL_SETTINGS: {
    TITLE: "Explorer Settings",
    DESCRIPTION: "Customize the Explorer to suit your needs",
    CURRENCY: "Currency",
    SMARTBRIDGE_FILTER: "Smartbridge Filter",
    DARK_THEME: "Dark Theme",
    PRICE_CHART: "Price Chart",
    LANGUAGE: "Language",
  },

  FOOTER: {
    ALL_RIGHTS_RESERVED: "All rights reserved",
    VERSION: "Version",
    DATE: "Date",
  },
};
