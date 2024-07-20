import { Comment } from "../../components/Comment/Comment";

export function ComentsBox() {
    return (
        <div className='flex flex-col gap-4 mt-6 mb-6'>
           <Comment />
           <Comment />
           <Comment />
        </div>
    )
}