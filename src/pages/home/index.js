import React from 'react'
import PropTypes from 'prop-types'
import Intro from '../../components/intro'
import About from '../../components/about'
import Tokenomic from '../../components/tokenomic'
import Roadmap from '../../components/roadmap'
import Contact from '../../components/contact'
import ContractFrom from '../../components/contactForm'
function Home(props) {
    return (
        <div>
            <Intro />
            <About />
            <Tokenomic />
            <Roadmap />
            <Contact />
            <ContractFrom />
        </div>
    )
}

Home.propTypes = {

}

export default Home

