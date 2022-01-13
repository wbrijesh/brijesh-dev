export default function Docs() {
  return (
    <div className="open-sans-regular">
      <div className="viewport-height">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex-1 flex  items-stretch justify-start">
              <div className="sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="dark-text hover:text-gray-600 pr-0 sm:pr-3 py-2 text-base sm:text-lg font-medium"
                  >
                    My work so far
                  </a>
                  <a
                    href="#"
                    className="dark-text hover:text-gray-600 pr-0 sm:pr-3 py-2 text-base sm:text-lg font-medium"
                  >
                    Linkedin
                  </a>
                  <a
                    href="#"
                    className="dark-text hover:text-gray-600 pr-0 sm:pr-3 py-2 text-base sm:text-lg font-medium"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="dark-text body-font mt-[5vh]">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="sm:ml-6 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
              <h1 className="sm:text-4xl max-w-xl title-text open-sans-regular leading-relaxed mb-4 font-medium">
                <span className="leading-normal">
                  Hello there, I’m Brijesh - a full stack developer based in
                  Pune
                </span>
              </h1>
              <p className="mb-8 mt-6 leading-loose max-w-2xl">
                I’ve transformed visions and ideas into engaging and intuitive
                digital experiences for the past few years. Check out some of my
                work below, find out more about me, and don’t hesitate to say
                hello back...
              </p>
              <div className="flex items-start">
                <button className="inline-flex mt-6 light-background border-0 py-2 px-6 focus:outline-none rounded-sm text-lg">
                  hello@brijesh.dev
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg rotate-9 lg:w-full md:w-1/2 w-5/6">
              <img
                src="/brijesh.jpg"
                alt="Picture of the author"
                className="image-border w-[280px] sm:w-[370px] object-center rounded"
              />
              <div className="bg-white handwritten-font  w-[280px] sm:w-[370px] pt-6 -mt-10 image-footer">
                <div className="p-2">
                  <p className="handwriting"># Read more about me</p>
                </div>
              </div>
              <p className="handwritten-font ml-3 mt-4 flex handwriting">
                <span className="pt-3 mr-2">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2143 3.51992C15.2246 3.66885 15.2246 3.81777 15.2246 3.96806C15.2246 8.54757 11.7423 13.8291 5.37487 13.8291V13.8264C3.49391 13.8291 1.65201 13.2897 0.0685425 12.2727C0.342051 12.3056 0.61693 12.3221 0.892494 12.3228C2.45128 12.3241 3.96552 11.8005 5.19185 10.8363C3.71052 10.8082 2.41153 9.8412 1.95774 8.42953C2.47665 8.52973 3.01133 8.50914 3.52064 8.36983C1.90564 8.04316 0.743744 6.62257 0.743744 4.97277C0.743744 4.95767 0.743744 4.94326 0.743744 4.92885C1.22495 5.19718 1.76374 5.3461 2.31487 5.36257C0.793784 4.34483 0.324913 2.31894 1.24346 0.735022C3.00104 2.90022 5.59423 4.21649 8.37798 4.35581C8.09899 3.15208 8.48012 1.89071 9.37947 1.04453C10.7737 -0.267625 12.9666 -0.20037 14.2773 1.19483C15.0525 1.04179 15.7956 0.756983 16.4756 0.353454C16.2172 1.15571 15.6763 1.83718 14.9538 2.27022C15.64 2.18924 16.3104 2.00532 16.9417 1.72463C16.477 2.42189 15.8916 3.02924 15.2143 3.51992Z"
                      fill="#2F72B0"
                    />
                  </svg>
                </span>
                Twitter
              </p>
              <p className="handwritten-font ml-3 mt-4 handwriting">
                # My Blog
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
