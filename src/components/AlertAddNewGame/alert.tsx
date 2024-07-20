import './index.css'
// Przy robieniu pod strony Add New Post prosiłbym o dodanie bluru zgodnie z figmą natomiast nie mogę tego zrobić ponieważ nie jest to jeszcze zrobione :))


export default function alert() {

    return(
    
        <div className='container'>
            <div className='box mb-0'>
            <span className='flex justify-center'>Hurra! Your application has been sent. Awaiting moderator approval.</span>
            <button className='btn'>Close</button>
            </div>
        </div>
    )

}

