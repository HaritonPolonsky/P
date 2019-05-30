
$(document).ready(function () {
    svg4everybody({});

    let sandwichToggle = function () {
        // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
//        var myElement = $(this);
//        let sandwichElement = $(this).find('.sandwich');
//        let elementClick = $(this).parent(); 
//        let elementsC = [sandwichElement, elementClick];
        let sandwichElements = document.querySelectorAll('.sandwich-toggle');

        //myElement.parent()

        // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс
        sandwichElements.forEach((item) => {

            item.addEventListener('click', showSandwichTarget);
        });


        function showSandwichTarget() {
            let targetId = this.getAttribute('data-target-id'),
                    targetClassToggle = this.getAttribute('data-target-class-toggle'),
                    sandwitch = ($(this).find('.sandwich')),
                    active = ($(this).siblings('.actives'));
            //sandwitch.classList.toggle('is-active');
            this.classList.toggle('is-active');
            sandwitch.toggleClass('is-active');
            active.toggleClass('is-active');

            if (targetId && targetClassToggle) {
                document.getElementById(targetId).classList.toggle(targetClassToggle);//
            }
            if ($(window).width() < 768) {
                $('html').toggleClass('fixed');
            }

        }
    };
    sandwichToggle();
//    var tablePhoneSize = function () {
//        $('.cart-prev__body').children('.cart-prev__info--column', '.tablet').unwrap();
//    };
    var popularCategoriesSlider = function () {
        if ($(window).width() < 768) {
            $('.js-categories-prev').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '.categories-prev-slider--prev',
                nextArrow: '.categories-prev-slider--next',
                adaptiveHeight: true,
                infinite: false,
                dots: true
            });
        }
    };
    var tabs = function () {
        if ($(window).width() < 768) {
            $('.tabs-list__item').click(function () {
                var tabName = $(this).attr('show-tab');
                $(this).toggleClass('tabs-list__item--active').siblings().removeClass('tabs-list__item--active');
                $('.tabs-content .' + tabName).toggleClass('tab--active').siblings().removeClass('tab--active');
                
                if ($(this).hasClass('tabs--aside')) {
                    $(this).closest('.catalog-mobile-nav').toggleClass('catalog-mobile-nav--active');
                }
                if ($(this).hasClass('tabs--aside tabs-list__item--active')) {
                    $(this).closest('.catalog-mobile-nav').addClass('catalog-mobile-nav--active');
                }

            });
        } else {
            //$('.tabs-main__item').click(function () {
            $('.tabs-list__item').click(function () {
                //if (!$(this).hasClass('tabs-list__item--active')) {
                var tabName = $(this).attr('show-tab');
                $(this).toggleClass('tabs-list__item--active').siblings().removeClass('tabs-list__item--active');
                $('.tabs-content .' + tabName).toggleClass('tab--active').siblings().removeClass('tab--active');

                if ($(this).hasClass('tabs--aside')) {
                    $(this).closest('.catalog-mobile-nav').toggleClass('catalog-mobile-nav--active');
                }
                if ($(this).hasClass('tabs--aside tabs-list__item--active')) {
                    $(this).closest('.catalog-mobile-nav').addClass('catalog-mobile-nav--active');
                }
            //}
            
            });
         
        }
    };

   
    
    var selectNav = function () {
        $(document).on('click', '.select-nav-item--chosen', function (e) {
            e.preventDefault();
            $(this).closest('.select-nav__body').toggleClass('select-nav__body--active');
        });
    };

    var navHover = function () {
        if ($(window).width() > 767) {
            let body = $(this).closest('.catalog-nav__body');
            $('.catalog-nav__item').hover(
                    function () {
                        //let body = $(this).closest('.catalog-nav_body');
                        $(this).closest('.catalog-nav__body').css('width', 825);
                    },
                    function () {
                        $(this).closest('.catalog-nav__body').css('width', 'auto');
                    }
            );
        } else {
            $(document).on('click', '.catalog-nav__link', function () {
                //console.log('dddddddd');
                //$('.catalog-nav__item').removeClass('catalog-nav__item--active');
                $(this).closest('.catalog-nav__item').toggleClass('catalog-nav__item--active');
                $('html').toggleClass('fixed');
                //$(this).siblings().removeClass('catalog-nav__item--active');


            });
            $(document).on('click', '.catalog-subnav__header', function () {
                //$('.catalog-subnav__block').removeClass('catalog-subnav__block--active');
                $(this).closest('.catalog-subnav__block').toggleClass('catalog-subnav__block--active');

            });
        }
    };
