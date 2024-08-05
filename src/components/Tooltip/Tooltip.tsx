import React, { ReactNode } from 'react';
import { FaTrash } from 'react-icons/fa';


interface TooltipProps {
    children: ReactNode;
    onDelete: () => void;
}

const Tooltip: React.FC<TooltipProps> = ({ children, onDelete }) => {
    return (
        <div className="relative flex items-center">
            <div className="group">
                {children}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center">
          <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-md">
            Usuń komentarz
          </span>
                    <div className="w-3 h-3 -mt-1 rotate-45 bg-black"></div>
                </div>
            </div>
            <button
                onClick={onDelete}
                className="ml-2 text-red-600 hover:text-red-800 transition-colors"
            >
                <FaTrash />
            </button>
        </div>
    );
};




export default Tooltip;
