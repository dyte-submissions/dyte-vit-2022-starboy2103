#!/usr/bin/env node

/**
 * ver-check
 * Will check for the version of a dependency in github repository in the .csv file and checks for the version of the specified dependency.
 *
 * @author S.Kowshal <https://developers.google.com/profile/u/117155720131955760399>
 */

const par=require('./server/csvFile')

const cli = require('./utils/cli');

const input = cli.input;

(async () => {
	input.includes(`help`) && cli.showHelp(0);
	par(input[0])
})();
