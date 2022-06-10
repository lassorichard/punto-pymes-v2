
export const BlockServices = ({title}) => {

  return (
    <>
      <section className="block-services">
        <div className="block-services__container">
          <div className="block-services__title">
            <h2 className="heading-2">
              {title}
            </h2>
          </div>
          <ul className="block-services__content">
            <li className="block-services__content__item">Contabilidad</li>
            <li className="block-services__content__item">Administración</li>
            <li className="block-services__content__item">Marketing</li>
            <li className="block-services__content__item">Publicidad</li>
            <li className="block-services__content__item">Redes Sociales</li>
            <li className="block-services__content__item">RRHH</li>
            <li className="block-services__content__item">Fotografía</li>
            <li className="block-services__content__item">Legales</li>
            <li className="block-services__content__item">Seguros</li>
            <li className="block-services__content__item">Gestoría</li>
          </ul>
        </div>
      </section>
    </>
  )
}