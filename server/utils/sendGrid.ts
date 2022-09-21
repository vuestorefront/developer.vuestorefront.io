import SendGrid from '@sendgrid/mail';
import type { MailService } from '@sendgrid/mail';

/**
 * Creates new SendGrid client using API key from runtime configuration
 */
export function createSendGridClient(): MailService {
  const { sendGridApiKey } = useRuntimeConfig();

  SendGrid.setApiKey(sendGridApiKey);

  return SendGrid;
}
