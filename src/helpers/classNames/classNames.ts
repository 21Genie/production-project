type Mods = Record<string, boolean | string> // {string: string | boolean}

// cls - главный класс
// mods - объект с модами ( ключ - имя класса, значение - boolean )
// additional - массив доп классов
export function classNames (cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)
    ].join(' ')
} 