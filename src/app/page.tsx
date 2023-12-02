import Image from 'next/image'
import next from '../../public/next.svg'
export default function Home() {
  return (
    <div className='min-h-screen bg-primary-700 text-secondary font-mono flex items-center justify-center'>

      <div className='p-2 flex flex-col flex-initial bg-primary-700'>
        <div className='flex space-x-1 items-start justify-end col-span-full row-span-1'>
          <div className='ml-0 p-4 bg-primary-800'>About</div>
          <div className='p-4 bg-primary-800'>Experience</div>
          <div className='p-4 bg-primary-800'>Projects</div>
          <div className='p-4 bg-primary-800'>Contact</div>
        </div>
        <div className='flex'>
          <div className='p-4 place-self-start space-y-4 h-screen bg-primary-700 bg-opacity-30 sticky top-1'>
            <div className='bg-primary-700 w-full aspect-square rounded-full'></div>
            <a className='block text-right'>About</a>
            <a href='#projects' className='block text-right'>Experience</a>
            <div className='text-right'>Projects</div>
            <div className='text-right'>Contact</div>
          </div>

          <div className='flex-3 flex flex-col space-y-8 w-[1024px]'>

            <div className='p-8 space-y-4 bg-primary-800'>
              <div className='text-3xl'>Hi! My name is Howard</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet lorem vitae scelerisque pulvinar. Nullam vehicula odio at dui molestie tempor. Curabitur quis convallis elit, sed maximus mi. Pellentesque dui tortor, rutrum nec malesuada eu, malesuada quis nulla. Donec id maximus nisl. Integer non diam commodo, euismod est ac, facilisis massa. Fusce tincidunt lorem vel velit maximus, a cursus magna fringilla. Aliquam id eleifend urna, a semper odio.
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet lorem vitae scelerisque pulvinar. Nullam vehicula odio at dui molestie tempor. Curabitur quis convallis elit, sed maximus mi. Pellentesque dui tortor, rutrum nec malesuada eu, malesuada quis nulla. Donec id maximus nisl. Integer non diam commodo, euismod est ac, facilisis massa. Fusce tincidunt lorem vel velit maximus, a cursus magna fringilla. Aliquam id eleifend urna, a semper odio.
              </div>
            </div>

            <div id='projects' className='p-8 grid gap-4 grid-cols-3 grid-rows-3 aspect-square bg-primary-800'>
              <div className='text-3xl'>Projects</div>
              <div className='bg-primary-600'> text</div>
              <div className='bg-primary-600'> text</div>
              <div className='bg-primary-600'> text</div>
              <div className='bg-primary-600'> text</div>
              <div className='bg-primary-600'> text</div>
              <div className='flex group place-items-center bg-primary-600 overflow-hidden'>
                <Image src={next} alt="text" className=' translate-y-[500%] group-hover:translate-y-0 duration-500'/>
              </div>
            </div>

            <div className='p-8 space-y-4 bg-primary-800'>
              <div className='text-3xl'>Hi! My name is Howard</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet lorem vitae scelerisque pulvinar. Nullam vehicula odio at dui molestie tempor. Curabitur quis convallis elit, sed maximus mi. Pellentesque dui tortor, rutrum nec malesuada eu, malesuada quis nulla. Donec id maximus nisl. Integer non diam commodo, euismod est ac, facilisis massa. Fusce tincidunt lorem vel velit maximus, a cursus magna fringilla. Aliquam id eleifend urna, a semper odio.
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet lorem vitae scelerisque pulvinar. Nullam vehicula odio at dui molestie tempor. Curabitur quis convallis elit, sed maximus mi. Pellentesque dui tortor, rutrum nec malesuada eu, malesuada quis nulla. Donec id maximus nisl. Integer non diam commodo, euismod est ac, facilisis massa. Fusce tincidunt lorem vel velit maximus, a cursus magna fringilla. Aliquam id eleifend urna, a semper odio.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
