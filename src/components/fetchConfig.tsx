import React from 'react';
import ChainConfig from './show_chain_info/ChainConfig';
import styles from './widget/common_style';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function FetchConfig(){

    return(

        <DndProvider backend={HTML5Backend}>
              
            <div style={styles.content}>
                <ChainConfig />

                <hr/>
            </div>
                 
         </DndProvider>
    )
}
export default FetchConfig;