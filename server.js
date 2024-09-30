/**
 * COMP4537 - Lab3
 * Victor Liu - A00971668 - set C
 * 
 * Server file for COMP4537
 */

var http = require('http');
var fs = require('fs');
const path = require('path');
const url = require('url');
const { getDate, convertDateToString, formatMessageGreeting } = require('./Lab3/modules/utils');
const { greeting } = require('./Lab3/lang/en/en');
