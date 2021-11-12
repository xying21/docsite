import React from 'react';

import SendTransactions from './transactions/SendTransactions';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function Transactions() {
  return (

            <DndProvider backend={HTML5Backend}>
              
                 <SendTransactions />
              
              <hr/>

            </DndProvider>
  )
}

export default Transactions;