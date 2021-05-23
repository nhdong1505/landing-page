import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function ButtonIcon({ leftIcon, rightIcon, label, onClick, classCustom, ...rest }) {
    useEffect(() => {
    }, [])
    return (
        <div onClick={onClick} className={`button flex-row align-items-center ${classCustom}`} {...rest}>
            {leftIcon ? typeof (leftIcon) === 'string' ? <img className="mr-2" src={leftIcon} alt="icon" /> : <span className="mr-2"> {React.createElement(leftIcon)}  </span> : ''}
            <span>{label}</span>
            {rightIcon ? typeof (rightIcon) === 'string' ? <img className="ml-2" src={rightIcon} alt="icon" /> : <span className="ml-4"> {React.createElement(rightIcon)}</span> : ''}
        </div>
    )
}

ButtonIcon.propTypes = {

}

export default ButtonIcon

