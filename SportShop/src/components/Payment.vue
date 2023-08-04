<template>
    <main>
        <div class="header">
            <div class="header-left">
                <div> <img src="../components/image/logo.png"></div>
                <div class="title">
                    <h1>SportShop</h1>
                </div>
            </div>
            <div class="header-center">
                <router-link to="/">Home</router-link>
                <router-link to="/goshop">Shop</router-link>
                <router-link to="/">Products</router-link>
                <router-link to="/discount">Promotion</router-link>
            </div>
            <div class="header-right">
                <!-- profile users -->
                <div><img src="../components/image/cart.png" alt=""></div>
                <!-- <div><img src="../components/image/user.png" alt=""></div> -->
            </div>
            <!-- ==== -->
        </div>
        <div class="mid-payment">
            <div class="payment-list">
                <!-- <div class="header-payment-list">

                </div> -->
                <header>Payment-information </header>
                <ul>
                    <li>Name: Peou sokleang </li>
                    <li>Sex: Male</li>
                    <li>Phone number: 096827660</li>
                    <li>Location:  Phnom Penh </li>
                </ul>
                <div class="payment-method">
                    <hr>
                    <span>Payment Method</span>
                    
                    <img src="" alt="">
                    <input type="text" placeholder="Card Number" >
                    <input type="text" placeholder="Name on Card">
                    <input type="text" placeholder="MM/YY">
                    <input type="text" placeholder="CVV">
                </div>
                <ul>
                    <li>Order Products: Real Madrid Home 2023</li>
                    <li>Total price: 100$ </li>
                </ul>
                <hr>
                <div class="btn-payment">
                    <button @click.prevent="goback()">Cancel</button>
                    <button @click.prevent="done()" >Submit </button>

                </div>
            </div>
            <div class="mid-payment-data">
               <header>Your Cart</header>
                <div class="payment-data-order">
                    <img src="../components/image/RealMadrid23.png" alt="">
                    <ul>
                        <li>Real Madrid</li>
                        <li>L</li>
                        <li>1</li>
                        <li>100$</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="followus">
                <a href="#">FOLLOW US</a>
                <div>
                    <img src="../components/image/instagram.png" alt="">
                    <img src="../components/image/facebook.png" alt="">
                </div>

            </div>
            <div class="payment">
                <a href="#">PAYMENT</a>
                <div>
                    
                    <img src="../components/image/visa.svg" alt="">
                    <img src="../components/image/mastercard.svg" alt="">
                    <img src="../components/image/paypal.svg" alt="">
                    <img src="../components/image/amazon-pay.svg" alt="">
                </div>
            </div>
            <div class="contact">
                <a href="#">CONTACT US</a>
                <div  class="cnt-gmail">
                    <input type="text" placeholder="message">
                    <button>Sent</button>
                </div>
            </div>
            <div class="about">
                <a href="#">ABOUT US</a>
                <p><b>SportShop</b> is the website built from ITC's student project</p>
            </div>
        </div>

    </main>
</template>
<script>
export default{
    methods:{
        goback(){
            this.$router.go(-1);
        },
        done(){
            this.$router.push({path:'/selectorder/payment/donepaymenet'}); 
        }
    }
}

</script>
