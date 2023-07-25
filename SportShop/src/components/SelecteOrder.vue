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
                <a><router-link to="/">Home</router-link></a>
                <a><router-link to="/goshop">Shop</router-link></a>
                <a><router-link to="/">Products</router-link></a>
                <a><router-link to="/discount">Promotion</router-link></a>
            </div>
            <div class="header-right">
                <!-- profile users -->
                <div><img src="../components/image/cart.png" alt=""></div>
                <div><img src="../components/image/user.png" alt=""></div>
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
                    <div class="prices">
                        <label for="">Prices:</label>
                        <span>100$</span>
                        <button style="margin-top:20px ;">Add to cart</button>
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
                        <input type="text">
                        <input type="text">
                        <select name="" id="">
                            <option value="">Men</option>
                            <option value="">Women</option>
                        </select>
                    <!-- max-contain -->
                        <input type="text">
                        <p>RealMadrid Home 23,L,100$</p>
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
<style>
main .mid-order {
    width: 100%;
    height:fit-content;
    display: flex;
    flex-direction: row;
    gap: 100px;
    margin-top: 25px;
   
}
.mid-order .mid-left{
    background-color:rgb(255, 255, 255);
    box-shadow:0px 0px 4px 0px ;
    width:50%;
    height: 450px;
    margin-left:50px;
    display: flex;
    justify-content: space-between;

    
}
.mid-left img{
    width:300px;
    height: 400px;
    object-fit:fit-content;
}
.mid-left .mid-left-data{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top:30px ;
}
.mid-left-data span, .mid-right span{
    font-weight: bold;
    font-size: 30px;
    display: flex;
}
.mid-left-data label{
    font-size:15px ;
    font-weight: bold;
    font-family: sans-serif;
}
.mid-left-data select{
    width: 100px;
    height: 50px;
    box-shadow: 0px 0px 4px 0px;
    border-radius: 10px;
    outline: none;
    padding-left: 20px;
    padding-right: 20px;
    appearance: none;
    transition: 0.5;
    

}

.mid-order .mid-right{
    background-color:rgb(255, 255, 255);
    box-shadow:0px 0px 4px 0px ;
    width:550px;
    height:450px;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    gap: 20px;
   
}

.mid-right span {
    margin-top: 25px;
    
}
form{
    display: flex;
    flex-direction: row;
    gap: 20px;
}

form :nth-child(1),form :nth-child(2){
    display: flex;
    flex-direction: column;
    gap: 20px;
}
form :nth-child(1) label {
    height: 40px;
    /* border:1px solid black ; */
    font-weight: bold;
    font-family: sans-serif;
    justify-content: center;
   /* align-items: center; */
   
}


form :nth-child(2) input, form :nth-child(2) select{
    width: 300px;
    height: 40px;
    outline: none;
    border-radius:10px;
    /* margin-left: 20px; */
    padding-left: 20px;
}
form :nth-child(2) p{
    width: fit-content;
}
.btn-confirm{
    display: flex;
    flex-direction: row;
    gap: 20px;
}
.btn-confirm button, .mid-left-data button{
    height: 40px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    background-color: black;
    
}
.btn-confirm button:hover, .mid-left-data button:hover{
    background-color: #5452ee;
    transition: 5ms;
}
</style>
