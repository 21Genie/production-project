import { FC, useMemo, useState } from 'react';
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

// localStorage возвращает строку, поэтому мы делаем явное приведение через as к типу Theme
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

// FC - для пропсов
export const ThemeContextProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // useMemo - повзоляет мемоизировать значение ( объекта, массива ) и каждый раз 
    // не создавать новый, а возвращать уже существующий, если в массиве завис. ничего не измен.
    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    // Если просто передать {} в value, то на каждый рендер, будет новый {} и сслыка на него
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}