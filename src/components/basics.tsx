import React from 'react';

import ShowChainInfo from './show_chain_info/ShowChainInfo';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function Basics() {
  return (

            <DndProvider backend={HTML5Backend}>
              
                 <ShowChainInfo />
              
            </DndProvider>
  )
}

export default Basics;