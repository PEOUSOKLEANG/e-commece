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
                        <!-- <img src="../components/image/real madrid.jpg" alt="">  -->
                        <!-- image -->

                    </div>
                    <div>
                        <span><a href="/goshop">GO SHOP</a></span>
                    </div>
                </div>
                <div class="box">
                    <div class="image-pros">
                        <!-- image -->
                    </div>
                    <div>
                        <span><a href="/shoes">SHOES</a></span>
                    </div>
                </div>
                <div class="box">
                    <div class="image-pros">
                        <!-- image -->
                        

                    </div>
                    <div>
                        <span><a href="/clothes">CLOTHES</a></span>
                    </div>
                </div>
                <div class="box">
                    <div class="image-pros">
                        <!-- image -->

                    </div>
                    <div>
                        <span><a href="/newDrop">NEW DROP</a></span>
                    </div>
                </div>
                <div class="box">
                    <div class="image-pros">
                        <!-- image -->

                    </div>
                    <div>
                        <span><a href="/accessories">ACCESSORIES</a></span>
                    </div>
                </div>
                <div class="box">
                    <div class="image-pros">
                        <!-- image -->

                    </div>
                    <div>
                        <span><a href="/discount">PROMOTION</a></span>
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

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
}

main {
    width: 100vw;
    height: 100vh;
}

main .header {
    width: 100vw;
    height: 136px;
    background: rgba(89, 106, 195, 0.44);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    /* flex-direction: row; */
}

.header .header-left {
    height: 100%;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header .header-center {
        max-width: 60%;
        height: 60%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        /* border:solid 1px ;
        border-radius:10px ; */
        align-items: center;
    }

    .header-center a {
        position: relative;
        color: rgb(0, 0, 0);
        font-size: 30px;
        text-decoration: none;
        letter-spacing: 0.5px;
        padding: 0 10px;
    }
    .header-center a:after{
        content: " ";
        position: absolute;
        background-color: black;
        height: 3px;
        width: 0;
        left: 0;
        bottom: -10px;
        transition: 0.3s;

    }

    .header-center a:hover {
        color: rgb(237, 237, 237);
    }
    .header-center a:hover:after{
        width: 100%;
    }

.header .header-right {
    height: 100%;
    padding-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

main .content {
    background-image: url('../components/image/homeimg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* Add the blur effect */
    /* filter: blur(8px);
    -webkit-filter: blur(8px); */
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 100vw;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content .search {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}

.content .search p {
    color: rgb(0, 0, 0);
}

.content .search input {
    outline: none;
    width: 400px;
    height: 50px;
    border-radius: 115px;
    background-color: #5452ee;
    border: none;
    color: white;
    font-size: 30px;
    padding:  10px;
    
}

.content .search ::placeholder {
    font-size: 30px;
    color: black;
    text-align: center;
}

.content .search ::placeholder :hover {
    font-size: 30px;
    color: aliceblue;
    text-align: center;
    border: white;
    background-color: #5452ee;
}

main .body {
    margin-top: 5px;
    width: 100%;
    height:100% ;
    box-sizing: border-box;
}

.middle {
    /* display: grid;
    grid-template-columns: repeat(3, minmax(0, 0.5fr)); */
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
   
    
}

.middle>:nth-child(1) {
    background: rgba(89, 106, 195, 0.54);
    /* position: absolute; */

}

.middle>:nth-child(2) {
    background: rgba(73, 206, 166, 0.45);
}

.middle>:nth-child(3) {
    background: rgba(29, 26, 200, 0.3);

}

.middle>:nth-child(4) {
    background: #C2A7CE;

}

.middle>:nth-child(5) {
    background: rgba(105, 32, 32, 0.51);

}

.middle>:nth-child(6) {
    background: #D9D9D9;
}

.middle .box {
    width: 28%;
    height: 300px;
    /* left: 60px; */
    top: 395px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    margin-top: 66px;
    display: flex;
    flex-direction: row;
    object-fit: cover;
    
}

.middle .box .image-pros {
    width: 50%;
    height: 300px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    background-color: aliceblue;
}

.middle .box>:nth-child(2) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.middle .box>:nth-child(2) a {
    color: black;
}
/* footter */

main .footer {
    margin-top: 50px;
    width: 100%;
    height: 200px;
    background: rgba(89, 106, 195, 0.5);
    display: flex;
    justify-content:space-around;
    box-sizing: border-box;
    /* padding-right: 2rem; */
}
.footer .followus{
    max-width: 25%;
    display:flex;
    flex-direction: column;
}

.footer .followus a ,.footer .payment a, .footer .contact a, .footer .about a {
    color: rgba(0, 0, 0, 0.76);
    text-decoration: none;
    font-size: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 10px;
    
}
.footer .followus>:nth-child(2) {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.footer .payment{
    display: flex;
    flex-direction: column;
}
.footer .payment>:nth-child(2) {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
}
.payment>:nth-child(2) img{
    width: 64px;
    height: 64px;
}
.contact {
    display:flex ;
    flex-direction: column;
    gap: 10px;
   
}
.contact .cnt-gmail{
    display: flex;
    flex-direction: row;
    gap: 10px;
  

}
.cnt-gmail input{
    outline: none;
    border: none;
    width:150px;
    height:40px;
    border-radius:5px ;
    box-shadow:1px 0.3px 1px .0.3px rgba(89, 106, 195, 0.5); 
    padding: 5px;
}
.cnt-gmail button{
    box-sizing: border-box;
    width:50px;
    height: 40px;
    border: none;
    border-radius: 3px;
    background-color: #000000;
    color: aliceblue;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.cnt-gmail button:hover{
    background-color: black;
    color: aliceblue;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.54);
    transition: 3ms;
}
</style>
  