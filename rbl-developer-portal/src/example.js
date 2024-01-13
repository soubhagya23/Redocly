import React from 'react'
import { AccordionAccordion, Accordion } from 'semantic-ui-react'

const level1Panels = [
  
  { key: 'panel-1a', title: 'Level 1A', content: 'Level 1A Contents' },
  { key: 'panel-ba', title: 'Level 1B', content: 'Level 1B Contents' },
]
const Level1Content = (

  <div>
   
    <AccordionAccordion panels={level1Panels} />
  </div>
)

const level2Panels = [
  { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents11', color:"red" },
  { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' },
]

const Level2Content = (
  <div >
   
    <AccordionAccordion panels={level2Panels} />
  </div>
)

const rootPanels = [
  { key: 'panel-1', title: 'Level 1', content: { content: Level1Content } },
  { key: 'panel-2', title: 'Level 2', content: { content: Level2Content } },
]

const AccordionExampleNested = () => (
  <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
 

)



export default AccordionExampleNested
