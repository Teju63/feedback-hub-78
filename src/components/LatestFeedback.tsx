import { format } from "date-fns";
import { MessageSquare, User, Mail, Clock } from "lucide-react";

interface Feedback {
  id: string;
  name: string;
  email: string;
  feedback: string;
  created_at: string;
}

interface LatestFeedbackProps {
  feedback: Feedback | null;
  isLoading: boolean;
}

const LatestFeedback = ({ feedback, isLoading }: LatestFeedbackProps) => {
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="h-4 bg-muted rounded w-1/2"></div>
        <div className="h-20 bg-muted rounded"></div>
      </div>
    );
  }

  if (!feedback) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <MessageSquare className="w-8 h-8 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground font-medium">No feedback submitted yet.</p>
        <p className="text-sm text-muted-foreground mt-1">Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-foreground">{feedback.name}</p>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Mail className="w-3.5 h-3.5" />
            <span>{feedback.email}</span>
          </div>
        </div>
      </div>

      <div className="bg-accent/50 rounded-lg p-4">
        <p className="text-foreground leading-relaxed">{feedback.feedback}</p>
      </div>

      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="w-3.5 h-3.5" />
        <span>
          {format(new Date(feedback.created_at), "MMM d, yyyy 'at' h:mm a")}
        </span>
      </div>
    </div>
  );
};

export default LatestFeedback;
