import React from 'react';
import { Star } from 'lucide-react';
import '../styles/Cards.css';

interface ReviewCardProps {
  review: {
    name: string;
    rating: number;
    text: string;
    date?: string;
  };
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  // Get initials for avatar (e.g. "Imran Haider" -> "IH")
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="review-card">
      {/* Star ratings */}
      <div className="review-stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            style={{
              color: i < review.rating ? '#FFB800' : '#E5E7EB',
              fill: i < review.rating ? '#FFB800' : 'none'
            }}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="review-text">"{review.text}"</p>

      {/* Author details */}
      <div className="review-author">
        <div className="review-avatar">
          {getInitials(review.name)}
        </div>
        <div className="review-info">
          <h4>{review.name}</h4>
          {review.date && <span>{review.date}</span>}
        </div>
      </div>
    </div>
  );
};
