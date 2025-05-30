import React from 'react'

const Footer = () => {
  return (
    <div className='text-center sm:flex items-center justify-around bg-gray-100 py-5'>
      <div className='pb-2 sm:pb-0'>
        <span>© Developed  by <span className='text-[#8e0af3] font-semibold'> Anbarasan subramani</span></span>
      </div>
      <div className=" flex items-center justify-center space-x-5  ">
        <a href="https://www.linkedin.com/in/anbarasan-subramani/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path></svg>
        </a>
        <a href="https://github.com/S-Anbu/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>
        </a>
        <a href="https://wa.me/+917502252206" target="_blank">
          <img src="https://api.iconify.design/logos:whatsapp-icon.svg?color=%23888888" width={27} alt="Whatsapp" />
        </a>
        <a href="https://wa.me/+917502252206" target="_blank">
          <img src="https://api.iconify.design/skill-icons:instagram.svg?color=%23888888" width={25} alt="instagram" />
        </a>
      </div>

    </div>
  )
}

export default Footer