
function Input(prop){
    return (
        <div className="flex flex-col h-full w-full space-y-1">
            <p className="pl-2 text-lg text-p4 font-medium">{prop.text}</p>
            <input className={` w-${prop.w} pl-2  h-9 rounded-xl`} placeholder={prop.placeholder}></input>

        </div>
    )
}
export default Input