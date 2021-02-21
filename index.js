  const searchInputDom = $('.search-input'),
      searchFormDom = $('.search-form'),
      searchBtnDom = $('.search-btn')
  searchInputDom.focus()
  $('.search-type .item').on('click', function () {
    $('.search-type .item').removeClass('active')
    $(this).addClass('active')
    searchInputDom.focus()
    searchFormDom.attr('target', '_blank')
    switch ($(this).attr('data-type')) {
      case 'zhannei':
        searchFormDom.attr('action', 'https://www.qqdaohang.com')
        searchInputDom.attr('name', 'keyword')
        searchBtnDom.text('站内搜索')
        break
      case 'baidu':
        searchFormDom.attr('action', 'https://www.baidu.com/s?tn=none')
        searchInputDom.attr('name', 'wd')
        searchBtnDom.text('百度一下')
        break
      case 'sogou':
        searchFormDom.attr('action', 'https://www.sogou.com/sogou?pid=none')
        searchInputDom.attr('name', 'query')
        searchBtnDom.text('搜狗搜索');
        break
      case '360':
        searchFormDom.attr('action', 'https://www.so.com/s?ls=none')
        searchInputDom.attr('name', 'q')
        searchBtnDom.text('360搜索')
        break
      case 'bing':
        searchFormDom.attr('action', 'https://cn.bing.com/search?from=none')
        searchInputDom.attr('name', 'q')
        searchBtnDom.text('必应搜索')
        break
    }
  })