//    var productPrevSlider = function () {
//        let sliderCount = $('.product-slider__count'),
//                slider = $('.js-products-slider');
//        var slidesToShow = 4;
//        
//        slider.on('init afterChange', function (event, slick, currentSlide, nextSlide) {
//            let i = (currentSlide ? currentSlide : 0) + slidesToShow;
//
//            sliderCount.text(i + ' from ' + slick.slideCount);
//        });
//
////        $('.js-products-slider').slick({
////            prevArrow: '.products-prev-slider--prev',
////            nextArrow: '.products-prev-slider--next',
////            slidesToShow: slidesToShow,
////            slidesToScroll: 1,
////            arrows: true,
////            dots: false,
////            infinite: false,
////            responsive: [{
////                    breakpoint: 1239,
////                    settings: {
////                        slidesToShow: 3,
////                        arrows: false,
////                        dots: true
////
////                    }
////                },
////                {
////                    breakpoint: 768,
////                    settings: {
////                        slidesToShow: 2,
////                        arrows: true,
////                        dots: false
////
////                    }
////                },
////                {
////                    breakpoint: 550,
////                    settings: {
////                        slidesToShow: 1,
////                        arrows: true,
////                        dots: false
////
////                    }
////                }
////
////            ]
////
////        });
//        $('.js-products-slider').slick({
//            prevArrow: '.products-prev-slider--next',
//            nextArrow: '.products-prev-slider--prev',
//            slidesToShow: slidesToShow,
//            slidesToScroll: 1,
//            arrows: true,
//            dots: false,
//            infinite: false,
//            responsive: [{
//                    breakpoint: 1239,
//                    settings: {
//                        slidesToShow: 3,
//                        arrows: false,
//                        dots: true
//
//                    }
//                },
//                {
//                    breakpoint: 768,
//                    settings: {
//                        slidesToShow: 2,
//                        arrows: true,
//                        dots: false
//
//                    }
//                },
//                {
//                    breakpoint: 550,
//                    settings: {
//                        slidesToShow: 1,
//                        arrows: true,
//                        dots: false
//
//                    }
//                }
//
//            ]
//
//        });
//    };

    var productSlider = function () {
        $('.js-product-slider-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            centerMode: true,
            focusOnSelect: true,
            asNavFor: '.js-product-slider-aside'
        });
        $('.js-product-slider-aside').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.js-product-slider-main',
            dots: false,
            vertical: true,
            focusOnSelect: true,
            infinite: false,
            prevArrow: '.product-slider-aside__nav--prev',
            nextArrow: '.product-slider-aside__nav--next',
            responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        vertical: false,
        slidesToShow: 3
      }
    }
  ]
        });
    };
    
    var slider = function () {
        $('.js-slider').each(function (idx) {
            var sliderClass = "slider-" + idx,
                    slidesToShow = 4,
                    sliderCount = $(this).closest('.slider').find('.slider__count');
            this.closest('.slider').classList.add(sliderClass);
            $(this).on('init afterChange', function (event, slick, currentSlide, nextSlide) {
                if (slick.slideCount > slidesToShow) {
                    let i = (currentSlide ? currentSlide : 0) + slidesToShow;

                    sliderCount.text(i + ' from ' + slick.slideCount);
                }
            });
            $(this).slick({
                prevArrow: '.' + sliderClass + ' .slider__nav--prev',
                nextArrow: '.' + sliderClass + ' .slider__nav--next',
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                infinite: false,
                responsive: [{
                        breakpoint: 1239,
                        settings: {
                            slidesToShow: 3,
                            arrows: false,
                            dots: true

                        }
                    },
//                {
//                    breakpoint: 768,
//                    settings: {
//                        slidesToShow: 2,
//                        arrows: true,
//                        dots: false
//
//                    }
//                },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            arrows: true,
                            dots: false

                        }
                    }

                ]
            });
        });

    };
    var cartProductRemove = function () {
            $(document).on('click', '.remove-order', function () {
                if($(this).closest('.table__products-prev').find('.table-prev').length === 1) {
                    $(this).closest('.table__body').find('.table__products-prev--footer .btn-order').css("opacity", "0");
                    $(this).closest('.table__products-prev').remove();
                    
                    
                }
                console.log($(this).closest('.table__body').find('.table__products-prev--footer .btn-order'));
                $(this).closest('.table-prev').remove();
        });
    };
