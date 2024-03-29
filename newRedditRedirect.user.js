// ==UserScript==
// @name        New Reddit Redirect
// @version     1.1.4
// @description Redirects you to new.reddit.com
// @author      github.com/KuryKat
// @match       *://*.reddit.com/*
// @exclude     /^https?://[a-z]{2}\.reddit\.com/*
// @exclude     *out.reddit.com/*
// @exclude     *://*.reddit.com/gallery*
// @exclude     *://*.reddit.com/media*
// @exclude     *://*.reddit.com/account*
// @exclude     *://*.reddit.com/users*
// @exclude     *://*.reddit.com/ads*
// @exclude     *://ads.reddit.com/*
// @exclude     *://chat.reddit.com/*
// @run-at      document-start
// @updateURL   https://github.com/KuryKat/New-Reddit-Redirect/raw/main/newRedditRedirect.user.js
// @downloadURL https://github.com/KuryKat/New-Reddit-Redirect/raw/main/newRedditRedirect.user.js
// @grant       none
// ==/UserScript==

// Enforce strict mode for better code quality
'use strict';

// Declare constant for current URL
const currentUrl = window.location.href;

// Declare constant for new reddit URL
const newRedditUrl = 'http://new.reddit.com';

// Check if the current URL does not include new.reddit.com
if (!currentUrl.includes("new.reddit.com")) {

  // Avoid redirect when not logged in (fix infinite reloads)
  if (document.getElementById("login-button") != null) {
    return;
  }

  // Use regex literal and constant for new URL
  const newUrl = currentUrl.replace(/^https?:\/\/(.*?\.)?reddit.com/, newRedditUrl);

  // Redirect to new URL without history entry
  window.location.replace(newUrl);
}
