const defaultConfigs = {
  config: process.cwd() + '/lqd.config.js',
  from: 0, // 0-th account
};

/**
 * Merge default options, config file, and explicit config
 * into a single config and in the order above
 */
function getConfigs(options) {
  delete options.argv;
  return Object.assign(defaultConfigs, options);
}


function deploy(options) {
  const sol = options.argv.remain[1];
  const configs = getConfigs(options);


}

module.exports = { deploy };
