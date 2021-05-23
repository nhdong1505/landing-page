import React from 'react'
import PropTypes from 'prop-types'
import Intro from '../../components/intro'
import About from '../../components/about'

function Home(props) {
    return (
        <div>
            <Intro />
            <About />
        </div>
    )
}

Home.propTypes = {

}

export default Home

