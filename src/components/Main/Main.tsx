import styles from './Main.module.css'
import data from '../../data.json'
import { Root } from '../../App'
import { useState } from 'react'

interface Props {
  setActiveCard: (value: Root | undefined) => void
}

export default function Main({ setActiveCard }: Props) {
  const [activeFilt, setActiveFilt] = useState('All')
  const [search, setSearch] = useState('')
  const defaultData = [...data]
  console.log(search)
  return (
    <div className={styles.main}>
      <div className={styles.block}>
        <div className={styles.nav}>
          <div className={styles.search}>
            <input
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
          </div>
          <div>
            <select
              value={activeFilt}
              onChange={(e) => setActiveFilt(e.target.value)}
              className={styles.sel}
            >
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        {activeFilt === 'All' ? (
          <div className={styles.list}>
            {defaultData
              .filter((d) => d.name.includes(search))
              .map((country) => (
                <div className="card" onClick={() => setActiveCard(country)}>
                  <img src={country.flags.png} />
                  <div className={styles.info}>
                    <h1>{country.name}</h1>
                    <p>
                      Population:{' '}
                      {new Intl.NumberFormat('en').format(country.population)}
                    </p>
                    <p>Region: {country.region}</p>
                    {country.capital !== undefined && (
                      <p>Capital: {country.capital}</p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className={styles.list}>
            {data
              .filter(
                (country) =>
                  country.region === activeFilt && country.name.includes(search)
              )
              .map((country) => (
                <div className="card" onClick={() => setActiveCard(country)}>
                  <img src={country.flags.png} />
                  <div className={styles.info}>
                    <h1>{country.name}</h1>
                    <p>
                      Population:{' '}
                      {new Intl.NumberFormat('en').format(country.population)}
                    </p>
                    <p>Region: {country.region}</p>
                    {country.capital !== undefined && (
                      <p>Capital: {country.capital}</p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
