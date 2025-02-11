/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faHome, faMagnifyingGlass, faUserAstronaut, } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope, faFolder, faUser } from "@fortawesome/free-regular-svg-icons";

const NavItem = ({icon, text}) => (
    <div className="flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-200">
        <FontAwesomeIcon icon={icon} className="text-2xl mr-4"/>
        <span className="text-xl hidden xl:inline">{text}</span>
    </div>
)

export function Sidebar() {
  return (
    <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
      <FontAwesomeIcon
        icon={faUserAstronaut}
        className="text-purple-700 text-3xl m-4"
      />
      <nav>
        <NavItem icon={faHome} text="Página Inicial"/>
        <NavItem icon={faMagnifyingGlass} text="Buscar"/>
        <NavItem icon={faBell} text="Notificações"/>
        <NavItem icon={faEnvelope} text="Mensagens"/>
        <NavItem icon={faFolder} text="Projetos"/>
        <NavItem icon={faUser} text="Perfil"/>
        <NavItem icon={faEllipsisH} text="Mais"/>

        
      </nav>
      <button className="bg-white text-black rounded-full font-bold px-4 py-3 mt-4 w-full hidden xl:inline cursor-pointer">
     <span className="hidden xl:inline">Postar</span>
     </button>

    </div>  
  );
}
