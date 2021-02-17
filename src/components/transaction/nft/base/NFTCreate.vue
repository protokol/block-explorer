<template>
  <Fragment>
    <!--    <section class="py-5 mb-5 page-section md:py-10">-->
    <!--      <h3 class="px-5 sm:px-10">{{ $t(`TRANSACTION.NFT_CREATE.TOKEN`) }}</h3>-->
    <!--      <br />-->
    <!--      <div class="px-5 sm:px-10">-->
    <!--        <div class="list-row-border-b">-->
    <!--          <div class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.COLLECTION_ID`) }}</div>-->
    <!--          <LinkTransaction :id="transaction.asset.nftToken.collectionId" :truncate-id="false" />-->
    <!--        </div>-->
    <!--        <template v-if="collectionName === 'Nascar Team'">-->
    <!--          <br />-->
    <!--          <h3 class="mb-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.COLLECTION_NAME`) }}</h3>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.TEAM_NAME`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.teamName }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.ipfsHashImage" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.TEAM_LOGO`) }}</h4>-->
    <!--            <img :src="getImage(transaction.asset.nftToken.attributes.ipfsHashImage)" alt="" />-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <div>-->
    <!--              <h4 class="mr-4 mb-2">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.DESCRIPTION`) }}</h4>-->
    <!--              <div>{{ transaction.asset.nftToken.attributes.description }}</div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.CAR_TYPE`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.carType }}</div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <div>-->
    <!--              <h4 class="mr-4 mb-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.DRIVERS`) }}</h4>-->
    <!--              <div v-for="driver in transaction.asset.nftToken.attributes.drivers" :key="driver" class="mb-4">-->
    <!--                <div>{{ driver.name }}</div>-->
    <!--                <div>Number {{ driver.number }}</div>-->
    <!--                <img v-if="driver.ipfsHashImage" :src="getImage(driver.ipfsHashImage)" alt="" />-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.TEAM_OWNER`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.teamOwner }}</div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.HEADQUARTERS`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.headquarters }}</div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.WEBSITE`) }}</h4>-->
    <!--            <a :href="transaction.asset.nftToken.attributes.website">{{-->
    <!--              transaction.asset.nftToken.attributes.website-->
    <!--            }}</a>-->
    <!--          </div>-->
    <!--        </template>-->

    <!--        <template v-else-if="collectionName === 'Nascar Hero Cards'">-->
    <!--          <br />-->
    <!--          <h3 class="mb-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.COLLECTION_NAME`) }}</h3>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.LOCATION`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.issuedLocation }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.ipfsHashImageFront" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">-->
    <!--              {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.HERO_CARD_FRONT`) }}-->
    <!--            </h4>-->
    <!--            <img :src="getImage(transaction.asset.nftToken.attributes.ipfsHashImageFront)" alt="" />-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.ipfsHashImageBack" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.HERO_CARD_BACK`) }}</h4>-->
    <!--            <img :src="getImage(transaction.asset.nftToken.attributes.ipfsHashImageBack)" alt="" />-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.DATE`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.issuedDate }}</div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.IS_SIGNED`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.signed }}</div>-->
    <!--          </div>-->
    <!--        </template>-->

    <!--        <template v-else-if="collectionName === 'AREX Defense Handguns'">-->
    <!--          <br />-->
    <!--          <h3 class="mb-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.COLLECTION_NAME`) }}</h3>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.NAME`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.name }}</div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4 mb-2">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.DESCRIPTION`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.description }}</div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.SERIAL_NUMBER`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.serialNumber }}</div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.CALIBER`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.caliber }}</div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.LENGTH`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.length }}</div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.HEIGHT`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.height }}</div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.WIDTH`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.width }}</div>-->
    <!--          </div>-->
    <!--          <div class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.BARREL_LENGTH`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.barrelLength }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.weight" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.WEIGHT`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.weight }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.weightWithMag" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.WEIGHT_WITH_MAG`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.weightWithMag }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.frameColors" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.FRAME_COLORS`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.frameColors }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.slide" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.SLIDE`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.slide }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.slights" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.SLIGHTS`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.slights }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.frame" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.FRAME`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.frame }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.firingPinSafety" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.FIRING_PIN_SAFETY`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.firingPinSafety }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.triggerSafety" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.TRIGGER_SAFETY`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.triggerSafety }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.ambidextrousManualSafety" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.AMBIDEXTROUS_MANUAL_SAFETY`) }}</h4>-->
    <!--            <div>{{ transaction.asset.nftToken.attributes.ambidextrousManualSafety }}</div>-->
    <!--          </div>-->
    <!--          <div v-if="transaction.asset.nftToken.attributes.ipfsImageHash" class="list-row-border-b">-->
    <!--            <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.IMAGE`) }}</h4>-->
    <!--            <img :src="getImage(transaction.asset.nftToken.attributes.ipfsImageHash)" alt="" />-->
    <!--          </div>-->
    <!--        </template>-->
    <!--    </div>-->
    <!--    </section>-->

    <section class="py-5 mb-5 page-section md:py-10">
      <!--      <div class="list-row-border-b">-->
      <!--        <div>-->
      <!--          <div class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.TOKEN_ATTRIBUTES`) }}</div>-->
      <!--          <vue-json-pretty style="margin-top: 16px;" :data="transaction.asset.nftToken.attributes">-->
      <!--          </vue-json-pretty>-->
      <!--        </div>-->
      <h3 class="px-5 sm:px-10">{{ $t(`TRANSACTION.NFT_CREATE.TOKEN`) }}</h3>
      <br />
      <div class="px-5 sm:px-10">
        <div class="list-row-border-b">
          <div class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.COLLECTION_ID`) }}</div>
          <LinkTransaction :id="transaction.asset.nftToken.collectionId" :truncate-id="false" />
        </div>

        <div class="list-row-border-b">
          <div class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.COLLECTION_NAME`) }}</div>
          <h4>{{ collectionName }}</h4>
        </div>



      </div>
      <!--        <div class="px-5 sm:px-10">-->
      <!--          <div class="list-row-border-b">-->
      <!--            <div class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.COLLECTION_ID`) }}</div>-->
      <!--            <LinkTransaction :id="transaction.asset.nftToken.collectionId" :truncate-id="false" />-->
      <!--          </div>-->
      <!--                <template v-if="collectionName === 'Nascar Team'">-->
      <!--                  <br />-->
      <!--                  <h3 class="mb-4">-->
      <!--                    {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.COLLECTION_NAME`) }}-->
      <!--                  </h3>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.TEAM_NAME`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.teamName }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.ipfsHashImage" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.TEAM_LOGO`) }}</h4>-->
      <!--                    <img :src="getImage(transaction.asset.nftToken.attributes.ipfsHashImage)" alt="" />-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <div>-->
      <!--                      <h4 class="mr-4 mb-2">-->
      <!--                        {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.DESCRIPTION`) }}-->
      <!--                      </h4>-->
      <!--                      <div>{{ transaction.asset.nftToken.attributes.description }}</div>-->
      <!--                    </div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.CAR_TYPE`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.carType }}</div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <div>-->
      <!--                      <h4 class="mr-4 mb-4">-->
      <!--                        {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.DRIVERS`) }}-->
      <!--                      </h4>-->
      <!--                      <div v-for="driver in transaction.asset.nftToken.attributes.drivers" :key="driver" class="mb-4">-->
      <!--                        <div>{{ driver.name }}</div>-->
      <!--                        <div>Number {{ driver.number }}</div>-->
      <!--                        <img v-if="driver.ipfsHashImage" :src="getImage(driver.ipfsHashImage)" alt="" />-->
      <!--                      </div>-->
      <!--                    </div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.TEAM_OWNER`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.teamOwner }}</div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">-->
      <!--                      {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.HEADQUARTERS`) }}-->
      <!--                    </h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.headquarters }}</div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_TEAM.WEBSITE`) }}</h4>-->
      <!--                    <a :href="transaction.asset.nftToken.attributes.website">{{-->
      <!--                      transaction.asset.nftToken.attributes.website-->
      <!--                    }}</a>-->
      <!--                  </div>-->
      <!--                </template>-->

      <!--                <template v-else-if="collectionName === 'Nascar Hero Cards'">-->
      <!--                  <br />-->
      <!--                  <h3 class="mb-4">-->
      <!--                    {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.COLLECTION_NAME`) }}-->
      <!--                  </h3>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">-->
      <!--                      {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.LOCATION`) }}-->
      <!--                    </h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.issuedLocation }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.ipfsHashImageFront" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">-->
      <!--                      {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.HERO_CARD_FRONT`) }}-->
      <!--                    </h4>-->
      <!--                    <img :src="getImage(transaction.asset.nftToken.attributes.ipfsHashImageFront)" alt="" />-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.ipfsHashImageBack" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">-->
      <!--                      {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.HERO_CARD_BACK`) }}-->
      <!--                    </h4>-->
      <!--                    <img :src="getImage(transaction.asset.nftToken.attributes.ipfsHashImageBack)" alt="" />-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.DATE`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.issuedDate }}</div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">-->
      <!--                      {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.NASCAR_HERO_CARD.IS_SIGNED`) }}-->
      <!--                    </h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.signed }}</div>-->
      <!--                  </div>-->
      <!--                </template>-->

      <!--                <template v-else-if="collectionName === 'AREX Defense Handguns'">-->
      <!--                  <br />-->
      <!--                  <h3 class="mb-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.COLLECTION_NAME`) }}</h3>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.NAME`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.name }}</div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4 mb-2">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.DESCRIPTION`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.description }}</div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.SERIAL_NUMBER`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.serialNumber }}</div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.CALIBER`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.caliber }}</div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.LENGTH`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.length }}</div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.HEIGHT`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.height }}</div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.WIDTH`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.width }}</div>-->
      <!--                  </div>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.BARREL_LENGTH`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.barrelLength }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.weight" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.WEIGHT`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.weight }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.weightWithMag" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.WEIGHT_WITH_MAG`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.weightWithMag }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.frameColors" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.FRAME_COLORS`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.frameColors }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.slide" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.SLIDE`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.slide }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.slights" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.SLIGHTS`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.slights }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.frame" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.FRAME`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.frame }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.firingPinSafety" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.FIRING_PIN_SAFETY`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.firingPinSafety }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.triggerSafety" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.TRIGGER_SAFETY`) }}</h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.triggerSafety }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.ambidextrousManualSafety" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">-->
      <!--                      {{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.AMBIDEXTROUS_MANUAL_SAFETY`) }}-->
      <!--                    </h4>-->
      <!--                    <div>{{ transaction.asset.nftToken.attributes.ambidextrousManualSafety }}</div>-->
      <!--                  </div>-->
      <!--                  <div v-if="transaction.asset.nftToken.attributes.ipfsImageHash" class="list-row-border-b">-->
      <!--                    <h4 class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.SPECIFIC_COLLECTION.AREX.IMAGE`) }}</h4>-->
      <!--                    <img :src="getImage(transaction.asset.nftToken.attributes.ipfsImageHash)" alt="" />-->
      <!--                  </div>-->
      <!--                </template>-->

      <!--                <template v-else>-->
      <!--                  <div class="list-row-border-b">-->
      <!--                    <div>-->
      <!--                      <div class="mr-4">{{ $t(`TRANSACTION.NFT_CREATE.TOKEN_ATTRIBUTES`) }}</div>-->
      <!--                      <vue-json-pretty style="margin-top: 16px;" :data="transaction.asset.nftToken.attributes">-->
      <!--                      </vue-json-pretty>-->
      <!--                    </div>-->
      <!--                  </div>-->
      <!--                </template>-->
      <!--              </div>-->
      <!--            </template>-->
      <!--        </div>-->
      <!--      </div>-->
    </section>
  </Fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITransaction } from "@/interfaces";
import VueJsonPretty from "vue-json-pretty";
import Fragment from "@/components/utils/Fragment.vue";
import { NFTService } from "@/services";

@Component({
  components: {
    VueJsonPretty,
    Fragment,
  },
})
export default class NFTCreate extends Vue {
  @Prop({ required: true })
  public transaction: ITransaction;

  private collectionName = "";

  public async mounted(): Promise<void> {
    this.collectionName = (await NFTService.getCollection(this.transaction.asset.nftToken.collectionId)).name;
    console.log(this.collectionName);
  }
}
</script>
