import { project, projectMedia } from '../content'
import { full } from '../format'
import { useLang } from '../i18n'
import { Photo } from './ui'

export function About() {
  const { t, locale, lang } = useLang()
  const euro = (n: number) => (lang === 'pt' ? `${full(n, locale)} €` : `€${full(n, locale)}`)

  return (
    <section>
      <div className="wrap two">
        <div className="prose">
          <h2>{t({ pt: 'Sobre mim', en: 'About me' })}</h2>
          <p>
            {t({
              pt: 'Tudo começou com a procura de uma alternativa às cápsulas: algo em que pudesse confiar, sem desperdício e com sabor verdadeiro. Essa curiosidade levou-me ao café de especialidade.',
              en: 'It started with looking for an alternative to coffee capsules: something I could trust, with less waste and real flavour. That curiosity led me to specialty coffee.',
            })}
          </p>
          <p>
            {t({
              pt: 'Fiz formação certificada pela SCA (Specialty Coffee Association) na ABCoffee School, no Porto, e o hobby passou a fazer parte da minha vida.',
              en: 'I trained with the SCA (Specialty Coffee Association) at ABCoffee School in Porto, and the hobby became part of my life.',
            })}
          </p>
          <p className="muted">
            {t({
              pt: 'Sou software engineer. É essa cabeça de engenheiro que trago para o conteúdo: testar, medir e explicar sem complicar.',
              en: "I'm a software engineer, and I bring that mindset to my content: test, measure, and explain without overcomplicating.",
            })}
          </p>
        </div>
        <div className="prose">
          <h2>{t({ pt: 'Projeto', en: 'Project' })}</h2>
          <p className="subserif">{t({ pt: 'Café de especialidade sobre rodas', en: 'Specialty coffee on wheels' })}</p>
          <p>
            {lang === 'pt'
              ? `O coffee cart na mala do carro nasceu para levar café de especialidade diretamente às pessoas, na rua e sem filtros. Recusei orçamentos de ${euro(project.quotedEur)} e construí a estrutura eu mesmo.`
              : `The car-boot coffee cart takes specialty coffee straight to people, on the street. I turned down ${euro(project.quotedEur)} quotes and built the setup myself.`}
          </p>
          <div className="fact">
            <div>
              <div className="num">~{euro(project.buildCostEur)}</div>
              <div className="label">{t({ pt: 'Custo da construção', en: 'Build cost' })}</div>
            </div>
            <div>
              <div className="num">{project.setupMinutes} min</div>
              <div className="label">{t({ pt: 'Até ao primeiro café', en: 'To first cup' })}</div>
            </div>
          </div>
          <p className="muted">
            {t({
              pt: 'Já esteve na Maratona do Porto, com a Senzu Coffee Roasters e a Transparente Vivo.',
              en: 'It has already served at the Porto Marathon, with Senzu Coffee Roasters and Transparente Vivo.',
            })}
          </p>
        </div>
      </div>
      <div className="wrap">
        <div className="strip">
          {projectMedia.map((m) => (
            <figure key={m.image}>
              <Photo
                image={m.image}
                alt={m.alt}
                className={m.kind === 'photo' ? 'car' : 'vid'}
                href={m.kind === 'video' ? m.url : undefined}
              />
              <figcaption>
                {m.kind === 'video' ? (
                  <a href={m.url} target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>
                    {t(m.caption)} ↗
                  </a>
                ) : (
                  t(m.caption)
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
