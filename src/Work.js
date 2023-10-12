import { useState } from "react";

function Work(){
  const CardItem=[
{
  id:1,
  image:"pr1.jpg",
  webname:"Netflix",
  category:"Project",
  type:"Website",
  url:"https://heysara.sg/",
  myBorder:{border:"17px solid darkred"},
  
},
{
  id:2,
  image:"pr2.jpg",
  webname:"Heysara",
  type:"Website",
  category:"Project",
  url:"https://heysara.sg/",
  myBorder:{border:"17px solid #66008e"},
},
{
  id:3,
  image:"pr3.jpg",
  webname:"Crown",
  type:"Website",
  category:"Project",
  url:"https://fc-rest.netlify.app/",
  myBorder:{border:"17px solid #ffd71b"},
},
{
    id:4,
    image:"pr7.png",
    webname:"Astrology Guru",
    type:"Website",
    category:"Project",
    url:"https://myastrologyguru.com/",
    myBorder:{border:"17px solid  #f97d09"},
  },
  {
    id:5,
    image:"pr8.png",
    webname:"Portfolio",
    type:"Website",
    category:"Project",
    url:"https://npandey.netlify.app/",
    myBorder:{border:"17px solid  #64ffda"},
  },
{
  id:6,
  image:"pr4 (1).png",
  webname:"Infosys Certified Python Associate",
  category:"Certifications",
  type:"Certificate",
  url:"ITIL Certificate.pdf",
  myBorder:{border:"17px solid #0052cc"},

},
{
  id:7,
  image:"pr5 (1).png",
  webname:"Infosys Certified  ITIL Foundation Associate",
  type:"Certificate",
  category:"Certifications",
  url:"python certificate.pdf",
  myBorder:{border:"17px solid #00b386"},
},
{
  id:8,
  image:"pr6.jpg",
  webname:"Infosys Certified  React Web Developer",
  type:"Certificate",
  category:"Certifications",
  url:"React Certificate.pdf",
  myBorder:{border:"17px solid #cc0066"},
} ];

const[items,setItems]=useState(CardItem);
const filterItem=(categoryItem)=>{
      if (categoryItem=="All"){
        return setItems(CardItem)
      }
       const updateItems=CardItem.filter((element)=>{
        return element.category==categoryItem;
      })
      setItems(updateItems);
}
const allCategory=["All", ...new Set(CardItem.map((cate)=>{
  return cate.category;
}))]
    return(
        <>
        <div className="box_content">
            <div className="innerbox">
                <h1 className="title">Portfolio</h1>
                <div className="work_content">
                  <ul class="nav nav-pills">
                    {allCategory.map((cur)=>{         
                      return (
                        <li class="nav-item" >
                        <button class="nav-link "  onClick={()=>filterItem(cur)}>{cur}</button>
                      </li>
                      )
                    })}
                  </ul>
                  <div class="tab-content">
                    <div class="">
                      <div className="card_box">{
                        items.map((elem)=>{
                          const{id,type,webname,category,image,url,myBorder}=elem;
                          return(
                            <div className="project_card">
                              <div className="web_img" >
                              <div className="item_category"><span>{category}</span></div>
                                <a href={image} target="_blank"><img src={image} style={myBorder}/></a>
                                <div className="hover_effect">{webname}</div>
                              </div>
                              <h4 className="webname">{webname}</h4>
                              <a href={url} className="type" target="_blank">{type}</a>
                            </div>
                          )
                        })
                      }</div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Work;