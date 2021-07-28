import Document        from 'next/document'
import compose         from 'recompose/compose'
import { withEmotion } from '@providers/next-document-with-emotion'

const withProviders = compose(withEmotion())

export default withProviders(Document)
