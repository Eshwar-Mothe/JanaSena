import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { MembersTab } from './MembersTab';
import { PostBlog } from './PostBlog';


export const OptionsBar = () => {
    const [key, setKey] = useState('home');

    const handleSelect = (k) => {
        if (k === key) {
            setKey(null); // Close the tab if it's already selected
        } else {
            setKey(k);
        }
    };

    return (
        <>
            <div className='adminNav' style={{ marginTop: '50px', justifyContent: 'space-around', alignItems: 'center' }}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={handleSelect}
                    className='custom-tabs'
                    style={{ margin: 0, padding: '10px', backgroundColor: 'black', color: 'white', fontWeight: 'bold', textDecoration: 'none' }}
                >
                    <Tab title="Options: " disabled className='custom-tab' >Options:</Tab>
                    <Tab eventKey="members" title="Members" >
                        {/* <Link to="Adminpanel/joinings"></Link> */}
                        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta voluptatibus, consequuntur repudiandae dicta magni unde, mollitia nobis corrupti, in facere id vitae esse cupiditate laborum voluptatem quo quisquam illo odit. */}
                        <MembersTab />
                    </Tab>
                    <Tab eventKey="sendmail" title="SendMail">

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta voluptatibus, consequuntur repudiandae dicta magni unde, mollitia nobis corrupti, in facere id vitae esse cupiditate laborum voluptatem quo quisquam illo odit.
                    </Tab>
                    <Tab eventKey="postissue" title="PostIssue">
                        {/* <Sonnet /> */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta voluptatibus, consequuntur repudiandae dicta magni unde, mollitia nobis corrupti, in facere id vitae esse cupiditate laborum voluptatem quo quisquam illo odit.
                    </Tab>
                    <Tab eventKey="partyImages" title="Party-Images">
                        {/* <Sonnet /> */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta voluptatibus, consequuntur repudiandae dicta magni unde, mollitia nobis corrupti, in facere id vitae esse cupiditate laborum voluptatem quo quisquam illo odit.
                    </Tab>
                    <Tab eventKey="postblog" title="PostBlog">
                        {/* <Sonnet /> */}
                        <PostBlog />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta voluptatibus, consequuntur repudiandae dicta magni unde, mollitia nobis corrupti, in facere id vitae esse cupiditate laborum voluptatem quo quisquam illo odit.
                    </Tab>
                </Tabs>
            </div>

        </>
    );
};
