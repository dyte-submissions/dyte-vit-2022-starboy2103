#!/usr/bin/env node

/**
 * ver-check
 * Will check for the version of a dependency in github repository in the .csv file and checks for the version of the specified dependency.
 *
 * @author S.Kowshal <https://developers.google.com/profile/u/117155720131955760399>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