//var aboutSlider = function () {
//        $('.js-about-slider').slick({
//            prevArrow: '.about-prev-slider--next',
//            nextArrow: '.about-prev-slider--prev',
//            slidesToShow: 4,
//            slidesToScroll: 1,
//            arrows: true,
//            dots: false,
//            infinite: false,
//            responsive: [{
//                    breakpoint: 1239,
//                    settings: {
//                        slidesToShow: 3,
//                        arrows: false,
//                        dots: true
//
//                    }
//                },
//                {
//                    breakpoint: 768,
//                    settings: {
//                        slidesToShow: 2,
//                        arrows: true,
//                        dots: false
//
//                    }
//                },
//                {
//                    breakpoint: 550,
//                    settings: {
//                        slidesToShow: 1,
//                        arrows: true,
//                        dots: false
//
//                    }
//                }
//
//            ]
//
//        });
//    };


    var location = function () {
        let locationSelected = document.querySelectorAll('.location-question__click');
        locationSelected.forEach((item) => {

            item.addEventListener('click', showLocationSelect);
        });

//        $("body").click(function (e) {
//            console.log($(e.target).hasClass('location-selected'));
//           if($(e.target).hasClass('is-location-selected')) {
//               $('.location__body').removeClass('is-location-selected');
//           } 
//        });


        function showLocationSelect() {
            let answer = $(this).data('location');
            //$(this).find('.location-question').hide();
            if (answer === 'header') {

                $(this).siblings('.location__body').find('.location-question').hide();
                $(this).siblings('.location__body').addClass('is-location-selected');
            } else {
                $(this).closest('.location-question').hide();
                //console.log('s');
                if (answer === 'no') {
                    $(this).closest('.location__body').addClass('is-location-selected');
                }
            }


        }
//        $(document).on('click', '.location-question__btn', function () {
//            let answer = $(this).data('location');
//            $(this).closest('.location-question').hide();
//            if(answer === 'no') {
//               $(this).closest('.location__body').addClass('is-location-selected');
//            }
//        });
        $(document).on('click', '.location-selected__item, .location-selected__close', function () {
            $(this).closest('.location__body').removeClass('is-location-selected');
        });
//        $(document).on('click', '.location-question__btn', function () {
//            let answer = $(this).data('location');
//            $(this).closest('.location-question').hide();
//            if(answer === 'no') {
//               $(this).closest('.location__body').addClass('is-location-selected');
//            }
//        });
    };

    var scale = function () {
        $(document).on('click', '.scale-line__number', function () {
            var left = $(this).parent().position().left;
            $(this).parent().siblings().removeClass('scale-item--active');
            $(this).parent().addClass('scale-item--active');
            $('.scale-line').css('width', left - 1);
        });
    };

    var popupLink = function () {
        $('.popup-link').magnificPopup({
            fixedBgPos: true,
            fixedContentPos: true,
            callbacks: {
                beforeOpen: function () {
                    $('body').addClass('magnificpopupnoscroll');
                },
                close: function () {
                    $('body').removeClass('magnificpopupnoscroll');
                }
            }
        });


    };

    var simpleBar = function () {
        //console.log($(window).width());
        if ($(window).width() > 767) {
            //console.log($(window).width());
            $.each($('.catalog-subnav'), function (i, v) {
                new SimpleBar(v);
                //console.log("b3");
            });
        }
    };

