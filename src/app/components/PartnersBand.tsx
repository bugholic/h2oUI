import Image from "next/image"

import companiesLogo from '../../../assets/icons/companiesLogo.png'

const PartnersBand = () => {
  return (
    <main className='border-t border-b border-solid border-gray-300 mt-5 p-3 px-16 flex justify-between items-center w-full'>
    <div className='primary-text-color font-bold'>
      Our Partners:
    </div>
    <div>
    <Image 
    className="w-52 md:w-full"
      src={companiesLogo}
      alt="company logos"
    />
    </div>
    </main>
  )
}

export default PartnersBand
