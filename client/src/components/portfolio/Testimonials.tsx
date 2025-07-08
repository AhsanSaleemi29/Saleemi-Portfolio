import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Rana Iftikhar",
    role: "Business Support & Development, ACE ESTIMATOR",
    image: "/attached_assets/WhatsApp Image 2025-07-08 at 22.51.37_3d813246_1751997125921.jpg",
    feedback: "Ahsan showed exceptional dedication and technical skills during our collaboration. His ability to adapt quickly and deliver quality work made him an invaluable team member."
  },
  {
    name: "Mr. Hafiz Faiz ul Rehman",
    role: "Principal, The Faiz Institute of Knowledge",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=60&h=60",
    feedback: "As a teacher at our institute, Ahsan demonstrated excellent communication skills and the ability to explain complex concepts clearly. His passion for technology is truly inspiring."
  },
  {
    name: "University Peer",
    role: "Computer Science Student, LGU",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=60&h=60",
    feedback: "Ahsan's problem-solving skills and teamwork abilities make him stand out among his peers. His dedication to learning and improving his technical skills is remarkable."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 card-hover fade-in">
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-blue-600 mr-3" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.feedback}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
