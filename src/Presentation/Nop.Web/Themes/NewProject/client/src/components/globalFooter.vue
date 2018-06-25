<template>
    <section id="globalFooter">
        <div id="footerWrap">
            <div>
                <ul id="cardLinks">
                    <li v-for="item in checkoutTable"><a :href="item.href"><img :src="item.src" :alt="item.name" /></a></li>
                </ul>
                <ul id="basicLinks">
                    <li v-for="item in basicLinks"><a :href="item.href">{{item.name}}</a></li>
                </ul>
                <ul id="rugLinks">
                    <li v-for="item in rugLinks"><a :href="item.href">{{item.name}}</a></li>
                </ul>
            </div>
            <div id="rightBox">
                <div class="top">
                    <a href="">
                        <img src="//seals.resellerratings.com/seal.php?seller=27267" alt="" />
                    </a>
                    <a id="googleReviews" href="">
                        <p id="stars">
                            <span>4.7</span>
                            <img src="//www.gstatic.com/verifiedreviews/gray_stars_large.png" alt="" />
                        </p>
                        <img src="//www.gstatic.com/verifiedreviews/en/gcr_logo_stacked.png" alt="" />
                    </a>
                </div>
                <div id="info" v-html="UUinfo"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'globalFooter',
        data() {
            return {
                checkoutTable: [
                    { name: 'VISA Checkout Accepted', src: '//dmknzb5g03rss.cloudfront.net/images/logos/visa.png', href: '#' },
                    { name: 'American Express Checkout Accepted', src: '//dmknzb5g03rss.cloudfront.net/images/logos/amex.png', href: '#' },
                    { name: 'MasterCard Checkout Accepted', src: '//dmknzb5g03rss.cloudfront.net/images/logos/mastercard.png', href: '#' },
                    { name: 'Discover Checkout Accepted', src: '//dmknzb5g03rss.cloudfront.net/images/logos/discover.png', href: '#' },
                    { name: 'Amazon Payments Checkout Accepted', src: '//dmknzb5g03rss.cloudfront.net/amazon_payments.png', href: '#' },
                    { name: 'PayPal Checkout Accepted', src: '//dmknzb5g03rss.cloudfront.net/images/logos/paypal.png', href: '#' },
                ],
                basicLinks: [
                    { name: 'FAQ', href: '#' },
                    { name: 'Contact Us', href: '#' },
                    { name: 'Privacy Policy', href: '#' },
                    { name: 'Terms & Conditions', href: '#' },
                    { name: 'Return Policy', href: '#' },
                    { name: 'Affiliate Program', href: '#' },
                    { name: 'Trade Program', href: '#' }
                ],
                rugLinks: [
                    { name: 'Area Rugs:', href: '#' },
                    { name: 'Modern', href: '#' },
                    { name: 'Traditional', href: '#' },
                    { name: 'Persian', href: '#' },
                    { name: 'Shag', href: '#' },
                    { name: 'Solid', href: '#' },
                    { name: 'Tribal', href: '#' },
                    { name: 'Outdoor', href: '#' },
                    { name: 'Jute', href: '#' },
                    { name: 'Sisal', href: '#' },
                    { name: 'Nepal', href: '#' },
                    { name: 'Wool', href: '#' }
                ],
                UUinfo: '<p style="margin: 0">104 Williamson Street | Fort Mill, South Carolina 29715 | U.S.A.</p><p style="margin: 0; font-weight: bold;">Customer Service Reference # 55-99-18-6-86</p><p style="margin: 0">Copyright 2007 - 2018 esalerugs.com</p><p style="margin: 0"><a style="color: #1966A1; text-decoration: none;" href="">Free Rug Giveaway</a></p>'

            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../global.less';

    #globalFooter {
        border-top: 1px solid #e5e5e5; margin: 10px 0 0; padding: 10px 0;
        #footerWrap {
            max-width: 1100px; margin: 0 auto;
            > div {width: 60%;}
            div {
                display: inline-block; vertical-align: top;
                ul {
                    list-style:none; padding: 0; font-size: 12px; margin: 10px 0;
                    li {
                        display: inline-block; vertical-align: middle;
                        a {color: @lightBlue; text-decoration: none;}
                    }
                }
                #cardLinks {margin-bottom: 20px;}
                #basicLinks, #rugLinks {
                    margin: 5px 0;
                    li {
                        &:nth-child(1) a {padding-left: 0;}
                        &:after {content: "|"; color: @lightBlue; position: relative; color: #777;}
                        a {padding: 0 5px;}
                    }
                }
                #rugLinks {
                    li:nth-child(1) {
                        &:after {content: none;}
                        a {padding-right: 0;}
                    }
                }
            }
            #rightBox {
                text-align: right; width: 39.5%;
                a {display: inline-block; margin: 0 10px; text-decoration: none;}
                #googleReviews {
                    display: inline-block; height: 54px; vertical-align: top; background-color: #f5f5f5; padding: 5px 5px 0 5px; width: 165px; text-align: left;
                    #stars {
                        font-size: 10px; color: #e57125; margin: 0 0 5px 0;
                        img {height: 10px;}
                    }
                }
            }
            #info {font-size: 12px; margin: 10px 0;}
        }
    }
</style>