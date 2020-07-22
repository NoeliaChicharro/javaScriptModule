// Wait fpr DOM to load
$(document).ready(() => {

  /* Variables */
  const wrapper = $('.tabContainer'),
        allTabs = $('.tabInhalt > div'),
        tabMenu = $('.tabAuswahl > li'),
        line    = $('<div class="line"></div>').appendTo($(tabMenu));

  // Hide tabs that are not the first tab(its content)
  allTabs.not(':first-of-type').hide();

  // change line width to 100% of first tab menus
  tabMenu.filter(':first-of-type').find(':first').width('100%');

  // For every tab, assign a data attribute to the li
  tabMenu.each(function (i) {
    $(this).attr('data-tab', `tab${i}`);
  });

  // do the same for the tabs themselves (content)
  allTabs.each(function (i) {
    $(this).attr('data-tab',`tab${i}`);
  });

  // when we click one of the tabs:
  tabMenu.on('click', function () {
    const dataTab = $(this).data('tab'),
          getWrapper = $(this).closest($(wrapper));

    // we remove the active class of all tabs, add it to the one we clicked
    // we need to select the wrapper individually cause we could have multiple tabSystems!
    getWrapper.find(tabMenu).removeClass('active');
    $(this).addClass('active');

    // Line: remove active lines and make the one in the clicked element larger
    getWrapper.find('.line').width(0);
    $(this).find('.line').animate({
      'width': '100%',
    }, 'fast');

    // Content: hide all the tabs
    getWrapper.find(allTabs).hide();
    // show the tab which was clicked, using the data attribute of the clicked menu
    getWrapper.find(allTabs).filter(`[data-tab="${dataTab}"]`).slideDown('fast');

  });



});

























