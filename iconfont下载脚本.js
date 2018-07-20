// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.iconfont.cn/collections/detail*
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @require      https://cdn.bootcss.com/jszip/3.1.5/jszip.min.js
// @grant        none
// ==/UserScript==

function run(matching, callback) {
  let wait = setInterval(() => {
    if($(matching).length > 0) {
      callback()
      clearInterval(wait)
    }
  }, 200)
}

(function() {
  'use strict';

  

  // run('.collection-detail .block-icon-list', () => {
  //   $('.collection-detail .block-icon-list li').each((index, node) => {
  //     // if (!$(node).hasClass('selected')) {
  //     //   $(node).find('.icon-cover span')[0].click()
  //     // }
  //     $(node).find('.icon-cover span')[0].click()
  //   })
  // })
})();
