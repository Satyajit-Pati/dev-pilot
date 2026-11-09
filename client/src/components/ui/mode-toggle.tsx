import { useTheme } from "../providers/theme-provider.tsx"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const nextTheme = {
        dark: "light",
        light: "system",
        system: "dark",
    } as const

    return (
        <button
            type="button"
            onClick={() => setTheme(nextTheme[theme])}
        >
            Switch to {nextTheme[theme]}
        </button>
    )
}