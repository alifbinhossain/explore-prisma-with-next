type ThemeProps = 'light' | 'dark';

export const checkTheme = (theme: ThemeProps) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const root = window?.document.documentElement;
    const isDark = theme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('current-theme', theme);
  }
};

export const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('current-theme');
    if (typeof storedPrefs === 'string') {
      if (storedPrefs === 'dark') {
        checkTheme('dark');
        return 'dark';
      } else {
        checkTheme('light');
        return 'light';
      }
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      checkTheme('dark');
      return 'dark';
    }
  }
  checkTheme('light');
  return 'light';
};
