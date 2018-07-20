// ==UserScript==
// @name         iconfont SVG文件下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  暂时支持黑白图标下载
// @author       You
// @match        http://www.iconfont.cn/collections/detail*
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @require      https://cdn.bootcss.com/jszip/3.1.5/jszip.min.js
// @grant        none
// ==/UserScript==

// 匹配到某个标签后, 执行一个回调函数
function run(matching, callback) {
  let wait = setInterval(() => {
    if($(matching).length > 0) {
      console.log('完成')
      callback()
      clearInterval(wait)
    }
  }, 200)
}

// 移除购物车
function removeShoppingCart() {
  $('.quick-menu ul li:last').remove()
}

// 生成ui按钮
function generateUi() {
  $($('.block-sub-banner')[0]).append('<div id="script-button"></div>')
  $('#script-button').css({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    right: '23px',
    top: '60px',
    width: '243px',
    height: '50px',
    fontFamily: 'tahoma,"microsoft yahei","微软雅黑"'
  })
  $('#script-button').append('<div class="select-all button">全选</div>')
  $('#script-button').append('<div class="invert-selection button">反选</div>')
  $('#script-button').append('<div class="download-select button">下载选中</div>')
  $('#script-button').append('<div class="download-all button">下载所有</div>')

  $('.button').css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    fontSize: '12px',
    color: '#ffffff',
    borderRadius: '100%'
  })
  $('.select-all').css({backgroundColor: '#707070'})
  $('.select-all').css({backgroundColor: '#25D053'})
  $('.invert-selection').css({backgroundColor: '#ffae00'})
  $('.download-select').css({backgroundColor: '#007cff'})
  $('.download-all').css({backgroundColor: '#25D053'})
  removeShoppingCart()
}

// 绑定点击事件
function bindEvent() {
  $('.select-all').on('click', selectAll)
  $('.invert-selection').on('click', invertSelect)
  $('.download-select').on('click', downloadSelect)
  $('.download-all').on('click', downloadAll)
}

// 执行全选
function selectAll() {
  console.log('执行全选')
  $('.collection-detail .block-icon-list li').each((index, node) => {
    // $($(node).find('.icon-cover span')[0]).trigger('click')
    if (!$(node).hasClass('selected')) {
      $(node).addClass('selected')
    }
  })
}

// 执行反选
function invertSelect() {
  console.log('执行反选')
  $('.collection-detail .block-icon-list li').each((index, node) => {
    // $($(node).find('.icon-cover span')[0]).trigger('click')
    if ($(node).hasClass('selected')) {
      $(node).removeClass('selected')
    } else {
      $(node).addClass('selected')
    }
  })
}

// 下载选中
function downloadSelect() {
  console.log('下载选中')
  let title = $($('.title span')[0]).text()
  let cid = getUrlParam('cid')
  let zip = new JSZip();
  $('.collection-detail .block-icon-list li.selected').each((index, node) => {
    let name = $($(node).find('span.icon-name')[0]).attr('title')
    let content = $(node).find('svg path').attr('d')
    console.log(cid + '_' + name)
    console.log(generateXml(content))
    zip.file(cid + '_' + name + '.svg', generateXml(content))
  })
  zip.generateAsync({type:"blob"}).then((content) => {
    // see FileSaver.js
    // saveAs(content, "example.zip");
    downloadFile(cid + '_' + title + '.zip', content)
  })
  // downloadFile('a.svg', generateXml('M534.8864 0L373.9648 442.112A211.7632 211.7632 0 0 1 486.4 409.6C613.632 409.6 716.8 524.2368 716.8 665.6s-103.168 256-230.4 256S256 806.9632 256 665.6c0-38.5024 7.68-75.0592 21.3504-107.8272L480.4096 0h54.4768zM486.4 870.4C585.3696 870.4 665.6 778.752 665.6 665.6S585.3696 460.8 486.4 460.8 307.2 552.448 307.2 665.6s80.2304 204.8 179.2 204.8z'))
}

// 下载所有
function downloadAll() {
  console.log('下载所有')
  let title = $($('.title span')[0]).text()
  let cid = getUrlParam('cid')
  let zip = new JSZip();
  $('.collection-detail .block-icon-list li').each((index, node) => {
    let name = $($(node).find('span.icon-name')[0]).attr('title')
    let content = $(node).find('svg path').attr('d')
    console.log(cid + '_' + name)
    console.log(generateXml(content))
    zip.file(cid + '_' + name + '.svg', generateXml(content))
  })
  zip.generateAsync({type:"blob"}).then((content) => {
    // see FileSaver.js
    // saveAs(content, "example.zip");
    downloadFile(cid + '_' + title + '.zip', content)
  })
  // downloadFile('a.svg', generateXml('M534.8864 0L373.9648 442.112A211.7632 211.7632 0 0 1 486.4 409.6C613.632 409.6 716.8 524.2368 716.8 665.6s-103.168 256-230.4 256S256 806.9632 256 665.6c0-38.5024 7.68-75.0592 21.3504-107.8272L480.4096 0h54.4768zM486.4 870.4C585.3696 870.4 665.6 778.752 665.6 665.6S585.3696 460.8 486.4 460.8 307.2 552.448 307.2 665.6s80.2304 204.8 179.2 204.8z'))
}

// 获取url参数
function getUrlParam(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  let r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]); return null; //返回参数值
}

// 生成svgXml内容
function generateXml(path) {
  let svgXml = '\<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5554" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="SVG_PATH" fill="#000000"></path></svg>'
  return svgXml.replace('SVG_PATH', path)
}

// 执行下载
function downloadFile(fileName, content){
  let aLink = document.createElement('a')
  let blob = new Blob([content])
  aLink.download = fileName
  aLink.href = URL.createObjectURL(blob)
  aLink.click()
}


(function() {
  'use strict';

  run('.top-tip[style="display: block;"]', () => {
    generateUi()
    bindEvent()
  })
})();
