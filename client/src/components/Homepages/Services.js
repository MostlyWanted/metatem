// import React from 'react'

// const Services = () => {
//   return (
//     <div>hello from services</div>
//   )
// }

// export default Services

import {  PresentationChartLineIcon, CodeBracketIcon, ChatBubbleLeftRightIcon, ComputerDesktopIcon, AdjustmentsHorizontalIcon} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'SEO Optimization',
    description:
      "Optimizing our web designs to rank on the first page of google is our specialty. Our SEO team’s accomplishments are as remarkable as they are diverse: from taking small stores to local domination, to aiding global brands to fend off fierce competition. Our success comes from our diversity: computer scientists, historians, developers, literature gurus, graphic designers, and even a neuroscientist provide our clients with a plethora of talents.",
    icon: PresentationChartLineIcon ,
  },
  {
    name: 'Web Development',
    description:
      'We believe that website design is a dominant element that also adds credibility to a business and can turn your website into an all-powerful sales of generating leviathan, that can also be sent into the world to do your bidding. At Metatem , we provide customer service with a better, user experience. Statistics show 4.57 billion people worldwide are active internet users, compromising 59 percent global population.The internet is a goldmine of opportunities for all kinds of business worldwide.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Social Media Management',
    description:
      'We offer social media services, search engine services, email marketing services and website designing services. In short, we use relevant social media marketing services to help businesses grow and meet their goals. We publish, analyze content, engage and interact with social media users. Our social media manager is a skilled professional with knowledge of social media marketing, advertising and management. Social media management is cost-effective and connects you with users across the world.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Content Creation',
    description:
      'Content marketing is one of the most powerful digital marketing strategies. Metatem ensures a hassle- free content creation experience through our content marketing services.Our expert team develops, writes, edit and promote customs that are search engine friendly for your business. We take a personalized approach to content writing and invest time to learn your industry, audience and business. Our content marketing team optimize your SEO which helps your target audience to find your blog posts and in-depth articles and more .',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Cutting Edge Design',
    description:
      'Our experts deliver fast, functional and intuitive websites that are not only aesthetically appealing but also give great UI and responsiveness. We have experienced web designers who know the latest WordPress, and different CMS and designing tools to create customized websites, tailored to your requirements. If you need your business to aim at reaching potential customers, faster you need a website. To optimize your customer reach, all your business needs is an effective website. Metatem has a committed and creative web designing, development and digital marketing agency in Canada.',
    icon: AdjustmentsHorizontalIcon,
  }

]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to Optimize your site</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We take pride in our the variety of our services, every project is another challenge to achieve absolute perfection.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}