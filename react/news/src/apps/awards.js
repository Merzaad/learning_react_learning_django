import React from 'react';
import Database from './database';
import Testform from './reUseable/testForm';
import Card from './reUseable/card';
import Post from './reUseable/post';


var post_box = Database();

function Awards() {
    return (
        <>
            <div >
                <div className="d-flex justify-content-center p-5">
                    <Testform />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mt-5 ">
                    <div className="col-lg-3 P-0 ">
                        <div>

                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div>
                            <Post tag="news" database={post_box} />
                        </div>
                    </div>
                    <div className="col-lg-3 P-0 ">
                        <div>
                            <Card tag="awards" database={post_box} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Awards;