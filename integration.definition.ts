import { z, IntegrationDefinition, messages } from '@botpress/sdk'

export default new IntegrationDefinition({
  name: 'Custom',
  version: '0.1.0',
  title: 'Instagram',
  description: 'This custom integration allows your bot to interact with Instagram.',
  icon: 'icon.svg',
  readme: 'hub.md',
  configuration: {
    schema: z.object({
      appId: z.string().min(1),
      appSecret: z.string().min(1),
      verifyToken: z.string().min(1),
      pageId: z.string().min(1),
      accessToken: z.string().min(1),
    }),
  },
  channels: {
    channel: {
      messages: messages.defaults,
      message: { tags: { id: {}, messageId: {}, senderId: {}, recipientId: {} } },
      conversation: {
        tags: { id: {}, recipientId: {}, senderId: {} },
        creation: { enabled: true, requiredTags: ['id'] },
      },
    },
  },
  actions: {},
  events: {},
  user: {
    tags: { id: {} },
    creation: { enabled: true, requiredTags: ['id'] },
  },
})
