import Layout from '../../Layout'
import Main from '../../Main'
import React, { useState } from 'react';
import { LikeButton, Counter, Conversor, Modal } from '../../components'

const Dashboard = () => {
    //MODAL USE STATE 
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Layout>
            <Main>
                <h1>Dashboard</h1>

                <LikeButton />
                <div className="mt-2">
                    <Counter />
                </div>
                <div className="mt-2">
                    <button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" onClick={() => setIsModalOpen(true)}>
                        Soy un modal</button>
                    <Modal show={isModalOpen} setShow={setIsModalOpen} />
                </div>
                <Conversor />
            </Main>
        </Layout>
    )
}

export { Dashboard }