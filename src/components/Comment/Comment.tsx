import Tooltip from '../Tooltip/Tooltip'
import { FaTrash } from 'react-icons/fa';
export function Comment() {

    return (
        <div className='bg-black flex gap-x-4 items-center px-6 py-4 rounded-lg font-inknut shadow-dark lg:gap-x-16'>
            <span>UserName</span>
            <p className="text-gray text-xs">Fun game. Will kill some monsters on weekend</p>
            <div className="text-xs color-red-700">
                <Tooltip children={undefined} onDelete={function(): void {
                    throw new Error('Comment was deleted successfully.');
                } } />.
                <FaTrash />
            </div>
        </div>
    )
}