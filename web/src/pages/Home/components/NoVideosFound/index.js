import React from 'react'

import PageComposer from '../../../../components/PageComposer'
import { NoData } from './styles'

function NoVideosFound() {
  return (
    <PageComposer paddingAll={0}>
      <NoData>
        <h2>
          Encontrei nenhum vídeo.{' '}
          <span role="img" aria-label="emoji-cold-sweat">
            &#128517;
          </span>
        </h2>
        <h2>
          Cadastra uns aí.{' '}
          <span role="img" aria-label="emoji-winking-eye">
            &#128540;
          </span>
        </h2>
      </NoData>
    </PageComposer>
  )
}

export default NoVideosFound
