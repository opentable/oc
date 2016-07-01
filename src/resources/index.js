'use strict';

module.exports = {
  commands: {
    cli: {
      MOCK_PLUGIN: 'oc mock plugin <pluginName> "some value"',
      UPGRADE: '[sudo] npm i -g oc@{0}'
    }
  },
  errors: {
    registry: {
      BATCH_ROUTE_BODY_NOT_VALID: 'The request body is malformed: {0}',
      BATCH_ROUTE_BODY_NOT_VALID_CODE: 'POST_BODY_NOT_VALID',
      BATCH_ROUTE_COMPONENTS_PROPERTY_MISSING: 'components property is missing',
      BATCH_ROUTE_COMPONENTS_NOT_ARRAY: 'components property is not an array',
      BATCH_ROUTE_COMPONENT_NAME_MISSING: 'component {0} must have name property',
      COMPONENT_EXECUTION_ERROR: 'Component execution error: {0}',
      COMPONENT_NAME_NOT_VALID: 'The component\'s name contains invalid characters. Allowed are alphanumeric, _, -',
      COMPONENT_NAME_NOT_VALID_CODE: 'name_not_valid',
      COMPONENT_NOT_FOUND: 'Component "{0}" not found on {1}',
      COMPONENT_PUBLISHNAME_CONFLICT: 'Component name conflict. Ensure package.json and component\s folder name are equal.',
      COMPONENT_PUBLISHVALIDATION_FAIL: 'Component validation failed: {0}',
      COMPONENT_PUBLISHVALIDATION_FAIL_CODE: 'not_allowed',
      COMPONENT_VERSION_NOT_FOUND: 'Component "{0}" with version "{1}" not found on {2}',
      COMPONENT_VERSION_ALREADY_FOUND: 'Component "{0}" with version "{1}" can\'t be published to {2} because a component with the same name and version already exists',
      COMPONENT_VERSION_ALREADY_FOUND_CODE: 'already_exists',
      COMPONENT_VERSION_NOT_VALID: 'Version "{0}" is not a valid semantic version.',
      COMPONENT_VERSION_NOT_VALID_CODE: 'version_not_valid',
      CONFIGURATION_DEPENDENCIES_MUST_BE_ARRAY: 'Registry configuration is not valid: dependencies must be an array',
      CONFIGURATION_A_DEPENDENCY_NOT_FOUND: 'Registry configuration is not valid: a dependency is not valid.',
      CONFIGURATION_EMPTY: 'Registry configuration is empty',
      CONFIGURATION_ONREQUEST_MUST_BE_FUNCTION: 'Registry configuration is not valid: registry.on\'s callback must be a function',
      CONFIGURATION_PUBLISH_BASIC_AUTH_CREDENTIALS_MISSING: 'Registry configuration is not valid: basic auth requires username and password',
      CONFIGURATION_PUBLISH_AUTH_MODULE_NOT_FOUND: 'Registry configuration is not valid: module "{0}" not found',
      CONFIGURATION_PREFIX_DOES_NOT_END_WITH_SLASH: 'Registry configuration is not valid: prefix should end with "/"',
      CONFIGURATION_PREFIX_DOES_NOT_START_WITH_SLASH: 'Registry configuration is not valid: prefix should start with "/"',
      CONFIGURATION_ROUTES_HANDLER_MUST_BE_FUNCTION: 'Registry configuration is not valid: handler should be a function',
      CONFIGURATION_ROUTES_NOT_VALID: 'Registry configuration is not valid: each route should contain route, method and handler',
      CONFIGURATION_ROUTES_MUST_BE_ARRAY: 'Registry configuration is not valid: routes must be an array',
      CONFIGURATION_S3_NOT_VALID: 'Registry configuration is not valid: S3 configuration is not valid',
      DATA_OBJECT_IS_UNDEFINED: 'data object is undefined',
      DEPENDENCY_NOT_FOUND: 'Component is trying to use unavailable dependencies: {0}',
      DEPENDENCY_NOT_FOUND_CODE: 'DEPENDENCY_MISSING_FROM_REGISTRY',
      LOCAL_PUBLISH_NOT_ALLOWED: 'Components can\'t be published to local repository',
      LOCAL_PUBLISH_NOT_ALLOWED_CODE: 'not_allowed',
      GENERIC_ERROR: 'error!',
      GENERIC_NOT_FOUND: 'not found!',
      MANDATORY_PARAMETER_MISSING: 'Expected mandatory parameters are missing: {0}',
      MANDATORY_PARAMETER_MISSING_CODE: 'missing',
      NODE_CLI_VERSION_IS_NOT_VALID: 'Node CLI version is not valid: Registry {0}, CLI {1}',
      OC_CLI_VERSION_IS_NOT_VALID: 'OC CLI version is not valid: Registry {0}, CLI {1}',
      PARAMETER_WRONG_FORMAT: 'Parameters are not correctly formatted: {0}',
      PARAMETER_WRONG_FORMAT_CODE: 'wrong type',
      PLUGIN_NOT_FOUND: 'Component is trying to use un-registered plugins: {0}',
      PLUGIN_NOT_IMPLEMENTED: 'registry does not implement plugins: {0}',
      PLUGIN_NOT_VALID: 'Plugin {0} is not valid',
      RESOLVING_ERROR: 'component resolving error'
    },
    cli: {
      COMPONENT_HREF_NOT_FOUND: 'The specified path is not a valid component\'s url',
      COMPONENTS_NOT_FOUND: 'no components found in specified path',
      FOLDER_IS_NOT_A_FOLDER: '"{0}" must be a directory',
      FOLDER_NOT_FOUND: '"{0}" not found',
      DEV_FAIL: 'An error happened when initialising the dev runner: {0}',
      INIT_FAIL: 'An error happened when initialising the component: {0}',
      INVALID_CREDENTIALS: 'Invalid credentials',
      MOCK_PLUGIN_IS_NOT_A_FUNCTION: 'Looks like you are trying to register a dynamic mock plugin but the file you specified is not a function',
      NAME_NOT_VALID: 'the name is not valid. Allowed characters are alphanumeric, _, -',
      NODE_CLI_VERSION_NEEDS_UPGRADE: 'the version of used node is invalid. Try to upgrade node to version matching \'{0}\'',
      OC_CLI_VERSION_NEEDS_UPGRADE: 'the version of used OC CLI is invalid. Try to upgrade OC CLI running {0}',
      PACKAGE_CREATION_FAIL: 'An error happened when creating the package: {0}',
      PACKAGING_FAIL: 'an error happened while packaging {0}: {1}',
      PLUGIN_MISSING_FROM_REGISTRY: 'Looks  like you are trying to use a plugin in the dev mode ({0}).\nYou need to mock it doing {1}',
      PLUGIN_MISSING_FROM_COMPONENT: 'Looks like you are trying to use a plugin you haven\'t registered ({0}).' +
        '\nYou need to register it editing your component\'s package.json',
      PORT_IS_BUSY: 'The port {0} is already in use. Specify the optional port parameter to use another port.',
      PUBLISHING_FAIL: 'An error happened when publishing the component: {0}',
      REGISTRY_NOT_FOUND: 'oc registries not found. Run "oc registry add <registry href>"',
      SERVERJS_DEPENDENCY_NOT_DECLARED: 'Missing dependencies from package.json => {0}',
      SERVERJS_PARSING_ERROR: 'Javascript error found in {0} [{1},{2}]: {3}]',
      SERVERJS_REQUIRE_JS_NOT_ALLOWED: 'Requiring local js files is not allowed. Keep it small.',
      SERVERJS_REQUIRE_JSON_NOT_FOUND: '{0} not found. Only json files are require-able.',
      TEMPLATE_NOT_FOUND: 'file {0} not found',
      TEMPLATE_TYPE_NOT_VALID: 'the template is not valid. Allowed values are handlebars and jade'
    },
    generic: 'An error occurred: {0}',
    s3: {
      DIR_NOT_FOUND: 'Directory "{0}" not found',
      DIR_NOT_FOUND_CODE: 'dir_not_found',
      FILE_NOT_FOUND: 'File "{0}" not found',
      FILE_NOT_FOUND_CODE: 'file_not_found'
    }
  },
  messages: {
    cli: {
      CHANGES_DETECTED: 'Changes detected on file: {0}',
      CHECKING_DEPENDENCIES: 'Ensuring dependencies are loaded...',
      COMPONENT_INITED: 'Component "{0}" created',
      COMPRESSING: 'Compressing -> {0}',
      ENTER_PASSWORD: 'Enter password:',
      ENTER_USERNAME: 'Enter username:',
      USING_CREDS: 'Using specified credentials',
      HELP_HINT: 'Hint: Run -h with any command to show the help',
      INSTALLING_DEPS: 'Trying to install missing modules: {0}\nIf you aren\'t connected to the internet, or npm isn\'t configured then this step will fail',
      MOCKED_PLUGIN: 'Mock for plugin has been registered: {0} () => {1}',
      PACKAGING: 'Packaging -> {0}',
      PACKAGING_COMPONENTS: 'Packaging components...',
      PREVIEW_STARTED_AT_URL: 'Component\'s preview started at url: {0}',
      PUBLISHED: 'Published -> {0}',
      PUBLISHING: 'Publishing -> {0}',
      REGISTERING_MOCKED_PLUGINS: 'Registering mocked plugins...',
      REGISTRY_ADDED: 'oc registry added',
      REGISTRY_CREDENTIALS_REQUIRED: 'Registry requires credentials.',
      REGISTRY_LIST: 'oc linked registries:',
      REGISTRY_REMOVED: 'oc registry deleted',
      REGISTRY_STARTING: 'Starting dev registry on {0} ...',
      RETRYING_10_SECONDS: 'Retrying in 10 seconds...',
      SCANNING_COMPONENTS: 'Looking for components...'
    },
    registry: {
      RESOLVING_DEPENDENCIES: 'Resolving dependencies...'
    }
  }
};
