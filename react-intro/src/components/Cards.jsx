import React from 'react'
import "../App.css"
function Cards() {

    let cards = [
        {id : 1 , imageUrl : 'https://static.vecteezy.com/system/resources/thumbnails/042/681/826/small/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg' , title : 'Cool Chair' , price : '$100'},
        {id : 2 , imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7aMwfHmX-pHTsKvvcxCsWCft--CMZ7U2dL9VWEahH0b8P40ilNLYVsi8D&s=10' , title : 'Cool Chair' , price : '$100'},
        {id : 3 , imageUrl : 'https://mylestoneinteriors.ie/wp-content/uploads/2025/04/Blair-Dining-Chair-Cream.jpg' , title : 'Cool Chair' , price : '$100'},
        {id : 4 , imageUrl : 'https://cdn.bedandbasics.sg/media/catalog/product/cache/image/700x500/8dfaea894a221b45920cee25b236c3fe/l/o/lois-solid-wood-with-marble-top-dining-chair-003-lifestyle-2.jpg' , title : 'Cool Chair' , price : '$100'},
        {id : 5 , imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswHAbhFY-3vuol82eO963OgnZR7hgigrH73TeXLQZsYyRtV5halP0b5OT&s=10' , title : 'Cool Chair' , price : '$100'},
        {id : 6 , imageUrl : 'https://nathanjames.com/cdn/shop/files/28402-HERO_e571037d-c4e7-4e78-b49b-810c2ade01cc.jpg?v=1739987028&width=2048' , title : 'Cool Chair' , price : '$100'},
        {id : 7 , imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQybe9JCR1I_1Y6yB1qyM6YIid7SuIdNpYVdiZWJ__wzvR-MibfCwaj1mE&s=10' , title : 'Cool Chair' , price : '$100'},
        {id : 8 , imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkb-ndLslRcFv5ZU7XiXIytRQj_liNE1XoD-vNU3pygg&s=10' , title : 'Cool Chair' , price : '$100'},
        {id : 9 , imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkb-ndLslRcFv5ZU7XiXIytRQj_liNE1XoD-vNU3pygg&s=10' , title : 'Cool Chair' , price : '$100'},
        {id : 10 , imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkb-ndLslRcFv5ZU7XiXIytRQj_liNE1XoD-vNU3pygg&s=10' , title : 'Cool Chair' , price : '$100'},

    ]
  return (
   <>
   <h2>Our Products</h2>
    <div class="cards">
   
     {cards.map((card)=>{
        return (
            <div class="card">
                <div class="image"><img class="innerImage" src={card.imageUrl} alt="" /></div>
                <span class="title">{card.title}</span>
                <span class="price">{card.price}</span>
            </div>
        )
    })} 
    </div>
   </>
  )
}

export default Cards

{/* <span class="text">This is a chair.</span> */}