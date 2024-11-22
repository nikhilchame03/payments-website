export function InputBox({label,onChange}){

    return <div>
        <div className=" text-sm font-bold text-left py-3 ml-1"> 
            {label}
        </div>
        <input onChange={onChange} type="text" placeholder="" className="w-full px-2 py-1 border rounded border-slate-300 shadow-lg" />
    </div>
}