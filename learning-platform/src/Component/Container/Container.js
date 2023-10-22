import React from 'react'
import './Container.scss'
import { Collapse } from 'antd';
import NicheProduct from './NicheProduct/NicheProduct';
import GetHost from './GetHost/GetHost';


export default function Container() {
    const { Panel } = Collapse;
  return (
    <div className='MainContainer'>
  <Collapse
      bordered={false}
    //   className={styles.liveUserSentimentCollapse}
      defaultActiveKey={['1']}
      expandIconPosition="right"
    >
      <Panel
        key="1"
        header="Step 1 : Niche Products"
      >
        <div>
            <NicheProduct/>
        </div>
      </Panel>
    </Collapse>

    <Collapse
      bordered={false}
      expandIconPosition="right"
      onChange={() => {}}
    >
      <Panel
        key="2"
        header="Step 2 : Get Hosting & Domain"
      >
        <div >
       <GetHost/>
        </div>
      </Panel>
    </Collapse>
    <Collapse
      bordered={false}
    //   className={styles.liveUserSentimentCollapse}
    //   expandIcon={({ isActive }) => (
        // <div className={styles.collapseHeaderIconWrapper}>
        //   <div className={`${styles.collapseHeaderText} ${isActive ? styles.collapseText : styles.expandText}`}>
        //     {isActive ? 'Collapse' : 'Expand'}
        //   </div>
        //   <FontIcon className={`${isActive ? styles.collapseHeaderIconCollapse : styles.collapseHeaderIconExpand}`} color="#4285F4" size="L">icon-chevron-up</FontIcon>
        // </div>
    //   )}
      expandIconPosition="right"
      onChange={() => {}}
    >
      <Panel
        key="3"
        header="Step 3 : Finding Keywords"
      >
        <div >
            usgiu
          {/* <Scorecard {...props} />
          <Trending {...props} /> */}
        </div>
      </Panel>
    </Collapse>
    <Collapse
      bordered={false}
    //   className={styles.liveUserSentimentCollapse}
  
    //   expandIcon={({ isActive }) => (
        // <div className={styles.collapseHeaderIconWrapper}>
        //   <div className={`${styles.collapseHeaderText} ${isActive ? styles.collapseText : styles.expandText}`}>
        //     {isActive ? 'Collapse' : 'Expand'}
        //   </div>
        //   <FontIcon className={`${isActive ? styles.collapseHeaderIconCollapse : styles.collapseHeaderIconExpand}`} color="#4285F4" size="L">icon-chevron-up</FontIcon>
        // </div>
    //   )}
      expandIconPosition="right"
      onChange={() => {}}
    >
      <Panel
        key="4"
        header="Step 4 : Find Number of Searches"
      >
        <div >
            usgiu
          {/* <Scorecard {...props} />
          <Trending {...props} /> */}
        </div>
      </Panel>
    </Collapse>
    </div>
  )
}
