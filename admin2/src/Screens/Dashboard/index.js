import React from 'react'
import Layout from '../../Layout'
import Main from '../../Main'
import { LikeButton, Counter } from '../../components'

const Dashboard = () => {

    return (
        <Layout>
            <Main>
                <h1>Dashboard</h1>

                <LikeButton />
                <Counter />
            </Main>
        </Layout>
    )
}

export { Dashboard }