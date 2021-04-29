export const required = (value: any) => (value ? undefined : 'Es requerido')

export const mustBeNumber = (value: any) => (isNaN(value) ? 'Debe ser un número' : undefined)

export const minValue = (min: any) => (value: any) =>
  isNaN(value) || value >= min ? undefined : `Debe ser mayor que ${min}`

export const maxValue = (max: any) => (value: any) =>
  isNaN(value) || value <= max ? undefined : `Debe ser menor que ${max}`
  
export const composeValidators = (...validators: any[]) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), undefined)
