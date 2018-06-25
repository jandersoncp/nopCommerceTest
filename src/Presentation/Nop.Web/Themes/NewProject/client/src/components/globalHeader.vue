<template>
    <section class="topBanner">
        <div id="logoTag">
            <img src="//dmknzb5g03rss.cloudfront.net/esalerugs-new.png" alt="eSaleRugs Logo" />
            <img src="//dmknzb5g03rss.cloudfront.net/free-shipping-free-returns-icon.jpg" alt="eSaleRugs Tagline" />
        </div>
        <ul id="custOptions" class="clearfix">
            <li><a href="">Order Status</a></li>
            <li><a href="">Wishlist</a></li>
            <li><a href="">Account</a></li>
            <li><a href="">1-866-647-3965 (24/7)</a></li>
        </ul>
        <a id="cart" href="">
            <font-awesome-icon class="font-18" icon="shopping-cart"></font-awesome-icon>
            <span>Shopping Cart</span>
        </a>
        <nav>
            <ul id="topNav">
                <li><a href="">Persian</a></li>
                <li><a href="">Oriental</a></li>
                <li><a href="">Clearance</a></li>
                <li><a href="">Modern</a></li>
                <li><a href="">Natural</a></li>
                <li><a href="">Outdoor</a></li>
                <li><a href="">Solid</a></li>
                <li><a href="">Vintage</a></li>
                <li><a href="">All Rugs</a></li>
            </ul>
            <input type="text" name="searchBar" id="search" placeholder="Search Rugs">
            <font-awesome-icon id="searchIcon" icon="search"></font-awesome-icon>
        </nav>
    </section>
</template>

<script>
    export default {
        name: 'globalHeader',
    }
</script>

<style lang="less" scoped>
    @import '../global.less';

    .topBanner {
        max-width: 1100px; margin: 0 auto; position: relative; margin-top: 20px;
        #logoTag {
            display: inline-block;
            img {
                display: inline-block; vertical-align: middle;
                &:nth-child(1n) {height:60px;}
                &:nth-child(2) {height: 28px; padding-left: 30px}
            }
        }
        #custOptions {
            list-style: none; display: inline-block; font-size: 15px; padding-left: 0; float: right;
            li {
                display: inline-block; vertical-align: middle;
                a {text-decoration: none; color: #777; padding: 0 5px}
                &:after {content: "|"; position: relative; color: @lightGray;}
                &:last-child {
                    &:after {content: none;}
                }
            }
        }
        #cart {position: absolute; display: block; right: 5px; text-decoration: none; color: @black; font-size: 22px; top: 45px;}
        nav {
            margin: 20px 0 10px; position: relative;
            #topNav {
                list-style: none; padding-left: 0; padding-right: 40px; display: inline-block;
                li {
                    display: inline-block; padding-right: 20px;
                    a {
                          text-decoration: none; font-size: 21px; color: @lightGray;
                          &:hover {text-decoration: underline;}
                      }
                }
            }
            #search {display: inline-block; width: 128px; font-size: 21px; padding: 5px 10px 5px 45px; border: 1px solid #e5e5e5;}
            #searchIcon {position: absolute; right: 160px; top: 17px; font-size: 22px;}
        }
    }
</style>