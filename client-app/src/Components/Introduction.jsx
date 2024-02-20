import React from "react";
import { Link } from "react-router-dom";

function Introduction() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl lg:flex lg:h-96 lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-black">
              Where will your
              <strong className="font-extrabold text-red-700 sm:block">
                {" "}
                adventure unfold?{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Embark on a seamless journey of discovery
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                <Link to="/explore">Explore</Link>
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
