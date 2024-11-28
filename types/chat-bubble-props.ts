export interface ChatBubbleProps {
    message: string;
    type: 'sent' | 'received';
    timestamp?: string;
    id?: string;
}