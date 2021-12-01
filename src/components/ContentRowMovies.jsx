import React from "react"
import  "../assets/css/app.css"
import PropTypes from "prop-types";

function ContentRowMovies(props){
    return (
        <div>
                <div key={props.key}>
                <div className="col-md-4 mb-4">
                    <div className= {props.item.color}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.item.titulo}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.item.cifra}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={props.item.icono}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
ContentRowMovies.defaultProps = {}
ContentRowMovies.propTypes = {
    titulo:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    cifra:PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired]),
    icono:PropTypes.string.isRequired,
}



export default ContentRowMovies;