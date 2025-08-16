import { toPng } from 'html-to-image';
import { useRef, type FC } from 'react'

interface MuffinDisplayProps{
    cover:string;
    fill:string;
    extra:string;
    topping:string;
}

export const MuffinDisplay:FC<MuffinDisplayProps> = ({cover,fill,extra,topping}) => {
  const muffinRef = useRef<HTMLDivElement>(null);

  const descargarImagen = async () => {
    if (muffinRef.current) {
      const dataUrl = await toPng(muffinRef.current);
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'muffin.png';
      link.click();
    }
  };
  return (
    <div className=' flex flex-col justify-center w-full h-full'>
      <div className=' flex items-top justify-center w-full h-full'>
        <div
          ref={muffinRef}
          className='bg-gray-400 rounded-2xl w-7/12 h-10/12 relative'
        >
            <img className='absolute top-0 left-0 z-20 ' src={`${cover}`}/>
            <img className='absolute top-0 left-0 z-0 ' src={`${fill}`}/>
            <img className='absolute top-0 left-0 z-10 ' src={`${extra}`}/>
            <img className='absolute top-0 left-0 z-30 ' src={`${topping}`}/>
        </div>
      </div>
      <div className='flex justify-center '>
        {cover && fill && extra && topping?<div>
          <button onClick={descargarImagen} className='btn'>Descargar Muffin</button>
        </div>:<div/>}
      </div>
    </div>
  )
}
