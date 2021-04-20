import React, { MouseEvent, FC, MouseEventHandler } from 'react'

type Props = {
  text?: String
  onClick?: MouseEventHandler
}

const Button: React.FC<Props> = ({
  children,
  text="",
  onClick
}) => (
  <div>
    <button onClick={onClick}>{text}</button>
  </div>
)

export default Button