import { Root } from '../../App'
import styles from './CardInfo.module.css'
import data from '../../data.json'

interface Props {
  activeCard: Root | undefined
  setActiveCard: (value: Root | undefined) => void
}

export default function CardInfo({ activeCard, setActiveCard }: Props) {
  console.log(activeCard)
  const defaultData = [...data]
  return (
    <div className={styles.main}>
      <button onClick={() => setActiveCard(undefined)}>Back</button>
      <div className={styles.block}>
        <div className={styles.image}>
          <img src={activeCard?.flags?.png} />
        </div>
        <div className={styles.info}>
          <h1>{activeCard?.name}</h1>
          <div className={styles.list}>
            <div className={styles.bl}>
              <p>Native Name: {activeCard?.nativeName}</p>
              <p>Population: {activeCard?.population}</p>
              <p>Region: {activeCard?.region}</p>
              <p>Sub Region: {activeCard?.subregion}</p>
              <p>Capital: {activeCard?.capital}</p>
            </div>
            <div className={styles.bl}>
              <p>Top Level Domain: {activeCard?.topLevelDomain}</p>
              <p>
                Currencies: {activeCard?.currencies?.map((cur) => cur.name)}
              </p>
              <p>
                Languages:{' '}
                {activeCard?.languages?.map((lang) => lang.name + '.' + ' ')}
              </p>
            </div>
          </div>
          {activeCard?.borders?.length !== undefined && (
            <div className={styles.bl__Bord}>
              <p>Border countries: </p>
              <div className={styles.bord__list}>
                {activeCard?.borders?.map((bord) =>
                  defaultData
                    .filter((d) => d.alpha3Code === bord)
                    .map((country) => (
                      <div className={styles.bord}>
                        <p>{country.name}</p>
                      </div>
                    ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
