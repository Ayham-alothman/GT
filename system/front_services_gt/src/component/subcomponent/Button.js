function Button(prop){
    return(
        <button className={`w-${prop.w} h-${prop.h} px-1 py-1 text-base font-semibold text-p4 rounded-xl border-2 border-p4 flex items-center justify-center hover:bg-p4 hover:text-white `}>{prop.text}</button>
    )
}

export default Button;