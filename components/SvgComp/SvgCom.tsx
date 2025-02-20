import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import React from 'react'
import Image from 'next/image'

interface SvgsProps{
    imageSrc: string | StaticImport;
    imageAlt: string ;
    className?: string;
}
const Svgs:React.FC<SvgsProps> = ({imageSrc , imageAlt , className =''}) => {
  return (
    <div >
        <div className='p-2  rounded-md'>
        <Image src={imageSrc} alt={imageAlt} className={className} width={20} height={10}/>
        </div>
    </div>
  )
}

export default Svgs