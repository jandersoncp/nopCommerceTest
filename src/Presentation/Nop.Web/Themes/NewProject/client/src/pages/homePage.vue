<template>
    <section>
        <hero-section></hero-section>

        <img class="ftHeadline" src="//assets.rugimg.com/global/home/title-headers/title-header_featured-categories.jpg" alt="Featured Categories" />
        <ul class="thumbWrap">
            <li class="thumb" v-for="product in products">
                <a :href="product.href">
                    <img :src="product.src" :alt="product.name" />
                    <span v-bind:class="{'font-14': product.name.length >= 50}">{{ product.name }}</span>
                </a>
            </li>
        </ul>

        <img class="ftHeadline" src="//assets.rugimg.com/global/home/title-headers/title-header_shop-with-confidence.jpg" alt="Shop with Confidence" />
        <div class="ftInfo" id="reviews">
            <carousel :perPage="1" :scrollPerPage="true" :paginationEnabled="false" :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="2500" :loop="true">
                <slide v-for="review of reviews">
                    <p>{{review.content}}</p>
                </slide>
            </carousel>
            <a href="#">Read More Reviews</a>
            <img src="//assets.rugimg.com/global/home/shop-with-confidence/shop-with-confidence_2.jpg" alt="Reviews and Customer Service Info" />
        </div>

        <img class="ftHeadline" src="//assets.rugimg.com/global/home/title-headers/title-header_shop-by-size.jpg" alt="Shop By Size" />
        <ul class="ftInfo">
            <li v-for="size in sizes" id="sizes">
                <a :href="size.href">
                    <img :src="size.src" :alt="size.name" />
                </a>
            </li>
        </ul>

        <img class="ftHeadline" src="//assets.rugimg.com/global/home/title-headers/title-header_shop-by-color.jpg" alt="Shop By Color" />
        <ul class="ftInfo">
            <li v-for="color in colors" id="colors">
                <a :href="color.href">
                    <img :src="color.src" :alt="color.name" />
                </a>
            </li>
        </ul>

        <img class="ftHeadline" src="//assets.rugimg.com/global/home/title-headers/title-header_clearance.jpg" alt="Clearance Sale" />
        <div class="ftInfo prodBlock carousel">
            <h3>Super Deals</h3>
            <carousel :perPage="1" :scrollPerPage="true" :paginationPadding="5" :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="2500" :loop="true">
                <slide v-for="item in clearCarousel">
                    <a :href="item.href">
                        <img :src="item.src" :alt="item.name" />
                        <span class="name">{{item.name}}</span>
                        <div class="price">
                            <span>{{item.strikethrough}}</span>
                            <span>{{item.price}}</span>
                        </div>
                    </a>
                </slide>
            </carousel>
        </div>

        <div class="ftInfo">
            <h3>Clearance Deals</h3>
            <ul class="ftInfo prodBlock">
                <li v-for="item in clearProds">
                    <a :href="item.href">
                        <img :src="item.src" :alt="item.name" />
                        <span class="name">{{item.name}}</span>
                        <div class="price">
                            <span>{{item.strikethrough}}</span>
                            <span>{{item.price}}</span>
                        </div>
                    </a>
                </li>
            </ul>
            <a id="clearButton" href="#">Clearance rugs - shop our best deals ever!<font-awesome-icon class="font-36" icon="angle-right"></font-awesome-icon></a>
        </div>

        <img class="ftHeadline" src="//assets.rugimg.com/global/home/title-headers/title-header_new-arrivals.jpg" alt="New Arrivals" />
        <ul class="ftInfo prodBlock">
            <li v-for="item in newArrivals" id="new">
                <a :href="item.href">
                    <img :src="item.src" :alt="item.name" />
                    <span class="name">{{item.name}}</span>
                    <p>{{item.discount}}</p>
                    <div class="price">
                        <span>{{item.strikethrough}}</span>
                        <span>{{item.price}}</span>
                    </div>
                </a>
                <a class="similar" href="">Show Similar Rugs</a>
            </li>
        </ul>

        <div class="pg" v-html="eSaleMessage"></div>

    </section>
</template>

