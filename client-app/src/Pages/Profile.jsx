import React from 'react'
import UserDetail from '../Components/UserDetail'
import ChallengeCards from './../Components/ChallengeCards';
import TravelTimeline from './../Components/TravelTimeline';
import UserBlogs from '../Components/UserBlogs';

function Profile() {
  return (
    <>
    
    
    {/* <div className="bg-gray-100 h-screen flex items-center justify-cente py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          
          <div className="md:flex md:items-center md:space-x-4">
            
            
            
          </div>

          
        </div>
        
      </div>
    </div> */}
    <UserDetail/>

    {/* Timeline section */}
    <div className="mt-8 md:mt-0">
            <TravelTimeline />
          </div>

        {/* Blogs section */}
        <div className="mt-12">
          <UserBlogs />
        </div>

        {/* Challenges section */}
        <div className="mt-12">
          <ChallengeCards />
        </div>
  </>
  )
}

export default Profile