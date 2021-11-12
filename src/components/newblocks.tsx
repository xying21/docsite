import React from 'react';

import NewBlocks from './show_chain_info/new_blocks';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function FetchNewBlocks() {
  return (

            <DndProvider backend={HTML5Backend}>
              
                 <NewBlocks />
              
            </DndProvider>
  )
}

export default FetchNewBlocks;