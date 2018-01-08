import { configOverridesGenerated } from './config-overrides-generated'
// DO NOT DELETE THIS FILE!!!

//==============================================
// Default configurations
//==============================================

const Config = {

	REGION: 'ap-northeast-1',
	PROFILE_IMAGES_S3_BUCKET: 'honeybadger-development-stack-userdatabucket-cyvca9m0mfp',
	API_ENDPOINT: 'https://ry71vmeu7h.execute-api.ap-northeast-1.amazonaws.com/development',
	USER_POOL_ID: 'ap-northeast-1_kORBXCjZK',
	USER_POOL_DOMAIN_NAME: 'honeybadger-development-ap-northeast-1-korbxcjzk.auth.ap-northeast-1.amazoncognito.com',
	USER_POOL_DOMAIN_PREFIX: 'honeybadger-development-ap-northeast-1-korbxcjzk',
	CLIENT_ID: '5i9t64g6p89v9m0tso79i981j8',
	IDENTITY_POOL_ID: 'ap-northeast-1:20bd08ad-28cb-417a-a063-9246b6228c4b',

  DEVELOPER_MODE:             false, // enable to automatically login
  CODE_VERSION:               '1.0.0',
  DEFAULT_USERNAMES:          ['user1', 'admin1'] // default users cannot change their passwords

};

//==============================================



// Merge in the values from the auto-generated config.
// If there are are conflicts, then the values from the
// auto-generated config will override
function mergeConfigurations() {
  for (let attributeName of Object.keys(configOverridesGenerated)) {
    Config[attributeName] = configOverridesGenerated[attributeName];
  }
}

mergeConfigurations();

export { Config }
