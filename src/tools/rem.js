!function (win, doc) {
  let docEl = doc.documentElement
  function changeDocElFontSize() {
    let width = docEl.getBoundingClientRect().width
    docEl.style.fontSize = width / 10 + 'px'
  }
  changeDocElFontSize()
  window.addEventListener('resize',changeDocElFontSize,false)
  window.addEventListener('orientationchange',changeDocElFontSize,false)
}(window,document)