import React from 'react'
import MainCarousel from '../../component/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../component/HomeSectionCarousel/HomeSectionCarousel'
import { men_kurta_data } from "../../../Data/Mens_kurta";

function HomePage() {
  return (
    <div  className='z-10 ' >
       <MainCarousel/>

      <div className='flex flex-col justify-center space-y-10 py-20 px-5 lg:px-10 border '>
       <HomeSectionCarousel data={men_kurta_data}  sectionName={"Men's Kurta"} />
       <HomeSectionCarousel  data={men_kurta_data}  sectionName={"Men's Kurta"} />
       <HomeSectionCarousel data={men_kurta_data} sectionName={"Men's Kurta"} />
       <HomeSectionCarousel data={men_kurta_data} sectionName={"Men's Kurta"} />
       <HomeSectionCarousel data={men_kurta_data} sectionName={"Men's Kurta"} />
       <HomeSectionCarousel  data={men_kurta_data} sectionName={"Men's Kurta"} />
      </div>
    </div>
  )
}

export default HomePage