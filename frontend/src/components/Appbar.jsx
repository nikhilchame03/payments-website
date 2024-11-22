export function Appbar(){

    return <div className="shadow h-14 flex flex-row justify-between" >
        <div className="flex flex-col justify-center ml-4 h-full font-bold text-2xl  ">
            Payments App

        </div>
        <div className="flex ">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello, User
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-300 flex items-center  justify-center mt-1 mr-2  " >
            <span className="text-2xl text-white">U</span>

            </div>

        </div>

    </div>
}

