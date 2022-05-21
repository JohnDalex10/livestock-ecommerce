import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="">
    <div className="font-serif h-12 w-7 border-2 border-black absolute left-2/4 bottom-0 rounded-2xl cursor-pointer before:absolute before:left-2/4 before:border-2 before:border-black before:w-2.5 before:h-2.5  after:absolute after:left-2/4 after:border-2 after:border-black after:h-2.5 after:w-2.5 transform before:rotate-45"></div>

    <div className="text-white text-center w-full font-serif font-bold text-2xl p-2 bg-red-900 mt-2 ">
        PRODUCT SECTION
    </div>
      <div className="flex z-1 ml-1.5 mr-1.5">
        <Product
          title="Chicken: contains animal protein, can be prepared in different forms such as fried, grilled e.t.c."
          price={8000.00}
          image="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?cs=srgb&dl=pexels-alexas-fotos-2255459.jpg&fm=jpg"
          rating={4}
        />
           <Product
          title="Goat: healthy for mainly the elderly, good source of nutrients at a good rate"
          price={30000.00}
          image="https://i.pinimg.com/564x/2e/42/3c/2e423c4e17fc8f4d0ca1d2e87ccd986c.jpg"
          rating={4}
        />
      </div>

      <div className="flex z-1 ml-1.5 mr-1.5">
      <Product
          title="Sheep: Lorem ipsum dorem isit maga chuka alsin torinimi ssss"
          price={40000.00}
          image="https://media.istockphoto.com/photos/three-woolly-sheep-on-green-field-picture-id148973788?k=20&m=148973788&s=612x612&w=0&h=KpFrzMdUCQP1x1rgT2qkyFlsPsOSyzVPQI0H9KxiWeI="
          rating={3}
        />
        <Product
          title="Pig: commonly labeled as 'Pork Meat' is a good source of fats and oil which is a class of food"
          price={27000.00}
          image="https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/1/5/0/1/2351051-1-eng-GB/Russian-bank-pumps-millions-into-pig-farm-project.jpg"
          rating={2}
        />
        <Product
          title="Ram: usually taken during festive periods; good source of nutrients for all ages..best quality at best rate"
          price={35000.00}
          image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/very-cute-horned-ram-standing-in-a-farm-yard-dejavu-designs.jpg"
          rating={2}
        />
      </div>

      <div className="flex z-1 ml-1.5 mr-1.5">
      <Product
          title="Cattle:"
          price={200000.00}
          image="https://149366112.v2.pressablecdn.com/wp-content/uploads/2017/05/shutterstock_424459801-2048x1365.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
