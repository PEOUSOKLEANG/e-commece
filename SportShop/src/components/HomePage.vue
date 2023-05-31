<template>
    <div class="main">
        <div class="header">
            <div>
                <div> <img src="../components/image/logo.png">
                </div>
                <div>
                    <h1>SportShop</h1>
                </div>
            </div>
            <div>
                <div><img src="../components/image/user.png" alt=""></div>
                <div>
                    <h1>Account</h1>
                </div>
            </div>

        </div>
        <div class="content">
            <div>
                <a href="#">Home | </a>
                <a href="#">Shop | </a>
                <a href="#">Categary | </a>
                <a href="#">ByProducts | </a>
                <a href="#">Preorder | </a>
            </div>
            <div>
                <input type="text"  placeholder="Search.... ">
                <p><strong>10% of All Items Will Donate To Poor People</strong></p>
            </div>
        </div>
        <div class="body">
            <div class="box1">
                <div>

                </div>
                <div>
                    <span><a href="#">GO SHOP</a></span>
                </div>
            </div>
            <div class="box2">
                <div>
                </div>
                <div>
                    <span><a href="#">SHOES</a></span>
                </div>
            </div>
            <div class="box3">
                <div>
                </div>
                <div>
                    <span><a href="#">CLOTHES</a></span>
                </div>
            </div>
            <div class="box4">
                <div>
                </div>
                <div>
                    <span><a href="#">NEW DROP</a></span>
                </div>
            </div>
            <div class="box5">
                <div>
                </div>
                <div>
                    <span><a href="#">ACCESSORIES</a></span>
                </div>
            </div>
            <div class="box6">
                <div>
                </div>
                <div>
                    <span><a href="#">PROMOTION</a></span>
                </div>
            </div>
        </div>
        <div class="btnfooter">
                <img src="../components/image/heart.png" alt="">
                <img src="../components/image/cart.png" alt="">
                <img src="../components/image/edit.png" alt="">

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
                    <div class="pay1"><a href="#"> VISA</a></div>
                    <div class="pay2"><a href="#">DEBIT</a></div>
                    <div class="pay1"><a href="#">ABA</a></div>
                    <div class="pay2"><a href="#">WING</a></div>
                </div>


            </div>
            <div class="contact">
                <a href="#">CONTACT US</a>
                <div>
                    <div class="cnt"><a href="#">FACEBOOK</a></div>
                    <div class="cnt"><a href="#">GAMIL</a></div>
                    <div class="cnt"><a href="#">SPP & SER</a></div>

                </div>


            </div>
            <div class="about">
                <a href="#">ABOUT US</a>
            </div>
        </div>
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
}
.main {
    width: 100vw;
    height: 1500px;
}

.header {
    width: 100vw;
    height: 136px;
    background: rgba(89, 106, 195, 0.44);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.header>:nth-child(1) {
    height: 100%;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;

}

.header>:nth-child(2) {
    height: 100%;
    padding-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.content {
    background-image: url('../components/image/homeimg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 100vw;
    height: 200px;


}

.content>:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}

p {
    color: aliceblue;
}

a {
    color: aliceblue;
    font-size: 25px;
}

input {
    width: 400px;
    height: 50px;
    border-radius: 115px;
    background-color: #5452ee;
    border: none;
    color: white;
    font-size: 30px;
    padding-left: 1rem;

}

::placeholder {
    font-size: 30px;
    color: black;
    text-align: center;
}

::placeholder:hover {
    font-size: 30px;
    color: aliceblue;
    text-align: center;
    border: white;
    background-color: #5452ee;
}

.body {
    margin-top: 5px;
    width: 100vw;
    height: 800px;
    background: rgba(141, 156, 228, 0.26);
    border-radius: 49px;
    /* padding-left: 1rem; */

    /* display: flex;
    flex-wrap:wrap ;
    flex-direction: column;
    gap: 4vw; */
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 0.5fr));



}

.box1 {

    width: 28vw;
    height: 300px;
    left: 60px;
    top: 395px;
    background: rgba(89, 106, 195, 0.54);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    margin-top: 66px;

    display: flex;
    flex-direction: row;
    
}

