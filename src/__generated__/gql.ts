/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n      query CurrenyValuePullDivAndEx(\n        $key: String!\n        $key2: String!\n        $league: String!\n      ) {\n        div: itemGroupValueChaos(key: $key, league: $league)\n        ex: itemGroupValueChaos(key: $key2, league: $league)\n      }\n    ": types.CurrenyValuePullDivAndExDocument,
    "\n      query GetAllItemGroupTags($league: String!) {\n        itemGroupTags(league: $league)\n      }\n    ": types.GetAllItemGroupTagsDocument,
    "\n      mutation StashViewOneClickPost($input: StashViewSettings!) {\n        stashViewOneClickPost(input: $input)\n      }\n    ": types.StashViewOneClickPostDocument,
    "\n      mutation StashViewOneClickMessage($input: StashViewSettings!) {\n        stashViewOneClickMessage(input: $input)\n      }\n    ": types.StashViewOneClickMessageDocument,
    "\n      query ItemGroupListings(\n        $hashString: String!\n        $league: String!\n        $minStock: Float\n      ) {\n        itemGroupListings(\n          hashString: $hashString\n          league: $league\n          minStock: $minStock\n        ) {\n          poeProfileName\n          listedAtTimestamp\n          quantity\n          listedValue\n        }\n      }\n    ": types.ItemGroupListingsDocument,
    "\n      query FilterableTimeTableTimeseriesSearch(\n        $search: ItemGroupValueTimeseriesSearchInput!\n      ) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              type\n            }\n            itemGroup {\n              hashString\n            }\n          }\n        }\n      }\n    ": types.FilterableTimeTableTimeseriesSearchDocument,
    "\n    mutation TakeStashViewSanpshot($input: StashViewSnapshotInput!) {\n      stashViewSnapshot(input: $input)\n    }\n  ": types.TakeStashViewSanpshotDocument,
    "\n      query StashViewJobStat($jobId: String!) {\n        stashViewJobStat(jobId: $jobId) {\n          id\n          userId\n          status\n          totalStahes\n          timestamp\n        }\n      }\n    ": types.StashViewJobStatDocument,
    "\n      query TftOneClickMessageHistory {\n        tftOneClickMessageHistory {\n          messageId\n          channelId\n          userId\n          timestamp\n          exportType\n          exportSubType\n          rateLimitExpires\n        }\n      }\n    ": types.TftOneClickMessageHistoryDocument,
    "\n      mutation DeleteTftOneClickMessage($messageId: String!) {\n        deleteTftOneClickMessage(messageId: $messageId)\n      }\n    ": types.DeleteTftOneClickMessageDocument,
    "\n  query PassiveAtlasTree($passiveTreeVersion: String!) {\n    atlasTree(passiveTreeVersion: $passiveTreeVersion) {\n      constants {\n        minX\n        minY\n        maxX\n        maxY\n        skillsPerOrbit\n        orbitRadii\n      }\n      nodeMap\n      connectionMap\n    }\n  }\n": types.PassiveAtlasTreeDocument,
    "\n  query PassiveTree($passiveTreeVersion: String!) {\n    passiveTree(passiveTreeVersion: $passiveTreeVersion) {\n      constants {\n        minX\n        minY\n        maxX\n        maxY\n        skillsPerOrbit\n        orbitRadii\n      }\n      nodeMap\n      connectionMap\n    }\n  }\n": types.PassiveTreeDocument,
    "\n      query StashTabs($league: String!, $forcePull: Boolean) {\n        stashTabs(league: $league, forcePull: $forcePull) {\n          id\n          userId\n          league\n          parent\n          name\n          type\n          index\n          flatIndex\n        }\n      }\n    ": types.StashTabsDocument,
    "\n      query StashExportSearchSummary($search: StashViewStashSummarySearch!) {\n        stashViewStashSummary(search: $search) {\n          itemGroups {\n            hashString\n            key\n            tag\n            properties\n            baseType\n            icon\n            inventoryMaxStackSize\n            displayName\n            createdAtTimestamp\n          }\n          items {\n            itemId\n            userId\n            league\n            stashId\n            x\n            y\n            quantity\n            searchableString\n            itemGroupHashString\n            itemGroupTag\n            valueChaos\n            totalValueChaos\n            icon\n          }\n        }\n      }\n    ": types.StashExportSearchSummaryDocument,
    "\n      query StashViewValueSnapshotSeries($league: String!) {\n        stashViewValueSnapshotSeries(league: $league) {\n          stashId\n          values\n          timestamps\n        }\n      }\n    ": types.StashViewValueSnapshotSeriesDocument,
    "\n      query CurrenyValuePullDiv($key: String!, $league: String!) {\n        div: itemGroupValueChaos(key: $key, league: $league)\n      }\n    ": types.CurrenyValuePullDivDocument,
    "\n      mutation ExchangeAuthCode($authCode: String!) {\n        exchangeAuthCode(authCode: $authCode)\n      }\n    ": types.ExchangeAuthCodeDocument,
    "\n      query MyProfile($forcePull: Boolean) {\n        myProfile {\n          userId\n          poeProfileName\n          patreonUserId\n          patreonTier\n          oAuthTokenUpdatedAtTimestamp\n          lastConnectedTimestamp\n          discordUsername\n          discordUserId\n          createdAtTimestamp\n          opaqueKey\n        }\n        checkTftMembership(forcePull: $forcePull)\n      }\n    ": types.MyProfileDocument,
    "\n      mutation UpdateDiscordCode($code: String!) {\n        updateDiscordCode(code: $code)\n      }\n    ": types.UpdateDiscordCodeDocument,
    "\n      mutation UpdatePatreonCode($code: String!) {\n        updatePatreonCode(code: $code)\n      }\n    ": types.UpdatePatreonCodeDocument,
    "\n      query AtlasPassiveTreeSnapshotPopularityAggregation(\n        $search: AtlasPassiveSnapshotSearch!\n      ) {\n        atlasPassiveTreeSnapshotPopularityAggregation(search: $search) {\n          values {\n            key\n            value\n          }\n        }\n      }\n    ": types.AtlasPassiveTreeSnapshotPopularityAggregationDocument,
    "\n      query AtlasTree($passiveTreeVersion: String!) {\n        atlasTree(passiveTreeVersion: $passiveTreeVersion) {\n          nodeMap\n        }\n      }\n    ": types.AtlasTreeDocument,
    "\n  query SingleCharacterCharacterSnapshotsSearch($snapshotId: String!) {\n    characterSnapshot(snapshotId: $snapshotId) {\n      id\n      characterId\n      timestamp\n      characterClass\n      league\n      experience\n      level\n      mainSkillKey\n      current\n      poeCharacter {\n        id\n        userId\n        name\n        createdAtTimestamp\n        lastSnapshotTimestamp\n      }\n      characterPassivesSnapshot {\n        banditChoice\n        pantheonMajor\n        pantheonMinor\n        hashes\n        hashesEx\n        jewelData\n        masteryEffects\n      }\n      characterSnapshotItems {\n        itemId\n        inventoryId\n        socketedInId\n        baseType\n        typeLine\n        name\n        ilvl\n        explicitMods\n        utilityMods\n        properties\n        requirements\n        sockets\n        frameType\n        description\n        icon\n        w\n        h\n        crucible\n        corrupted\n        support\n        socket\n        gemColor\n        mainSkill\n        itemGroupHashString\n        craftedMods\n        implicitMods\n        fracturedMods\n        enchantMods\n        valueChaos\n      }\n      characterSnapshotPobStats {\n        accuracy\n        armour\n        blockChance\n        spellBlockChance\n        chaosResist\n        coldResist\n        dex\n        energyShield\n        fireResist\n        int\n        life\n        lightningResist\n        mana\n        str\n        evasion\n        supression\n        totalDpsWithIgnite\n        pobCode\n      }\n    }\n  }\n": types.SingleCharacterCharacterSnapshotsSearchDocument,
    "\n      query CharacterSnapshotRecords($characterId: String!) {\n        characterSnapshotRecords(characterId: $characterId) {\n          id\n          characterId\n          timestamp\n          experience\n          level\n        }\n      }\n    ": types.CharacterSnapshotRecordsDocument,
    "\n      mutation CharacterTakeCharacterSnapshot($characterId: String!) {\n        takeCharacterSnapshot(characterId: $characterId)\n      }\n    ": types.CharacterTakeCharacterSnapshotDocument,
    "\n      query CustomLadderGroup($groupId: String!) {\n        customLadderGroup(groupId: $groupId) {\n          id\n          name\n          ownerUserId\n          createdAtTimestamp\n          members {\n            poeProfileName\n            userId\n          }\n        }\n      }\n    ": types.CustomLadderGroupDocument,
    "\n  query CharactersPoeCharacters($userId: String!) {\n    poeCharacters(userId: $userId) {\n      id\n      userId\n      name\n      lastLeague\n      createdAtTimestamp\n      lastSnapshotTimestamp\n    }\n  }\n": types.CharactersPoeCharactersDocument,
    "\n  query PullCharacterSnapshotsQuery($search: CharacterSnapshotSearch!) {\n    characterSnapshotsSearch(search: $search) {\n      snapshots {\n        name\n        level\n        characterClass\n        mainSkillKey\n        characterId\n        snapshotId\n        league\n        totalValueDivine\n      }\n    }\n  }\n": types.PullCharacterSnapshotsQueryDocument,
    "\n      query AtlasPassiveSnapshotsByUser($userId: String!) {\n        atlasPassiveSnapshotsByUser(userId: $userId) {\n          results {\n            league\n            userId\n            systemSnapshotTimestamp\n            createdAtTimestamp\n            hashes\n            source\n          }\n        }\n      }\n    ": types.AtlasPassiveSnapshotsByUserDocument,
    "\n      mutation RefreshPoeCharacters {\n        refreshPoeCharacters\n      }\n    ": types.RefreshPoeCharactersDocument,
    "\n      query ViewGroupsCustomLadderGroupsByOwner($ownerId: String!) {\n        customLadderGroupsByOwner(ownerId: $ownerId) {\n          id\n          ownerUserId\n          name\n          createdAtTimestamp\n          members {\n            userId\n            poeProfileName\n          }\n        }\n      }\n    ": types.ViewGroupsCustomLadderGroupsByOwnerDocument,
    "\n      mutation DeleteCustomLadderGroup($groupId: String!) {\n        deleteCustomLadderGroup(groupId: $groupId)\n      }\n    ": types.DeleteCustomLadderGroupDocument,
    "\n      query ProfileByPeoProfileName($poeProfileName: String!) {\n        profileByPoeProfileName(poeProfileName: $poeProfileName) {\n          userId\n          poeProfileName\n        }\n      }\n    ": types.ProfileByPeoProfileNameDocument,
    "\n      mutation Mutation($group: CustomLadderGroupInput!) {\n        updateCustomLadderGroup(group: $group) {\n          id\n          ownerUserId\n          name\n          createdAtTimestamp\n          members {\n            userId\n            poeProfileName\n          }\n        }\n      }\n    ": types.MutationDocument,
    "\n      query EconSearch1($search: ItemGroupValueTimeseriesSearchInput!) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              type\n            }\n            itemGroup {\n              icon\n              displayName\n              key\n              hashString\n            }\n          }\n        }\n      }\n    ": types.EconSearch1Document,
    "\n      query Entries($search: ItemGroupValueTimeseriesSearchInput!) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              type\n            }\n            itemGroup {\n              icon\n              displayName\n              key\n              hashString\n              properties\n            }\n          }\n        }\n      }\n    ": types.EntriesDocument,
    "\n      query EconOneItemGroupSearch(\n        $search: ItemGroupValueTimeseriesSearchInput!\n      ) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              stockRangeStartInclusive\n              type\n            }\n            itemGroup {\n              hashString\n              displayName\n              key\n              tag\n              properties\n            }\n          }\n        }\n      }\n    ": types.EconOneItemGroupSearchDocument,
    "\n      query LeagueActvityTimeseries {\n        leagueActvityTimeseries {\n          values {\n            timestamp\n            key\n            value\n          }\n        }\n      }\n    ": types.LeagueActvityTimeseriesDocument,
    "\n      query TftLiveListings {\n        tftLiveListings {\n          messageId\n          listedAtTimestamp\n          updatedAtTimestamp\n          delistedAtTimestamp\n          tag\n          body\n          properties\n        }\n      }\n    ": types.TftLiveListingsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query CurrenyValuePullDivAndEx(\n        $key: String!\n        $key2: String!\n        $league: String!\n      ) {\n        div: itemGroupValueChaos(key: $key, league: $league)\n        ex: itemGroupValueChaos(key: $key2, league: $league)\n      }\n    "): (typeof documents)["\n      query CurrenyValuePullDivAndEx(\n        $key: String!\n        $key2: String!\n        $league: String!\n      ) {\n        div: itemGroupValueChaos(key: $key, league: $league)\n        ex: itemGroupValueChaos(key: $key2, league: $league)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query GetAllItemGroupTags($league: String!) {\n        itemGroupTags(league: $league)\n      }\n    "): (typeof documents)["\n      query GetAllItemGroupTags($league: String!) {\n        itemGroupTags(league: $league)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation StashViewOneClickPost($input: StashViewSettings!) {\n        stashViewOneClickPost(input: $input)\n      }\n    "): (typeof documents)["\n      mutation StashViewOneClickPost($input: StashViewSettings!) {\n        stashViewOneClickPost(input: $input)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation StashViewOneClickMessage($input: StashViewSettings!) {\n        stashViewOneClickMessage(input: $input)\n      }\n    "): (typeof documents)["\n      mutation StashViewOneClickMessage($input: StashViewSettings!) {\n        stashViewOneClickMessage(input: $input)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query ItemGroupListings(\n        $hashString: String!\n        $league: String!\n        $minStock: Float\n      ) {\n        itemGroupListings(\n          hashString: $hashString\n          league: $league\n          minStock: $minStock\n        ) {\n          poeProfileName\n          listedAtTimestamp\n          quantity\n          listedValue\n        }\n      }\n    "): (typeof documents)["\n      query ItemGroupListings(\n        $hashString: String!\n        $league: String!\n        $minStock: Float\n      ) {\n        itemGroupListings(\n          hashString: $hashString\n          league: $league\n          minStock: $minStock\n        ) {\n          poeProfileName\n          listedAtTimestamp\n          quantity\n          listedValue\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query FilterableTimeTableTimeseriesSearch(\n        $search: ItemGroupValueTimeseriesSearchInput!\n      ) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              type\n            }\n            itemGroup {\n              hashString\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query FilterableTimeTableTimeseriesSearch(\n        $search: ItemGroupValueTimeseriesSearchInput!\n      ) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              type\n            }\n            itemGroup {\n              hashString\n            }\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation TakeStashViewSanpshot($input: StashViewSnapshotInput!) {\n      stashViewSnapshot(input: $input)\n    }\n  "): (typeof documents)["\n    mutation TakeStashViewSanpshot($input: StashViewSnapshotInput!) {\n      stashViewSnapshot(input: $input)\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query StashViewJobStat($jobId: String!) {\n        stashViewJobStat(jobId: $jobId) {\n          id\n          userId\n          status\n          totalStahes\n          timestamp\n        }\n      }\n    "): (typeof documents)["\n      query StashViewJobStat($jobId: String!) {\n        stashViewJobStat(jobId: $jobId) {\n          id\n          userId\n          status\n          totalStahes\n          timestamp\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query TftOneClickMessageHistory {\n        tftOneClickMessageHistory {\n          messageId\n          channelId\n          userId\n          timestamp\n          exportType\n          exportSubType\n          rateLimitExpires\n        }\n      }\n    "): (typeof documents)["\n      query TftOneClickMessageHistory {\n        tftOneClickMessageHistory {\n          messageId\n          channelId\n          userId\n          timestamp\n          exportType\n          exportSubType\n          rateLimitExpires\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation DeleteTftOneClickMessage($messageId: String!) {\n        deleteTftOneClickMessage(messageId: $messageId)\n      }\n    "): (typeof documents)["\n      mutation DeleteTftOneClickMessage($messageId: String!) {\n        deleteTftOneClickMessage(messageId: $messageId)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PassiveAtlasTree($passiveTreeVersion: String!) {\n    atlasTree(passiveTreeVersion: $passiveTreeVersion) {\n      constants {\n        minX\n        minY\n        maxX\n        maxY\n        skillsPerOrbit\n        orbitRadii\n      }\n      nodeMap\n      connectionMap\n    }\n  }\n"): (typeof documents)["\n  query PassiveAtlasTree($passiveTreeVersion: String!) {\n    atlasTree(passiveTreeVersion: $passiveTreeVersion) {\n      constants {\n        minX\n        minY\n        maxX\n        maxY\n        skillsPerOrbit\n        orbitRadii\n      }\n      nodeMap\n      connectionMap\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PassiveTree($passiveTreeVersion: String!) {\n    passiveTree(passiveTreeVersion: $passiveTreeVersion) {\n      constants {\n        minX\n        minY\n        maxX\n        maxY\n        skillsPerOrbit\n        orbitRadii\n      }\n      nodeMap\n      connectionMap\n    }\n  }\n"): (typeof documents)["\n  query PassiveTree($passiveTreeVersion: String!) {\n    passiveTree(passiveTreeVersion: $passiveTreeVersion) {\n      constants {\n        minX\n        minY\n        maxX\n        maxY\n        skillsPerOrbit\n        orbitRadii\n      }\n      nodeMap\n      connectionMap\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query StashTabs($league: String!, $forcePull: Boolean) {\n        stashTabs(league: $league, forcePull: $forcePull) {\n          id\n          userId\n          league\n          parent\n          name\n          type\n          index\n          flatIndex\n        }\n      }\n    "): (typeof documents)["\n      query StashTabs($league: String!, $forcePull: Boolean) {\n        stashTabs(league: $league, forcePull: $forcePull) {\n          id\n          userId\n          league\n          parent\n          name\n          type\n          index\n          flatIndex\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query StashExportSearchSummary($search: StashViewStashSummarySearch!) {\n        stashViewStashSummary(search: $search) {\n          itemGroups {\n            hashString\n            key\n            tag\n            properties\n            baseType\n            icon\n            inventoryMaxStackSize\n            displayName\n            createdAtTimestamp\n          }\n          items {\n            itemId\n            userId\n            league\n            stashId\n            x\n            y\n            quantity\n            searchableString\n            itemGroupHashString\n            itemGroupTag\n            valueChaos\n            totalValueChaos\n            icon\n          }\n        }\n      }\n    "): (typeof documents)["\n      query StashExportSearchSummary($search: StashViewStashSummarySearch!) {\n        stashViewStashSummary(search: $search) {\n          itemGroups {\n            hashString\n            key\n            tag\n            properties\n            baseType\n            icon\n            inventoryMaxStackSize\n            displayName\n            createdAtTimestamp\n          }\n          items {\n            itemId\n            userId\n            league\n            stashId\n            x\n            y\n            quantity\n            searchableString\n            itemGroupHashString\n            itemGroupTag\n            valueChaos\n            totalValueChaos\n            icon\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query StashViewValueSnapshotSeries($league: String!) {\n        stashViewValueSnapshotSeries(league: $league) {\n          stashId\n          values\n          timestamps\n        }\n      }\n    "): (typeof documents)["\n      query StashViewValueSnapshotSeries($league: String!) {\n        stashViewValueSnapshotSeries(league: $league) {\n          stashId\n          values\n          timestamps\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query CurrenyValuePullDiv($key: String!, $league: String!) {\n        div: itemGroupValueChaos(key: $key, league: $league)\n      }\n    "): (typeof documents)["\n      query CurrenyValuePullDiv($key: String!, $league: String!) {\n        div: itemGroupValueChaos(key: $key, league: $league)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation ExchangeAuthCode($authCode: String!) {\n        exchangeAuthCode(authCode: $authCode)\n      }\n    "): (typeof documents)["\n      mutation ExchangeAuthCode($authCode: String!) {\n        exchangeAuthCode(authCode: $authCode)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query MyProfile($forcePull: Boolean) {\n        myProfile {\n          userId\n          poeProfileName\n          patreonUserId\n          patreonTier\n          oAuthTokenUpdatedAtTimestamp\n          lastConnectedTimestamp\n          discordUsername\n          discordUserId\n          createdAtTimestamp\n          opaqueKey\n        }\n        checkTftMembership(forcePull: $forcePull)\n      }\n    "): (typeof documents)["\n      query MyProfile($forcePull: Boolean) {\n        myProfile {\n          userId\n          poeProfileName\n          patreonUserId\n          patreonTier\n          oAuthTokenUpdatedAtTimestamp\n          lastConnectedTimestamp\n          discordUsername\n          discordUserId\n          createdAtTimestamp\n          opaqueKey\n        }\n        checkTftMembership(forcePull: $forcePull)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation UpdateDiscordCode($code: String!) {\n        updateDiscordCode(code: $code)\n      }\n    "): (typeof documents)["\n      mutation UpdateDiscordCode($code: String!) {\n        updateDiscordCode(code: $code)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation UpdatePatreonCode($code: String!) {\n        updatePatreonCode(code: $code)\n      }\n    "): (typeof documents)["\n      mutation UpdatePatreonCode($code: String!) {\n        updatePatreonCode(code: $code)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query AtlasPassiveTreeSnapshotPopularityAggregation(\n        $search: AtlasPassiveSnapshotSearch!\n      ) {\n        atlasPassiveTreeSnapshotPopularityAggregation(search: $search) {\n          values {\n            key\n            value\n          }\n        }\n      }\n    "): (typeof documents)["\n      query AtlasPassiveTreeSnapshotPopularityAggregation(\n        $search: AtlasPassiveSnapshotSearch!\n      ) {\n        atlasPassiveTreeSnapshotPopularityAggregation(search: $search) {\n          values {\n            key\n            value\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query AtlasTree($passiveTreeVersion: String!) {\n        atlasTree(passiveTreeVersion: $passiveTreeVersion) {\n          nodeMap\n        }\n      }\n    "): (typeof documents)["\n      query AtlasTree($passiveTreeVersion: String!) {\n        atlasTree(passiveTreeVersion: $passiveTreeVersion) {\n          nodeMap\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SingleCharacterCharacterSnapshotsSearch($snapshotId: String!) {\n    characterSnapshot(snapshotId: $snapshotId) {\n      id\n      characterId\n      timestamp\n      characterClass\n      league\n      experience\n      level\n      mainSkillKey\n      current\n      poeCharacter {\n        id\n        userId\n        name\n        createdAtTimestamp\n        lastSnapshotTimestamp\n      }\n      characterPassivesSnapshot {\n        banditChoice\n        pantheonMajor\n        pantheonMinor\n        hashes\n        hashesEx\n        jewelData\n        masteryEffects\n      }\n      characterSnapshotItems {\n        itemId\n        inventoryId\n        socketedInId\n        baseType\n        typeLine\n        name\n        ilvl\n        explicitMods\n        utilityMods\n        properties\n        requirements\n        sockets\n        frameType\n        description\n        icon\n        w\n        h\n        crucible\n        corrupted\n        support\n        socket\n        gemColor\n        mainSkill\n        itemGroupHashString\n        craftedMods\n        implicitMods\n        fracturedMods\n        enchantMods\n        valueChaos\n      }\n      characterSnapshotPobStats {\n        accuracy\n        armour\n        blockChance\n        spellBlockChance\n        chaosResist\n        coldResist\n        dex\n        energyShield\n        fireResist\n        int\n        life\n        lightningResist\n        mana\n        str\n        evasion\n        supression\n        totalDpsWithIgnite\n        pobCode\n      }\n    }\n  }\n"): (typeof documents)["\n  query SingleCharacterCharacterSnapshotsSearch($snapshotId: String!) {\n    characterSnapshot(snapshotId: $snapshotId) {\n      id\n      characterId\n      timestamp\n      characterClass\n      league\n      experience\n      level\n      mainSkillKey\n      current\n      poeCharacter {\n        id\n        userId\n        name\n        createdAtTimestamp\n        lastSnapshotTimestamp\n      }\n      characterPassivesSnapshot {\n        banditChoice\n        pantheonMajor\n        pantheonMinor\n        hashes\n        hashesEx\n        jewelData\n        masteryEffects\n      }\n      characterSnapshotItems {\n        itemId\n        inventoryId\n        socketedInId\n        baseType\n        typeLine\n        name\n        ilvl\n        explicitMods\n        utilityMods\n        properties\n        requirements\n        sockets\n        frameType\n        description\n        icon\n        w\n        h\n        crucible\n        corrupted\n        support\n        socket\n        gemColor\n        mainSkill\n        itemGroupHashString\n        craftedMods\n        implicitMods\n        fracturedMods\n        enchantMods\n        valueChaos\n      }\n      characterSnapshotPobStats {\n        accuracy\n        armour\n        blockChance\n        spellBlockChance\n        chaosResist\n        coldResist\n        dex\n        energyShield\n        fireResist\n        int\n        life\n        lightningResist\n        mana\n        str\n        evasion\n        supression\n        totalDpsWithIgnite\n        pobCode\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query CharacterSnapshotRecords($characterId: String!) {\n        characterSnapshotRecords(characterId: $characterId) {\n          id\n          characterId\n          timestamp\n          experience\n          level\n        }\n      }\n    "): (typeof documents)["\n      query CharacterSnapshotRecords($characterId: String!) {\n        characterSnapshotRecords(characterId: $characterId) {\n          id\n          characterId\n          timestamp\n          experience\n          level\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation CharacterTakeCharacterSnapshot($characterId: String!) {\n        takeCharacterSnapshot(characterId: $characterId)\n      }\n    "): (typeof documents)["\n      mutation CharacterTakeCharacterSnapshot($characterId: String!) {\n        takeCharacterSnapshot(characterId: $characterId)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query CustomLadderGroup($groupId: String!) {\n        customLadderGroup(groupId: $groupId) {\n          id\n          name\n          ownerUserId\n          createdAtTimestamp\n          members {\n            poeProfileName\n            userId\n          }\n        }\n      }\n    "): (typeof documents)["\n      query CustomLadderGroup($groupId: String!) {\n        customLadderGroup(groupId: $groupId) {\n          id\n          name\n          ownerUserId\n          createdAtTimestamp\n          members {\n            poeProfileName\n            userId\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CharactersPoeCharacters($userId: String!) {\n    poeCharacters(userId: $userId) {\n      id\n      userId\n      name\n      lastLeague\n      createdAtTimestamp\n      lastSnapshotTimestamp\n    }\n  }\n"): (typeof documents)["\n  query CharactersPoeCharacters($userId: String!) {\n    poeCharacters(userId: $userId) {\n      id\n      userId\n      name\n      lastLeague\n      createdAtTimestamp\n      lastSnapshotTimestamp\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PullCharacterSnapshotsQuery($search: CharacterSnapshotSearch!) {\n    characterSnapshotsSearch(search: $search) {\n      snapshots {\n        name\n        level\n        characterClass\n        mainSkillKey\n        characterId\n        snapshotId\n        league\n        totalValueDivine\n      }\n    }\n  }\n"): (typeof documents)["\n  query PullCharacterSnapshotsQuery($search: CharacterSnapshotSearch!) {\n    characterSnapshotsSearch(search: $search) {\n      snapshots {\n        name\n        level\n        characterClass\n        mainSkillKey\n        characterId\n        snapshotId\n        league\n        totalValueDivine\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query AtlasPassiveSnapshotsByUser($userId: String!) {\n        atlasPassiveSnapshotsByUser(userId: $userId) {\n          results {\n            league\n            userId\n            systemSnapshotTimestamp\n            createdAtTimestamp\n            hashes\n            source\n          }\n        }\n      }\n    "): (typeof documents)["\n      query AtlasPassiveSnapshotsByUser($userId: String!) {\n        atlasPassiveSnapshotsByUser(userId: $userId) {\n          results {\n            league\n            userId\n            systemSnapshotTimestamp\n            createdAtTimestamp\n            hashes\n            source\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation RefreshPoeCharacters {\n        refreshPoeCharacters\n      }\n    "): (typeof documents)["\n      mutation RefreshPoeCharacters {\n        refreshPoeCharacters\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query ViewGroupsCustomLadderGroupsByOwner($ownerId: String!) {\n        customLadderGroupsByOwner(ownerId: $ownerId) {\n          id\n          ownerUserId\n          name\n          createdAtTimestamp\n          members {\n            userId\n            poeProfileName\n          }\n        }\n      }\n    "): (typeof documents)["\n      query ViewGroupsCustomLadderGroupsByOwner($ownerId: String!) {\n        customLadderGroupsByOwner(ownerId: $ownerId) {\n          id\n          ownerUserId\n          name\n          createdAtTimestamp\n          members {\n            userId\n            poeProfileName\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation DeleteCustomLadderGroup($groupId: String!) {\n        deleteCustomLadderGroup(groupId: $groupId)\n      }\n    "): (typeof documents)["\n      mutation DeleteCustomLadderGroup($groupId: String!) {\n        deleteCustomLadderGroup(groupId: $groupId)\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query ProfileByPeoProfileName($poeProfileName: String!) {\n        profileByPoeProfileName(poeProfileName: $poeProfileName) {\n          userId\n          poeProfileName\n        }\n      }\n    "): (typeof documents)["\n      query ProfileByPeoProfileName($poeProfileName: String!) {\n        profileByPoeProfileName(poeProfileName: $poeProfileName) {\n          userId\n          poeProfileName\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      mutation Mutation($group: CustomLadderGroupInput!) {\n        updateCustomLadderGroup(group: $group) {\n          id\n          ownerUserId\n          name\n          createdAtTimestamp\n          members {\n            userId\n            poeProfileName\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation Mutation($group: CustomLadderGroupInput!) {\n        updateCustomLadderGroup(group: $group) {\n          id\n          ownerUserId\n          name\n          createdAtTimestamp\n          members {\n            userId\n            poeProfileName\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query EconSearch1($search: ItemGroupValueTimeseriesSearchInput!) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              type\n            }\n            itemGroup {\n              icon\n              displayName\n              key\n              hashString\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query EconSearch1($search: ItemGroupValueTimeseriesSearchInput!) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              type\n            }\n            itemGroup {\n              icon\n              displayName\n              key\n              hashString\n            }\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query Entries($search: ItemGroupValueTimeseriesSearchInput!) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              type\n            }\n            itemGroup {\n              icon\n              displayName\n              key\n              hashString\n              properties\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query Entries($search: ItemGroupValueTimeseriesSearchInput!) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              type\n            }\n            itemGroup {\n              icon\n              displayName\n              key\n              hashString\n              properties\n            }\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query EconOneItemGroupSearch(\n        $search: ItemGroupValueTimeseriesSearchInput!\n      ) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              stockRangeStartInclusive\n              type\n            }\n            itemGroup {\n              hashString\n              displayName\n              key\n              tag\n              properties\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query EconOneItemGroupSearch(\n        $search: ItemGroupValueTimeseriesSearchInput!\n      ) {\n        itemGroupValueTimeseriesSearch(search: $search) {\n          results {\n            series {\n              entries {\n                timestamp\n                value\n              }\n              stockRangeStartInclusive\n              type\n            }\n            itemGroup {\n              hashString\n              displayName\n              key\n              tag\n              properties\n            }\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query LeagueActvityTimeseries {\n        leagueActvityTimeseries {\n          values {\n            timestamp\n            key\n            value\n          }\n        }\n      }\n    "): (typeof documents)["\n      query LeagueActvityTimeseries {\n        leagueActvityTimeseries {\n          values {\n            timestamp\n            key\n            value\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query TftLiveListings {\n        tftLiveListings {\n          messageId\n          listedAtTimestamp\n          updatedAtTimestamp\n          delistedAtTimestamp\n          tag\n          body\n          properties\n        }\n      }\n    "): (typeof documents)["\n      query TftLiveListings {\n        tftLiveListings {\n          messageId\n          listedAtTimestamp\n          updatedAtTimestamp\n          delistedAtTimestamp\n          tag\n          body\n          properties\n        }\n      }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;