<script>
    import HeroSection from '../components/heroSection.vue'; 
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: 'homePage',
        components: {
            HeroSection,
            Carousel,
            Slide
        },
        data() {
            return {
                products: [
                    { name: 'Shop Persian and Oriental Rugs', src: '//assets.rugimg.com/home_categories/persian-oriental.jpg', href: '#' },
                    { name: 'Modern Rugs', src: '//assets.rugimg.com/home_categories/modern.jpg', href: '#' },
                    { name: 'Marilyn Monroe Collection', src: '//assets.rugimg.com/home_categories/marilyn-monroe-shag-1.jpg', href: '#' },
                    { name: 'Casablanca Rugs', src: '//assets.rugimg.com/home_categories/casablanca.jpg', href: '#' },
                    { name: 'New Arrivals', src: '//assets.rugimg.com/home_categories/new-arrivals.jpg', href: '#' },
                    { name: 'New Rug Collections by Former RHONY Star Jill Zarin', src: '//assets.rugimg.com/home_categories/jz-uptown.jpg', href: '#' },
                    { name: 'Solid Rugs', src: '//assets.rugimg.com/home_categories/solid.jpg', href: '#' },
                    { name: 'Natural Rugs', src: '//assets.rugimg.com/home_categories/natural-2.jpg', href: '#' },
                    { name: 'Ziegler Rugs', src: '//assets.rugimg.com/home_categories/ziegler.jpg', href: '#' },
                    { name: 'Trellis Rugs', src: '//assets.rugimg.com/home_categories/trellis.jpg', href: '#' },
                    { name: 'Shag & Freize Rugs', src: '//assets.rugimg.com/home_categories/shag-frieze.jpg', href: '#' },
                    { name: 'Clearance Rugs', src: '//assets.rugimg.com/home_categories/clearance.jpg', href: '#' },
                    { name: 'Tribal Rugs', src: '//assets.rugimg.com/home_categories/tribal.jpg', href: '#' },
                    { name: 'Outdoor Rugs', src: '//assets.rugimg.com/home_categories/outdoor-4.jpg', href: '#' },
                    { name: 'Vintage Rugs', src: '//assets.rugimg.com/home_categories/vintage.jpg', href: '#' }
                ],
                reviews: [
                    { content: '"I searched and searched for several weeks for 2 large area rugs. Esalerugs had so much to choose from. I finally found what I wanted and the space just comes alive with all the color."' },
                    { content: '"Rug arrived in 2 days and was just as pictured. Colors are perfect for the area I bought it for. Price was unbelievable and am very happy with it."' },
                    { content: '"The rug was exactly as described and looked beautiful. Very happy with the purchase."' },
                    { content: '"Everything about my experience was first rate - beginning with navigating the website to conversation with customer service... because of the high quality rug runners, careful packing and timely delivery, I plan to purchase my next area rug from esalerugs.com."' }
                ],
                sizes: [
                    { name: '2x3 - 3x5', src: '//uniqueassets.s3.amazonaws.com/sizes/size_2x3-3x5.jpg', href: '#' },
                    { name: '5x8', src: '//uniqueassets.s3.amazonaws.com/sizes/size_5x8.jpg', href: '#' },
                    { name: '6x9 - 8x10', src: '//uniqueassets.s3.amazonaws.com/sizes/size_6x9-8x10.jpg', href: '#' },
                    { name: '9x12+', src: '//uniqueassets.s3.amazonaws.com/sizes/size_9x12.jpg', href: '#' },
                    { name: 'Rounds', src: '//uniqueassets.s3.amazonaws.com/sizes/size_rounds.jpg', href: '#' },
                    { name: 'Runners', src: '//uniqueassets.s3.amazonaws.com/sizes/size_runners.jpg', href: '#' }
                ],
                colors: [
                    { name: 'Shop Neutral Color Rugs', src: '//assets.rugimg.com/colors/neutral.jpg', href: '#' },
                    { name: 'Shop Black Color Rugs', src: '//assets.rugimg.com/colors/black.jpg', href: '#' },
                    { name: 'Shop Blue Color Rugs', src: '//assets.rugimg.com/colors/blue.jpg', href: '#' },
                    { name: 'Shop Brown Color Rugs', src: '//assets.rugimg.com/colors/brown.jpg', href: '#' },
                    { name: 'Shop Green Color Rugs', src: '//assets.rugimg.com/colors/green.jpg', href: '#' },
                    { name: 'Shop Orange Color Rugs', src: '//assets.rugimg.com/colors/orange.jpg', href: '#' },
                    { name: 'Shop Pink Color Rugs', src: '//assets.rugimg.com/colors/pink.jpg', href: '#' },
                    { name: 'Shop Purple Color Rugs', src: '//assets.rugimg.com/colors/purple.jpg', href: '#' },
                    { name: 'Shop Red Color Rugs', src: '//assets.rugimg.com/colors/red.jpg', href: '#' },
                    { name: 'Shop Yellow Color Rugs', src: '//assets.rugimg.com/colors/yellow.jpg', href: '#' }
                ],
                clearCarousel: [
                    { name: '5\' x 8\' Kashkuli Gabbeh Rug', href: '#', src: '//rugs.rugimg.com/3123518/300_300_0_0_midhigh_s_20_3123518_image_1010.jpg', strikethrough: '$807', price: '$109' },
                    { name: '5\' x 8\' Kashkuli Gabbeh Rug', href: '#', src: '//rugs.rugimg.com/3126043/300_300_0_0_midhigh_s_20_3126043_main.jpg', strikethrough: '$807', price: '$109' },
                    { name: '5\' x 8\' Kashkuli Gabbeh Rug', href: '#', src: '//rugs.rugimg.com/3126289/300_300_0_0_midhigh_s_20_3126289_image_1010.jpg', strikethrough: '$807', price: '$109' },
                    { name: '5\' x 8\' Kashkuli Gabbeh Rug', href: '#', src: '//rugs.rugimg.com/3125654/300_300_0_0_midhigh_s_20_3125654_image_1010.jpg', strikethrough: '$807', price: '$109' },
                    { name: '5\' x 8\' Kashkuli Gabbeh Rug', href: '#', src: '//rugs.rugimg.com/3114630/300_300_0_0_midhigh_s_20_3114630_image_1010.jpg', strikethrough: '$807', price: '$109' }
                ],
                clearProds: [
                    { name: '6\'x6\' Santa Fe Round Rug', href: '#', src: '//rugs.rugimg.com/3114408/300_300_0_0_midhigh_s_20_3114408_main.jpg', strikethrough: '$208', price: '$89' },
                    { name: '2\' 7 x 10\' Classic Agra Runner Rug', href: '#', src: '//rugs.rugimg.com/3122642/300_300_0_0_midhigh_s_20_3122642_image_1010.jpg', strikethrough: '$207', price: '$69' },
                    { name: '9\' x 12\' Trellis Rug', href: '#', src: '//rugs.rugimg.com/3114325/300_300_0_0_midhigh_s_20_3114325_main.jpg', strikethrough: '$1,596', price: '$219' }
                ],
                newArrivals: [
                    { name: '2\'7 x 4\' Kilim Maymana Rug', href: '#', src: '//rugs.rugimg.com/2422803/300_300_0_0_midhigh_s_20_2422803_main.jpg', discount: '50% OFF', strikethrough: '$208', price: '$89' },
                    { name: '11\' x 15\'10 Oushak Rug', href: '#', src: '//rugs.rugimg.com/2420190/300_300_0_0_midhigh_s_20_2420190_main.jpg', discount: '60% OFF', strikethrough: '$207', price: '$69' },
                    { name: '3\'2 x 3\'7 Kilim Maymana Square Rug', href: '#', src: '//rugs.rugimg.com/2426577/300_300_0_0_midhigh_s_20_2426577_main.jpg', discount: '50% OFF', strikethrough: '$1,596', price: '$219' },
                    { name: '3\' x 6\'3 Kilim Maymana Runner Rug', href: '#', src: '//rugs.rugimg.com/2423920/300_300_0_0_midhigh_s_20_2423920_main.jpg', discount: '50% OFF', strikethrough: '$208', price: '$89' },
                    { name: '10\' 2 x 13\' 8 Mahal Persian Rug', href: '#', src: '//rugs.rugimg.com/2421952/300_300_0_0_midhigh_s_20_2421952_main.jpg', discount: '60% OFF', strikethrough: '$207', price: '$69' },
                    { name: '3\'6 x 4\'9 Hamedan Persian Rug', href: '#', src: '//rugs.rugimg.com/2419840/300_300_0_0_midhigh_s_20_2419840_main.jpg', discount: '60% OFF', strikethrough: '$1,596', price: '$219' },
                    { name: '3\'4 x 5\' Kilim Maymana Rug', href: '#', src: '//rugs.rugimg.com/2425321/300_300_0_0_midhigh_s_20_2425321_main.jpg', discount: '50% OFF', strikethrough: '$208', price: '$89' },
                    { name: '3\'2 x 4\'2 Kilim Maymana Rug', href: '#', src: '//rugs.rugimg.com/2424344/300_300_0_0_midhigh_s_20_2424344_main.jpg', discount: '50% OFF', strikethrough: '$207', price: '$69' },
                    { name: '9\' x 12\' Trellis Rug', href: '#', src: '//rugs.rugimg.com/2426424/300_300_0_0_midhigh_s_20_2426424_main.jpg', discount: '60% OFF', strikethrough: '$1,596', price: '$219' },
                    { name: '1\'9 x 3\'9 Torkaman Persian Rug', href: '#', src: '//rugs.rugimg.com/2427452/300_300_0_0_midhigh_s_20_2427452_main.jpg', discount: '50% OFF', strikethrough: '$208', price: '$89' },
                    { name: '3\' 2 x 3\'5 Kilim Maymana Square Rug', href: '#', src: '//rugs.rugimg.com/2426630/300_300_0_0_midhigh_s_20_2426630_main.jpg', discount: '50% OFF', strikethrough: '$207', price: '$69' },
                    { name: '3\'4 x 5\' Kilim Maymana Rug', href: '#', src: '//rugs.rugimg.com/2420544/300_300_0_0_midhigh_s_20_2420544_main.jpg', discount: '60% OFF', strikethrough: '$1,596', price: '$219' }
                ],
                eSaleMessage: "<p>Welcome to eSaleRugs.</p>We have over 25, 000 rugs with unique designs, colors and sizes in stock. Whether you're looking for the most innovative contemporary designs, or for the classic traditional rugs we all know and love, you will find the right rugs for every room here.</p><p>Starting with well - trained customer service and a dedication to customer satisfaction at every level, buying from eSaleRugs is designed around a hassle - free buying experience. When you buy from eSaleRugs you will get your rugs faster. We ship over 90% of orders the same business day.</p><p>We offer a 30 Day Free return policy for all rugs. That means we pay for the shipping back.There is no restocking fee of any kind.</p><p>At eSaleRugs we want to provide the best experience you've ever had buying any product online or offline, we try to appreciate and understand every suggestion and complaint. Please send us feedback, even if you don't purchase a rug.<br>Thank you for shopping with us today.</p>"
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../global.less';

    .ftHeadline {width: 100%; margin-top: 10px;}
    .thumbWrap {
        max-width: 1100px; margin: 0 auto; padding-left: 0;
        .thumb {
            display: inline-block; width: 31.5%; margin-right: 2.75%;
            a {text-decoration: none; color: @lightGray;}
            &:nth-child(3n) {margin-right: 0;}
            img {width: 100%;}
            span {display: inline-block; margin: 10px 0 15px;}
        }
    }
    .ftInfo {
        max-width: 1100px; margin: 20px auto; list-style: none; padding-left: 0; text-align: right; position: relative;
        img {width: 100%;}
        #clearButton {display: inline-block; padding: 20px 90px 20px 60px; position: relative; margin-top: 20px; background-color: #f3f3f3; border-radius: 10px; color: #777; text-decoration: none; text-transform: uppercase; font-size: 26px;}
        svg {position: absolute; top: 16px; right: 60px;}
        h3 {text-align: left; font-size: 32px; padding-left: 25%; font-weight: 300; margin: 0 0 35px 0;}
        #sizes {
            width: calc(87.5% / 6); margin-right: 2.5%; display: inline-block; 
            &:last-child {margin-right: 0;}
        }
        #colors {
            width: calc(91% / 10); margin-right: 1%; display: inline-block; 
            &:last-child {margin-right: 0;}
        }
        &.prodBlock {
            text-align: right;
            li, .VueCarousel-slide{
                width: 25%; display: inline-block; text-align: center;
                a {
                    text-decoration: none; color: #1966A1; font-size: 14px;
                    > span {display: inline-block; margin: 10px 0 5px;}
                    .price {
                        color: @lightGray; font-size: 16px;
                        span:nth-child(1) {text-decoration: line-through;}
                        span:nth-child(2) {color: rgb(0, 143, 33); font-weight: bold;}
                    }
                }
                &#new {
                    margin-bottom: 75px;
                    img {max-width: 270px; max-height: 270px; width: auto;}
                    p {margin: 5px 0; color: red; font-weight: bold; font-size: 12px;}
                    a > span {margin: 10px 0 0;}
                    .similar {font-size: 10px; color: @lightGray; }
                }
            }
            &.carousel {
                position: relative; top: 70px;
                h3 {padding-left: 0;}
                .VueCarousel {position: absolute; width: 25%;}
            }
        }
    }
    #reviews {
        position: relative;
        .VueCarousel {
            position: absolute; width: 40%;
            .VueCarousel-slide {max-width: 100%; text-align: left; font-size: 18px; line-height: 1.6;}
        }
        a {color: @lightBlue; position: absolute; bottom: 165px;}
    }
    .pg {max-width: 1100px; margin: 0 auto; text-decoration: none;}
   
</style>
<style lang="less">
    .carousel .VueCarousel-pagination {position: absolute; text-align: left !important; top: -40px;}
</style>