.box1>:nth-child(1) {
    /* background-image: url('../components/image/box1.jpg');
    background-repeat: no-repeat;
    background-size: cover; */
    width: 50%;
    height: 300px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    background-color: aliceblue;
}
.box1 >:nth-child(2){
    width: 50%;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box1 a {
    color: black;
}

/* 2 */
.box2 {

    width: 28vw;
    height: 300px;
    left: 60px;
    top: 395px;

    background: rgba(73, 206, 166, 0.45);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    margin-top: 66px;

    display: flex;
    flex-direction: row;
}

.box2>:nth-child(1) {
    width: 50%;
    height: 300px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    background-color: aliceblue;
}
.box2 >:nth-child(2){
    width: 50%;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box2 a {
    color: black;
}

/* 3 */
.box3 {

    width: 28vw;
    height: 300px;
    left: 60px;
    top: 395px;

    background: rgba(29, 26, 200, 0.3);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    margin-top: 66px;

    display: flex;
    flex-direction: row;
}

.box3>:nth-child(1) {
    width: 50%;
    height: 300px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    background-color: aliceblue;
}
.box3 >:nth-child(2){
    width: 50%;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box3 a {
    color: black;
}

/* 4 */
.box4 {

    width: 28vw;
    height: 300px;
    left: 60px;
    top: 395px;

    background: #C2A7CE;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    margin-top: 66px;

    display: flex;
    flex-direction: row;
}

.box4>:nth-child(1) {
    width: 50%;
    height: 300px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    background-color: aliceblue;
}
.box4 >:nth-child(2){
    width: 50%;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box4 a {
    color: black;
}

/* 5 */
.box5 {

    width: 28vw;
    height: 300px;
    left: 60px;
    top: 395px;

    background: rgba(105, 32, 32, 0.51);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    margin-top: 66px;

    display: flex;
    flex-direction: row;
}

.box5>:nth-child(1) {
    width: 50%;
    height: 300px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    background-color: aliceblue;
}
.box5 >:nth-child(2){
    width: 50%;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box5 a {
    color: black;
}

/* 6 */
.box6 {

    width: 28vw;
    height: 300px;
    left: 60px;
    top: 395px;

    background: #D9D9D9;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    margin-top: 66px;

    display: flex;
    flex-direction: row;
}

.box6>:nth-child(1) {
    width: 50%;
    height: 300px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    background-color: aliceblue;
}
.box6 >:nth-child(2){
    width: 50%;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box6 a {
    color: black;
}

/* btnfooter */
.btnfooter {
    margin: auto;
    margin-top: 4rem;
    width: 512px;
    height: 70px;
    border-radius: 115px;
    background: rgba(89, 106, 195, 0.32);
    border: none;
    color: white;
    font-size: 30px;
    padding-left: 1rem;

    display:flex;
    justify-content: space-between;
}

.footer {
    margin-top: 50px;
    width: 100vw;
    height: 228px;
    background: rgba(89, 106, 195, 0.5);
    display: flex;
    justify-content: space-between;
    padding-right: 2rem;
}

.footer a {
    color: rgba(255, 255, 255, 0.76);
}

/* .payment{
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
} */

.followus >:nth-child(2){
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.payment>:nth-child(2) {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    

}
.payment>:nth-child(2) a{
    color: black;
    
}
/* p1 *//* p3 */
.pay1{
    width: 3rem;
    height: 1rem;
    padding: 1rem;
    box-shadow: 1px 1px 2px 2px;
    border-radius: 3px;
    background-color: #D9D9D9;
    
}
/* p2 *//* p4 */
.pay2{
    width: 4rem;
    height: 1rem;
    padding: 1rem;
    box-shadow: 1px 1px 2px 2px;
    border-radius: 3px;
    background-color: #D9D9D9;
    
}
.contact>:nth-child(2){
    display: flex;
    flex-direction: column;
    gap: 10px;

}
.cnt a{
    color: black;
}
.cnt{
    width: 9rem;
    height: 1rem;
    padding: 1rem;
    border-radius: 3px;
    background-color: #D9D9D9;

}
</style>
  