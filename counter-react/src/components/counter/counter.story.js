import Counter from './index'
import React from 'react'

import { storiesOf } from 'storybook'

const stories = storiesOf('Counter', module)
stories.add('Counter', () => (
  <Counter />
))
