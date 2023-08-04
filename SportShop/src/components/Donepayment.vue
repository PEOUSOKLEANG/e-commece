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
        <div class="done-payment">
            <div class="done">
                <!-- <div class="header-payment-list">

                </div> -->
                <header>Payment-information </header>
                <ul>
                    <li>Name: Peou sokleang </li>
                    <li>Sex: Male</li>
                    <li>Phone number: 096827660</li>
                    <li>Location:  Phnom Penh </li>
                    <li>Order Products: Real Madrid Home 2023</li>
                    <li>Total price: 100$ </li>
                   
                </ul>
                <header style="margin-top:30px ;">Your Order is done</header>
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
<style>
.done-payment{
   
    display: flex;
    justify-content: center;
    width: 100%;
    height: 500px;
}
.done header{
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 50px;
}
.done header:hover{
    color: #5452ee;
}
.done ul{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.done ul li{
    list-style: none;
    font-size: 20px;
    margin-left: 20px;
    
}

</style>
