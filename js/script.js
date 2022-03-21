$(document).ready(function () {
    // 펼침기능
    let link_list = $('.link-list');
    let link_bt = $('.link-bt');
    link_bt.click(function () {
        link_list.stop().slideToggle(300);
    });
    // 위로가기 기능
    let gotop = $('.gotop');
    gotop.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500);
    });

    // 위로가기
    $(window).scroll(function () {
        let sc = $(window).scrollTop();
        if (sc >= 200) {
            gotop.addClass('gotop-active');
        } else {
            gotop.removeClass('gotop-active');
        }
    });
});


window.onload = function () {
    // 클론코드 관련 안내
    let modal_close = $('.modal-close');
    let modal = $('.modal');
    modal_close.click(function(){
        modal.stop().fadeOut(200);
    });


    // 비주얼 slide
    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        autoplay : {
            delay : 2000,
            disableOnInteraction: false,
        },
        pagination : {
            el : '.sw-visual-pg',
            type : 'fraction',
            clickable : true,
        },
        navigation : {
            prevEl : '.sw-visual-prev',
            nextEl : '.sw-visual-next',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    });


    // 맞춤서비스 slide
    let sw_service = new Swiper('.sw-service', {
        slidesPerView : 4,
        slidesPerGroup: 4,
        spaceBetween : 0,
        autoplay : {
            delay : 2000,
            disableOnInteraction: false,
        },
        pagination : {
            el : '.sw-service-pg',
            clickable : true,
        },
    });


    // 베스트 제품 
    function BestGood(_rank, _like, _title, _price, _ml, _image, _link) {
        this.rank = _rank;
        this.like = _like;
        this.title = _title;
        this.price = _price;
        this.ml = _ml;
        this.image = _image;
        this.link = _link;
    }
    // 10대 제품
    let good11 = new BestGood(1, false, '매일아침 튼튼플러스', '1500원', '100ml', 'images/best_1-1.jpg', '#');
    let good12 = new BestGood(2, false, '아이러브 루테인', '2,700원', '130ml', 'images/best_1-2.jpg', '#');
    let good13 = new BestGood(3, false, '당근즙', '2,900원', '130ml', 'images/best_1-3.jpg', '#');
    let good14 = new BestGood(4, false, '러브미 케일&셀러리', '1,900원', '130ml', 'images/best_1-4.jpg', '#');
    let good15 = new BestGood(5, false, '핸디밀 프로틴 PRO', '2,400원', '150ml', 'images/best_1-5.jpg', '#');
    // 20대 제품
    let good21 = new BestGood(1, false, '식물성유산균쌀요거트', '2,100원', '150ml', 'images/best_2-1.jpg', '#');
    let good22 = new BestGood(2, false, '러브미 케일&셀러리', '1,900원', '130ml', 'images/best_2-2.jpg', '#');
    let good23 = new BestGood(3, false, '식물성유산균 위&캡슐', '2,100원', '130ml', 'images/best_2-3.jpg', '#');
    let good24 = new BestGood(4, false, '노니&깔라만시', '2,300원', '130ml', 'images/best_2-4.jpg', '#');
    let good25 = new BestGood(5, false, '식물성유산균 오메가&치아씨드', '2,100원', '130ml', 'images/best_2-5.jpg', '#');
    // 30대 제품
    let good31 = new BestGood(1, false, '위러브플러스', '2,700원', '130ml', 'images/best_3-1.jpg', '#');
    let good32 = new BestGood(2, false, '러브미 케일&셀러리', '1,900원', '130ml', 'images/best_3-2.jpg', '#');
    let good33 = new BestGood(3, false, '노니&깔라만시', '2,300원', '130ml', 'images/best_3-3.jpg', '#');
    let good34 = new BestGood(4, false, '마시는 새싹', '2,200원', '130ml', 'images/best_3-4.jpg', '#');
    let good35 = new BestGood(5, false, '식물성유산균 위&캡슐', '2,100원', '130ml', 'images/best_3-5.jpg', '#');
    // 40대 제품
    let good41 = new BestGood(1, false, '위러브플러스', '2,700원', '130ml', 'images/best_4-1.jpg', '#');
    let good42 = new BestGood(2, false, '노니&깔라만시', '2,300원', '130ml', 'images/best_4-2.jpg', '#');
    let good43 = new BestGood(3, false, '유기명일엽녹즙', '2,600원', '130ml', 'images/best_4-3.jpg', '#');
    let good44 = new BestGood(4, false, '', '원', '', 'images/no_img.png');
    let good45 = new BestGood(5, false, '마시는 새싹', '2,200원', '130ml', 'images/best_4-5.jpg', '#');
    // 50대 제품
    let good51 = new BestGood(1, false, '위러브플러스', '2,700원', '130ml', 'images/best_5-1.jpg', '#');
    let good52 = new BestGood(2, false, '노니&깔라만시', '2,300원', '130ml', 'images/best_5-2.jpg', '#');
    let good53 = new BestGood(3, false, '돌미나리와 민들레', '2,600원', '130ml', 'images/best_5-3.jpg', '#');
    let good54 = new BestGood(4, false, '식물성유산균 오메가&치아씨드', '2,100원', '130ml', 'images/best_5-4.jpg', '#');
    let good55 = new BestGood(5, false, '유기명일엽녹즙', '2,600원', '130ml', 'images/best_5-5.jpg', '#');




    let good_10 = [good11, good12, good13, good14, good15];
    let good_20 = [good21, good22, good23, good24, good25];
    let good_30 = [good31, good32, good33, good34, good35];
    let good_40 = [good41, good42, good43, good44, good45];
    let good_50 = [good51, good52, good53, good54, good55];

    let best_cate = $('.best-cate li a');
    let best_good = $('.best .good');

    let best_cate_bg = $('.best-cate-bg');
    let best_cate_bg_pos = [70, 70 + 55, 180, 235, 290];
    for (let i = 0; i < best_cate.length; i++) {
        let temp = (55 * i) + 70;
        best_cate_bg_pos[i] = temp;
    }
    let best_cate_index;

    $.each(best_cate, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();

            if (best_cate_index == index) {
                return;
            }

            showBest(index);
        });
    });

    function showBest(_index) {
        let best_cate_index = _index;
        let base_data;
        best_cate_bg.css('top', best_cate_bg_pos[_index]);
        best_cate.removeClass('best-cate-active');
        best_cate.eq(_index).addClass('best-cate-active');
        
        if (_index == 0) {
            best_cate.eq(_index).find('i').stop().animate({
                opacity: 0
            }, 150, function () {
                best_cate.eq(_index).find('i').addClass('best-10-active');
            }).animate({
                opacity: 1
            }, 150);
            best_cate.eq(4).find('i').removeClass('best-50-active');           
        } else if (_index == 4) {
            best_cate.eq(_index).find('i').stop().animate({
                opacity: 0
            }, 150, function () {
                best_cate.eq(_index).find('i').addClass('best-50-active');
            }).animate({
                opacity: 1
            }, 150);
            best_cate.eq(0).find('i').removeClass('best-10-active');
        } else {
            best_cate.eq(0).find('i').removeClass('best-10-active');
            best_cate.eq(4).find('i').removeClass('best-50-active');
        }


        if (_index == 0) {
            base_data = good_10;               
        } else if (_index == 1) {
            base_data = good_20;
        } else if (_index == 2) {
            base_data = good_30;
        } else if (_index == 3) {
            base_data = good_40;
        } else if (_index == 4) {
            base_data = good_50;
        }

        $.each(best_good, function (index, item) {

            let good = $(this);
            good.find('a').attr('href', base_data[index].link);
            good.find('.good-img').attr('src', base_data[index].image);
            good.find('.good-name').text(base_data[index].title);
            good.find('.good-price > b').text(base_data[index].price);
            good.find('.good-price > em').text('(' + base_data[index].ml + ')');

            if (base_data[index].like == true) {
                good.find('.good-heart').addClass('good-heart-active');
            } else {
                good.find('.good-heart').removeClass('good-heart-active');
            }

            good.find('.good-heart').off('click').on('click', function (event) {
                
                event.stopPropagation();
                event.preventDefault();

                if (base_data[index].like == false) {
                    $(this).addClass('good-heart-active');
                    base_data[index].like = true;
                } else {
                    $(this).removeClass('good-heart-active');
                    base_data[index].like = false;
                }
            });
        });
    }
    showBest(1);
}