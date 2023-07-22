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
                <a href="/">Home </a>
                <a href="/goshop">Shop </a>
                <a href="#">Products </a>
                <a href="/discount">Promotion</a>
            </div>
            <div class="header-right">
                <!-- profile users -->
                <div><img src="../components/image/cart.png" alt=""></div>
                <div><img src="../components/image/user.png" alt=""></div>
            </div>
            <!-- ==== -->
        </div>
        <div class="content">
            <div class="search">
                <input type="text" placeholder="Search.... ">
                <p><strong>10% of All Items Will Donate To Poor People</strong></p>
            </div>
        </div>
        <div class="sub-name">
            <h2>Goshop</h2>
        </div>
        <div class="produce" >
            <div class="pro-img">
                <!-- <img src="../components/image/RealMadrid23.png" alt=""> -->
            </div>
            <li> </li>

        </div>
        <!-- footer -->
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
    main .sub-name{
        margin-left: 50px;
        margin-top: 25px;
        max-width:fit-content;
        padding: 30px;
        height:50px;
        background-color:  #5452ee;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .sub-name:hover{
        background-color: black;
        transition: 5ms;
        box-shadow: 0px 0px 0px 1px ;
    }
    .sub-name h2{
        color: aliceblue;
        font-family: sans-serif;
        

    }
    main .produce{
        width: 20%;
        margin-left: 50px;
        background-color: aliceblue;
        box-shadow:0px 4px 10px;
        margin-top: 50px;
        height: 400px;
    }
    .produce .pro-img{
        width:50% ;
        object-fit: contain;
       
    }
    .produce img{
        width:fit-content;
        object-fit: contain;
        background-color: none;
        

        
    }
</style>
