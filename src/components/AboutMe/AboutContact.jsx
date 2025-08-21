const contactMethods = [
  {
    icon: "📧",
    label: "Email",
    value: "hola@miportfolio.com",
    action: "mailto:hola@miportfolio.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "/in/mi-perfil",
    action: "https://linkedin.com/in/mi-perfil",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "@mi-usuario",
    action: "https://github.com/mi-usuario",
  },
  {
    icon: "🐦",
    label: "Twitter",
    value: "@mi_handle",
    action: "https://twitter.com/mi_handle",
  },
]

const availability = ["Proyectos freelance", "Colaboraciones", "Consultoría técnica", "Mentoría"]

export function AboutContact() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            ¡Trabajemos <span className="text-accent">Juntos</span>!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Siempre estoy abierto a nuevas oportunidades y proyectos emocionantes. ¡No dudes en contactarme!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact methods */}
          <div className="p-8 hover:shadow-xl transition-all duration-300 border-accent/20">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Formas de Contacto</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {method.label}
                      </div>
                      <div className="text-sm text-muted-foreground">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="p-8 hover:shadow-xl transition-all duration-300 border-accent/20">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Disponible Para</h3>
              <div className="space-y-3">
                {availability.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-foreground">Estado: Disponible</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Actualmente acepto nuevos proyectos. Tiempo de respuesta típico: 24-48 horas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-background rounded-2xl p-12 shadow-lg border border-accent/20">
          <h3 className="font-serif text-3xl font-bold text-foreground mb-4">¿Tienes un proyecto en mente?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Me encantaría escuchar sobre tu idea y explorar cómo podemos hacerla realidad juntos. ¡Hablemos sobre tu
            próximo gran proyecto!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
              Iniciar Conversación
            </div>
            <div
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 bg-transparent"
            >
              Ver Portfolio
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