//    var formValidate = function () {
//        $('form').each(function(){
//            $(this).on('submit', function (){
//               $(this).validation(options: {
//                   
//               },)
//            });
//        });
//    };
    var contactsPopup = function () {
        $(document).on('click', '.contacts-popup__toggle', function () {
            $(this).parent().addClass('contacts-popup--active');
            fixedBody();
        });
        $(document).on('click', '.contacts-popup__close', function () {
            $(this).closest('.contacts-popup').removeClass('contacts-popup--active');
            fixedBody();
        });

    };
    var fileupload = function () {
        $(".file-upload input[type=file]").change(function () {
            //console.log('file');
            let filename = $(this).val().replace(/.*\\/, "");
            //console.log($(this).val());
            $(this).closest('.file-upload').find('.file-upload__text').html(filename);
        });
    };


    var fixedBody = function () {
        if ($(window).width() < 768) {
            $('html').toggleClass('fixed');
        }
    };
    var mobileProductInfo = function () {
        $(document).on('click', '.product-options-mobile', function () {
            //console.log('dddddddd');
            //$('.catalog-nav__item').removeClass('catalog-nav__item--active');
            $(this).siblings('.product-options').toggleClass('active');
            //$('html').toggleClass('fixed');
            //$(this).siblings().removeClass('catalog-nav__item--active');


        });

    };
    var questionsNav = function () {
        $(document).on('click', '.questions-nav__link', function () {
            //console.log('dddddddd');
            //$('.catalog-nav__item').removeClass('catalog-nav__item--active');
            $(this).closest('.questions-nav__item').toggleClass('questions-nav__item--active');
            //$('html').toggleClass('fixed');
            //$(this).siblings().removeClass('catalog-nav__item--active');


        });
//        $(document).on('click', '.questions-subnav__header', function () {
//            //$('.catalog-subnav__block').removeClass('catalog-subnav__block--active');
//            $(this).closest('.questions-subnav__block').toggleClass('questions-subnav__block--active');
//
//        });
//        $(document).on('click', '.category-mobile__block', function () {
//            let self = $(this);
//            $(this).parent().toggleClass('category-mobile__block--active');
//            $('body').click(function (e) {
//                if(!$(e.target).closest(self).length) {
//                    self.parent().removeClass('category-mobile__block--active');
//                }
//            });
//        });
    };
    var reviewImagesPopup = function () {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1],
                image: {
                }
            }
        });
    };
    var categoriesMobileNav = function () {
        $(document).on('click', '.categories-mobile-nav__link', function () {
            //console.log('dddddddd');
            //$('.catalog-nav__item').removeClass('catalog-nav__item--active');
            $(this).closest('.categories-mobile-nav__item').toggleClass('categories-mobile-nav__item--active');
            //$('html').toggleClass('fixed');
            //$(this).siblings().removeClass('catalog-nav__item--active');


        });
        $(document).on('click', '.categories-mobile-subnav__header', function () {
            //$('.catalog-subnav__block').removeClass('catalog-subnav__block--active');
            $(this).closest('.categories-mobile-subnav__block').toggleClass('categories-mobile-subnav__block--active');

        });
//        $(document).on('click', '.category-mobile__block', function () {
//            let self = $(this);
//            $(this).parent().toggleClass('category-mobile__block--active');
//            $('body').click(function (e) {
//                if(!$(e.target).closest(self).length) {
//                    self.parent().removeClass('category-mobile__block--active');
//                }
//            });
//        });
    };
    var searchMobile = function () {
        if ($(window).width() < 1239) {
            $(document).on('click', '.search__icon-mobile', function () {
                $('.search').toggleClass('search-mobile--active');
            });
        }
    };
//    var breadcrumbsNav = function () {
//        $(document).on('click', '.breadcrumbs-nav__toggle', function (e) {
//            let self = $(this);
//            if ($(window).width() > 767) {
//                e.preventDefault();
//            }
//            $(this).parent().toggleClass('breadcrumbs__item--show-nav');
//            $('body').click(function (e) {
//                if (!$(e.target).closest(self).length) {
//                    self.parent().removeClass('breadcrumbs__item--show-nav');
//                }
//            });
//        });
//    };
//    var breadcrumbsNav = function () {
//        $(document).on('click', '.breadcrumbs-nav__toggle', function (e) {
//            let self = $(this);
//            if ($(window).width() > 767) {
//                e.preventDefault();
//                console.log("sss");
//            }
//            
//            $(this).parent().toggleClass('toggle--show');
//            $('body').click(function (e) {
//                if (!$(e.target).closest(self).length) {
//                    self.parent().removeClass('toggle--show');
//                }
//            });
//        });
//    };

    var scrollToElement = function () {
        $('.scroll-link')
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                    ) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            event.preventDefault();
                            $('html, body').animate({
                                scrollTop: target.offset().top - 50
                            }, 1000, function () {
                                var $target = $(target);
                                $target.focus();
                                if ($target.is(":focus")) {
                                    return false;
                                } else {
                                    $target.attr('tabindex', '-1');
                                    $target.focus();
                                }
                                ;
                            });
                        }
                    }
                });
    }


    var toggleShowPassword = function () {
        $(document).on('click', '.password-icon', function () {
            var input = $(this).siblings('input');
            if (input.attr('type') === 'text') {
                input.attr('type', 'password');
            } else {
                input.attr('type', 'text');
            }
        });
    };
    var toggleSort = function () {
        $(document).on('click', '.toggle-click', function (e) {
            let self = $(this);
            if ($(window).width() > 767) {
                e.preventDefault();
            }
            $(this).parent().toggleClass('toggle--show');
            $('body').click(function (e) {
                if (!$(e.target).closest(self).length) {
                    self.parent().removeClass('toggle--show');
                }
            });
        });
    };

    var tagsToggle = function () {
        $(document).on('click', '.tags__toggle', function (e) {
            let self = $(this);
            if ($(this).closest('.tags').hasClass('tags--active')) {
                $(this).text("All searching");
            } else {
                $(this).text("Hide");
            }
            $(this).closest('.tags').toggleClass('tags--active');
            $('body').click(function (e) {
                if (!$(e.target).closest(self).length) {
                    self.parent().removeClass('tags--active');
                }
            });
        });
    };


