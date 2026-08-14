interface IIMageCroppings {
  components: ICroppingPerComponent
  widgets: ICroppingPerComponent
}

interface ICroppingPerComponent {
  [name: string]: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    initial: string
  }
}

const IMAGE_CROPPINGS: IIMageCroppings = {
  components: {},
  widgets: {
    M04: {
      initial: 'landscape_ratio9x6',
      xs: 'square_ratio1x1',
      sm: 'square_ratio1x1',
      md: 'square_ratio1x1',
      lg: 'square_ratio1x1',
      xl: 'square_ratio1x1',
    },
    M05: {
      initial: 'landscape_ratio9x6',
      xs: 'portrait_ratio6x9',
      sm: 'portrait_ratio6x9',
      md: 'portrait_ratio6x9',
      lg: 'portrait_ratio6x9',
      xl: 'portrait_ratio6x9',
    },
    M06: {
      initial: 'portrait_ratio6x9',
      xs: 'portrait_ratio6x9',
      sm: 'portrait_ratio6x9',
      md: 'portrait_ratio6x9',
      lg: 'portrait_ratio6x9',
      xl: 'portrait_ratio6x9',
    },
  },
}

export default IMAGE_CROPPINGS
