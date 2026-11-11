// prompt-box: boxes the prompts typed at the composer.
import type { Register } from 'claude-code'

export const register: Register = on => {
  // Only prompts typed at the composer; notifications and other agents' messages keep the engine's row.
  on('ui.render', { component: 'UserMessage', props: { origin: { kind: 'composer' } } }, ($, e, next) => {
    if (!e.props.isExpanded && e.props.text.length > 20000) {
      return next(e)
    }

    const { Box, Text } = $.ui.resolve(e)

    return (
      <Box borderStyle="round" borderColor="cyan" paddingX={1} flexDirection="column">
        <Text>{e.props.text}</Text>
      </Box>
    )
  })
}
