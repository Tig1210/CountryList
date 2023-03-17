import styles from './Header.module.css'

interface Prop {
  theme: boolean
  setTheme: (value: boolean) => void
}

export default function Header({ theme, setTheme }: Prop) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Where in the world?</h1>
        <div
          onClick={() => {
            setTheme(!theme)
          }}
        ></div>
      </div>
    </div>
  )
}
