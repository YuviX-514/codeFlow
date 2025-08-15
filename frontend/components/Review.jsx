import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { 
    username: "Aarav Sharma", 
    rating: 5, 
    comment: "AI-guided flowcharts completely changed how I plan projects. MERN stack recommendation was perfect!", 
    date: "2 days ago",
    featureUsed: "Flowchart Generator",
    avatar: "👨‍💻"
  },
  { 
    username: "Priya Patel", 
    rating: 4, 
    comment: "GitHub integration caught memory leaks and suggested better documentation. Test automation could be more detailed.", 
    date: "1 week ago",
    featureUsed: "Code Refactoring",
    avatar: "👩‍💻"
  },
  { 
    username: "Rohan Verma", 
    rating: 5, 
    comment: "Staggered deployment is genius! Fixed XSS issues early thanks to security tests.", 
    date: "3 days ago",
    featureUsed: "Partial Deployment",
    avatar: "🧑‍🎓"
  },
  { 
    username: "Neha Gupta", 
    rating: 4, 
    comment: "Tech stack alternatives saved me. PostgreSQL suggestion was clear and helpful.", 
    date: "5 days ago",
    featureUsed: "Tech Stack Advisor",
    avatar: "👩‍🔧"
  },
  { 
    username: "Vikram Singh", 
    rating: 3, 
    comment: "AI over-complicated a simple todo app, but component splitting suggestions were great.", 
    date: "1 day ago",
    featureUsed: "Architecture Planning",
    avatar: "👨‍🏫"
  }
];


const ReviewCard = ({ review }) => (
  <div className="min-w-[300px] max-w-[320px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 mx-4 flex-shrink-0 border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
    <div className="flex items-center justify-between mb-3">
      <span className="font-bold text-white text-lg">{review.username}</span>
      <span className="text-gray-400 text-sm">{review.date}</span>
    </div>
    <div className="flex mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          fill={star <= review.rating ? "currentColor" : "none"}
          strokeWidth={1.5}
          className={`w-5 h-5 ${star <= review.rating ? "text-yellow-400" : "text-gray-600"}`}
        />
      ))}
    </div>
    <p className="text-gray-300 leading-relaxed">{review.comment}</p>
  </div>
);

const Review = () => {
  const repeatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="relative overflow-hidden py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        What Our <span className="text-transparent bg-clip-text bg-white">Users Say</span>
      </h2>
      
      <div className="relative h-[280px]">
        {/* First carousel */}
        <motion.div
          className="flex absolute top-0 left-0"
          animate={{ x: ["0%", "-20.33%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {repeatedReviews.map((review, idx) => (
            <ReviewCard key={`first-${idx}`} review={review} />
          ))}
        </motion.div>

       
      </div>
    </div>
  );
};

export default Review;