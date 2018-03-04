import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class PatternLock extends React.Component {
  propTypes: {
    size: PropTypes.number
  }

  render () {
    const size = this.props.size || 3
    const containerStyle = {
      gridTemplateColumns: Array(size).fill('1fr').join(' ')
    }

    return (
      <Container style={containerStyle}>
        {
          [...Array(size * size)].map((u, i) => <Dot id={i} key={i} />)
        }
      </Container>
    )
  }
}

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding: 2rem;
  box-sizing: border-box;
`

const Dot = styled.div`
  background-color: #EEE;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`
