// ==UserScript==
// @name        Old Reddit Redirect
// @version     0.1.2
// @description Redirects you to new.reddit.com
// @author      github.com/KuryKat
// @match       *://*.reddit.com/*
// @exclude     /^https?://[a-z]{2}\.reddit\.com/*
// @exclude     *out.reddit.com/*
// @exclude     *://*.reddit.com/gallery/*
// @exclude     *://*.reddit.com/media*
// @run-at      document-start
// @updateURL   https://github.com/KuryKat/New-Reddit-Redirect/raw/main/oldRedditRedirect.user.js
// @downloadURL https://github.com/KuryKat/New-Reddit-Redirect/raw/main/oldRedditRedirect.user.js
// @grant       none
// ==/UserScript==

// Enforce strict mode for better code quality
'use strict';

// Declare constant for current URL
const currentUrl = window.location.href;

// Declare constant for new reddit URL
const newRedditUrl = 'new.reddit.com';

// Check if the current URL does not include new.reddit.com
if (!currentUrl.includes(newRedditUrl)) {

  // Use regex literal and constant for new URL
  const newUrl = currentUrl.replace(/(www\.)?reddit\.com/, oldRedditUrl);

  // Redirect to new URL without history entry
  window.location.replace(newUrl);
}
