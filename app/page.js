// import Office from '@/public/Office.jpg'

export default function Page() {
    return (
        <div className='main '>
            <div className='m-4 w-full max-w-screen-lg bg-gray-500  text-black'>
                <h1 className='text-5xl font-bold mb-4'>Simple UI Components </h1>
                <p className='text-lg mb-4'>This Project Contains the Collection of UI Components that I am creating using Next JS and Tailwind with various Libraries.</p>
                <div className='mb-4 text-black'>
                    <a target="_blank" className='bg-transparent border-black rounded border py-2 px-4 text-black border-solid' href='https://github.com/SattyamSamania/UI-Components'>Github Link</a>
                </div>
            </div>
            {/* Add your image here */}
            {/* <img src={Office} alt="Office Image" className="w-full" /> */}
        </div>
    );
}
