import React from "react";

function Banner() {
  return (
    <div className="overflow-hidden">
      <div className="w-screen px-52 bg-white ">
        <section className="relative bg-[url(https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Banner;
