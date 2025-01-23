import { isFeatureEnabled } from './isFeatureEnabled'

export const LoadingSpinner = () => {
  console.log(isFeatureEnabled('loading-spinner'))
  return null
}
