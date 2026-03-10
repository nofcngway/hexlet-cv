import {
  Card,
  Group,
  Stack,
  Text,
} from '@mantine/core'
import { useTranslation } from 'react-i18next'
import type { TKnowledgeInterview } from '@entities/interview'

interface InterviewCardProps {
  interview: TKnowledgeInterview
  actionButton: React.ReactNode
}

export const InterviewCard: React.FC<InterviewCardProps> = ({
  interview,
  actionButton,
}) => {
  const { t } = useTranslation()
  const typeLabel = t('accountPage.interviews.typeLabel')
  const videoLabel = t('accountPage.interviews.videoLabel')
  const metaLine = interview.duration
    ? `${videoLabel} · ${interview.duration}`
    : videoLabel

  return (
    <Card
      shadow="sm"
      padding="md"
      radius="md"
      withBorder
      flex={1}
      h={173}
      display="flex"
      style={{ flexDirection: 'column' }}
    >
      <Stack gap="xs" h="100%">
        <Stack gap={2} style={{ minHeight: 78 }}>
          <Text fw={700} size="lg" lineClamp={2} style={{ lineHeight: 1.25 }}>
            {typeLabel} · {interview.title}
          </Text>
          <Text c="dimmed" size="sm">
            {metaLine}
          </Text>
        </Stack>
        <Group mt="auto" justify="flex-start">
          {actionButton}
        </Group>
      </Stack>
    </Card>
  )
}
