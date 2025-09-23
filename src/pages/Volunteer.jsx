import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

const volunteerRoles = [
  {
    id: 1,
    title: "Event Logistics",
    description: "Support setup, registration, crowd management, and venue coordination during festival events.",
    skills: "Organization skills, punctuality, team collaboration",
    commitment: "2-3 days during festival"
  },
  {
    id: 2,
    title: "Guest Experience",
    description: "Welcome attendees, provide information, assist with accessibility needs, and ensure smooth event flow.",
    skills: "Communication skills, friendly demeanor, problem-solving",
    commitment: "1-2 days during festival"
  },
  {
    id: 3,
    title: "Media & Documentation",
    description: "Capture photos, videos, and interviews. Help manage social media presence and create content.",
    skills: "Photography, videography, social media, content creation",
    commitment: "Flexible, remote and on-site options"
  },
  {
    id: 4,
    title: "Exhibition Coordination",
    description: "Assist with book displays, art exhibitions, vendor management, and interactive installations.",
    skills: "Attention to detail, creativity, coordination",
    commitment: "2-3 days during festival"
  },
  {
    id: 5,
    title: "Community Outreach",
    description: "Help with pre-festival promotion, school visits, library partnerships, and community engagement.",
    skills: "Communication, networking, cultural sensitivity",
    commitment: "Ongoing, flexible schedule"
  },
  {
    id: 6,
    title: "Technical Support",
    description: "Manage audio/visual equipment, live streaming, stage management, and technical coordination.",
    skills: "Technical expertise, equipment handling, troubleshooting",
    commitment: "2-3 days during festival"
  }
]

const benefits = [
  "Official IbaFest 2025 volunteer certificate",
  "Exclusive volunteer appreciation event",
  "Priority access to future festival events",
  "Networking opportunities with literary and arts communities",
  "Skills development and experience in event management",
  "Complimentary festival merchandise"
]

const VolunteerCard = ({ role }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <h3 className="font-display font-bold text-lg text-primary mb-3">{role.title}</h3>
    <p className="text-text-secondary text-sm mb-4 leading-relaxed">{role.description}</p>
    
    <div className="space-y-2">
      <div>
        <span className="font-medium text-primary text-sm">Skills needed: </span>
        <span className="text-text-secondary text-sm">{role.skills}</span>
      </div>
      <div>
        <span className="font-medium text-primary text-sm">Time commitment: </span>
        <span className="text-text-secondary text-sm">{role.commitment}</span>
      </div>
    </div>
  </div>
)

export default function Volunteer() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* Call for Volunteers Graphic */}
      <section className="relative">
        <Container>
          <div className="mx-auto max-w-[1440px] px-6 md:px-0">
            <div className="w-full h-[300px] md:h-[400px] rounded-sm overflow-hidden">
              <img
                src="/images/call-for-volunteers.jpg"
                alt="Call for Volunteers - IbaFest 2025"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5">
        <Container>
          <div className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary mb-6">
                Join the Movement — Be Part of IbaFest 2025!
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                Get involved as a festival volunteer—support logistics, event facilitation, and community engagement.
              </p>
              <p className="text-text-secondary max-w-3xl mx-auto mb-8">
                We're on the lookout for creative, dedicated, and enthusiastic volunteers to help make IbaFest 2025 unforgettable. 
                Whether you're into behind-the-scenes magic, guest experience, media coverage, or coordinating exhibitions — 
                there's a role waiting just for you. Let's build something extraordinary together!
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a 
                  href="https://forms.gle/yx5MntzwxgUvR7998" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="w-full md:w-auto">
                    Apply Now
                  </Button>
                </a>
                <Link to="#opportunities">
                  <Button variant="secondary" className="w-full md:w-auto">
                    View Opportunities
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Volunteer Opportunities */}
      <section id="opportunities" className="py-16">
        <Container>
          <div className="mb-12">
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-primary mb-4 text-center">
              Volunteer Opportunities
            </h2>
            <p className="text-text-secondary text-center max-w-3xl mx-auto">
              Discover the perfect way to contribute your skills and passion to IbaFest 2025. Each role offers unique experiences and the chance to make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerRoles.map(role => (
              <VolunteerCard key={role.id} role={role} />
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-primary mb-8 text-center">
              Volunteer Benefits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 md:p-8 bg-white rounded-lg border-2 border-primary/20">
              <h3 className="font-display font-bold text-xl text-primary mb-3">
                Beyond the Festival
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Volunteering with IbaFest connects you to a growing community of cultural advocates, writers, and artists. 
                Many of our volunteers become long-term collaborators, finding opportunities for career development, 
                creative partnerships, and lifelong friendships within Nigeria's vibrant literary and arts ecosystem.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-display font-extrabold text-xl md:text-2xl text-primary mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-text-secondary mb-8">
              Join the IbaFest 2025 volunteer team and be part of creating an unforgettable celebration of African literature and arts. 
              Your contribution will help shape the future of cultural dialogue and creative innovation.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/yx5MntzwxgUvR7998" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="w-full md:w-auto">
                  Submit Application
                </Button>
              </a>
              <Link to="/about">
                <Button variant="secondary" className="w-full md:w-auto">
                  Learn More About IbaFest
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Questions Section */}
      {/* <section className="py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-display font-extrabold text-xl md:text-2xl text-primary mb-4">
              Questions About Volunteering?
            </h3>
            <p className="text-text-secondary mb-8">
              Have questions about volunteer roles, time commitments, or the application process? 
              We'd love to hear from you and help you find the perfect way to get involved.
            </p>
            <Link to="mailto:volunteers@ibadanfestival.com">
              <Button variant="primary" className="w-full md:w-auto">
                Contact Volunteer Team
              </Button>
            </Link>
          </div>
        </Container>
      </section> */}

      <Footer />
    </main>
  )
}