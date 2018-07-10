$(document).ready(function () {
    const tabs = {
        $nav: $('.about-sales__nav-item'),
        classes: {
            navActive: 'about-sales__nav-item--active',
            tabActive: 'as-tab--active',
        },
        getNavItem: function (id) {
            return $(`.about-sales__nav-item[data-tab-name="${id}"]`);
        },
        getTabItem: function (id) {
            return $(`.as-tab[data-tab-name="${id}"]`);
        },
        change: function (id) {
            $('.' + tabs.classes.tabActive).removeClass(tabs.classes.tabActive);
            $('.' + tabs.classes.navActive).removeClass(tabs.classes.navActive);
            tabs.getNavItem(id).addClass(tabs.classes.navActive);
            tabs.getTabItem(id).addClass(tabs.classes.tabActive);
        }
    };
    tabs.$nav.click(function () {
        tabs.change($(this).data('tab-name'));
    });
});
