import React from 'react'
import Contactbutton from './contactbutton'

function MainContact() {
    const contactList=[
        {
      image:"/us.svg",
      Title:" United State",
      Description:
        "4517 Washington Ave. Manchester, Kentucky 39495",
    },
    {
       image: "/egypt.svg",
      Title: "Egypt",
      Description: "2118 Thornridge Cir. Syracuse, Connecticut 35624"
      ,
    },
    {
       image: "/china.svg",
      Title: "China",
      Description: "3891 Ranchview Dr. Richardson, California 62639"
      , 
    }
    ]
    
  return (
    <div>
     <div className='flex flex-row justify-between gap-8 w-[90%] md:px-13 '>
        {contactList.map((items,index)=>(
            <Contactbutton
            key={index}
            image={items.image}
            Title={items.Title}
            Description={items.Description}
        />))
        }
     </div>

    </div>
  )
}

export default MainContact