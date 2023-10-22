import React, { useState } from "react";
import "./NicheProduct.scss";
import image1 from "../../../Assets/Imgs/image1.svg";
import image3 from "../../../Assets/Imgs/image3.svg";
import image10 from "../../../Assets/Imgs/image10.svg";
import image11 from "../../../Assets/Imgs/image11.svg";
import image12 from "../../../Assets/Imgs/image12.svg";
import image13 from "../../../Assets/Imgs/image13.svg";
import image14 from "../../../Assets/Imgs/image14.svg";
import image15 from "../../../Assets/Imgs/image15.svg";
import image16 from "../../../Assets/Imgs/image16.svg";
import Readable from "./Readable/Readable";
export default function NicheProduct() {
  const BabyProduct = [
    {
      img: image1,
      title: "Baby Carriers",
      about:
        "Your little one was carried for 9 long months in the womb. While that may sometimes have been a challenge for the person doing...",
    },
    {
      img: image10,
      title: "Baby Diapers",
      about:
        "Diaper changing might seem complicated at first. But with a little practice, you'll find that keeping your baby clean and dry is easy.",
    },
    {
      img: image11,
      title: "Baby Skin Care",
      about:
        "Your newborn's skin is so sensitive. Don't worry - rashes are common during baby's first year. Learn how to keep your baby's skin...",
    },
    {
      img: image12,
      title: "Bottle Feeding",
      about:
        "The practice of feeding an infant a substitute for breast milk. Pediatricians generally advise exclusively breastfeeding for all full-term, healthy infants for the first 6 months of life.",
    },
    {
      img: image13,
      title: "Baby Monitors",
      about:
        "Electronic device consisting of a one-way radio or video transmitter with a portable receiver for remotely listening to or observing...",
    },
    {
      img: image14,
      title: "Baby Teethers",
      about:
        "A teether, teething toy, or chew toy is a device given to teething infants. Most modern teethers are silicone, but can also...",
    },
  ];
  const KitchenProduct = [
    {
      img: image15,
      title: "Food Stainers",
      about:"A kitchen device that is most used to strain liquids away from other ingredients but also to ocassionally sift fine ingredients..."
        
    },
    {
      img: image3,
      title: "Kitchen Knives",
      about:
        "A kitchen knife is any knife that is intended to be used in food preparation. ... Kitchen knives can be made from several different materials.",
    },
    {
      img: image16,
      title: "Peelers",
      about:
        "A peeler is a kitchen tool consisting of a metal blade with a slot with a sharp edge attached to a handle, used to remove...",
    },
  ];
 
  return (
    <div>
<section className="babyContainer">
<div className="title">Baby Products
<div className="line"></div>
</div>

   
    <div className="cardContainer">{BabyProduct.map((data)=><div  className="card">
<img src={data.img}/>
<div className="container">
<div className="header">{data.title}</div>
<div className="details">
   {data.about}
     <span >See More</span>
     </div>
</div>

</div>)}</div>


</section>
<section className="kitchenContainer">
<div className="title">Kitchen tools
<div className="line"></div>
</div>
<div className="cardContainer">{KitchenProduct.map((data)=><div  className="card">
<img src={data.img}/>
<div className="container">
<div className="header">{data.title}</div>
<div className="details">{data.about}<span >See More</span></div>
</div>

</div>)}</div>

</section>
    </div>
  );
}
