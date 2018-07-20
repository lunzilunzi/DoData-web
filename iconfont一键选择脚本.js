function downloadSVG() {
  let nodeList = document.querySelectorAll(".collection-detail > .block-icon-list > li")
  let size = parseInt(nodeList.length / 20) + 1
  let run = false

  for (let i = 0; i < size; i++) {
    while (run) {}

    for (let j = 0; j < 20; j++) {
      let index = 20 * i + j
      if (nodeList[index] === undefined || nodeList[index] === undefined) {
        break
      }

      let node = nodeList[index]
      node.click()
    }
    setTimeout(() => {
      document
        .querySelector('.block-car-container')
        .querySelector('.car-manage')
        .querySelector('.car-manage-sucai')
        .querySelector('.car-manage-bottom')
        .querySelector('span')
        .click()
      setTimeout(() => {
        for (let j = 0; j < 20; j++) {
          let index = 20 * i + j
          if (nodeList[index] === undefined || nodeList[index] === undefined) {
            break
          }

          let node = nodeList[index]
          node.click()
        }
        run = false
      }, 1000)
    }, 10000)
    run = true
  }
}
function sleep(n) {
  let start = new Date().getTime()
  while(true)  if(new Date().getTime()-start > n) break
}

document.querySelectorAll(".collection-detail > .block-icon-list > li").forEach(node => {
  node.querySelectorAll('.icon-cover > span')[2].click()
  // console.log(document.querySelector('.mp-e2e-dialog .download-btns span'))
  // sleep(500)
  // console.log(document.querySelector('.mp-e2e-dialog .download-btns span'))
  // document.querySelector('.mp-e2e-dialog .download-btns span').click()
  // sleep(2000)
})
$('.collection-detail .block-icon-list li').each((index, node) => {
  $($(node).find('.icon-cover span')[0]).trigger('click')
  // console.log($($(node).find('.icon-cover span')))
  // console.log(node)
  // console.log($(node).length)
})
$('.mp-e2e-dialog .download-btns span')
document.querySelector('.block-car-container > .car-manage > .car-manage-sucai > .car-manage-bottom')

document.querySelector('.block-car-container').querySelector('.car-manage').querySelector('.car-manage-sucai').querySelector('.car-manage-bottom').querySelector('span')

  .querySelector('')



function generateXml(path) {
  let svgXml = '\
  <?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\
  <svg class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"\
       xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">\
    <defs>\
      <style type="text/css"></style>\
    </defs>\
    <path d="SVG_PATH"\
          fill="#000000"></path>\
  </svg>\
  '

  return svgXml.replace('SVG_PATH', path)
}

function downloadFile(fileName, content){
  let aLink = document.createElement('a')
  let blob = new Blob([content])
  let evt = document.createEvent("HTMLEvents")
  evt.initEvent("click", false, false)
  aLink.download = fileName
  aLink.href = URL.createObjectURL(blob)
  aLink.dispatchEvent(evt)
}
