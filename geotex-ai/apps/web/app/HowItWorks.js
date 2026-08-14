export default function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Identificar',
      description: 'Tire uma foto, digite o nome ou descreva o geossintético que você tem em mãos.'
    },
    {
      step: '2',
      title: 'Entender',
      description: 'Conheça as funções, propriedades e aplicações do material identificado.'
    },
    {
      step: '3',
      title: 'Selecionar',
      description: 'Use nossos filtros e calculadora para escolher o produto ideal para sua obra.'
    },
    {
      step: '4',
      title: 'Verificar',
      description: 'Verifique se o produto atende aos critérios de projeto com nossos algoritmos.'
    },
    {
      step: '5',
      title: 'Encontrar',
      description: 'Localize fornecedores próximos e compre o material com confiança.'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Como o GeoTex AI Funciona
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block text-blue-400 text-2xl mt-4">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
