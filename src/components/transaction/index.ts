import Vue from "vue";

// GUARDIAN
Vue.component("GuardianDetails", require("@/components/transaction/guardian/GuardianDetails").default);
Vue.component("GroupPermissions", require("@/components/transaction/guardian/GroupPermissions").default);
Vue.component("UserPermissions", require("@/components/transaction/guardian/UserPermissions").default);

// NFT
Vue.component("NFTDetails", require("@/components/transaction/nft/NFTDetails").default);
// BASE
Vue.component("NFTRegisterCollection", require("@/components/transaction/nft/base/NFTRegisterCollection").default);
Vue.component("NFTCreate", require("@/components/transaction/nft/base/NFTCreate").default);
Vue.component("NFTTransfer", require("@/components/transaction/nft/base/NFTTransfer").default);
Vue.component("NFTBurn", require("@/components/transaction/nft/base/NFTBurn").default);
// NFTCreateSpecifics
Vue.component("Generic", require("@/components/transaction/nft/base/nftCreate/Generic").default);
Vue.component("AREX", require("@/components/transaction/nft/base/nftCreate/AREX").default);
Vue.component("NascarHeroCards", require("@/components/transaction/nft/base/nftCreate/NascarHeroCards").default);
Vue.component("NascarTeam", require("@/components/transaction/nft/base/nftCreate/NascarTeam").default);
// Exchange
Vue.component("NFTAuction", require("@/components/transaction/nft/exchange/NFTAuction").default);
Vue.component("NFTAuctionCancel", require("@/components/transaction/nft/exchange/NFTAuctionCancel").default);
Vue.component("NFTBid", require("@/components/transaction/nft/exchange/NFTBid").default);
Vue.component("NFTBidCancel", require("@/components/transaction/nft/exchange/NFTBidCancel").default);
Vue.component("NFTAcceptTrade", require("@/components/transaction/nft/exchange/NFTAcceptTrade").default);
