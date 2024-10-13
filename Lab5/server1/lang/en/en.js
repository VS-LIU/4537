/**
 * COMP4537 - Lab 5
 * Names: Andy Lau #A01192350 - Victor Liu #A00971668
 * Group: C1
 * Date: 2024-10-13
 *
 * en.js
 */

const RESPONSE_STATUS = (status) => `Response status: ${status}`;
const STATUS_405 = (status) => `${status} (cannot access the requested page)`;

const TITLE_SECTION = {
  TEST_DB: `Test Database`,
  SEND_QUERY: `New Database Query`,
};

const DESCRIPTION_SECTION = {
  TEST_DB: `Clicking the <code>Test</code> button will attempt to run an <code>INSERT</code> query in the database. The result response will be printed below.`,
  SEND_QUERY: `Write and send SQL queries to the database.The result response will be printed below.`,
};

const BUTTON = {
  TEST: `Test`,
  SEND_QUERY: `Send Query`,
};

const SEND_QUERY_PLACE_HOLDER = `Enter SQL query`;

const PAGE_TITLE = "COMP4537 - Lab5 - Team C1";

const LAB_HEADER = "COMP4537 - Lab 5: DB Intro";

const TEAM_MEMBERS = "Team C1: Andy Lau #A01192350, Victor Liu #A00971668";

const SUBMIT_DATE = "Date: 2024-10-13";

const DENY_QUERY = `Permission Denied: Only SELECT and INSERT queries allowed.`;

const UNSUPPORTED_QUERY = `Unsupported query type.`;

export default {
  RESPONSE_STATUS,
  STATUS_405,
  TITLE_SECTION,
  DESCRIPTION_SECTION,
  BUTTON,
  SEND_QUERY_PLACE_HOLDER,
  PAGE_TITLE,
  LAB_HEADER,
  TEAM_MEMBERS,
  SUBMIT_DATE,
  DENY_QUERY,
  UNSUPPORTED_QUERY,
};
