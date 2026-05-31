const About = () => {
  return (
    <section className="mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto rounded-3xl border  p-8 shadow-lg shadow-slate-600">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase font-bold tracking-[0.3em]">
            About this project
          </p>
          <h1 className="mt-4 text-4xl text-secondary font-bold leading-tight sm:text-5xl">
            Comfy Store
          </h1>
          <p className="mt-3 text-base sm:text-lg">
            A modern e-commerce demo built with React, Vite, Tailwind CSS, and
            Redux Toolkit.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8">
            Comfy Store is designed to demonstrate a polished front-end shopping
            experience with product filtering, cart management, checkout flows,
            and responsive layout. It combines fast client-side routing,
            reusable components, and real-world API integration to create a
            clean storefront interface.
          </p>
          <p className="text-lg leading-8">
            The project is ideal for showcasing how a React app can deliver a
            smooth user journey from browsing products to placing an order,
            while keeping the codebase organized and easy to extend.
          </p>

          <div className="rounded-3xl border border-base-300 p-6 ">
            <h2 className="text-2xl font-semibold">Get in touch</h2>
            <p className="mt-3 text-base leading-7 ">
              If you want to reach me, send an email to{" "}
              <a
                href="mailto:contact@meisam9.dev"
                className="font-medium hover:underline text-secondary"
              >
                azizpour94@hotmail.com
              </a>
              .
            </p>
            <p className="mt-4 text-base leading-7">
              The full source code is available on GitHub:{" "}
              <a
                href="https://github.com/meisam9/comfy-store"
                target="_blank"
                rel="noreferrer"
                className="font-medium  hover:underline text-secondary"
              >
                github.com/meisam9/comfy-store
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
