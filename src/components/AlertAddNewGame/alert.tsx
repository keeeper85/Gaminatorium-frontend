import './index.css'
// Przy robieniu pod strony Add New Post prosiłbym o dodanie bluru zgodnie z figmą natomiast nie mogę tego zrobić ponieważ nie jest to jeszcze zrobione :))


export default function alert() {

    return(
    
        <div className='container'>
            <div className='box w-[720px] h-[790px] absolute items-center'>
            <span className='flex justify-center'>Hurra! Your application has been sent. Awaiting moderator approval.</span>
            <button className='btn w-[223px] h-[33px] justify-center relative'>Close</button>
            </div>
        </div>
    )

}

