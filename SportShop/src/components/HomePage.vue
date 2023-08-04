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
                <router-link to="/goshop">Products</router-link>
                <router-link to="/goshop">Promotion</router-link>
            </div>
            <div class="header-right">
                <!-- profile users -->
                <div><img src="../components/image/cart.png" alt=""></div>
                
                
            </div>
            <!-- ==== -->
        </div>

        <div class="content">
            <div class="search">
                <input type="text" placeholder="Search.... ">
                <p><strong>10% of All Items Will Donate To Poor People</strong></p>
            </div>
        </div>
        <div class="body">
            <div class="middle">
                <div class="box">
                    <div class="image-pros">
                        <img src="../components/image/RealMadrid23.png" alt=""> 
                        <!-- image -->

                    </div>
                    <div>
                        <span><a><router-link to="/goshop">SHOP</router-link></a></span>
                    </div>
                </div>
                <div class="box">
                    <div class="image-pros">
                        <!-- image -->
                    </div>
                    <div>
                        <span><a><router-link to="/shoes">SHOES</router-link></a></span>
                    </div>
                </div>
                <div class="box">
                    <div class="image-pros">
                        <!-- image -->
                        <!-- <img src="../components/image/Bacelona 23.png" alt=""> -->
                        

                    </div>
                    <div>
                        <span><a><router-link to="/clothes">CLOTHES</router-link></a></span>
                    </div>
                </div>
                <div class="box">
                    <div class="image-pros">
                        <!-- image -->

                    </div>
                    <div>
                        <span><a><router-link to="/newDrop">NEW DROP</router-link></a></span>
                        
                        
                    </div>
                </div>
                <div class="box">
                    <div class="image-pros">
                        <!-- image -->

                    </div>
                    <div>
                        <span><a><router-link to="/accessories">ACCESSORIES</router-link></a></span>
                        
                    </div>
                </div>
                <div class="box">
                    <div class="image-pros">
                        <!-- image -->

                    </div>
                    <div>
                        <span><a><router-link to="/discount">PROMOTION</router-link></a></span>

                        
                    </div>
                </div>
            </div>

        </div>
        <!-- <div class="btnfooter">
            <img src="../components/image/heart.png" alt="">
            <img src="../components/image/cart.png" alt="">
            <img src="../components/image/edit.png" alt="">

        </div> -->
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




  