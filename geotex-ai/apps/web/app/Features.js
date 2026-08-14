export default function Features() {
  const features = [
    {
      icon: '📸',
      title: 'Identificação por Foto',
      description: 'Tire uma foto do geossintético e nossa IA o reconhece e fornece informações técnicas.'
    },
    {
      icon: '📚',
      title: 'Biblioteca Técnica',
      description: 'Acesse fichas técnicas, normas e manuais de instalação de centenas de produtos.'
    },
    {
      icon: '🧮',
      title: 'Calculadora de Dimensionamento',
      description: 'Insira os parâmetros da obra e verifique quais geossintéticos atendem aos critérios.'
    },
    {
      icon: '📍',
      title: 'Fornecedores Próximos',
      description: 'Encontre distribuidores e lojas físicas perto de você para comprar o material.'
    },
    {
      icon: '🤖',
      title: 'Assistente Virtual',
      description: 'Converse com nosso assistente e tire dúvidas sobre aplicações e especificações.'
    },
    {
      icon: '📊',
      title: 'Comparação de Produtos',
      description: 'Compare diversos geossintéticos lado a lado com base em critérios técnicos.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Ferramentas para o Engenheiro
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
