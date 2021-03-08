import {
  CoreTransaction,
  MagistrateTransaction,
  TypeGroupTransaction,
  MagistrateTransactionEntityType,
  MagistrateTransactionEntitySubType,
  MagistrateTransactionEntityAction,
  NFTBaseTransactionTypes,
  NFTExchangeTransactionTypes,
  GuardianTransactionTypes,
  EBSITransactionTypes,
  NameserviceTransactionTypes,
} from "@/enums";

const isCoreTypeGroup = (typeGroup: number): boolean => {
  return typeGroup === TypeGroupTransaction.CORE;
};

const isMagistrateTypeGroup = (typeGroup: number): boolean => {
  return typeGroup === TypeGroupTransaction.MAGISTRATE;
};

export default {
  methods: {
    isTransfer(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isCoreTypeGroup(typeGroup) && type === CoreTransaction.TRANSFER;
    },

    isSecondSignature(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isCoreTypeGroup(typeGroup) && type === CoreTransaction.SECOND_SIGNATURE;
    },

    isDelegateRegistration(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isCoreTypeGroup(typeGroup) && type === CoreTransaction.DELEGATE_REGISTRATION;
    },

    isVote(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isCoreTypeGroup(typeGroup) && type === CoreTransaction.VOTE;
    },

    isMultiSignature(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isCoreTypeGroup(typeGroup) && type === CoreTransaction.MULTI_SIGNATURE;
    },

    isIpfs(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isCoreTypeGroup(typeGroup) && type === CoreTransaction.IPFS;
    },

    isDelegateResignation(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isCoreTypeGroup(typeGroup) && type === CoreTransaction.DELEGATE_RESIGNATION;
    },

    isMultiPayment(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isCoreTypeGroup(typeGroup) && type === CoreTransaction.MULTI_PAYMENT;
    },

    isTimelock(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isCoreTypeGroup(typeGroup) && type === CoreTransaction.TIMELOCK;
    },

    isTimelockClaim(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isCoreTypeGroup(typeGroup) && type === CoreTransaction.TIMELOCK_CLAIM;
    },

    isTimelockRefund(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isCoreTypeGroup(typeGroup) && type === CoreTransaction.TIMELOCK_REFUND;
    },

    // Magistrate 2.0

    isEntityRegistration(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return (
        isMagistrateTypeGroup(typeGroup) &&
        type === MagistrateTransaction.ENTITY &&
        asset &&
        asset.action === MagistrateTransactionEntityAction.REGISTER
      );
    },

    isEntityResignation(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return (
        isMagistrateTypeGroup(typeGroup) &&
        type === MagistrateTransaction.ENTITY &&
        asset &&
        asset.action === MagistrateTransactionEntityAction.RESIGN
      );
    },

    isEntityUpdate(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return (
        isMagistrateTypeGroup(typeGroup) &&
        type === MagistrateTransaction.ENTITY &&
        asset &&
        asset.action === MagistrateTransactionEntityAction.UPDATE
      );
    },

    isBusinessEntityRegistration(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return (
        this.isEntityRegistration(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.BUSINESS
      );
    },

    isBusinessEntityResignation(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return (
        this.isEntityResignation(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.BUSINESS
      );
    },

    isBusinessEntityUpdate(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isEntityUpdate(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.BUSINESS;
    },

    isProductEntityRegistration(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return (
        this.isEntityRegistration(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.PRODUCT
      );
    },

    isProductEntityResignation(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isEntityResignation(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.PRODUCT;
    },

    isProductEntityUpdate(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isEntityUpdate(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.PRODUCT;
    },

    isPluginEntityRegistration(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isEntityRegistration(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.PLUGIN;
    },

    isPluginEntityResignation(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isEntityResignation(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.PLUGIN;
    },

    isPluginEntityUpdate(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isEntityUpdate(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.PLUGIN;
    },

    isModuleEntityRegistration(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isEntityRegistration(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.MODULE;
    },

    isModuleEntityResignation(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isEntityResignation(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.MODULE;
    },

    isModuleEntityUpdate(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isEntityUpdate(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.MODULE;
    },

    isDelegateEntityRegistration(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return (
        this.isEntityRegistration(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.DELEGATE
      );
    },

    isDelegateEntityResignation(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return (
        this.isEntityResignation(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.DELEGATE
      );
    },

    isDelegateEntityUpdate(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isEntityUpdate(type, typeGroup, asset) && asset.type === MagistrateTransactionEntityType.DELEGATE;
    },

    // Magistrate 1.0

    isLegacyBusinessRegistration(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isMagistrateTypeGroup(typeGroup) && type === MagistrateTransaction.BUSINESS_REGISTRATION;
    },

    isLegacyBusinessResignation(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isMagistrateTypeGroup(typeGroup) && type === MagistrateTransaction.BUSINESS_RESIGNATION;
    },

    isLegacyBusinessUpdate(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isMagistrateTypeGroup(typeGroup) && type === MagistrateTransaction.BUSINESS_UPDATE;
    },

    isLegacyBridgechainRegistration(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isMagistrateTypeGroup(typeGroup) && type === MagistrateTransaction.BRIDGECHAIN_REGISTRATION;
    },

    isLegacyBridgechainResignation(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isMagistrateTypeGroup(typeGroup) && type === MagistrateTransaction.BRIDGECHAIN_RESIGNATION;
    },

    isLegacyBridgechainUpdate(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return isMagistrateTypeGroup(typeGroup) && type === MagistrateTransaction.BRIDGECHAIN_UPDATE;
    },

    // NFT Base Types
    isNFTBaseTypeGroup(typeGroup: number): boolean {
      return typeGroup === TypeGroupTransaction.NFT_BASE;
    },

    isNFTRegisterCollection(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isNFTBaseTypeGroup(typeGroup) && type === NFTBaseTransactionTypes.NFT_REGISTER_COLLECTION;
    },

    isNFTCreate(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isNFTBaseTypeGroup(typeGroup) && type === NFTBaseTransactionTypes.NFT_CREATE;
    },

    isNFTTransfer(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isNFTBaseTypeGroup(typeGroup) && type === NFTBaseTransactionTypes.NFT_TRANSFER;
    },

    isNFTBurn(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isNFTBaseTypeGroup(typeGroup) && type === NFTBaseTransactionTypes.NFT_BURN;
    },

    //NFT Exchange Types
    isNFTExchangeTypeGroup(typeGroup: number): boolean {
      return typeGroup === TypeGroupTransaction.NFT_EXCHANGE;
    },
    isNFTAuction(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isNFTExchangeTypeGroup(typeGroup) && type === NFTExchangeTransactionTypes.NFT_AUCTION;
    },
    isNFTAuctionCancel(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isNFTExchangeTypeGroup(typeGroup) && type === NFTExchangeTransactionTypes.NFT_AUCTION_CANCEL;
    },
    isNFTBid(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isNFTExchangeTypeGroup(typeGroup) && type === NFTExchangeTransactionTypes.NFT_BID;
    },
    isNFTBidCancel(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isNFTExchangeTypeGroup(typeGroup) && type === NFTExchangeTransactionTypes.NFT_BID_CANCEL;
    },
    isNFTAcceptTrade(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isNFTExchangeTypeGroup(typeGroup) && type === NFTExchangeTransactionTypes.NFT_ACCEPT_TRADE;
    },

    //Guardian Types
    isGuardianTypeGroup(typeGroup: number): boolean {
      return typeGroup === TypeGroupTransaction.GUARDIAN;
    },
    isUserPermissions(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isGuardianTypeGroup(typeGroup) && type === GuardianTransactionTypes.GUARDIAN_SET_USER_PERMISSIONS;
    },
    isGroupPermissions(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return this.isGuardianTypeGroup(typeGroup) && type === GuardianTransactionTypes.GUARDIAN_SET_GROUP_PERMISSIONS;
    },

    //Ebsi Types
    isNotarization(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return typeGroup === TypeGroupTransaction.EBSI && type === EBSITransactionTypes.NOTARIZATION;
    },

    // Nameservice Types
    isNameservice(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return typeGroup === TypeGroupTransaction.NAMESERVICE && type === NameserviceTransactionTypes.NAMESERVICE;
    },

    // Unknown type

    isUndefinedRegistration(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return (
        this.isEntityRegistration(type, typeGroup, asset) &&
        !Object.values(MagistrateTransactionEntityType).includes(asset.type)
      );
    },

    isUndefinedResignation(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return (
        this.isEntityResignation(type, typeGroup, asset) &&
        !Object.values(MagistrateTransactionEntityType).includes(asset.type)
      );
    },

    isUndefinedUpdate(type: number, typeGroup: number, asset: Record<string, any>): boolean {
      return (
        this.isEntityUpdate(type, typeGroup, asset) &&
        !Object.values(MagistrateTransactionEntityType).includes(asset.type)
      );
    },
  },
};
