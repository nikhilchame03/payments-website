export function Button({label,onClick}){

    return <div className="bg-black text-white py-2 my-3 rounded-md hover:bg-gray-900 focus:outline-none">
        <button onClick={onClick} type="submit"> {label}</button>
    </div>
}