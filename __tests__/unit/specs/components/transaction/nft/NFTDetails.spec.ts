import { mount, createLocalVue } from "@vue/test-utils";
import CurrencyMixin from "@/mixins/currency";
import MiscMixin from "@/mixins/misc";
import TransactionTypesMixin from "@/mixins/transaction-types";
import StringsMixin from "@/mixins/strings";
import VueTestUtils from "@vue/test-utils";
import NFTTransactionDetails from "@/components/transaction/nft/NFTDetails.vue";
import { CoreTransaction, TypeGroupTransaction } from "@/enums";
import { useI18n } from "../../../../__utils__/i18n";
import Vuex from "vuex";
import merge from "lodash/merge";

describe("Components > Transaction > Details > NFT > NFTDetails", () => {
  const localVue = createLocalVue();
  // localVue.use(Vuex);

  const i18n = useI18n(localVue);

  const mountComponent = (config) => {
    return mount(
      NFTTransactionDetails,
      merge(
        {
          // stubs: {
          //   LinkBlock: "<div></div>",
          //   LinkWallet: "<div></div>",
          // },
          // mocks: {
          //   addressFromPublicKey: async () => "address",
          //   addressFromMultiSignatureAsset: async () => "multi-signature-address",
          //   sanitizeVendorfield: (value) => value,
          // },
          i18n,
          localVue,
          // mixins: [CurrencyMixin, MiscMixin, StringsMixin, TransactionTypesMixin],
          // store,
        },
        config,
      ),
    );
  };

  // const store = new Vuex.Store({
  //   modules: {
  //     network: {
  //       namespaced: true,
  //       getters: {
  //         height: () => 1000000,
  //       },
  //     },
  //     currency: {
  //       namespaced: true,
  //       getters: {
  //         symbol: () => "$",
  //       },
  //     },
  //   },
  //   strict: true,
  // });

  it("should display the transaction details", () => {
    const wrapper = mountComponent({
      propsData: {
        transaction: {
          id: "transaction-id",
          typeGroup: 9000,
          type: 0,
          asset: {
            nftCollection: {
              name: "My collection",
              description: "This is collection description",
            },
          },
        },
      },
    });
    expect(wrapper.find("h3").text()).toStrictEqual("Collection");
  });
});
