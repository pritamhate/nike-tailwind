const Button = ({label, iconUrl, backgroundColor, borderColor, textColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-monteserrat text-lg rounded-full leadeing-none
    
    ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}`:
    'bg-coral-red text-white border-coral-red'
    }`}>
        {label}
        {iconUrl && <img src={iconUrl} alt='Hamburger' width={25} height={25} />}
    </button>
  )
}

export default Button;