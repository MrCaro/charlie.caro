import logoPrimalKitchen from '@/images/logos/primal-kitchen-logo.svg'
import logoPrimalKitchenLight from '@/images/logos/primal-kitchen-logo-white.svg'
import logoWU from '@/images/logos/wild-unlimited-logo.svg'
import logoAelia from '@/images/logos/aelia-logo.svg'
import logoAeliaWhite from '@/images/logos/aelia-logo-white.svg'

import avatarPrimalKitchen from '@/images/photos/anna-simon.jpg'
import avatarWU from '@/images/photos/scott-lyman.png'
import avatarAelia from '@/images/photos/kayla-graham.png'

const data = [
  {
    logo: logoPrimalKitchen.src,
    logoLight: logoPrimalKitchenLight.src,
    quote: `I've done so many different website launches and worked with so many different developers, and I have never in my entire career worked with a developer like Charlie who is so quick and so easy to work with, who will just answer immediately.`,
    avatar: avatarPrimalKitchen.src,
    name: 'Anna Simon',
    title: 'Director of Digital Marketing at Primal Kitchen',
  },
  {
    logo: logoWU.src,
    logoLight: logoWU.src,
    quote: `Working with Charlie on the development of our website was a true pleasure, he treated our brand like it was his own. He's a true professional and we will continue to work with him ongoing, he's been such a great addition to our team.`,
    avatar: avatarWU.src,
    name: 'Scott Lyman',
    title: 'CEO at Wild Unlimited',
  },
  {
    logo: logoAelia.src,
    logoLight: logoAeliaWhite.src,
    quote: `Working with Charlie was an absolute dream. We approached him with a work-in-progress website and a clear list of needs, and he not only delivered on every one of them but consistently went beyond what we imagined. Charlie helped shape and elevate the brand vision, bringing clarity, polish, and cohesion to the final result. Looking back, the only regret is not bringing him on earlier.`,
    avatar: avatarAelia.src,
    name: 'Kayla Graham',
    title: 'Founder and CEO at Aelia',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {data.map((testimonial, index) =>
          index % 2 === 0 ? (
            <div
              key={index}
              className="mt-10 flex flex-col border-t border-gray-900/10 py-10 first:mt-0 first:border-0 first:pt-0 lg:mt-20 lg:border-t-0 lg:pt-0 lg:pr-8 lg:pb-0 xl:pr-20"
            >
              <img
                alt=""
                src={testimonial.logo}
                className="h-12 self-start dark:hidden"
              />
              <img
                alt=""
                src={testimonial.logoLight}
                className="h-12 self-start not-dark:hidden"
              />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-base text-zinc-600 dark:text-zinc-400">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    alt=""
                    src={testimonial.avatar}
                    className="size-14 rounded-full bg-gray-50 dark:bg-gray-800"
                  />
                  <div className="text-base">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="mt-1 text-gray-500 dark:text-gray-400">
                      {testimonial.title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ) : (
            <div
              key={index}
              className="mt-0 flex flex-col border-t border-gray-900/10 pt-10 lg:mt-20 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 nth-[2]:lg:mt-0 xl:pl-20 dark:border-white/10"
            >
              <img
                alt=""
                src={testimonial.logo}
                className="h-12 self-start dark:hidden"
              />
              <img
                alt=""
                src={testimonial.logoLight}
                className="h-12 self-start not-dark:hidden"
              />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-base text-zinc-600 dark:text-zinc-400">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    alt=""
                    src={testimonial.avatar}
                    className="size-14 rounded-full bg-gray-50 dark:bg-gray-800"
                  />
                  <div className="text-base">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="mt-1 text-gray-500 dark:text-gray-400">
                      {testimonial.title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ),
        )}
      </div>
    </section>
  )
}
