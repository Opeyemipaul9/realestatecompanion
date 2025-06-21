import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, BarChart3, Lightbulb, Handshake, GraduationCap, Leaf, Shield, Star, Heart, Rocket } from "lucide-react";

export default function About() {
  const objectives = [
    {
      icon: Users,
      title: "Client Satisfaction",
      description: "Achieve 100% client satisfaction by exceeding expectations in every transaction and providing personalized service that builds lasting relationships."
    },
    {
      icon: BarChart3,
      title: "Market Leadership",
      description: "Maintain our position as the leading real estate agency in Southern California through innovative strategies and exceptional results."
    },
    {
      icon: Lightbulb,
      title: "Innovation Excellence",
      description: "Continuously innovate our processes and technology to provide the most efficient and effective real estate services available."
    },
    {
      icon: Handshake,
      title: "Community Impact",
      description: "Make a positive impact in our communities by supporting local initiatives and helping families achieve their homeownership dreams."
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Invest in continuous education and training for our team to ensure we remain at the forefront of industry knowledge and expertise."
    },
    {
      icon: Leaf,
      title: "Sustainable Growth",
      description: "Build sustainable business practices that ensure long-term success while maintaining our commitment to ethical standards and transparency."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct all business with the highest ethical standards, ensuring transparency, honesty, and trustworthiness in every interaction."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from initial consultation to final transaction and beyond."
    },
    {
      icon: Heart,
      title: "Dedication",
      description: "Our unwavering commitment to our clients' success drives us to go above and beyond expectations every single day."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We embrace new technologies and methodologies to continuously improve our services and stay ahead of market trends."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1200')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-accent">Premier Real Estate</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-200 max-w-3xl mx-auto">
              Your trusted partner in real estate for over two decades
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Mission</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              At Premier Real Estate, our mission is to transform the real estate experience by providing exceptional service, 
              expert guidance, and innovative solutions that help our clients achieve their property goals with confidence and success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Premier Real Estate office building" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Why Choose Premier Real Estate?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">20+ Years of Experience</h4>
                    <p className="text-neutral-600">Two decades of proven expertise in the Southern California real estate market.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Client-Centered Approach</h4>
                    <p className="text-neutral-600">Every decision we make is focused on delivering the best outcomes for our clients.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Innovative Technology</h4>
                    <p className="text-neutral-600">Cutting-edge tools and platforms to streamline your real estate experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-2">Local Market Expertise</h4>
                    <p className="text-neutral-600">Deep understanding of neighborhood trends, pricing, and opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Objectives</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We are committed to achieving these key objectives that drive our business and benefit our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="bg-white shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <objective.icon className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-4">{objective.title}</h3>
                  <p className="text-neutral-600">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These fundamental values guide every aspect of our business and shape our relationships with clients and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Experience the Premier Real Estate difference. Let our experienced team help you achieve your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold"
              >
                View Properties
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              onClick={() => {
                window.location.href = "/#contact";
              }}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
