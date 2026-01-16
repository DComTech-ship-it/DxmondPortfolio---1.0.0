interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="rounded-lg border p-6">
          <div className="mb-4 flex items-center space-x-4">
            {testimonial.avatar && (
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div>
              <h4 className="font-medium">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-muted-foreground">"{testimonial.content}"</p>
        </div>
      ))}
    </div>
  )
}
