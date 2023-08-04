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
        <div class="sub-name">
            <h2>Real Madrid</h2>
        </div>
        <div class="mid-order">
            <div class="mid-left">
                <img src="../components/image//RealMadrid23.png" alt="">
                <div class="mid-left-data">
                    <span>Real Madrid Home 2023</span>
                    <Label>Size:</Label>
                    <select name="" id="">
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                        <option value="">XXL</option>
                    </select>
                    <label for="">Quantity:</label>
                    <div class="quantity">
                        <input type="Number" min="1" max="10" value="1">
                    </div>
                    <div class="prices">
                        <label for="">Prices:</label>
                        <span>100$</span>
                        <button style="margin-top:20px ;">Add</button>
                    </div>
                </div>
            </div>
            <div class="mid-right">
                <span>For your Information</span>
                <form action="#">
                    <div>
                        <label>Name:</label>
                        <label>Phone number:</label>
                        <label>Sex:</label>
                        <label>Location:</label>
                        <label for="">Order:</label>
                    </div>
                    <div>
                        <input type="text" required>
                        <input type="text" required>
                        <select name="" id="">
                            <option value="">Men</option>
                            <option value="">Women</option>
                        </select>
                    <!-- max-contain -->
                        <input type="text">
                        <p>RealMadrid Home 23,L,100$ <a href="">detaials</a></p>
                        <div class="btn-confirm"> 
                            <button @click.prevent="goback()">Cancel</button>
                            <button @click.prevent="payment()">Confirm</button>
                        </div>
                    </div>
                    
                    
                </form>
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
        payment(){
            this.$router.push({path:'/selectorder/payment'}); 
        }
    }
}
</script>