//    var popupCol = function () {
//        $(document).on('click', '.filter-list-show__item__link', function (e) {
//            col(0);
//        });
//    };


    var productColorSelect = function () {
        $(document).on('click', '.product-type__block', function (e) {
            $(this).toggleClass('active').siblings('.product-type__block').removeClass('active');
        });
    };

    var popupCol = function () {
        $(document).on('click', '.show-item--link', function (e) {
            col(0);
        });
    };

    var resizeCol = function () {
        $(window).resize(function () {
            col(1);
            personItemList();
            tagLine();

        });
    };

    var prevLine = function () {
        if ($(window).width() < 768) {
            $('.price__list').width("35%");

        } else if ($(window).width() < 1239) {
            let list = $('.price__list li').last(),
                    //ul = $('.item-prev__body ul'),
                    //li = $('.product-prev__info'),
                    priceList = $('.price__list'),
                    priceListSpanPrice = $('.price__list li:not(:last-child) span:odd').get(),
                    spanFirst = $('.product-prev__info-label'),
                    priceSpan = $('.price__list li .product-prev__info-label'),
                    //widthLastSpan = list.children('span').last().outerWidth(),
                    //widthBlock = ul.width(),
                    //procenMain = Math.round((widthLastSpan * 100)/widthBlock),
                    width = 0,
                    spanLengthMax = $(priceListSpanPrice[0]).width();
            //procent = 0;
            priceSpan.width(spanFirst.width());
            for (var a = 0; a < priceListSpanPrice.length; a++) {
                if ($(priceListSpanPrice[a]).width() > spanLengthMax) {
                    spanLengthMax = $(priceListSpanPrice[a]).width();
                }
                //console.log($(priceListSpanPrice[a]).width());
            }

            width = spanFirst.width() + spanLengthMax + parseInt(spanFirst.css('margin-right'), 10);
            priceList.width(width);


//            console.log('dddd');
//            console.log(spanLengthMax);
//            console.log('dddd');
        }

    };

    var personItemList = function () {
        var items = $('.employees-list li').get(),
                countItems = items.length,
                itemsInRow = 6,
                lastItemsInRow = 0,
                lastRow = 0,
                widthWindow = $(window).width(),
                fromItem = 0,
                i = 0;
        if (widthWindow < 767) {
            itemsInRow = countItems - 1;

        } else if (widthWindow < 1239) {
            itemsInRow = 4;

        }
        lastItemsInRow = countItems % itemsInRow;
        lastRow = (countItems / itemsInRow).toFixed(0);
        if (lastItemsInRow === 0) {
            fromItem = itemsInRow * (lastRow - 1);


        } else {
            fromItem = itemsInRow * lastRow;

        }
        i = fromItem;
        for (i; i < countItems; i++) {
            $(items[i]).css("margin-bottom", "0");

        }
        console.log(fromItem);
    };
    var col = function (resize) {



        var co = document.querySelectorAll(".colors-catalog-list li");
        var list = document.querySelectorAll(".colors-catalog-list").length;
        var s = $('.colors-catalog-list').get();
        var newArray = [];
        //console.log($.map($(".colors-catalog-list")));
        //console.log(s.length);
//        var newArray = s.map(function(item,index){
//            //return { "id": item.id, "name": item.name,"position": item.position };
//            
//    return { "ul":  $(item).children().length};
//
//});

        $.each(s, function (index, value) {
            var element = $(value).children();
            var le = element.length;
            var resizeChildren = 0;
            var widthWindow = $(window).width();
            newArray[index] = le;
            var count = Math.round(le / 5);
            if (widthWindow < 767) {
                count = Math.round(le / 2);

            } else if (widthWindow < 1239) {
                count = Math.round(le / 3);

            }
            //if(element)
//            if ($(window).width() < 321) {
//        
//                $(element).css("color", "pink");
//            }

            if (element.hasClass('filter-column')) {
                element.children().unwrap();
//                console.log("mmmmmmmmmmmmmmmmmmm");
            }
            //console.log(element.hasClass('filter-column'));

            for (var i = 0; i < element.length; i += count) {

                element.slice(i, i + count).wrapAll("<div class='filter-column' />");
//                console.log(count);
//                console.log($(window).width());
                // i += count;
//                if(i % count === 0) {
//                  $(element[i+1]).addClass("new-column");
//                }
            }
            ;

//               console.log("element");
//               console.log(element);
//               console.log("element");
//            //console.log($(value).get());
        });
        // console.log(s);

    };
    var mobileSubcategoryPrev = function () {
        if ($(window).width() < 1239) {

            var s = $('.catalog__products-prev').children().get();
//            console.log("vvvvvvvvvvv");
//            console.log(s);
//            console.log("vvvvvvvvvvv");
            $.each(s, function (index, value) {
                //console.log(index, value);

                var element = $(value).children();
                //console.log(index, value);
                for (var v = 1; v < element.length; v += 2) {
                    element.slice(v).wrapAll("<div class='catalog-prev-tabl' />");
                    //(element[v], v);
                }



                //var element = $(value).children();
                //$($(value).children()[2]).css("background-color", "black");
//            for (var i = 1; i < element.length; ++i) {
//                var v = i;
//                console.log(v);
//                element.slice(i, ++i).css("background-color", "black");

//             console.log("vvvvvvvvvvv"+indexs);
//            console.log(values);
//            console.log("vvvvvvvvvvv");

            });

            //element.slice(1, 2).wrapAll( "<div class='.subcategory__products-prev--tablet' />");
//            console.log("vvvvvvvvvvv");
//            console.log(element, index);
//            console.log("vvvvvvvvvvv");


        }
    };

    var tagLine = function () {
        var elements = $('.tag').get(),
                tagsWidth = $('.tags').width(),
                titleWidth = $('.tags__title').width(),
                tagsToggleWidth = $('.tags__toggle').width(),
                tagsBody = $('.tags__body'),
                marginTag = 10,
                marginTitle = 15,
                marginTagsToggle = 10,
                elementWidth = 0,
                elementsLineWidth = marginTitle + marginTagsToggle + titleWidth + tagsToggleWidth,
                //elementsLineWidth = marginTagsToggle + tagsToggleWidth,
                elementsInLine = 0;
        if ($('.tags__body').hasClass('tags__body--column')) {
            console.log(elementsLineWidth);
            elementsLineWidth -= (marginTitle + titleWidth);

            console.log('tags__body--column');
            console.log(elementsLineWidth);
        }

        $.each(elements, function (index, value) {
            //console.log(value);
            elementWidth = marginTag + ($(value).outerWidth());

            console.log(elementWidth);
            elementsLineWidth += elementWidth;
            if (elementsLineWidth > tagsWidth) {
                elementsInLine = index;
                console.log(index);
                console.log("ssssssss");
                return false;
            }
            //console.log(elementsLineWidth);


        });
        //$('.tag').unwrap();

        $(elements).slice(0, elementsInLine).wrapAll("<div class='tags-row tags-row--firts tags-column--block'/>");

        $('.tags-row--firts').wrapAll("<div class='tags-row--first--line'/>");
        //$('.tags-row tags-row--firts').wrapAll("<div class='tags-row--block'/>");
        $('.tags-column--block').wrapAll("<div class='tags-column'/>");
        //$('.tags__toggle.tags-row--firts').wrapAll("<div class='tags-row--block'/>");
        $(elements).slice(elementsInLine, elements.length).wrapAll("<div class='tags-row' />");
        for (var i = 0; i < elementsInLine; i++) {

        }

        console.log(elementsLineWidth);
        console.log("ccc");

    };
    var weight = function () {
        let currentValues = $('.weight').get(),
            changedValue = "";
        $.each(currentValues, function (index, value) {
            changedValue = $(value).text() + " K";
            $(value).text(changedValue);
//            console.log("nnn"); 
//            console.log($(value).text()); 

        });
//        $(num).each( function (value) {
//          console.log("nnn"); 
//          console.log($(value)); 
//          console.log("nnn");
//        });
        
    };

    var tagText = function () {
        var texts = $.map($(".tags__text"), $.text);
        var elements = $('.tags__text').get();
        $.each(texts, function (index, value) {
            var text = value.trim().split(" ");
            var count = Math.round(text.length / 2);
            var second = text.slice(count).join(' ');
            var first = text.slice(0, count).join(' ');
            var complete = [first, second].join(' <br> ');
            $(elements[index]).html(complete);

        });
    };

    var searchInput = function () {
        $('.search__input-js').keyup(function () {
            if ($(this).val().length > 2) {
                $(this).closest('.search__form').addClass('search__form--active');
            }
            if (($(this).val().length < 2) && ($(this).closest('.search__form').hasClass('search__form--active'))) {

                $(this).closest('.search__form').removeClass('search__form--active');
            }
        });

        $('.search__input-js').blur(function () {

            if (($(this).val().length > 2)) {
                $(this).closest('.search__form').removeClass('search__form--active');
            }
        });
        $('.search__input-js').focus(function () {

            if ($(this).val().length > 2) {
                $(this).closest('.search__form').addClass('search__form--active');
            }
        });
    };
