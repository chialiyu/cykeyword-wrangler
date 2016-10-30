/**
 * Created by z037900 on 10/29/16.
 */
'use strict';

var DBWrapper = require('node-dbi').DBWrapper;

var dbWrapper = new DBWrapper('sqlite3', {'path': '/var/tmp/keyword-wrangler.test.sqlite'});
dbWrapper.connect();
module.exports = dbWrapper;