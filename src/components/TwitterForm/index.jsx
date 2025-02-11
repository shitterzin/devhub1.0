import { faCalendarAlt, faFilm, faImage, faMapMarkedAlt, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import PropTypes from "prop-types";

export function TwitterForm({ onTweet }) {
    const textAreaRef = useRef()

    function handleSubmit() {

        if (textAreaRef.current.value) {
        onTweet(textAreaRef.current.value)
        textAreaRef.current.value = ''
        }
    }

    return (
        <div className="border-b border-gray-800 p-4">
             <textarea //criando o local onde o usuario digita o que ele quer publicar
             className="w-full bg-transparent text-white text-xl resize-none outline-none" 
             placeholder="O que você está pensando?"
             ref={textAreaRef}
             />
             <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                    <FontAwesomeIcon icon={faImage} className="text-purple-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={faFilm} className="text-purple-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={faSmile} className="text-purple-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-purple-400 cursor-pointer"/>
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="text-purple-400 cursor-pointer"/>
                </div>
                <button className="bg-purple-700 text-white font-bold px-4 py-2 rounded-full hover:bg-purple-900 cursor-pointer transition duration-200" onClick={handleSubmit}>Publicar</button>
             </div>
        </div>
    )
}

TwitterForm.propTypes = {
    onTweet: PropTypes.func
};