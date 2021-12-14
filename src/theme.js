import {Themes} from '@geist-ui/react'

export const greenTheme = Themes.createFromLight({
  type: 'green',
  palette: {
    success: 'green',
    warning: 'green',
    error: 'green',
  },
})

export const redTheme = Themes.createFromLight({
  type: 'red',
  palette: {
    success: 'red',
    warning: 'red',
    error: 'red',
  },
})