//        var quantity = function () {
////           var quantity = document.getElementsByClassName('quantity__current');
////            for(let i = 0; i < quantity.length; i++) {
////                let descr = quantity[i].getAttribute('data-descr');
////                
////            }
//            $(document).on('click', '.quantity__btn', function () {
//                let direction = $(this).data('direction'),
//                    inputEl = $(this).siblings('.quantity__current'),
//                    currentValue = inputEl.val(),
//                    currentNumber = +currentValue.split(' ')[0];
//                    if(direction === 'minus' && currentNumber - 1 >= 0) {
//                        inputEl.val(currentNumber - 1);
//                    }else if(direction === 'plus') {
//                        inputEl.val(currentNumber + 1);
//                    } else {
//                        return false;
//                    }
//                    
//            });
//            
//        };
        
    var quantity = function () {
        $(document).on('click', '.quantity__btn--minus', function () {
            let parentElement = $(this).parent(),
                    element = parentElement.find('.quantity__current-text'),
                    number = element.text(),
                    newNumber;
            if (number > 0) {
                newNumber = number - 1;
                element.text(newNumber);
            } else {
                return false;
            }
        });
        $(document).on('click', '.quantity__btn--plus', function () {
            let parentElement = $(this).parent(),
                    element = parentElement.find('.quantity__current-text'),
                    number = parseInt(element.text()),
                    newNumber;
            if (number >= 0) {
                newNumber = number + 1;
                element.text(newNumber);
            } else {
                //console.log("plus");
                return false;
            }
        });
    };
    var filterNav = function () {
        $(document).on('click', '.aside-nav-item__header', function () {
            $(this).parent().toggleClass('aside-nav-item--active');
        });
    };

    var formValidate = function () {
        $('form').each(function () {
            $(this).on('submit', function () {
                $(this).validate({
                    rules: {
                        name: 'required',
                        phone: 'required',
                        email: 'required',
                        password: 'required',
                        text: 'required'
                    },
                    messages: {
                        name: 'input required',
                        phone: 'input required',
                        email: 'input required',
                        password: 'input requred',
                        text: 'input requred'
                    },
                    errorPlacement: function (error, element) {
                        element.attr("placeholder", error[0].outerText);
                    }
                });
                if ($(this).valid()) {
                    var wrap = $(this)[0].closest('.hide-on-success'),
                    nextStep = $(this).data("next"),
                    nextTab = $(this).closest(".checkout").find('.tabs-list__item.'+nextStep)[0];
                    if (wrap) {
                        $(wrap).siblings('.show-on-success').show();
                        $(wrap).hide();
                    }
                    
                    if (nextStep) {
                        $(nextTab).trigger('click');
                    }
                    
                }
                return false;
            });
            
            
        });
        
    };
    
    var stepButton = function () {
        $('.step-button').click(function () {
            var nextStep = $(this).data("next"),
            nextTab = $(this).closest(".checkout").find('.tabs-list__item.'+nextStep)[0];
            if (nextStep) {
                $(nextTab).trigger('click');
                }
            console.log(nextTab);
        });
    };
    
    
    var selectInput = function () {
        $(document).on('click', '.select-header', function () {
            $(this).parent().toggleClass('select--active');
        });
        $(document).on('click', '.select-item', function () {
            let val = $(this).find('.select__text').text();
            $(this).closest('.select__wrap').removeClass('select--active');
            $(this).closest('.select__wrap').find('.select-input').val(val);
        });

    };
    
    var filterSlider = function () {
        $(".filter-slider__line").each(function () {
            let slider = $(this)[0],
                    parent = $(this).parent(),
                    sliderFrom = $(this).parent().find('.filter-slider__value--from')[0],
                    sliderTo = $(this).parent().find('.filter-slider__value--to')[0],
                    inputs = [sliderFrom, sliderTo],
                    type = $(this).data('range-type');
            //console.log(sliderFrom);
            if (type === "price") {


                noUiSlider.create(slider, {
                    start: [200, 800],
                    connect: true,
                    range: {
                        min: 0,
                        max: 5000
                    },
                    format: wNumb({
                        decimals: 0,
                        thousand: ' '
                    })
                });
            } else if (type === 'mm') {
                noUislider.create(slider, {
                    start: [0.5, 7],
                    connect: true,
                    range: {
                        min: 0,
                        max: 10
                    },
                    format: wNumb({
                        decimals: 2,
                        thousand: ' '
                    })
                });
            }
            slider.noUiSlider.on('update', function (values, handle) {
                inputs[handle].value = values[handle];
            });
            inputs.forEach(function (input, handle) {

                input.addEventListener('change', function () {
                    slider.noUiSlider.setHandle(handle, this.value);
                });

            });
        });
    };
    scale();
    contactsPopup();
    popularCategoriesSlider();
    //productPrevSlider();
    //col();
    //tablePhoneSize();
    resizeCol();
    scrollToElement();
    mobileProductInfo();
    popupCol();
    prevLine();
    location();
    filterNav();
    stepButton();
    filterSlider();
    weight();
    cartProductRemove();
    simpleBar();
    quantity();
    fileupload();
    //aboutSlider();
    searchInput();
    selectInput();
    tagText();
    tagLine();
    searchMobile();
    navHover();
    toggleShowPassword();
    personItemList();
    slider();
    productColorSelect();
    productSlider();
    categoriesMobileNav();
    questionsNav();
    tabs();
    reviewImagesPopup();
    selectNav();
    //breadcrumbsNav();
    toggleSort();
    tagsToggle();
    mobileSubcategoryPrev();
    popupLink();
    formValidate();
});


//$.each($('.catalog-subnav'), function (i, v) {
//        new SimpleBar(v);
//    });
//

var popularCategoriesSlider = function () {
    let sliderElement = $('.js-categories-prev');
    if ($(window).width() < 768 && !(sliderElement.hasClass('slick-initialized'))) {
        $('.js-categories-prev').slick({
            slidesToShow: 2,
            slidesToScroll: 1
        });
    } else if ($(window).width() > 768 && (sliderElement.hasClass('slick-initialized'))) {
        sliderElement.slick('unslick');
    }
};

$(window).on('load', function () {
    $(".sk-circle").fadeOut();
    $(".preloader").delay(400).fadeOut("slow");
    $("html").remove("fixed");
});

(function() {
   if(!Element.prototype.closest) {
      Element.prototype.closest = function(css) {
          var node = this;
          while(node) {
              if(node.matches(css)) return node;
              else node = node.parentElement;
          }
          return null;
      }; 
   }
})();


(function() {
   if(!Element.prototype.matches) {
       Element.prototype.matches = Element.prototype.matchesSelector || 
            Element.prototype.webkitMatchesSelector ||  
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ;
   } 
})();

//$(window).on('resize', function () {
//    popularCategoriesSlider();
//});