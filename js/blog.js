// 页面加载完成之后的操作
window.onload = function() {
  const showSearchBlock = getEl('show-search-block')
  const appShadow = getEl('app-shadow')
  const navList = getEl('nav-list')
  const searchFormInput = getEl('search-form-input')
  const closeSearchBlock = getEl('close-search-block')
  const searchBlock = getEl('search-block')
  const toggleNav = getEl('toggle-nav')
  const appNav = getEl('app-nav')
  const navHeader = getEl('nav-header')
  const cancleSearch = getEl('cancle-search')
  const toTop = getEl('to-top')

  document.getElementById('app-clock-content').innerHTML = (new Date).toLocaleTimeString('chinese', {
    hour12: false
  })

  hideArticleList()

  function hideArticleList() {
    document.querySelectorAll('.article-list:not(.hide)').forEach(el => {
      if (this.innerHeight + this.scrollY <= el.offsetTop + 100) {
        el.classList.add('hide')
      }
    })
  }

  window.addEventListener('scroll', function(e) {
    document.querySelectorAll('.article-list.hide').forEach(el => {
      if (this.innerHeight + this.scrollY > el.offsetTop) {
        el.classList.remove('hide')
      }
    })
    hideArticleList()

    toTop.classList.add('hide')
    if (this.scrollY > 100) {
      toTop.classList.remove('hide')
      toTop.classList.add('show')
    } else {
      toTop.classList.remove('show')
    }
  })

  toTop.addEventListener('click', function() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  })

  showSearchBlock.addEventListener('click', function() {
    appShadow.classList.add('show')
    navList.classList.add('hide')
    searchBlock.classList.add('show')
    searchFormInput.focus()
  })

  closeSearchBlock.addEventListener('click', function() {
    appShadow.classList.remove('show')
    navList.classList.remove('hide')
    searchBlock.classList.remove('show')
    searchFormInput.value = ''
  })

  appShadow.addEventListener('click', function() {
    appShadow.classList.remove('show')
    navList.classList.remove('hide')
    searchBlock.classList.remove('show')
    searchFormInput.value = ''
  })

  toggleNav.addEventListener('click', function() {
    this.classList.toggle('on')
    appNav.classList.toggle('full')
  })

  searchFormInput.addEventListener('focus', function() {
    navHeader.classList.add('hide')
    navList.classList.add('hide')
    searchBlock.classList.add('focus')
  })

  cancleSearch.addEventListener('click', function() {
    navHeader.classList.remove('hide')
    navList.classList.remove('hide')
    searchBlock.classList.remove('focus')
  })

  const t = setInterval(function() {
    try {
      document.getElementById('app-clock-content').innerHTML = (new Date).toLocaleTimeString(
        'chinese', {
          hour12: false
        })
    } catch {
      clearInterval(t)
    }
  }, 1000)

  document.getElementById('toggle-app-clock').addEventListener('click', function() {
    document.getElementById('app-clock').classList.toggle('show')
  })

  new Calendar({
    el: '#app-calendar'
  })
}

function getEl(id) {
  return document.getElementById(id)
}
