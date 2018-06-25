<template>
    <section class="topBanner">
        <div id="logoTag">
            <img src="//dmknzb5g03rss.cloudfront.net/esalerugs-new.png" alt="eSaleRugs Logo" />
            <img src="//dmknzb5g03rss.cloudfront.net/free-shipping-free-returns-icon.jpg" alt="eSaleRugs Tagline" />
        </div>
        <ul id="custOptions" class="clearfix">
            <li v-for="option in custOptions"><a :href="option.href">{{option.title}}</a></li>
        </ul>
        <a id="cart" href="">
            <font-awesome-icon class="font-18" icon="shopping-cart"></font-awesome-icon>
            <span>Shopping Cart</span>
        </a>
        <nav>
            <ul id="topNav">
                <li v-for="link in topNav"><a :href="link.href">{{link.title}}</a></li>
            </ul>
            <input type="text" name="searchBar" id="search" placeholder="Search Rugs">
            <font-awesome-icon id="searchIcon" icon="search"></font-awesome-icon>
        </nav>
    </section>
</template>

<script>
    export default {
        name: 'globalHeader',
        data() {
            return {
                custOptions: [
                    { title: 'Order Status', href: '#' },
                    { title: 'Wishlist', href: '#' },
                    { title: 'Account', href: '#' },
                    { title: '1-866-647-3965 (24/7)', href: '#' }
                ],
                topNav: [
                    { title: 'Persian', href: '#' },
                    { title: 'Oriental', href: '#' },
                    { title: 'Clearance', href: '#' },
                    { title: 'Modern', href: '#' },
                    { title: 'Natural', href: '#' },
                    { title: 'Outdoor', href: '#' },
                    { title: 'Solid', href: '#' },
                    { title: 'Vintage', href: '#' },
                    { title: 'All Rugs', href: '#' }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../global.less';

    .topBanner {
        max-width: 1100px; margin: 0 auto; position: relative; margin-top: 20px;
        #logoTag {
            display: inline-block; list-style: none;
            img {
                display: inline-block; vertical-align: middle;
                &:nth-child(1n) {height:60px;}
                &:nth-child(2) {height: 28px; padding-left: 30px}
            }
        }
        #custOptions {
            list-style: none; display: inline-block; font-size: 15px; padding-left: 0; float: right; margin: 0;
            li {
                display: inline-block; vertical-align: middle;
                a {text-decoration: none; color: #777; padding: 0 5px}
                &:after {content: "|"; position: relative; color: @lightGray;}
                &:last-child {
                    &:after {content: none;}
                }
            }
        }
        #cart {position: absolute; display: block; right: 5px; text-decoration: none; color: @black; font-size: 21px; top: 30px;}
        nav {
            margin: 5px 0; position: relative;
            #topNav {
                list-style: none; padding-left: 0; padding-right: 34px; display: inline-block; margin: 10px 0 15px;
                li {
                    display: inline-block; padding-right: 25px;
                    a {
                          text-decoration: none; font-size: 21px; color: @lightGray;
                          &:hover {text-decoration: underline;}
                      }
                }
            }
            #search {display: inline-block; width: 128px; font-size: 21px; padding: 5px 10px 5px 45px; border: 1px solid #e5e5e5;}
            #searchIcon {position: absolute; right: 155px; top: 10px; font-size: 22px;}
        }
    }
</style>