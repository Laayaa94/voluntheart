import React, { useState } from 'react'
import './RightPane.css'
import SuggustBox from '../suggustionBox/SuggustBox'
import suggust1 from '../../assets/suggust1.jpeg'
import suggust2 from '../../assets/suggust2.jpeg'
import suggust3 from '../../assets/suggust3.jpeg'
import VolunteerFilter from '../VolunteerFilter/VolunteerFilter'
import MiddlePane from '../MiddlePane/MiddlePane'

const RightPane = ({suggusionCaption,suggustimg}) => {
  const categories = [
    'Elder Care',
    'Child Welfare',
    'Community Development',
    'Poverty Alleviation',
    'Education Support',
    'Healthcare Access',
    'Disaster Relief',
    'Animal Welfare',
    'Environmental Conservation',
    'Social Services'
  ];

  const [selectedCategory, setSelectedCategory] = useState('Child Welfare');

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className='rightPane'>
      <div className="postPaneforRight">
      <MiddlePane/>
      </div>

   
     <div className="allBox">
     <h3>Suggestions</h3>
      <h6>Filter by Catogory</h6>
      <VolunteerFilter categories={categories} selectedCategory={selectedCategory} onFilterChange={handleFilterChange} />
    
     <SuggustBox
      suggusionCaption="We need help fo this people "
      suggustimg={suggust1}
      
    />
     <SuggustBox
      suggusionCaption="We need help fo this people "
      suggustimg={suggust2}
      
    />
     <SuggustBox
      suggusionCaption="We need help fo this people "
      suggustimg={suggust3}
      
    />
    <SuggustBox
      suggusionCaption="We need help fo this people "
      suggustimg={suggust1}
      
    />
     <SuggustBox
      suggusionCaption="We need help fo this people "
      suggustimg={suggust2}
      
    />
     <SuggustBox
      suggusionCaption="We need help fo this people "
      suggustimg={suggust3}
      
    />
     </div>
     </div>
   
  )
}

export default RightPane
