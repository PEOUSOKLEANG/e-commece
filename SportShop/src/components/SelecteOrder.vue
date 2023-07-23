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
                <a href="#">Home </a>
                <a href="#">Shop </a>
                <a href="#">Products </a>
                <a href="#">Promotion</a>
            </div>
            <div class="header-right">
                <!-- profile users -->
                <div><img src="../components/image/cart.png" alt=""></div>
                <div><img src="../components/image/user.png" alt=""></div>
            </div>
            <!-- ==== -->
        </div>
        <div class="mid-order">
            <div class="mid-left">
                <img src="../components/image//RealMadrid23.png" alt="">
            </div>
            <div class="mid-right">
                <form action="#">
                    <Label>Name</Label>
                    <input type="text"><br>
                    <Label>Phonenumber</Label>
                    <input type="text"><br>
                    <select name="" id="">
                        <option value="">Men</option>
                        <option value="">Women</option>
                        <option value="">Kid</option>
                    </select><br>
                    <select name="" id="">
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                        <option value="">XXL</option>
                    </select>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value=""></option>
                    </select>
                    <!-- max-contain -->
                    <Label>Location</Label>
                    <input type="text">
                </form>
            </div>
            <div class="mid-bottom">
                <li></li>
                <li></li>
                <li></li>
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
main .mid-order {
    max-width: 90%;
    height:fit-content;
    /* background-color: rgb(0, 0, 0); */
    display: flex;
    flex-direction: row;
    gap: 10px;
    /* justify-content: space-evenly; */

}
.mid-order .mid-left{
    background-color:rgb(255, 255, 255);
    /* box-shadow:0px 4px 30px ; */
    border: 1px solid black;
    width:300px;
    height: 100%;
    /* padding-top:50px;
    padding-bottom:50px; */
    
}
.mid-left img{
    width:300px;
    height: 400px;
    object-fit:fit-content;
}
.mid-order .mid-right{
    background-color:rgb(255, 255, 255);
    /* box-shadow:0px 4px 30px ; */
    border: 1px solid black;
    width:400px;
    height: 100%;
   
}

</style>