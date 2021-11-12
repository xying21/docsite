import React from 'react';

import FetchWallets from './show_chain_info/FetchWallets';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function Wallets() {
  return (

            <DndProvider backend={HTML5Backend}>
              
                 <FetchWallets />
              
            </DndProvider>
  )
}

export default Wallets;