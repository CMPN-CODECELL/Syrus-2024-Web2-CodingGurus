import React from 'react'

function UserBlogs() {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      
      <div className="mb-10 md:mb-16">
      <div className="flex flex-col text-center mt-10 w-full justify-center items-center">
        <h1 className="text-3xl font-medium title-font text-gray-900 tracking-widest border-b-2 border-blue-500 pb-2 mb-4">Blogs</h1>
      </div>
  
      </div>
     
  
      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        
        <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div className="flex flex-1 flex-col p-4 sm:p-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New trends in Tech</a>
            </h2>
  
            <p className="mb-8 text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
  
            
          </div>
        </div>
        
        <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div className="flex flex-1 flex-col p-4 sm:p-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working with legacy stacks</a>
            </h2>
  
            <p className="mb-8 text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
  
            
          </div>
        </div>
        
        <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div className="flex flex-1 flex-col p-4 sm:p-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">10 best smartphones for devs</a>
            </h2>
  
            <p className="mb-8 text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
  
           
          </div>
        </div>
       
        <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div className="flex flex-1 flex-col p-4 sm:p-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">8 High performance Notebooks</a>
            </h2>
  
            <p className="mb-8 text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
  
            
          </div>
        </div>
       
      </div>
    </div>
  </div></div>
  )
}

export default UserBlogs