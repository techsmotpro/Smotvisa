import Image from 'next/image'
import Button from '../../components/Button'

export default function About() {
  const stats = [
    { number: '10,000+', label: 'Happy Clients' },
    { number: '150+', label: 'Countries Covered' },
    { number: '98%', label: 'Success Rate' },
    { number: '50+', label: 'Visa Experts' },
  ]

  const teamMembers = [
    {
      name: 'John Anderson',
      role: 'Founder & CEO',
      bio: '15+ years of experience in immigration law and visa processing',
    },
    {
      name: 'Sarah Johnson',
      role: 'Visa Consultant',
      bio: 'Specializes in student and work visa applications',
    },
    {
      name: 'Michael Chen',
      role: 'Document Verification Specialist',
      bio: 'Expert in document verification and compliance',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Support Manager',
      bio: 'Dedicated to providing excellent customer service',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SmotVisa</h1>
            <p className="text-lg md:text-xl text-blue-100">
              Your trusted partner for visa applications and travel documentation
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                SmotVisa was founded in 2010 with a simple mission: to simplify the complex process of visa applications and make international travel accessible to everyone.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've helped thousands of clients obtain visas for various purposes, including tourism, business, education, and immigration. Our team of experienced visa experts is dedicated to providing personalized guidance and support throughout the entire application process.
              </p>
              <p className="text-gray-600 mb-6">
                We understand that applying for a visa can be stressful and time-consuming. That's why we've developed a streamlined process that ensures your application is handled efficiently and effectively.
              </p>
              <Button>Learn More About Us</Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/visa-team/600/400"
                    alt="SmotVisa Team"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of experienced visa experts is dedicated to providing personalized guidance and support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-blue-600 text-center mb-2">{member.role}</p>
                <p className="text-gray-600 text-center text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-blue-100 mb-8">
            To provide a seamless and stress-free visa application process by leveraging technology and expertise,
            ensuring that every client's journey starts with confidence and ends with success.
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Our Values
          </Button>
        </div>
      </section>
    </div>
  )
}