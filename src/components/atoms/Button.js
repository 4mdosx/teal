import styled from '@emotion/styled'
import clx from 'classnames'

const Basic = ({ className, children, ...props }) => (
  <button className={clx(className, 'btn')} {...props}>
    {children}
  </button>
)

export default styled(Basic)`
  color: hotpink;
`
