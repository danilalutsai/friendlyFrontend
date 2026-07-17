class ThemeSwitcher {
  selectors = {
    // Find button element by its attribute [data-js-theme-switcher]
    switchThemeButton: '[data-js-theme-switcher]',
  }

  themes = {
    dark: 'dark',
    light: 'light',
  }

  stateClasses = {
    isDarkTheme: 'is-dark-theme',
  }

  storageKey = 'theme'

  constructor() {
    this.switchThemeButtonElement = document.querySelector(this.selectors.switchThemeButton)
    this.setInitialTheme()
    this.bindEvents()
  }

  // С помощью gettera мы можем обращаться к методу без скобок а как к атрибуту
  get isDarkThemeCached() {
    return sessionStorage.getItem(this.storageKey) === this.themes.dark
  }

  setInitialTheme() {
    document.documentElement.classList.toggle(this.stateClasses.isDarkTheme, this.isDarkThemeCached)
  }

  onClick = () => {
    sessionStorage.setItem(
      this.storageKey,
      this.isDarkThemeCached ? this.themes.light : this.themes.dark
    )

    document.documentElement.classList.toggle(this.stateClasses.isDarkTheme)
  }

  bindEvents() {
    this.switchThemeButtonElement.addEventListener("click", this.onClick)
  }
}

new ThemeSwitcher()

// Если нам нужно хранить в браузере какие-то данные дольше чем в рамках одной сессии используем localStorage
