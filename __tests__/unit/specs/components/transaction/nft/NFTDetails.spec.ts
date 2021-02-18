import { mount, createLocalVue } from "@vue/test-utils";
import NFTDetails from "@/components/transaction/nft/NFTDetails.vue";

import { useI18n } from "../../../../__utils__/i18n";
import merge from "lodash/merge";
import Fragment from "@/components/utils/Fragment.vue";

describe("Components > Transaction > Details > NFT > NFTDetails", () => {
  const localVue = createLocalVue();

  const i18n = useI18n(localVue);

  const mountComponent = (config) => {
    return mount(
      NFTDetails,
      merge(
        {
          stubs: {
            Fragment: Fragment,
            NFTRegisterCollection: "<div></div>",
          },
          i18n,
          localVue,
        },
        config,
      ),
    );
  };

  it("should display the collections details", () => {
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
    expect(() => wrapper).not.toThrow();
  });
});
