document.addEventListener('DOMContentLoaded', () => {
    bookmarkApp = (function() {
        return {
            init: () => {
                function initFeaturesSection() {
                    const featuresTabsEl = document.querySelectorAll('.tabs__tab');
                    featuresTabsEl.forEach((featuresTab) => {
                        featuresTab.addEventListener('click', () => {
                            const currentSelectedTab = document.querySelector('.tabs__tab--active');
                            const currrentSelectedTabContent = document.querySelector('.selected-tab');
                            if (!featuresTab.classList.contains('tabs__tab--active')) {
                                featuresTab.classList.toggle('tabs__tab--active');
                                currentSelectedTab.classList.toggle('tabs__tab--active');
                                currrentSelectedTabContent.classList.toggle('selected-tab');
                                const tabContentToSelectEl = document.querySelector(`.tabs-content__content[data-content-id='${featuresTab.dataset['tabId']}']`);
                                tabContentToSelectEl.classList.toggle('selected-tab');
                            }
                        });
                    });
                };

                function initQuestionsSection() {
                    const accordionItems = document.querySelectorAll('.accordion__item');
                    accordionItems.forEach((accordionItem) => {
                        accordionItem.addEventListener('click', () => {
                            const currentQuestionOpen = document.querySelector('.accordion__item.accordion__item--active');
                            if (currentQuestionOpen)
                                currentQuestionOpen.classList.toggle('accordion__item--active');
                            if (accordionItem !== currentQuestionOpen)
                                accordionItem.classList.toggle('accordion__item--active');
                        });
                    })
                }

                initFeaturesSection();
                initQuestionsSection();
            },
            toggleMenu: (navMenuButton) => {
                const headerHamburger = document.querySelector('.header__hamburger-img');
                const header = document.querySelector('.header');
                const headerNav = document.querySelector('.header__nav');
                const headerItems = document.querySelector('.nav__items');
                const headerLogoImg = document.querySelector('.header__logo .logo__img');

                if (headerNav.classList.contains('open')) {
                    closeMenu();
                } else {
                    openMenu();
                }

                function closeMenu() {
                    headerHamburger.src = '/images/icon-hamburger.svg';
                    headerLogoImg.src = '/images/logo-bookmark.svg';
                    headerNav.classList.remove('open');
                    headerNav.setAttribute('aria-modal', true);
                    document.body.classList.remove('mobile-nav-open');
                    header.classList.remove('mobile-nav-open');
                    navMenuButton.setAttribute('aria-expanded', false);
                    navMenuButton.focus();
                }

                function openMenu() {
                    headerHamburger.src = '/images/icon-close.svg';
                    headerLogoImg.src = '/images/logo-bookmark-white.svg';
                    headerNav.classList.add('open');
                    document.body.classList.add('mobile-nav-open');
                    header.classList.add('mobile-nav-open');
                    navMenuButton.setAttribute('aria-expanded', true);
                    headerItems.firstElementChild.firstElementChild.focus();
                    document.addEventListener('keyup', listenToMenuKeyStroke, event);
                }

                function listenToMenuKeyStroke($event) {
                    if ($event.keyCode === 27) {
                        closeMenu();
                        document.removeEventListener('keyup', listenToMenuKeyStroke);
                    }
                }
            }
        }
    })();
    bookmarkApp.init();
});