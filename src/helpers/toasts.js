import * as bulmaToast from 'bulma-toast'

const messages = {
  loading: 'Searching in a galaxy far, far away...',
  error: 'I have a bad feeling about this. Check the input and try again.',
  successful: 'The Force is strong with this one!'
}

const getToastProps = () => {
  return {
    animate: { in: 'bounceIn', out: 'bounceOut' },
    duration: 3000,
    position: 'bottom-center',
    pauseOnHover: true
  }
}

const showPageToasts = (loading, error, successful) => {
  if (loading === true) {
    bulmaToast.toast({ message: messages.loading, type: 'is-primary', ...getToastProps() })
  }
  if (error === true) {
    bulmaToast.toast({ message: messages.error, type: 'is-danger', ...getToastProps() })
  }
  if (successful === true) {
    bulmaToast.toast({ message: messages.successful, type: 'is-success', ...getToastProps() })
  }
}

export default showPageToasts
