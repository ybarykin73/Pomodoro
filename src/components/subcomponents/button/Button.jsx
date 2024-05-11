import './Button.scss'

const Button = (props) => {

  const {
    style,
    onClick,
    children,
  } = props

  return (
    <button
      className={['button', style  && `button--${style}`].join(' ').trim()}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default Button
